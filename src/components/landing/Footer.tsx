export default function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 font-extrabold text-foreground text-lg">
          Nutri Lian
        </div>
        <p className="text-muted-foreground text-xs">
          © 2025 Nutri Lian. Inteligência Artificial aplicada à saúde.
        </p>
        <div className="flex gap-6 text-muted-foreground text-xs">
          <a href="/termos" className="hover:text-foreground transition-colors">Termos</a>
          <a href="/privacidade" className="hover:text-foreground transition-colors">Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
