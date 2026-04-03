import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Isso substitui nutricionista e personal?",
    a: "O Nutri Lian utiliza IA avançada para criar planos personalizados e fazer ajustes automáticos. É ideal para quem busca praticidade e acessibilidade. Para casos clínicos específicos ou patologias, recomendamos acompanhamento médico.",
  },
  {
    q: "É tudo pelo WhatsApp?",
    a: "Sim! Todo o processo acontece pelo WhatsApp: onboarding, envio do plano, check-ins e ajustes. Você não precisa baixar nenhum app ou criar nenhuma conta.",
  },
  {
    q: "O plano realmente é personalizado?",
    a: "Completamente. A IA analisa seu objetivo, rotina, restrições alimentares, preferências e nível de experiência para montar um plano único para você.",
  },
  {
    q: "Funciona para iniciantes?",
    a: "Com certeza. O Nutri Lian foi pensado especialmente para quem está começando ou recomeçando. A IA adapta tudo ao seu nível.",
  },
  {
    q: "Preciso de academia?",
    a: "Não necessariamente. A IA adapta seu treino para o ambiente que você tem disponível: academia, casa ou parques.",
  },
  {
    q: "Como funcionam os ajustes?",
    a: "Toda semana você envia seu peso e percepção de esforço. A IA recalcula suas calorias, macros e volume de treino na hora, sem precisar esperar consulta.",
  },
  {
    q: "Posso começar pelo desafio de 21 dias?",
    a: "Sim! O Desafio 21 Dias é o ponto de entrada ideal. É um pagamento único de R$19,90 para você experimentar o sistema sem compromisso.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left py-5 gap-4"
      >
        <span className="text-foreground font-medium text-sm md:text-base">{q}</span>
        <ChevronDown
          size={18}
          className={`text-muted-foreground shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-muted-foreground text-sm leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-card/30">
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-3 block">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Dúvidas frequentes</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Tudo o que você precisa saber antes de começar.
          </p>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
