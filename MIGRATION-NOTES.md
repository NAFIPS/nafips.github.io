# Migration notes — for review

This file records everything from the content migration that needs a human
decision, plus known discrepancies and dead links. Nothing here was invented —
where information could not be verified, it is flagged rather than guessed.
Once you have reviewed and resolved an item, delete it from this file.

_Generated during the initial rebuild. Source: the old site at
`https://sites.ualberta.ca/~reformat/nafips/` and the 2025/2026 conference sites._

---

## 1. Content that did NOT exist on the old site (authored fresh) — please review

- **Student Center** (`content/students.md`) and **Education Center**
  (`content/education.md`). The old site's navigation linked to
  `studentsNAFIPS.html` and `educationNAFIPS.html`, **but those files were never
  published** — both return 404, and even the Wayback Machine's only capture
  (2024‑09‑20) recorded a 404. There was no content to migrate.
  I wrote both pages fresh using **only verified facts** already present
  elsewhere on the site (student paper awards from the 2024 results; the student
  competition and Young Researcher Representatives from the board list; the
  journals list). **Please read both pages and correct or expand them** — they
  are deliberately general to avoid stating anything unverified.

## 2. Known discrepancies (old site had conflicting / wrong data)

- **IFSA/NAFIPS 2025 dates.** The project brief and the old home page's April‑2024
  announcement said *June 15–18, 2025*. The **official conference site says
  August 16–19, 2025** and explicitly marks it "(NEW DATE)" — the event was
  rescheduled. I used **August 16–19, 2025** everywhere (`data/conferences.yaml`,
  the 2025 news post). *(June 15, 2025 was only the camera‑ready deadline.)*
- **NAFIPS 2005 venue.** The old About page lists *Detroit, June 26–28*; the old
  Events page lists *Ann Arbor, June 22–25*. I used the About page's version and
  flagged it in `data/conferences.yaml` (`<!-- VERIFY -->`). Please confirm.
- **NAFIPS 2012** appeared in one old list mislabelled "NAFIPS 2013" (Berkeley).
  Corrected to 2012.

## 3. Things to fill in / verify (marked `<!-- VERIFY -->` in the data files)

- **NAFIPS 2027** — placeholder only, in `data/conferences.yaml`. Add host,
  city, and dates when known.
- **NAFIPS 2026 details** — location (El Paso, TX) and dates (March 14–16, 2026)
  are confirmed from the official Google Site. **Submission deadlines were NOT on
  that site's home page** (they live on a `/submission` subpage that wasn't
  fetched), and **conference outcomes / awards were not fetched.** Verify and add
  if you want them.
- **Board affiliations.** The old About page listed officers' names, roles,
  terms, and emails, **but not their affiliations.** I filled in affiliations
  only where they were independently confirmed by the 2025 congress committee
  page; the rest are intentionally left blank in `data/board.yaml`.
- **Secretary's email withheld.** The old site's value for Juan Carlos Figueroa
  García's email appeared corrupted (it read `filthed@gmail.com`, which does not
  match the name). I left the email out of `data/board.yaml` rather than publish a
  likely‑wrong address. Please supply the correct one.
- **Officer rotation after NAFIPS 2026.** Per the current officers, the
  presidency has rotated: **Julia Taylor Rayz** is now President, **Nick Ernest**
  (Thales Avionics Group) is President‑Elect, and **Kelly Cohen** is Past
  President. Barnabas Bede (previously Past President) has therefore rolled off
  the Officers list. Julia Rayz's and Nick Ernest's terms are set to **2026–2028**
  (confirmed); **Kelly Cohen's Past‑President term is not yet set** — please add it
  when confirmed.
- **Lotfi A. Zadeh** is listed as *Honorary President* exactly as on the old
  site. (Prof. Zadeh, the founder of fuzzy set theory, passed away in 2017; the
  Society lists him honorarily.) Remove or adjust if you prefer.
- **Full bylaws text.** The old About page's bylaws section was only summarized
  (18 articles, last revised July 2000). The About page now describes it and
  points readers to the Secretary. Paste the full text into `content/about.md`
  under "Bylaws" when you have it.

## 4. External link check (HEAD/GET requests)

Checked automatically. `403`/`000` for a major publisher usually means the site
blocks automated requests, **not** that it is down — those open fine in a normal
browser. Please spot‑check.

