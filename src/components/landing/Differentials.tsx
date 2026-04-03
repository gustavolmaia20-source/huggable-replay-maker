import { motion } from "framer-motion";

const rows = [
  { feature: "Plano personalizado", nutri: true, pdf: false, coach: true },
  { feature: "Ajuste automático", nutri: true, pdf: false, coach: false },
  { feature: "Acompanhamento contínuo", nutri: true, pdf: false, coach: true },
  { feature: "Disponível 24/7", nutri: true, pdf: true, coach: false },
  { feature: "Preço acessível", nutri: true, pdf: true, coach: false },
  { feature: "Onboarding em 2 min", nutri: true, pdf: false, coach: false },
];

export default function Differentials() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-3 block">Diferencial</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Não é só um plano. É um sistema de execução pessoal.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Veja como o Nutri Lian se compara com as alternativas do mercado.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[500px] text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 pr-4 text-muted-foreground font-medium" />
                <th className="py-4 px-4 text-center">
                  <span className="text-gradient-primary font-bold">Nutri Lian</span>
                </th>
                <th className="py-4 px-4 text-center text-muted-foreground font-medium">PDF Genérico</th>
                <th className="py-4 px-4 text-center text-muted-foreground font-medium">Coach Presencial</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b border-border/50">
                  <td className="py-4 pr-4 text-foreground font-medium">{r.feature}</td>
                  <td className="py-4 px-4 text-center">
                    {r.nutri ? (
                      <span className="inline-block w-6 h-6 rounded-full bg-primary/20 text-primary leading-6 text-center text-xs font-bold">✓</span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {r.pdf ? (
                      <span className="inline-block w-6 h-6 rounded-full bg-muted text-muted-foreground leading-6 text-center text-xs">✓</span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {r.coach ? (
                      <span className="inline-block w-6 h-6 rounded-full bg-muted text-muted-foreground leading-6 text-center text-xs">✓</span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
