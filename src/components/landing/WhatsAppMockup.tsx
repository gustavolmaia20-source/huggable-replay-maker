export default function WhatsAppMockup() {
  return (
    <div className="w-full max-w-xs bg-card border border-border rounded-[2.5rem] p-3 card-elevated">
      <div className="bg-background rounded-[2rem] overflow-hidden border border-border aspect-[9/17]">
        <div className="px-4 py-3 border-b border-border bg-card/60 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center font-bold text-primary-foreground text-sm">
            NL
          </div>
          <div>
            <p className="text-foreground font-bold text-sm">Nutri Lian IA</p>
            <p className="text-primary text-[10px] flex items-center gap-1">● Online agora</p>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div className="bg-card text-foreground p-3 rounded-2xl rounded-tl-sm max-w-[85%] text-[13px] leading-relaxed border border-border">
            Bom dia! 🏋️ Notei que você treinou 4x essa semana. Com base no seu peso atual, ajustei sua proteína. Quer ver o novo plano?
          </div>
          <div className="bg-primary text-primary-foreground p-3 rounded-2xl rounded-tr-sm max-w-[75%] ml-auto text-[13px] font-medium leading-relaxed">
            Sim! Manda o treino de amanhã também 💪
          </div>
          <div className="bg-card text-foreground p-3 rounded-2xl rounded-tl-sm max-w-[85%] text-[13px] leading-relaxed border border-border">
            Pronto! Seu treino de quarta é <span className="font-bold text-primary">Peito + Tríceps</span>. A dieta foi ajustada para 2.180 kcal. Tudo no seu ritmo ✅
          </div>
        </div>
      </div>
    </div>
  );
}
