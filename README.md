# Gas Control

A clean, responsive workshop gas inventory and usage dashboard, designed to replace the `Gas_Control.xlsx` workflow. It provides stock summaries, alerts, searchable movements, CSV export, and a quick-entry form.

## Run locally

```bash
npm install
cp .env.example .env
npm run dev
```

Without environment variables, the app uses realistic demo records. To connect Supabase, run `supabase/schema.sql` in the Supabase SQL editor and provide `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.

## Deploy to Vercel

Import the repository into Vercel, use the Vite preset, and add the two environment variables above. The production build command is `npm run build` and the output directory is `dist`.