| Status | Link | Where | Note |
|--------|------|-------|------|
| ✅ 200/301 | `nafips2024.digipen.edu` | 2024 news + timeline | Live (redirects). |
| ✅ 200 | `2024.ieeewcci.org` | FUZZ‑IEEE 2024 news | Live. |
| ⚠️ 000 | `ipmu2024.inesc-id.pt` | IPMU 2024 news | **Unreachable.** Past conference; site may be offline. Kept the link per your "flag, don't delete" instruction — remove if you prefer. |
| ✅ 200 | `sites.ualberta.ca/~reformat/ifsa-nafips-25/` | 2025 news + timeline | Live. |
| ✅ 200 | `sites.google.com/view/nafips26/home` | 2026 news + timeline | Live. |
| ⚠️ 403 | `sciencedirect.com` (IJAR, Fuzzy Sets & Systems) | Resources | Bot‑blocked; opens in a browser. Correct publisher pages. |
| ⚠️ 403 | `worldscientific.com/worldscinet/ijufks` | Resources | Bot‑blocked; opens in a browser. |
| ✅ 200 | `ieeexplore.ieee.org/...punumber=91` | Resources | IEEE Trans. on Fuzzy Systems. Live. |
| ✅ 200 | `link.springer.com/journal/10700`, `/41066` | Resources | Live. |
| ✅ 200 | `eusflat.org` | Resources | Live (use the bare domain; `www.` fails TLS). |
| ✅ 200 | `cis.ieee.org` | Resources | Live. |
| ✅ 200 | `listserv.gsu.edu/...NAFIPS-L` | Members / Contact | Live. |
| ❌ DNS fail | ~~`ifsahq.com`~~ | (removed) | The IFSA URL I first tried does not resolve. **I removed it** rather than publish a bad link. Please add the correct **International Fuzzy Systems Association** URL to `data/resources.yaml` (there is a TODO comment marking the spot). |

## 5. Old resource links NOT carried over (archived here for your review)

The old Resources page's link list was ~20 years old; most targets are dead or
have moved. Rather than fill the new site with broken links, the live Resources
page now points to the **current** homepages of the major journals and societies.
The **original list is preserved below** so you can decide what (if anything) to
restore. These URLs are **as‑found on the old site and mostly dead** — verify
before reusing.

<details>
<summary>Original research groups (old site)</summary>

- Berkeley Initiative in Soft Computing (BISC) — `http://www-bisc.cs.berkeley.edu/`
- eunite — `http://www.eunite.org/eunite/index.htm`
- Fuzzy Image Processing — `http://pami.uwaterloo.ca/tizhoosh/fip.htm`
- Fuzzy Logic in Integrated Reasoning — `http://ai.iit.nrc.ca/IR_public/fuzzy/`
- Fuzzy Logic Laboratory Linz‑Hagenberg — `http://www.flll.uni-linz.ac.at/`
- Knowledge‑Based Technology (KBT) — `http://www.scch.at/`
- Neural Networks and Fuzzy Systems (Magdeburg) — `http://fuzzy.cs.uni-magdeburg.de/welcome.html`
</details>

<details>
<summary>Original software / tools (old site — all likely defunct)</summary>

- FuzzyCLIPS — `http://ai.iit.nrc.ca/IR_public/fuzzy/fuzzyClips/fuzzyCLIPSIndex.html`
- FuzzyJ ToolKit & FuzzyJess — `http://ai.iit.nrc.ca/IR_public/fuzzy/fuzzyJToolkit.html`
- JFS — `http://inet.uni2.dk/~jemor/jfs.htm`
- FOOL & FOX — `http://rhaug.de/fool/`
</details>

<details>
<summary>Original "web links" (old site)</summary>

- Fuzzy Logic Resources — `http://www.abo.fi/~rfuller/fuzs.html`
- comp.ai.fuzzy — `http://groups.google.com/groups?group=comp.ai.fuzzy`
- Fuzzy‑Mail Archives — `http://www.dbai.tuwien.ac.at/marchives/fuzzy-mail/index.html`
- NAFIPS‑L info — `http://www.Gsu.EDU/~dscbms/ni.html`
</details>

## 6. Editorial decisions made during migration

- **Bugs on the old home page were fixed, not replicated** (per the brief):
  the "Student Center" and "Education Center" cards on the old home page reused
  the Members/Events descriptions and pointed to the wrong pages. The new home
  page links them correctly with accurate one‑line descriptions.
- **The old contact form** (which posted to a non‑existent PHP backend) was
  replaced with a static list of officer emails on the Contact page.
- **Footer copyright** ("Copyright NAFIPS 2016") is now a dynamic current year.
- **The stale April‑2024 "IFSA/NAFIPS 2025" announcement post** (which carried
  the superseded June date) was **not** migrated as a separate post; its content
  is superseded by the definitive 2025 post with the correct August dates.
- **2025 awards.** The brief asked for an awards post *if* award info was listed
  on the 2025 site. **No best‑paper or award results were published anywhere on
  the 2025 conference site**, so no 2025 awards post was created. Add one if/when
  results are released.
