import { Resend } from 'resend';

const limits = {
  name: 100,
  email: 254,
  area: 120,
  message: 3000,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const cleanText = (value) => (typeof value === 'string' ? value.trim() : '');

const escapeHtml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Método no permitido.' });
  }

  let body;

  try {
    body = typeof request.body === 'string' ? JSON.parse(request.body) : request.body;
  } catch {
    return response.status(400).json({ error: 'Solicitud inválida.' });
  }

  const name = cleanText(body?.name);
  const email = cleanText(body?.email).toLowerCase();
  const area = cleanText(body?.area);
  const message = cleanText(body?.message);
  const website = cleanText(body?.website);

  // Campo trampa: los visitantes reales no lo ven, pero muchos bots lo completan.
  if (website) {
    return response.status(200).json({ ok: true });
  }

  const fieldsAreValid =
    name &&
    emailPattern.test(email) &&
    area &&
    message &&
    name.length <= limits.name &&
    email.length <= limits.email &&
    area.length <= limits.area &&
    message.length <= limits.message;

  if (!fieldsAreValid) {
    return response.status(400).json({
      error: 'Revisa los datos ingresados e inténtalo nuevamente.',
    });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY no está configurada.');
    return response.status(503).json({
      error: 'El servicio de correo aún no está configurado.',
    });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const recipient = process.env.CONTACT_TO_EMAIL || 'clubinnovacion@uach.cl';
  const sender =
    process.env.CONTACT_FROM_EMAIL ||
    'Club de Innovación Sostenible <onboarding@resend.dev>';

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeArea = escapeHtml(area);
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br />');
  const subjectName = name.replace(/[\r\n]+/g, ' ');

  const { data, error } = await resend.emails.send({
    from: sender,
    to: [recipient],
    replyTo: email,
    subject: `Nuevo mensaje desde el sitio web — ${subjectName}`,
    text: [
      'Nueva consulta desde el sitio del Club de Innovación Sostenible UACh',
      '',
      `Nombre: ${name}`,
      `Correo: ${email}`,
      `Carrera o área: ${area}`,
      '',
      'Mensaje:',
      message,
    ].join('\n'),
    html: `
      <div style="background:#f7f5fa;padding:32px;font-family:Arial,sans-serif;color:#22182d">
        <div style="max-width:620px;margin:0 auto;background:#ffffff;border:1px solid #e8e1ef;border-radius:16px;overflow:hidden">
          <div style="background:#491684;padding:24px 28px;color:#ffffff">
            <p style="margin:0 0 8px;color:#fab031;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase">Contacto web</p>
            <h1 style="margin:0;font-size:24px">Nuevo mensaje para el Club</h1>
          </div>
          <div style="padding:28px">
            <p style="margin:0 0 12px"><strong>Nombre:</strong> ${safeName}</p>
            <p style="margin:0 0 12px"><strong>Correo:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p style="margin:0 0 24px"><strong>Carrera o área:</strong> ${safeArea}</p>
            <div style="padding:18px;background:#f8f6fb;border-radius:12px;line-height:1.6">
              ${safeMessage}
            </div>
          </div>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error('Resend no pudo enviar el correo:', error);
    return response.status(502).json({
      error: 'No pudimos enviar el mensaje. Inténtalo nuevamente en unos minutos.',
    });
  }

  return response.status(200).json({ ok: true, id: data?.id });
}
