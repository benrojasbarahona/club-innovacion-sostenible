import { useState } from 'react';

const FORMS_URL =
  'https://forms.office.com/Pages/ResponsePage.aspx?id=zxGbB6G8Y0SGwilo8oThng-fzTfdo9FBniTmrC29_mVUNFI5VjUyTVk0TkVXTENNWkpaSFFPWjFSUS4u';

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
      className="relative bg-[#0a0618]"
      id="contacto"
      aria-labelledby="contact-title"
    >
      {/* CTA block */}
      <div className="relative overflow-hidden py-20 border-b border-white/[0.04]">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/[0.15] to-orange-900/[0.06] pointer-events-none" />
        <div className="orb-3 pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-800/[0.12] blur-[130px]" />

        <div className="section-shell relative z-10 text-center">
          <p className="text-[0.72rem] font-black tracking-[0.22em] uppercase text-orange-500 mb-4">
            Unete al club
          </p>
          <h2
            id="contact-title"
            className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4"
          >
            Forma parte del cambio
          </h2>
          <p className="text-white/50 text-[0.95rem] leading-relaxed max-w-xl mx-auto mb-8">
            Si quieres crear soluciones reales, este es tu espacio. Abierto a estudiantes de todas
            las disciplinas de la UACh con motivacion y compromiso para innovar.
          </p>
          <a
            href={FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-400 text-black font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_36px_rgba(249,161,9,0.45)] text-sm"
          >
            Quiero unirme al club
          </a>
          <p className="mt-4 text-[0.75rem] text-white/28">
            Reuniones los lunes de 15:50 a 17:20 horas &middot; Asistencia minima 70%
          </p>
        </div>
      </div>

      {/* Contact form */}
      <div className="py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/[0.06] to-transparent pointer-events-none" />
        <div className="section-shell relative z-10">
          <div className="grid lg:grid-cols-[340px_1fr] gap-12 items-start">

            {/* Info */}
            <div>
              <p className="text-[0.72rem] font-black tracking-[0.22em] uppercase text-orange-500 mb-4">
                Contacto
              </p>
              <h3 className="text-3xl font-black text-white leading-tight mb-4">
                Conversemos
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Escribenos para proponer actividades, abrir colaboraciones o resolver dudas sobre el
                club.
              </p>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] space-y-5">
                <div>
                  <p className="text-[0.65rem] font-black tracking-[0.16em] uppercase text-orange-400 mb-1.5">
                    Email
                  </p>
                  <p className="text-sm text-white/75 font-medium">clubinnovacion@uach.cl</p>
                </div>
                <div className="border-t border-white/[0.06] pt-5">
                  <p className="text-[0.65rem] font-black tracking-[0.16em] uppercase text-orange-400 mb-1.5">
                    Ubicacion
                  </p>
                  <p className="text-sm text-white/75">
                    Espacio 14K, Facultad de Ciencias de la Ingenieria
                  </p>
                  <p className="text-sm text-white/45 mt-0.5">
                    Universidad Austral de Chile &middot; Valdivia
                  </p>
                </div>
                <div className="border-t border-white/[0.06] pt-5">
                  <p className="text-[0.65rem] font-black tracking-[0.16em] uppercase text-orange-400 mb-1.5">
                    Horario de reuniones
                  </p>
                  <p className="text-sm text-white/75">Lunes 15:50 &ndash; 17:20 hrs</p>
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
                <span className={labelCls}>Carrera o area</span>
                <input
                  type="text"
                  name="area"
                  value={form.area}
                  onChange={handleChange}
                  required
                  className={inputCls}
                  placeholder="Ingenieria Civil, Diseno..."
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
                  placeholder="Cuentanos que tienes en mente..."
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
      </div>
    </section>
  );
}

export default Contact;
