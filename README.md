# Khalil Etana — SEO implementation package

Prepared against the public repository structure inspected on 5 Nov 2026:
`khaliletanamoh/khaliletana_portfolio-` (Next.js 15 App Router).

## Included

1. **Search-friendly metadata** — descriptive title, concise description, canonical URL, robots directives.
2. **Structured data** — Person and WebSite JSON-LD in the root layout.
3. **Sitemap** — `app/sitemap.ts`, including the homepage and project detail pages.
4. **Robots rules** — `app/robots.ts`, allowing crawling and pointing to the sitemap.
5. **Individual project pages** — `/projects/khalil-engineering-calculator` and `/projects/personal-portfolio`, with page-specific metadata.
6. **Social sharing preview** — Open Graph and X/Twitter metadata plus `public/og-image.png`.
7. **Search Console and launch verification** — checklist below.

## Install

Copy the included files into the matching locations in your project:

- Replace `app/layout.tsx`.
- Add `app/robots.ts`.
- Add `app/sitemap.ts`.
- Add `app/projects/[slug]/page.tsx`.
- Add `public/og-image.png`.
- Add `url: "https://khaliletanamoh.com"` near the top of `data/site.ts`.
- In `app/page.tsx`, change the project-card anchor destination to the internal project route. The exact replacement is in `existing-file-changes.patch`.

The project page slugs are generated from project titles, so the current project titles produce:
- `/projects/khalil-engineering-calculator`
- `/projects/personal-portfolio`

## Important checks before deployment

- Confirm `https://khaliletanamoh.com` is the preferred canonical host. Configure the other host (`www` or apex) to permanently redirect to it in your domain/Vercel settings.
- Keep the `site.url` value consistent with that preferred host.
- The existing project data points both project links to the same Vercel URL. These new pages create separate portfolio detail pages, but they do not invent separate live demo URLs. Add a real, project-specific demo or source-code link to each project if available.
- The structured data currently describes Wollega University as an educational organization based on the existing public bio. Verify that this wording is accurate before publishing.
- The social preview image is a generated starter graphic. Replace it with a professional portrait/brand image if you prefer.

## Google Search Console

1. Open https://search.google.com/search-console/
2. Add `https://khaliletanamoh.com/` as a URL-prefix property (or use a Domain property if you can add the required DNS TXT record).
3. Complete ownership verification. If using the HTML-tag method, add Google's exact verification token to `metadata.verification.google` in `app/layout.tsx`; do not guess the token.
4. Submit `https://khaliletanamoh.com/sitemap.xml`.
5. Use URL Inspection on the homepage and each project URL, then request indexing.
6. Review Page indexing and Core Web Vitals after Google has collected enough data.

## Local verification

Run:

```bash
npm install
npm run build
npm run dev
```

Then check:
- `/robots.txt`
- `/sitemap.xml`
- `/projects/khalil-engineering-calculator`
- `/projects/personal-portfolio`
- View page source and confirm the canonical URL, Open Graph tags, Twitter card, and JSON-LD are present.

This package does not deploy changes or connect to Google Search Console. Review the files, adjust any details, then commit and deploy through your normal Vercel workflow.
