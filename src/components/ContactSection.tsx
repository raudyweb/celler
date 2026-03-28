import { useState } from "react";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

// TODO: reemplaza este endpoint por el tuyo en https://formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvzvzwyw";

const reservaSchema = z.object({
  nombre: z.string().trim().min(1, "El nombre es obligatorio").max(100),
  telefono: z.string().trim().min(6, "Introduce un teléfono válido").max(20),
  fecha: z.string().min(1, "Selecciona una fecha"),
  hora: z.string().min(1, "Selecciona una hora"),
  comensales: z.string().min(1, "Indica el número de comensales"),
  mensaje: z.string().max(500).optional(),
});

const ContactSection = () => {
  const today = new Date().toISOString().split("T")[0];
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    fecha: "",
    hora: "",
    comensales: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = reservaSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        const key = err.path[0] as string;
        fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSending(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(result.data),
      });
      if (res.ok) {
        toast.success("¡Solicitud de reserva enviada! Te contactaremos pronto.");
        setForm({ nombre: "", telefono: "", fecha: "", hora: "", comensales: "", mensaje: "" });
      } else {
        toast.error("Ha ocurrido un error. Por favor llámanos directamente.");
      }
    } catch {
      toast.error("Sin conexión. Por favor llámanos directamente.");
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors font-body";

  return (
    <section id="contacto" className="py-20 md:py-28 bg-cream scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            Contacto
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Reservas y contacto
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="nombre" className="sr-only">Nombre</label>
                <input id="nombre" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre *" className={inputClass} />
                {errors.nombre && <p className="text-destructive text-xs mt-1" role="alert">{errors.nombre}</p>}
              </div>
              <div>
                <label htmlFor="telefono" className="sr-only">Teléfono</label>
                <input id="telefono" name="telefono" value={form.telefono} onChange={handleChange} placeholder="Teléfono *" className={inputClass} />
                {errors.telefono && <p className="text-destructive text-xs mt-1" role="alert">{errors.telefono}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label htmlFor="fecha" className="sr-only">Fecha</label>
                <input id="fecha" name="fecha" type="date" min={today} value={form.fecha} onChange={handleChange} className={inputClass} />
                {errors.fecha && <p className="text-destructive text-xs mt-1" role="alert">{errors.fecha}</p>}
              </div>
              <div>
                <label htmlFor="hora" className="sr-only">Hora</label>
                <select id="hora" name="hora" value={form.hora} onChange={handleChange} className={inputClass}>
                  <option value="">Hora</option>
                  {["12:00","12:30","13:00","13:30","14:00","14:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00"].map(h => (
                    <option key={h} value={h}>{h}</option>
                  ))}
                </select>
                {errors.hora && <p className="text-destructive text-xs mt-1" role="alert">{errors.hora}</p>}
              </div>
              <div>
                <label htmlFor="comensales" className="sr-only">Comensales</label>
                <select id="comensales" name="comensales" value={form.comensales} onChange={handleChange} className={inputClass}>
                  <option value="">Comensales</option>
                  {[1,2,3,4,5,6,7,8,9,10].map(n => (
                    <option key={n} value={String(n)}>{n} {n === 1 ? "persona" : "personas"}</option>
                  ))}
                  <option value="10+">Más de 10</option>
                </select>
                {errors.comensales && <p className="text-destructive text-xs mt-1" role="alert">{errors.comensales}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="mensaje" className="sr-only">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Mensaje (opcional)"
                rows={3}
                className={inputClass}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-primary hover:bg-wine-light text-primary-foreground font-semibold py-4 rounded-md transition-all duration-300 flex items-center justify-center gap-3 text-lg hover:shadow-xl hover:shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send size={20} />
              {sending ? "Enviando..." : "Enviar reserva"}
            </button>
            <p className="text-xs text-muted-foreground text-center">
              Al enviar este formulario aceptas nuestra{" "}
              <a href="/privacidad" className="underline hover:text-primary transition-colors">
                política de privacidad
              </a>
              .
            </p>
          </form>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">Teléfono</h3>
                <a href="tel:938936758" className="text-primary hover:text-wine-light transition-colors text-lg font-medium">
                  938 93 67 58
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">Dirección</h3>
                <p className="text-muted-foreground">
                  Carrer de Santa Madrona, 35<br />
                  08800 Vilanova i la Geltrú, Barcelona
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">Horario</h3>
                <p className="text-muted-foreground">
                  Lun – Vie: 18:00 – 1:00<br />
                  Sáb: 12:00 – 15:00 · 19:00 – 2:00<br />
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

export default ContactSection;
