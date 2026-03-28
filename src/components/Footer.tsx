import { Facebook, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-cream py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Celler Cal Puput</h3>
            <p className="text-cream/60 text-sm leading-relaxed">
              Cocina catalana · Vilanova i la Geltrú
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-cream/70 text-sm">
              <MapPin size={16} className="text-gold flex-shrink-0" />
              C/ Santa Madrona, 35, 08800 Vilanova i la Geltrú
            </div>
            <div className="flex items-center gap-3 text-cream/70 text-sm">
              <Phone size={16} className="text-gold flex-shrink-0" />
              <a href="tel:938936758" className="hover:text-gold-light transition-colors">938 93 67 58</a>
            </div>
          </div>
          <div className="flex items-start md:justify-end">
            <a
              href="https://www.facebook.com/pages/Celler-de-cal-Puput/123392894400761"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-cream/70 hover:text-gold-light transition-colors text-sm"
            >
              <Facebook size={20} />
              Celler de cal Puput
            </a>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/40 text-xs">
            © {new Date().getFullYear()} Celler Cal Puput. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-cream/40 text-xs">
            <a href="/privacidad" className="hover:text-cream/70 transition-colors">Política de privacidad</a>
            <a href="/aviso-legal" className="hover:text-cream/70 transition-colors">Aviso legal</a>
            <a href="/cookies" className="hover:text-cream/70 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
