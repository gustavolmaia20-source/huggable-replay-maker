import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 glass border-t border-subtle">
      <Button variant="hero" size="lg" className="w-full" asChild>
        <a href="/checkout?plano=semestral">
          Quero começar agora <ArrowRight size={16} />
        </a>
      </Button>
    </div>
  );
}
