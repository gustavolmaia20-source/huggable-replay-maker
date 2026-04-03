import { useState, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Copy, Check, Loader2, QrCode, CreditCard, FileText, Smartphone, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const PLANS = {
  mensal: {
    name: "Plano Mensal",
    originalPrice: 119.9,
    price: 49.9,
    description: "Acompanhamento contínuo mês a mês",
    allowInstallments: false,
    maxInstallments: 1,
  },
  semestral: {
    name: "Plano Semestral",
    originalPrice: 419.4,
    price: 179.4,
    description: "6 meses de acompanhamento — R$ 29,90/mês",
    allowInstallments: true,
    maxInstallments: 6,
  },
};

type PlanKey = keyof typeof PLANS;
type BillingType = "PIX" | "CREDIT_CARD" | "BOLETO";

const PAYMENT_METHODS: { type: BillingType; label: string; icon: React.ReactNode }[] = [
  { type: "CREDIT_CARD", label: "Cartão", icon: <CreditCard size={20} /> },
  { type: "PIX", label: "Pix", icon: <Smartphone size={20} /> },
  { type: "BOLETO", label: "Boleto", icon: <FileText size={20} /> },
];

function useCountdown(minutes: number) {
  const [secondsLeft, setSecondsLeft] = useState(() => {
    const stored = sessionStorage.getItem("promo_countdown_end");
    if (stored) {
      const diff = Math.floor((Number(stored) - Date.now()) / 1000);
      return diff > 0 ? diff : 0;
    }
    const end = Date.now() + minutes * 60 * 1000;
    sessionStorage.setItem("promo_countdown_end", String(end));
    return minutes * 60;
  });

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const interval = setInterval(() => {
      const stored = Number(sessionStorage.getItem("promo_countdown_end") || "0");
      const diff = Math.floor((stored - Date.now()) / 1000);
      setSecondsLeft(diff > 0 ? diff : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsLeft]);

  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
  return { mins, secs, expired: secondsLeft <= 0 };
}

export default function Checkout() {
  const countdown = useCountdown(30);
  const [searchParams] = useSearchParams();
  const planParam = searchParams.get("plano") as PlanKey | null;
  const plan = planParam && PLANS[planParam] ? PLANS[planParam] : PLANS.mensal;

  const [billingType, setBillingType] = useState<BillingType>("CREDIT_CARD");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [installments, setInstallments] = useState(1);
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const formatCpf = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    return digits
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  };

  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(\d{4})(?=\d)/g, "$1 ");
  };

  const formatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    if (digits.length > 2) return digits.slice(0, 2) + "/" + digits.slice(2);
    return digits;
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length > 6) return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    if (digits.length > 2) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return digits;
  };

  const formatCep = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 8);
    if (digits.length > 5) return digits.slice(0, 5) + "-" + digits.slice(5);
    return digits;
  };

  const handleSubmit = async () => {
    if (!name || !email || !cpf) {
      toast({ title: "Preencha todos os campos obrigatórios", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const timestamp = Math.floor(Date.now() / 1000);
      const { error } = await supabase.from("dados_cliente").insert({
        email,
        nomewpp: name,
        telefone: phone.replace(/\D/g, ""),
        cpfCnpj: cpf.replace(/\D/g, ""),
        created_at: new Date(timestamp * 1000).toISOString(),
      });
      if (error) throw error;
      toast({ title: "Dados salvos com sucesso!" });
    } catch (err: any) {
      toast({ title: "Erro ao salvar dados", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full h-12 px-4 bg-transparent border border-border rounded-lg text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring text-sm";

  const groupedInputClass =
    "w-full h-12 px-4 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring text-sm";

  return (
    <div className="min-h-screen bg-muted/30">
      <nav className="glass fixed top-0 w-full z-50">
        <div className="container h-16 md:h-20 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Voltar</span>
          </Link>
          <span className="text-foreground font-extrabold text-xl">Nutri Lian</span>
        </div>
      </nav>

      <div className="fixed top-16 md:top-20 w-full z-40 bg-primary text-primary-foreground">
        <div className="container flex items-center justify-center gap-2 py-2.5 text-sm font-semibold">
          <Clock size={16} className="animate-pulse" />
          {countdown.expired ? (
            <span>Promoção encerrada!</span>
          ) : (
            <span>
              🔥 Promoção acaba em{" "}
              <span className="font-mono bg-primary-foreground/20 px-1.5 py-0.5 rounded">
                {String(countdown.mins).padStart(2, "0")}:{String(countdown.secs).padStart(2, "0")}
              </span>
            </span>
          )}
        </div>
      </div>

      <div className="container pt-[7.5rem] md:pt-[10rem] pb-20 max-w-lg mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="bg-card border border-border rounded-2xl p-5 mb-6 flex items-center gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-foreground font-bold text-base">{plan.name}</h1>
              <p className="text-muted-foreground text-sm">
                {plan.allowInstallments
                  ? `6x R$ ${(plan.price / 6).toFixed(2).replace(".", ",")}`
                  : `R$ ${plan.price.toFixed(2).replace(".", ",")}/mês`}
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-foreground font-bold text-base mb-3">Informações pessoais</h2>
                <div className="border border-border rounded-lg overflow-hidden">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className={groupedInputClass} />
                  <input type="text" value={phone} onChange={(e) => setPhone(formatPhone(e.target.value))} placeholder="Telefone" className={groupedInputClass} />
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome completo" className="w-full h-12 px-4 bg-transparent text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring text-sm" />
                </div>
              </div>

              <div>
                <h2 className="text-foreground font-bold text-base mb-3">Método de pagamento</h2>
                <div className="grid grid-cols-3 gap-3">
                  {PAYMENT_METHODS.map((method) => (
                    <button
                      key={method.type}
                      type="button"
                      onClick={() => setBillingType(method.type)}
                      className={`flex flex-col items-start gap-2 p-4 rounded-xl border-2 transition-all duration-200 ${
                        billingType === method.type
                          ? "border-foreground bg-card text-foreground"
                          : "border-border bg-card text-muted-foreground hover:border-muted-foreground/50"
                      }`}
                    >
                      {method.icon}
                      <span className="text-sm font-semibold">{method.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {billingType === "CREDIT_CARD" && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="space-y-5">
                  <div>
                    <h2 className="text-foreground font-bold text-base mb-3">Dados do cartão</h2>
                    <div className="border border-border rounded-lg overflow-hidden">
                      <input type="text" value={cardNumber} onChange={(e) => setCardNumber(formatCardNumber(e.target.value))} placeholder="1234 1234 1234 1234" className={groupedInputClass} />
                      <div className="grid grid-cols-2">
                        <input type="text" value={cardExpiry} onChange={(e) => setCardExpiry(formatExpiry(e.target.value))} placeholder="MM/AA" className="h-12 px-4 bg-transparent border-r border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring text-sm" />
                        <input type="text" value={cardCvv} onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, "").slice(0, 4))} placeholder="CVV" className="h-12 px-4 bg-transparent text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring text-sm" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-foreground font-bold text-base mb-3">Titular do cartão</h2>
                    <input type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} placeholder="Nome completo no cartão" className={inputClass} />
                  </div>

                  <div>
                    <h2 className="text-foreground font-bold text-base mb-3">Documento</h2>
                    <input type="text" value={cpf} onChange={(e) => setCpf(formatCpf(e.target.value))} placeholder="CPF do titular" className={inputClass} />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h2 className="text-foreground font-bold text-base mb-3">CEP</h2>
                      <input type="text" value={postalCode} onChange={(e) => setPostalCode(formatCep(e.target.value))} placeholder="00000-000" className={inputClass} />
                    </div>
                    <div>
                      <h2 className="text-foreground font-bold text-base mb-3">Nº endereço</h2>
                      <input type="text" value={addressNumber} onChange={(e) => setAddressNumber(e.target.value.replace(/\D/g, "").slice(0, 6))} placeholder="123" className={inputClass} />
                    </div>
                  </div>

                  {plan.allowInstallments && (
                    <div>
                      <h2 className="text-foreground font-bold text-base mb-3">Parcelamento</h2>
                      <div className="relative">
                        <select
                          value={installments}
                          onChange={(e) => setInstallments(Number(e.target.value))}
                          className="w-full h-12 px-4 bg-card border border-border rounded-lg text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                        >
                          {Array.from({ length: plan.maxInstallments }, (_, i) => i + 1).map((n) => (
                            <option key={n} value={n}>
                              {n}x de R$ {(plan.price / n).toFixed(2).replace(".", ",")} {n === 1 ? "(à vista)" : ""}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {billingType !== "CREDIT_CARD" && (
                <div>
                  <h2 className="text-foreground font-bold text-base mb-3">Documento</h2>
                  <input type="text" value={cpf} onChange={(e) => setCpf(formatCpf(e.target.value))} placeholder="CPF" className={inputClass} />
                </div>
              )}

              <Button variant="hero" size="lg" className="w-full" onClick={handleSubmit} disabled={loading}>
                {loading ? <Loader2 size={18} className="animate-spin" /> : null}
                {billingType === "CREDIT_CARD" ? "Finalizar pagamento" : billingType === "PIX" ? "Gerar PIX" : "Gerar Boleto"}
              </Button>

              <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs">
                <Shield size={14} /> Pagamento seguro e criptografado
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
