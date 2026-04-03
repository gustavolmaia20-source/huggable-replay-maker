import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import SocialProofStrip from "@/components/landing/SocialProofStrip";
import HowItWorks from "@/components/landing/HowItWorks";
import Benefits from "@/components/landing/Benefits";
import ForWho from "@/components/landing/ForWho";
import Pricing from "@/components/landing/Pricing";
import Differentials from "@/components/landing/Differentials";
import MicroContent from "@/components/landing/MicroContent";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import StickyMobileCTA from "@/components/landing/StickyMobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <SocialProofStrip />
      <HowItWorks />
      <Benefits />
      <ForWho />
      <Pricing />
      <Differentials />
      <MicroContent />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
      <div className="h-20 md:h-0" />
    </div>
  );
};

export default Index;
