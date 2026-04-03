import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section id="precos" className="py-20 md:py-28 bg-card/30">
      <div className="container">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-3 block">Planos e Preços</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Escolha sua jornada
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Comece hoje e mude seu estilo de vida definitivamente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="bg-card border border-border rounded-[2rem] p-8 md:p-10 flex flex-col card-elevated"
          >
            <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-4">Flexível</span>
            <h3 className="text-2xl font-bold text-foreground mb-2">Plano Mensal</h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Acompanhamento contínuo mês a mês, sem compromisso de longo prazo.
            </p>
            <div className="text-center mb-8">
              <span className="text-sm text-muted-foreground line-through block mb-1">De R$ 119,90</span>
              <span className="text-muted-foreground text-sm mb-2 block">por apenas 1x de</span>
              <span className="text-5xl font-extrabold text-foreground block mb-2">R$ 49,90</span>
              <span className="text-muted-foreground text-sm">Ou apenas R$ 49,90 à vista</span>
            </div>

            <ul className="space-y-3 mb-10 flex-1">
              {[
                "Treinos e dietas personalizados",
                "Ajustes automáticos semanais",
                "Check-in diário com a IA",
                "Suporte via WhatsApp",
                "Conteúdos educativos",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Check size={14} className="text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>

            <Button variant="heroOutline" size="lg" className="w-full" asChild>
              <a href="/checkout?plano=mensal">
                Assinar agora <ArrowRight size={16} />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="relative bg-gradient-to-b from-primary/10 to-card border border-primary/30 rounded-[2rem] p-8 md:p-10 flex flex-col card-elevated"
          >
            <div className="absolute top-5 right-5 bg-gradient-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Melhor Custo
            </div>

            <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-4">Economia</span>
            <h3 className="text-2xl font-bold text-foreground mb-2">Plano Semestral</h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              6 meses de acompanhamento com o melhor preço por mês.
            </p>
            <div className="text-center mb-8">
              <span className="text-sm text-muted-foreground line-through block mb-1">De R$ 69,90/mês</span>
              <span className="text-muted-foreground text-sm mb-2 block">por apenas 6x de</span>
              <span className="text-5xl font-extrabold text-foreground block mb-2">R$ 29,90</span>
              <span className="text-muted-foreground text-sm">Ou apenas R$ 179,40 à vista</span>
            </div>

            <ul className="space-y-3 mb-10 flex-1">
              {[
                "Tudo do plano mensal",
                "Economia de 40% no valor",
                "Ajustes automáticos semanais",
                "Suporte prioritário WhatsApp",
                "Histórico completo de evolução",
                "Aulas práticas exclusivas",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Check size={14} className="text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg" className="w-full" asChild>
              <a href="/checkout?plano=semestral">
                Assinar agora <ArrowRight size={16} />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
