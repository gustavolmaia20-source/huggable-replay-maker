export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-3xl py-16 px-4 md:py-24">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Termos de Serviço – Nutri Lian</h1>
        <p className="text-muted-foreground text-sm mb-10">Última atualização: 25/03/2025</p>

        <p className="mb-8 text-muted-foreground">
          Estes Termos de Serviço regulam o uso do site e dos serviços oferecidos pelo Nutri Lian. Ao acessar ou utilizar a plataforma, você concorda com estes termos.
        </p>

        <Section title="1. Descrição do Serviço">
          <p>O Nutri Lian é uma plataforma digital que utiliza inteligência artificial para sugerir planos de dieta e treino personalizados.</p>
          <p className="mt-2">O serviço <strong>não substitui</strong> acompanhamento profissional presencial.</p>
        </Section>

        <Section title="2. Elegibilidade">
          <p>Ao utilizar o Nutri Lian, você declara que:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Possui pelo menos 18 anos ou autorização de responsável legal</li>
            <li>As informações fornecidas são verdadeiras e atualizadas</li>
          </ul>
        </Section>

        <Section title="3. Responsabilidade do Usuário">
          <p>Você é responsável por fornecer informações corretas e avaliar sua condição física antes de iniciar qualquer dieta ou treino.</p>
        </Section>

        <Section title="4. Limitação de Responsabilidade">
          <p>O Nutri Lian não se responsabiliza por lesões, problemas de saúde ou resultados indesejados decorrentes do uso das recomendações.</p>
        </Section>

        <Section title="5. Pagamentos e Acesso">
          <p>O acesso a determinados recursos pode estar condicionado ao pagamento. Não há garantia de resultados específicos.</p>
        </Section>

        <Section title="6. Propriedade Intelectual">
          <p>Todo o conteúdo da plataforma é de propriedade do Nutri Lian. É proibido copiar ou reproduzir sem autorização.</p>
        </Section>

        <Section title="7. Cancelamento e Reembolso">
          <p>As condições seguem as políticas da plataforma de pagamento utilizada.</p>
        </Section>

        <Section title="8. Suspensão ou Encerramento">
          <p>Podemos suspender o acesso em caso de violação dos termos, uso indevido ou tentativas de fraude.</p>
        </Section>

        <Section title="9. Alterações nos Termos">
          <p>O Nutri Lian pode atualizar estes Termos a qualquer momento.</p>
        </Section>

        <Section title="10. Contato">
          <p>E-mail: <a href="mailto:administrativo@orion-brasil.com" className="text-primary hover:underline">administrativo@orion-brasil.com</a></p>
        </Section>

        <p className="mt-10 text-muted-foreground text-sm border-t border-border pt-6">
          Ao utilizar o Nutri Lian, você declara que leu, entendeu e concorda com estes Termos de Serviço.
        </p>
        <a href="/" className="inline-block mt-6 text-primary hover:underline text-sm">← Voltar para a página inicial</a>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-3 text-foreground">{title}</h2>
      <div className="text-muted-foreground space-y-1">{children}</div>
    </section>
  );
}
