import { Sparkles, Clock, BarChart3, Repeat, UserCheck, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  { icon: <Sparkles size={22} />, title: "Personalização sem custo alto", desc: "Plano montado para você, sem pagar consulta cara de nutricionista + personal." },
  { icon: <Clock size={22} />, title: "Praticidade para vida real", desc: "Treino e dieta que cabem na sua rotina. Sem receitas impossíveis ou treinos de 2 horas." },
  { icon: <BarChart3 size={22} />, title: "Check-ins rápidos", desc: "Em 30 segundos você envia seu progresso e a IA já tem o que precisa para ajustar." },
  { icon: <Repeat size={22} />, title: "Ajustes automáticos", desc: "Nada de ficar preso ao mesmo plano por meses. Tudo se adapta à sua evolução." },
  { icon: <UserCheck size={22} />, title: "Rotina com direção clara", desc: "Você sabe exatamente o que comer e como treinar cada dia. Sem dúvida, sem improviso." },
  { icon: <Smartphone size={22} />, title: "Acompanhamento sem fricção", desc: "Tudo acontece no WhatsApp. Sem app novo, sem login, sem complicação." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-card/30">
      <div className="container">
        <div className="mb-14 max-w-2xl">
          <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-3 block">Benefícios</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Valor real para quem quer resultado
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Não vendemos promessa. Entregamos estrutura, consistência e personalização de verdade.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-background border border-border rounded-2xl p-6 card-elevated group hover:border-primary/30 transition-colors"
            >
              <div className="text-primary mb-4">{b.icon}</div>
              <h3 className="text-base font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
