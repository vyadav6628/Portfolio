# Vipin Yadav Portfolio

A premium personal portfolio for Vipin Yadav, built with Next.js, TypeScript, and Tailwind CSS. The project is designed for Vercel deployment and follows the provided professional brief while remaining original in design and presentation.

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Then open http://localhost:3000.

## Environment variables

Create a local file named `.env.local` from `.env.local.example` and adjust values as needed:

```bash
cp .env.local.example .env.local
```

Example:

```env
RESUME_STORAGE_PROVIDER=local
RESUME_PUBLIC_URL=/resume/vipin-yadav-resume.pdf
CONTACT_TO_EMAIL=vyadav6616188@gmail.com
```

## Resume storage configuration

This implementation uses a server-side validation pattern suitable for production deployment:

```text
Next.js
   ↓
API Route / Server Action
   ↓
Validation
   ↓
Cloud Storage
   ↓
Resume URL
```

For a live production deployment, replace the local placeholder flow with a secure cloud storage provider such as Google Cloud Storage or another managed solution. Keep service credentials in environment variables and never expose them to the client.

## Contact form configuration

The contact form validates input server-side in the `/api/contact` route. For production email delivery, connect the form to a mail provider or serverless email service and set the relevant SMTP or API environment variables.

## Production build

```bash
npm run build
```

## Vercel deployment

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Set the environment variables from `.env.local.example`.
4. Keep the build command as `npm run build`.
5. Deploy.

This portfolio is optimized for responsive design, semantic HTML, metadata, and accessibility with a premium dark-first visual language.
