# Club de Innovación Sostenible UACh

## Formulario de contacto

El formulario envía sus consultas mediante una Vercel Function y Resend al buzón configurado en
`CONTACT_TO_EMAIL`.

1. Instala Resend desde Vercel Marketplace o crea una API key en Resend.
2. Agrega en Vercel las variables de `.env.example` para Production, Preview y Development.
3. Para producción, verifica un dominio en Resend y usa ese remitente en `CONTACT_FROM_EMAIL`.
4. Vuelve a desplegar el proyecto.

El correo receptor puede ser un buzón de Outlook; no necesita configuración adicional.
