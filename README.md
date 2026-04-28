This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Sanity CMS

The Sanity Studio is embedded in this app at:

```bash
http://localhost:3000/studio
```

Create a `.env.local` file from `.env.example`, then fill in:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-04-28
SANITY_API_WRITE_TOKEN=your_write_token_for_seed_script
```

Steps:

1. Create a Sanity project from `https://www.sanity.io/manage`.
2. Create or use the `production` dataset.
3. Copy the Project ID into `.env.local`.
4. In Project Settings > API > Tokens, create a token with Editor permission and copy it into `SANITY_API_WRITE_TOKEN`.
5. In Project Settings > API > CORS Origins, add `http://localhost:3000` and allow credentials.
6. Restart the dev server.
7. Seed the CMS content:

```bash
npm run sanity:seed
```

Then open the embedded Studio:

```bash
http://localhost:3000/studio
```

Without these environment variables, the portfolio keeps using the local fallback data in `src/lib/portfolio-data.ts`.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
