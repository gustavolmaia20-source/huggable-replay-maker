export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-3xl py-16 px-4 md:py-24">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Política de Privacidade – Nutri Lian</h1>
        <p className="text-muted-foreground text-sm mb-10">Última atualização: 25/03/2025</p>

        <p className="mb-8 text-muted-foreground">
          A sua privacidade é importante para nós. Esta Política de Privacidade descreve como o Nutri Lian coleta, usa, armazena e protege suas informações ao utilizar nosso site e serviços.
        </p>

        <Section title="1. Coleta de Informações">
          <p>Coletamos informações pessoais e não pessoais para oferecer uma melhor experiência ao usuário.</p>
          <h3 className="font-semibold mt-4 mb-2 text-foreground">1.1 Informações fornecidas por você:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nome</li>
            <li>E-mail</li>
            <li>Telefone (quando aplicável)</li>
            <li>Informações relacionadas a saúde, dieta e treino</li>
          </ul>
          <h3 className="font-semibold mt-4 mb-2 text-foreground">1.2 Informações coletadas automaticamente:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Endereço IP</li>
            <li>Tipo de dispositivo e navegador</li>
            <li>Páginas acessadas e tempo de navegação</li>
            <li>Cookies e tecnologias semelhantes</li>
          </ul>
        </Section>

        <Section title="2. Uso das Informações">
          <p>As informações coletadas são utilizadas para:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Personalizar planos de dieta e treino</li>
            <li>Melhorar a performance e experiência do site</li>
            <li>Processar pagamentos e fornecer acesso ao serviço</li>
            <li>Enviar comunicações importantes</li>
            <li>Cumprir obrigações legais</li>
          </ul>
        </Section>

        <Section title="3. Compartilhamento de Dados">
          <p>O Nutri Lian <strong>não vende</strong> suas informações pessoais.</p>
          <p className="mt-2">Podemos compartilhar dados apenas quando necessário com:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Processadores de pagamento</li>
            <li>Ferramentas de análise</li>
            <li>Autoridades legais, quando exigido por lei</li>
          </ul>
        </Section>

        <Section title="4. Armazenamento e Segurança">
          <p>Seus dados são armazenados em servidores seguros e protegidos contra acesso não autorizado.</p>
        </Section>

        <Section title="5. Cookies">
          <p>Utilizamos cookies para melhorar a navegação, entender o comportamento do usuário e personalizar conteúdos.</p>
        </Section>

        <Section title="6. Direitos do Usuário">
          <p>Você tem o direito de acessar, corrigir, solicitar exclusão dos seus dados e revogar consentimentos.</p>
          <p className="mt-2">
            Contato: <a href="mailto:administrativo@orion-brasil.com" className="text-primary hover:underline">administrativo@orion-brasil.com</a>
          </p>
        </Section>

        <Section title="7. Serviços de Terceiros">
          <p>Nosso site pode conter links ou integrações com serviços de terceiros.</p>
        </Section>

        <Section title="8. Alterações nesta Política">
          <p>Podemos atualizar esta Política de Privacidade a qualquer momento.</p>
        </Section>

        <Section title="9. Contato">
          <p>E-mail: <a href="mailto:administrativo@orion-brasil.com" className="text-primary hover:underline">administrativo@orion-brasil.com</a></p>
        </Section>

        <p className="mt-10 text-muted-foreground text-sm border-t border-border pt-6">
          Ao utilizar o Nutri Lian, você concorda com esta Política de Privacidade.
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
