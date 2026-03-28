import { MapPin, Clock } from "lucide-react";

const MapSection = () => {
  return (
    <section id="mapa" className="py-20 md:py-28 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            Ubicación
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Cómo llegar
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg border border-border h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.123!2d1.7260!3d41.2241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a386e8e08f64e3%3A0x51c0b5c8ddca7283!2sCarrer%20de%20Santa%20Madrona%2C%2035%2C%2008800%20Vilanova%20i%20la%20Geltr%C3%BA%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Celler Cal Puput"
            />
          </div>

          <div className="bg-card rounded-xl p-8 border border-border shadow-md flex flex-col justify-center space-y-6">
            <div className="flex items-start gap-4">
              <MapPin size={22} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">Dirección</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Carrer de Santa Madrona, 35<br />
                  08800 Vilanova i la Geltrú<br />
                  Barcelona, España
                </p>
              </div>
            </div>
            <div className="w-full h-px bg-border" />
            <div className="flex items-start gap-4">
              <Clock size={22} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">Horario</h3>
               <p className="text-muted-foreground text-sm leading-relaxed">
                Lun – Vie: 18:00 – 1:00<br/>
                Sáb: 12:00 – 15:00 · 19:00 – 2:00<br/>
                Dom: Cerrado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
