import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="bg-gradient-primary rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 relative overflow-hidden text-center"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6 leading-tight">
              Pare de tentar. Comece a seguir.
            </h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 font-medium leading-relaxed">
              Se o seu problema não é saber o que fazer, e sim conseguir seguir, o Nutri Lian foi feito para você.
            </p>
            <Button
              size="xl"
              className="bg-background text-foreground hover:bg-background/90 font-bold shadow-2xl rounded-full"
              asChild
            >
              <a href="/checkout?plano=semestral">
                Quero começar agora <ArrowRight size={18} />
              </a>
            </Button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-foreground/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-foreground/5 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
