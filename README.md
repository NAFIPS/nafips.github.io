# NAFIPS website

The official website of **NAFIPS — the North American Fuzzy Information
Processing Society** (established 1981), published at
<https://nafips.github.io/>.

It is a static site built with [Hugo](https://gohugo.io/) and deployed
automatically to GitHub Pages by GitHub Actions. There is no database and no
server to maintain — the whole site is generated from Markdown and YAML files in
this repository.

> **Are you a NAFIPS officer wanting to update the site?**
> You do not need to know git or HTML. See **[CONTRIBUTING.md](CONTRIBUTING.md)**
> for step‑by‑step, non‑technical instructions (add a news post, add a
> conference, update the board) using nothing but your web browser.

---

## How it works

| You edit… | …and this updates |
|-----------|-------------------|
| `content/news/*.md` | The News page, the home‑page news, and the RSS feed |
| `data/conferences.yaml` | The conference timeline on the Events page |
| `data/board.yaml` | The board & officers cards on the About page, and Contact |
| `data/resources.yaml` | The Resources page |
| `content/*.md` | The About, Members, Student Center, Education, Contact pages |

Every push to the `main` branch triggers a rebuild and redeploy automatically
(see `.github/workflows/deploy.yml`). A change is usually live within a minute or
two.

## Local development

You only need this if you want to preview changes on your own computer.

1. Install **Hugo (extended edition)** — <https://gohugo.io/installation/>.
   This site is built with the version pinned in the deploy workflow
   (currently `0.164.0`).
2. Clone the repo and start the live‑reloading dev server:

   ```bash
   git clone https://github.com/NAFIPS/nafips.github.io.git
   cd nafips.github.io
   hugo server
   ```

3. Open <http://localhost:1313/>. Edits appear instantly.

To produce the production build locally:

```bash
hugo --minify
```

The output goes to `public/` (which is git‑ignored — never commit it).

## Project layout

```
content/        Page text and news posts (Markdown)
data/           Structured content: conferences, board, resources (YAML)
assets/         CSS, JS, and images that Hugo processes (optimizes) at build
static/         Files served as‑is (logo, favicons)
layouts/        The custom theme (HTML templates) — no third‑party theme
archetypes/     Templates for new content files
.github/        The GitHub Actions deploy workflow
```

## Custom domain

The site is served at `nafips.github.io`. To move it to a custom domain later
(e.g. `nafips.org`), see the "Custom domain" section in
[CONTRIBUTING.md](CONTRIBUTING.md) and the commented instructions at the top of
`hugo.toml`.

## License / credits

Content © North American Fuzzy Information Processing Society. Built with Hugo.
