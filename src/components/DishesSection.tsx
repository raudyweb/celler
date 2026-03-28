import dishXatoWebp from "@/assets/dish-xato.webp";
import dishJamonWebp from "@/assets/dish-jamon.webp";
import dishFoieWebp from "@/assets/dish-foie.webp";
import dishAhumadosWebp from "@/assets/dish-ahumados.webp";
import dishCabralesWebp from "@/assets/dish-cabrales.webp";
import dishXato from "@/assets/dish-xato.jpg";
import dishJamon from "@/assets/dish-jamon.jpg";
import dishFoie from "@/assets/dish-foie.jpg";
import dishAhumados from "@/assets/dish-ahumados.jpg";
import dishCabrales from "@/assets/dish-cabrales.jpg";

const dishes = [
  {
    name: "Xató de Vilanova",
    description: "Nuestra especialidad: la ensalada de escarola con bacalao, atún, anchoas y la inconfundible salsa romesco.",
    image: dishXato,
    imageWebp: dishXatoWebp,
    tag: "Especialidad",
  },
  {
    name: "Jamón y Quesos",
    description: "Selección de embutidos ibéricos y quesos artesanales servidos en tabla de madera.",
    image: dishJamon,
    imageWebp: dishJamonWebp,
  },
  {
    name: "Foie con Membrillo",
    description: "Suave foie mi-cuit acompañado de dulce de membrillo casero y tostadas crujientes.",
    image: dishFoie,
    imageWebp: dishFoieWebp,
  },
  {
    name: "Surtido de Ahumados",
    description: "Salmón, bacalao y atún ahumados con un toque de limón y hierbas frescas.",
    image: dishAhumados,
    imageWebp: dishAhumadosWebp,
  },
  {
    name: "Tapa de Cabrales",
    description: "Queso Cabrales fundido sobre pan rústico, un clásico irresistible de la bodega.",
    image: dishCabrales,
    imageWebp: dishCabralesWebp,
  },
];

const DishesSection = () => {
  return (
    <section id="platos" className="py-20 md:py-28 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            Nuestra carta
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Platos destacados
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border"
            >
              <div className="relative h-56 overflow-hidden">
                <picture>
                  <source srcSet={dish.imageWebp} type="image/webp" />
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </picture>
                {dish.tag && (
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase">
                    {dish.tag}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {dish.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 text-sm">
          Precio medio: 10–20 € por persona · Consulta nuestra carta completa en el restaurante
        </p>
      </div>
    </section>
  );
};

export default DishesSection;
