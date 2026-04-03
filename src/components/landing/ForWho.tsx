import { Check } from "lucide-react";
import { motion } from "framer-motion";

const profiles = [
  "Para quem quer emagrecer com mais organização",
  "Para quem quer ganhar massa sem viver perdido",
  "Para quem começa bem e sempre para no meio",
  "Para quem quer algo personalizado, mas acessível",
  "Para quem tem pouco tempo e precisa de praticidade",
  "Para quem já tentou dietas prontas e não funcionou",
];

export default function ForWho() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-3 block">Pra quem é</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Se você se identifica, o Nutri Lian é pra você
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Criado para pessoas reais com rotinas reais. Sem exigir perfeição, só constância.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          {profiles.map((p, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, x: -12 },
                show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
              }}
              className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 card-elevated"
            >
              <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Check size={12} className="text-primary" />
              </div>
              <span className="text-foreground text-sm font-medium leading-snug">{p}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
