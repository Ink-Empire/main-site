# Ink Empire — Corporate Site

Marketing and contact site for Ink Empire Limited. Built with React + Vite, deployed on Vercel.

## Stack

- **Frontend**: React + TypeScript (Vite)
- **Backend**: Single Vercel serverless function (`/api/contact`) for email via Resend
- **Hosting**: Vercel

## Local Development

```bash
npm install
npm run dev
```

Runs at `http://localhost:5173`. Contact form requires the Vercel CLI for the serverless function:

```bash
vercel dev
```

## Environment Variables

Set in Vercel dashboard (Settings > Environment Variables):

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Resend API key for contact form emails |

For local dev, create a `.env` file:

```
RESEND_API_KEY=re_your_key_here
```

## Project Structure

```
src/
├── styles/variables.css    # Colors and font tokens
├── components/             # Page sections (Header, Hero, Mission, Products, Contact, Footer)
├── App.tsx                 # Layout shell
├── index.css               # Global reset
└── main.tsx                # Entry point
api/
└── contact.ts              # Vercel serverless function (Resend)
```

## Deployment

Pushes to `main` auto-deploy via Vercel.

## Build

```bash
npm run build
```

Output goes to `dist/`.
