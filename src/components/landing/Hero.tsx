import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, MessageSquare, Target } from "lucide-react";
import { motion } from "framer-motion";
import WhatsAppMockup from "./WhatsAppMockup";

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-primary/10 blur-[140px] rounded-full -z-10 pointer-events-none" />

      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-extrabold text-foreground leading-[1.08] mb-6">
            O que seu nutricionista levaria meses para ajustar,{" "}
            <span className="text-gradient-primary">a IA faz toda semana.</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            Receba uma rotina montada para o seu objetivo, acompanhe pelo WhatsApp e ajuste tudo com check-ins rápidos e automáticos.
          </p>

          <div className="flex mb-10">
            <Button variant="hero" size="xl" className="w-full sm:w-auto sm:px-20" asChild>
              <a href="/checkout?plano=semestral">
                Montar meu plano <ArrowRight size={18} />
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-muted-foreground text-sm">
            <span className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-primary" /> IA Validada por profissionais
            </span>
            <span className="flex items-center gap-2">
              <MessageSquare size={16} className="text-primary" /> 100% WhatsApp
            </span>
            <span className="flex items-center gap-2">
              <Target size={16} className="text-primary" /> Ajuste Semanal
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          className="relative flex justify-center"
        >
          <WhatsAppMockup />
          <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-primary/15 blur-[80px] rounded-full -z-10 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
