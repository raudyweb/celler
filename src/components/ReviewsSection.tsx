import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "La mejor xatonada de la zona... Excelentes embutidos y pinchos.",
    author: "El Menú de Gemma",
  },
  {
    text: "Un celler con un encanto único... Nos hacen sentir como en casa.",
    author: "Alejandro Mingorance",
  },
  {
    text: "Uno de los mejores restaurantes de Vilanova. Ideal para tapear.",
    author: "Á G",
  },
];

const ReviewsSection = () => {
  return (
    <section id="opiniones" className="py-20 md:py-28 bg-primary text-primary-foreground scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold-light font-body text-sm tracking-[0.3em] uppercase mb-4">
            Opiniones
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-8 hover:bg-primary-foreground/10 transition-all duration-500 hover:-translate-y-1 group"
            >
              <Quote size={32} className="text-gold/60 mb-4 group-hover:text-gold transition-colors" />
              <p className="text-primary-foreground/90 text-base leading-relaxed mb-6 italic font-display">
                "{review.text}"
              </p>
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-gold-light font-semibold text-sm">
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
