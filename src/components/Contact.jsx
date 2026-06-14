import { useState } from 'react';

const initialForm = { name: '', email: '', area: '', message: '' };

const inputCls =
  'w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] focus:border-orange-500/40 focus:bg-white/[0.07] rounded-xl text-white placeholder:text-white/25 text-sm outline-none transition-all duration-200 caret-orange-500';
const labelCls =
  'block text-[0.68rem] font-black tracking-[0.16em] uppercase text-white/45 mb-2';

function Contact({ onSubmitMessage }) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((c) => ({ ...c, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitMessage('Mensaje registrado. Pronto nos pondremos en contacto.');
    setForm(initialForm);
  };

  return (
    <section
      className="relative py-24 bg-[#0a0618]"
      id="contacto"
      aria-labelledby="contact-title"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/[0.08] to-transparent pointer-events-none" />

      <div className="section-shell relative z-10">
        <div className="grid lg:grid-cols-[360px_1fr] gap-14 items-start">

          {/* Info */}
          <div>
            <p className="text-[0.72rem] font-black tracking-[0.22em] uppercase text-orange-500 mb-4">
              Contacto
            </p>
            <h2
              id="contact-title"
              className="text-4xl lg:text-5xl font-black text-white leading-tight"
            >
              Conversemos
            </h2>
            <p className="mt-4 text-white/50 text-sm leading-relaxed">
              Escríbenos para participar, proponer actividades, conectar mentorías o abrir nuevas colaboraciones.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] space-y-5">
              <div>
                <p className="text-[0.65rem] font-black tracking-[0.16em] uppercase text-orange-400 mb-1.5">
                  Email
                </p>
                <p className="text-sm text-white/75 font-medium">clubinnovacion@uach.cl</p>
              </div>
              <div className="border-t border-white/[0.06] pt-5">
                <p className="text-[0.65rem] font-black tracking-[0.16em] uppercase text-orange-400 mb-1.5">
                  Ubicación
                </p>
                <p className="text-sm text-white/75">
                  Espacio 14K, Facultad de Ciencias de la Ingeniería
                </p>
                <p className="text-sm text-white/45 mt-0.5">
                  Universidad Austral de Chile · Valdivia
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="p-7 sm:p-8 rounded-2xl bg-white/[0.025] border border-white/[0.07] space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <label>
                <span className={labelCls}>Nombre</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                  className={inputCls}
                  placeholder="Tu nombre"
                />
              </label>
              <label>
                <span className={labelCls}>Correo</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className={inputCls}
                  placeholder="tu@email.com"
                />
              </label>
            </div>

            <label>
              <span className={labelCls}>Carrera o área</span>
              <input
                type="text"
                name="area"
                value={form.area}
                onChange={handleChange}
                required
                className={inputCls}
                placeholder="Ingeniería Civil, Diseño..."
              />
            </label>

            <label>
              <span className={labelCls}>Mensaje</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                className={`${inputCls} resize-none`}
                placeholder="Cuéntanos qué tienes en mente..."
              />
            </label>

            <button
              type="submit"
              className="w-full py-3.5 bg-orange-500 hover:bg-orange-400 text-black font-bold rounded-xl transition-all duration-200 hover:shadow-[0_8px_28px_rgba(249,161,9,0.3)] text-sm"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
