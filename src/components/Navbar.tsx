import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#nosotros", label: "Nosotros" },
    { href: "#platos", label: "Platos" },
    { href: "#opiniones", label: "Opiniones" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-wine/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="font-display text-xl md:text-2xl font-bold text-cream tracking-wide">
          Celler Cal Puput
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-cream/80 hover:text-gold-light transition-colors text-sm font-medium tracking-wider uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-gold hover:bg-gold-light text-foreground font-semibold px-5 py-2 rounded-md transition-colors text-sm tracking-wide"
          >
            Reservar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-cream p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-wine/95 backdrop-blur-md border-t border-cream/10 px-4 pb-6 pt-4 space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-cream/90 hover:text-gold-light transition-colors text-base tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="block bg-gold hover:bg-gold-light text-foreground font-semibold px-5 py-2.5 rounded-md transition-colors text-center"
          >
            Reservar
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
