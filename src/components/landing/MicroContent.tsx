import { BookOpen, Lightbulb, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: <BookOpen size={20} />, title: "Aulas práticas e curtas", desc: "Conteúdos de 3-5 minutos sobre nutrição, treino e hábitos para você aplicar no dia a dia." },
  { icon: <Lightbulb size={20} />, title: "Dicas de execução", desc: "Orientações objetivas sobre como encaixar o plano na sua rotina sem sofrer." },
  { icon: <TrendingUp size={20} />, title: "Hábitos que funcionam", desc: "Aprenda a criar micro-hábitos que tornam a consistência automática." },
];

export default function MicroContent() {
  return (
    <section className="py-20 md:py-28 bg-card/30">
      <div className="container">
        <div className="mb-14 max-w-2xl">
          <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-3 block">Conteúdo exclusivo</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Além do plano: conhecimento que transforma
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Receba micro-conteúdos educativos que reforçam sua evolução e aumentam seus resultados.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="grid md:grid-cols-3 gap-6"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
              className="bg-background border border-border rounded-2xl p-6 card-elevated"
            >
              <div className="text-primary mb-4">{item.icon}</div>
              <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
