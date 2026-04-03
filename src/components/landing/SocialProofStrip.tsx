export default function SocialProofStrip() {
  const brands = ["HealthTech", "AI-Daily", "FitnessFlow", "BioHack"];

  return (
    <div className="border-y border-border py-10 bg-card/30">
      <div className="container flex flex-wrap justify-center gap-x-12 gap-y-4 opacity-40">
        {brands.map((b) => (
          <span key={b} className="text-foreground font-bold text-lg md:text-xl uppercase tracking-[0.2em] italic select-none">
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}
