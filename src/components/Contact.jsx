import { useState } from 'react';

const initialForm = { name: '', email: '', area: '', message: '', website: '' };

const inputCls =
  'w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] focus:border-orange-500/40 focus:bg-white/[0.07] rounded-xl text-white placeholder:text-white/25 text-sm outline-none transition-all duration-200 caret-orange-500';
const labelCls =
  'block text-[0.68rem] font-black tracking-[0.16em] uppercase text-white/45 mb-2';

function Contact({ onSubmitMessage }) {
  const [form, setForm] = useState(initialForm);
  const [submitState, setSubmitState] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((c) => ({ ...c, [name]: value }));
    if (submitState !== 'sending') {
      setSubmitState('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitState('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || 'No pudimos enviar el mensaje.');
      }

      setForm(initialForm);
      setSubmitState('success');
      onSubmitMessage?.('Mensaje enviado. Pronto nos pondremos en contacto.');
    } catch (error) {
      setSubmitState('error');
      setErrorMessage(
        error.message ||
          'No pudimos enviar el mensaje. También puedes escribirnos directamente por correo.',
      );
    }
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
                <a
                  href="mailto:clubinnovacion@uach.cl"
                  className="text-sm text-white/75 font-medium transition-colors hover:text-orange-400"
                >
                  clubinnovacion@uach.cl
                </a>
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
            aria-busy={submitState === 'sending'}
            className="relative p-7 sm:p-8 rounded-2xl bg-white/[0.025] border border-white/[0.07] space-y-5"
          >
            <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
              <label>
                Sitio web
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  tabIndex="-1"
                  autoComplete="off"
                />
              </label>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <label>
                <span className={labelCls}>Nombre</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  maxLength={100}
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
                  maxLength={254}
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
                maxLength={120}
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
                maxLength={3000}
                className={`${inputCls} resize-none`}
                placeholder="Cuéntanos qué tienes en mente..."
              />
            </label>

            <button
              type="submit"
              disabled={submitState === 'sending'}
              className="w-full py-3.5 bg-orange-500 hover:bg-orange-400 disabled:bg-orange-500/60 disabled:cursor-wait text-black font-bold rounded-xl transition-all duration-200 hover:shadow-[0_8px_28px_rgba(249,161,9,0.3)] text-sm"
            >
              {submitState === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
            </button>

            {errorMessage && (
              <p
                className="rounded-xl border border-red-400/20 bg-red-400/[0.07] px-4 py-3 text-sm text-red-200"
                role="alert"
              >
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
