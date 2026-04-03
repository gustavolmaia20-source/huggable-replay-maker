import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Preços", href: "#precos" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="container mx-auto h-16 md:h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-foreground font-extrabold text-xl">
          Nutri Lian
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground text-sm font-medium hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button variant="heroOutline" size="sm">
            Entrar
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-subtle overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground text-base font-medium hover:text-foreground transition-colors py-2"
                >
                  {l.label}
                </a>
              ))}
              <Button variant="hero" size="lg" className="mt-2" asChild>
                <a href="/checkout?plano=semestral">
                  Começar agora
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
