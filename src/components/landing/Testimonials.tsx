import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Camila R.",
    role: "Designer, 28 anos",
    text: "Eu já tinha tentado de tudo: app de contagem de calorias, planilha de treino, dieta da internet. O Nutri Lian foi o primeiro que eu realmente consegui seguir. Em 3 semanas já tinha rotina.",
  },
  {
    name: "Lucas M.",
    role: "Desenvolvedor, 32 anos",
    text: "O que me impressionou foi a praticidade. Eu literalmente mando meu peso no WhatsApp e recebo o plano atualizado. Sem app, sem login, sem enrolação. Perdi 4kg no primeiro mês.",
  },
  {
    name: "Fernanda S.",
    role: "Advogada, 35 anos",
    text: "Sempre comecei bem e parava na segunda semana. Os check-ins automáticos me mantiveram no trilho. É como ter alguém cuidando da sua rotina sem precisar agendar consulta.",
  },
  {
    name: "Rafael T.",
    role: "Estudante, 24 anos",
    text: "O preço é ridiculamente acessível para o que entrega. Eu pagava R$300/mês em nutri + personal e não tinha metade do acompanhamento que tenho agora.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-3 block">Depoimentos</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Quem usa, recomenda
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Resultados reais de pessoas que saíram da intenção e entraram em rotina.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
              className="bg-card border border-border rounded-2xl p-6 card-elevated"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div>
                <p className="text-foreground font-semibold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
