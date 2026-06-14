import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  area: '',
  message: '',
};

function Contact({ onSubmitMessage }) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitMessage('Mensaje registrado. Pronto nos pondremos en contacto.');
    setForm(initialForm);
  };

  return (
    <section className="section" id="contacto" aria-labelledby="contact-title">
      <div className="section-shell contact-layout">
        <div className="section-heading">
          <p className="eyebrow">Contacto</p>
          <h2 id="contact-title">Conversemos</h2>
          <p>
            Escríbenos para participar, proponer actividades, conectar mentorías o abrir nuevas colaboraciones.
          </p>
          <div className="contact-card">
            <strong>clubinnovacion@uach.cl</strong>
            <span>Espacio 14K, Facultad de Ciencias de la Ingeniería</span>
            <span>Universidad Austral de Chile · Valdivia</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Nombre
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              required
            />
          </label>
          <label>
            Correo
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </label>
          <label>
            Carrera o área
            <input type="text" name="area" value={form.area} onChange={handleChange} required />
          </label>
          <label>
            Mensaje
            <textarea name="message" value={form.message} onChange={handleChange} rows="5" required />
          </label>
          <button className="button button-primary" type="submit">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
