function Contact() {
  return (
    <section
      className="relative py-24 bg-[#0a0618]"
      id="contacto"
      aria-labelledby="contact-title"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/[0.08] to-transparent pointer-events-none" />

      <div className="section-shell relative z-10">
        <div className="max-w-xl">
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

          <a
            href="mailto:clubinnovacion@uach.cl"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-black font-bold rounded-xl transition-all duration-200 hover:shadow-[0_8px_28px_rgba(249,161,9,0.3)] text-sm"
          >
            Escríbenos un correo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
