# ajthilakan-blog

Source for my personal blog — **[ajthilakan.com](https://ajthilakan.com)** — reflections on
technology, product management & strategy.

This repo is public on purpose. I'm trying to **build (and write) more in the open**, and it
doubles as a sandbox for learning an agentic publishing workflow: posts are drafted on a branch,
opened as a pull request, reviewed, and deployed automatically on merge.

## Built with

- **[Astro](https://astro.build)** with the **[AstroPaper](https://github.com/satnaing/astro-paper)**
  theme — content is plain markdown in git, so every change is a reviewable diff.
- **[Cloudflare Pages](https://pages.cloudflare.com)** — static hosting that builds and deploys on push.

## Running locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```

Posts live in `src/content/posts/` as markdown with frontmatter. Drafts (`draft: true`) are hidden
from the published site. The `about` page lives in `src/content/pages/`.

## Workflow

Drafts are written on the `drafts` branch → opened as a PR → merged into `main` → Cloudflare Pages
deploys. `main` is the live site.

---

Theme: [AstroPaper](https://github.com/satnaing/astro-paper) by Sat Naing, used under the MIT license.
Blog content © Ajith Thilakan.
