import { Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-cream scroll-mt-20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
          Quiénes somos
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
          Un rincón con alma propia
        </h2>

        <div className="w-16 h-0.5 bg-gold mx-auto mb-10" />

        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6 font-light">
          <span className="font-display italic text-foreground text-2xl">"Celler Cal Puput"</span>{" "}
          es mucho más que un restaurante. Es un lugar emblemático de Vilanova i la Geltrú donde la cocina 
          catalana tradicional se sirve con la calidez de siempre. Tapas generosas, embutidos de primera, 
          y una bodega que invita a quedarse.
        </p>
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-12 font-light">
          Nuestro equipo te hará sentir como en casa desde el primer momento. Ven a disfrutar de los 
          sabores auténticos del Garraf en un ambiente íntimo y acogedor, donde cada plato cuenta una historia.
        </p>

        <div className="inline-flex items-center gap-3 bg-background rounded-xl px-8 py-5 shadow-lg border border-border">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className={
                  i < 4
                    ? "fill-gold text-gold"
                    : "fill-gold/40 text-gold [clip-path:inset(0_50%_0_0)]"
                }
              />
            ))}
          </div>
          <span className="text-foreground font-display text-2xl font-bold">4,5</span>
          <span className="text-muted-foreground text-sm">— 1.876 reseñas en Google</span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
