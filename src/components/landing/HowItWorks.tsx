import { MessageSquare, Zap, ClipboardCheck, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <MessageSquare className="text-primary" size={24} />,
    title: "Conversa no WhatsApp",
    desc: "Responda algumas perguntas rápidas sobre seu objetivo, rotina e restrições alimentares.",
  },
  {
    icon: <Zap className="text-primary" size={24} />,
    title: "Plano Gerado pela IA",
    desc: "Em 10 minutos, receba dieta e treino totalmente personalizados no seu celular.",
  },
  {
    icon: <ClipboardCheck className="text-primary" size={24} />,
    title: "Check-ins Semanais",
    desc: "Envie seu peso e percepção de esforço. Simples, rápido e sem complicação.",
  },
  {
    icon: <RefreshCw className="text-primary" size={24} />,
    title: "Ajuste Automático",
    desc: "A IA recalcula calorias, macros e volume de treino com base no seu progresso real.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-28">
      <div className="container">
        <div className="mb-14 max-w-2xl">
          <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-3 block">Como funciona</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            O fim da confusão na sua rotina
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Esqueça PDFs estáticos. O Nutri Lian é um sistema vivo que evolui com você, direto no WhatsApp.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-card border border-border rounded-3xl p-7 card-elevated group hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <span className="text-muted-foreground text-xs font-mono mb-2 block">0{i + 1}</span>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
