import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const ASAAS_API_KEY = Deno.env.get("ASAAS_API_KEY")!;
const ASAAS_BASE_URL = "https://api.asaas.com/v3";

interface PaymentRequest {
  name: string;
  email: string;
  cpfCnpj: string;
  phone: string;
  billingType: "CREDIT_CARD" | "PIX" | "BOLETO";
  value: number;
  installmentCount?: number;
  // Credit card fields
  creditCard?: {
    holderName: string;
    number: string;
    expiryMonth: string;
    expiryYear: string;
    ccv: string;
  };
  creditCardHolderInfo?: {
    name: string;
    email: string;
    cpfCnpj: string;
    postalCode: string;
    addressNumber: string;
    phone: string;
  };
  description: string;
  plano?: string;
}

async function findOrCreateCustomer(data: {
  name: string;
  email: string;
  cpfCnpj: string;
  phone: string;
}) {
  // Try to find existing customer by cpfCnpj
  const searchRes = await fetch(
    `${ASAAS_BASE_URL}/customers?cpfCnpj=${data.cpfCnpj}`,
    { headers: { access_token: ASAAS_API_KEY } }
  );
  const searchData = await searchRes.json();

  if (searchData.data && searchData.data.length > 0) {
    return searchData.data[0].id;
  }

  // Create new customer
  const createRes = await fetch(`${ASAAS_BASE_URL}/customers`, {
    method: "POST",
    headers: {
      access_token: ASAAS_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      cpfCnpj: data.cpfCnpj,
      mobilePhone: data.phone,
    }),
  });

  const customer = await createRes.json();
  if (!createRes.ok) {
    throw new Error(`Failed to create customer: ${JSON.stringify(customer)}`);
  }
  return customer.id;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body: PaymentRequest = await req.json();
    const {
      name,
      email,
      cpfCnpj,
      phone,
      billingType,
      value,
      installmentCount,
      creditCard,
      creditCardHolderInfo,
      description,
      plano,
    } = body;

    // 1. Find or create customer
    const customerId = await findOrCreateCustomer({
      name,
      email,
      cpfCnpj: cpfCnpj.replace(/\D/g, ""),
      phone: phone.replace(/\D/g, ""),
    });

    // 2. Build payment payload
    const paymentPayload: Record<string, unknown> = {
      customer: customerId,
      billingType,
      value,
      dueDate: new Date().toISOString().split("T")[0],
      description,
    };

    if (billingType === "CREDIT_CARD" && creditCard && creditCardHolderInfo) {
      paymentPayload.creditCard = {
        holderName: creditCard.holderName,
        number: creditCard.number.replace(/\s/g, ""),
        expiryMonth: creditCard.expiryMonth,
        expiryYear: "20" + creditCard.expiryYear,
        ccv: creditCard.ccv,
      };
      paymentPayload.creditCardHolderInfo = {
        name: creditCardHolderInfo.name,
        email: creditCardHolderInfo.email,
        cpfCnpj: creditCardHolderInfo.cpfCnpj.replace(/\D/g, ""),
        postalCode: creditCardHolderInfo.postalCode.replace(/\D/g, ""),
        addressNumber: creditCardHolderInfo.addressNumber,
        phone: creditCardHolderInfo.phone.replace(/\D/g, ""),
      };

      if (installmentCount && installmentCount > 1) {
        paymentPayload.installmentCount = installmentCount;
        paymentPayload.installmentValue = Number(
          (value / installmentCount).toFixed(2)
        );
      }
    }

    // 3. Create payment
    const paymentRes = await fetch(`${ASAAS_BASE_URL}/payments`, {
      method: "POST",
      headers: {
        access_token: ASAAS_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentPayload),
    });

    const payment = await paymentRes.json();

    if (!paymentRes.ok) {
      console.error("Asaas payment error:", JSON.stringify(payment));
      return new Response(
        JSON.stringify({ error: "Payment creation failed", details: payment }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 4. For PIX, get the QR code
    let pixData = null;
    if (billingType === "PIX") {
      const pixRes = await fetch(
        `${ASAAS_BASE_URL}/payments/${payment.id}/pixQrCode`,
        { headers: { access_token: ASAAS_API_KEY } }
      );
      if (pixRes.ok) {
        pixData = await pixRes.json();
      }
    }

    // 5. Save to dados_cliente
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const timestamp = Math.floor(Date.now() / 1000);
    await supabase.from("dados_cliente").insert({
      email,
      nomewpp: name,
      telefone: phone.replace(/\D/g, ""),
      cpfCnpj: cpfCnpj.replace(/\D/g, ""),
      created_at: String(timestamp),
      fluxo_etapa: "CONVERSAO",
      plano: plano || "mensal",
      pix_gerado: billingType === "PIX",
    });

    return new Response(
      JSON.stringify({
        success: true,
        paymentId: payment.id,
        status: payment.status,
        billingType,
        invoiceUrl: payment.invoiceUrl,
        bankSlipUrl: payment.bankSlipUrl,
        pixQrCode: pixData?.encodedImage || null,
        pixCopyPaste: pixData?.payload || null,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Edge function error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
