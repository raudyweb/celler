import { Phone } from "lucide-react";
import heroBgWebp from "@/assets/hero-bg.webp";
import heroBgJpg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <picture className="absolute inset-0 w-full h-full">
        <source srcSet={heroBgWebp} type="image/webp" />
        <img
          src={heroBgJpg}
          alt="Interior del Celler Cal Puput"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-up">
        <p className="text-gold-light font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4">
          Restaurante & Bodega
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 leading-tight">
          Celler Cal Puput
        </h1>
        <p className="text-cream/80 text-lg md:text-xl font-body font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          La cocina catalana de toda la vida, en el corazón de Vilanova
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="bg-primary hover:bg-wine-light text-primary-foreground font-semibold px-8 py-4 rounded-md transition-all duration-300 text-lg tracking-wide hover:shadow-xl hover:shadow-primary/30"
          >
            Reserva tu mesa
          </a>
          <a
            href="tel:938936758"
            className="border-2 border-cream/40 hover:border-gold-light text-cream hover:text-gold-light font-medium px-8 py-4 rounded-md transition-all duration-300 text-lg flex items-center justify-center gap-3"
          >
            <Phone size={20} />
            Llámanos
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-cream/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
