# How to update the NAFIPS website

This guide is for **NAFIPS officers and volunteers**. You do **not** need to know
how to code, and you do **not** need to install anything. Everything here can be
done from your web browser on github.com.

The website is built automatically from a few simple text files. When you edit
one of those files and save ("commit") it, the website **rebuilds itself** and
your change is live in a minute or two. You cannot break the site by editing
content — if something is wrong, the old version stays up.

> **The golden rule:** you only ever edit files inside the **`content/`** and
> **`data/`** folders. You never touch anything else.

---

## First, some vocabulary (30 seconds)

- **Repository ("repo")** — the folder of files that make up the site, stored on
  GitHub at `github.com/NAFIPS/nafips.github.io`.
- **Commit** — saving a change. GitHub asks you to describe it in one line.
- **Markdown** — a simple way to write formatted text. `**bold**`, `## Heading`,
  `[link text](https://example.com)`. That's most of it.
- **YAML** — a simple `key: value` format used for lists (conferences, board
  members). Just copy an existing entry and change the values. **Keep the
  indentation (the leading spaces) exactly as shown.**

---

## The web‑browser workflow (used for everything below)

Every task follows the same five steps:

1. Go to <https://github.com/NAFIPS/nafips.github.io>. Sign in.
2. Click your way into the file you want to change (or the folder where a new
   file goes).
3. Click the **pencil ✏️ icon** (edit) — or **"Add file → Create new file"** for
   a new post.
4. Make your change, then scroll down to **"Commit changes"**. Type a short
   description (e.g. *"Add NAFIPS 2027 conference"*) and click the green
   **Commit changes** button.
5. Wait ~1–2 minutes. Check the **Actions** tab (top of the repo) — a green ✓
   means your change is live at <https://nafips.github.io/>.

That's it. The sections below just tell you *which* file to edit.

---

## Task 1 — Add a news post

News posts appear on the home page (newest 5) and on the News page.

1. In the repo, open the **`content/news/`** folder.
2. Click **"Add file → Create new file"**.
3. Name the file with the date and a short slug ending in `.md`, for example:
   **`2027-05-20-nafips-2027-registration-open.md`**
4. Paste this template and fill it in:

   ```markdown
   ---
   title: "Registration open for NAFIPS 2027"
   date: 2027-05-20
   description: "A one-line summary shown in previews and search."
   # image: "my-banner.png"   # optional — see note below
   # link: "https://conference-website.example/"   # optional "read more" button
   ---

   Write the announcement here. The first paragraph becomes the preview text.

   You can use **bold**, *italics*, [links](https://example.com), and
   - bullet
   - lists
   ```

5. Delete the two `#` lines if you don't need an image or a link.
6. Commit (step 5 of the workflow above).

**Adding an image to a post (optional):** first upload the image into the
**`assets/images/news/`** folder (**Add file → Upload files**), then put its
filename in the `image:` line, e.g. `image: "nafips-2027.png"`. Hugo resizes and
optimizes it automatically.

---

## Task 2 — Add or update a conference

The Events‑page timeline is generated from **`data/conferences.yaml`**.

1. Open **`data/conferences.yaml`** and click the pencil ✏️.
2. Conferences are listed **newest first**. To add next year's, copy the top
   entry and change the values. Example:

   ```yaml
     - year: 2028
       name: NAFIPS 2028
       location: "City, State/Country"
       dates: "June 1–3, 2028"
       start: 2028-06-01        # ISO date — used to auto-mark it "upcoming"
       url: "https://nafips2028.example/"   # optional; delete the line if none
   ```

3. Keep the leading spaces (the `-` should line up with the entries above it).
4. Commit. The timeline updates itself, and future‑dated conferences
   automatically get an **"Upcoming"** badge.

To fix a detail on an existing conference, just edit that entry's values.

---

## Task 3 — Update the board / officers

The About‑page cards and the Contact page come from **`data/board.yaml`**.

1. Open **`data/board.yaml`**, click the pencil ✏️.
2. Find the right group (`Officers`, `Board of Directors`, etc.) and edit a
   person, or copy an entry to add one:

   ```yaml
         - name: Jane Researcher
           role: Treasurer
           term: "2026–2028"
           affiliation: Some University   # optional
           email: jane@example.edu        # optional
   ```

3. To remove someone, delete their whole entry (the `- name:` line and the
   indented lines under it).
4. Commit. Only people with an `email:` appear on the Contact page.

---

## Task 4 — Update Resources, or a page's text

- **Resources links:** edit **`data/resources.yaml`** — same copy‑an‑entry idea,
  grouped by category.
- **Page text** (About, Members, Student Center, Education, Contact): edit the
  matching file in **`content/`** — `about.md`, `members.md`, `students.md`,
  `education.md`, `contact.md`. These are plain Markdown; the text at the top
  between the `---` lines is settings (title, etc.) — leave the keys alone,
  change only the values.

---

## How the deploy pipeline works (for the curious)

You don't need to understand this to use the site, but here's what happens:

1. You commit a change to the `main` branch on GitHub.
2. A **GitHub Action** (defined in `.github/workflows/deploy.yml`) automatically
   starts. It installs Hugo, runs `hugo --minify` to build the site, and
   publishes the result to **GitHub Pages**.
3. Within a minute or two, <https://nafips.github.io/> shows your change.

You can watch this happen live in the **Actions** tab of the repo. A green ✓
means success; a red ✗ means the build failed (usually a typo in YAML
indentation) — click it to see the error, then fix the file. **A failed build
does not take the live site down** — the previous version stays up.

---

## Custom domain (e.g. nafips.org)

If NAFIPS acquires a domain later:

1. Create a file named **`CNAME`** inside the **`static/`** folder containing a
   single line with the domain, e.g. `www.nafips.org`.
2. In `hugo.toml`, change `baseURL` to `https://www.nafips.org/`
   (instructions are in a comment there).
3. In the repo's **Settings → Pages**, set the custom domain and enable
   "Enforce HTTPS". Point the domain's DNS at GitHub Pages per
   [GitHub's guide](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).

---

## Getting help

If you get stuck, open an **Issue** on the repository describing what you were
trying to do, or contact the current site maintainer. Because every change is a
commit, anything can be undone — don't be afraid to experiment.
