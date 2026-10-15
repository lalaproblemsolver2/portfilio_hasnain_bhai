# Guide

Everything about this site, in the order you experience it. Start at [Run it](#1-run-it),
then follow the flow from the hero to the footer.

---

## Contents

1. [Run it](#1-run-it)
2. [How the project is put together](#2-how-the-project-is-put-together)
3. [The flow, chapter by chapter](#3-the-flow-chapter-by-chapter)
   - [3.1 Hero](#31-hero)
   - [3.2 Creative section](#32-creative-section)
   - [3.3 Puzzle transition](#33-puzzle-transition)
   - [3.4 About Me](#34-about-me)
   - [3.5 Selected Works (hidden)](#35-selected-works-hidden)
   - [3.6 Big robot](#36-big-robot)
   - [3.7 Code is my medium](#37-code-is-my-medium)
   - [3.8 Small robot](#38-small-robot)
   - [3.9 Footer](#39-footer)
4. [Editing the content](#4-editing-the-content)
5. [Adding a project](#5-adding-a-project)
6. [Tuning the motion](#6-tuning-the-motion)
7. [QA shortcuts](#7-qa-shortcuts)
8. [Publishing](#8-publishing)
9. [Rules worth keeping](#9-rules-worth-keeping)

---

## 1. Run it

No build step, no dependencies, no install.

**Option A — double-click.** Open `index.html` in a browser. Everything works, including
both 3D robots.

**Option B — local server** (closer to production; recommended while editing):

```bash
python -m http.server 4173
```

Then open <http://localhost:4173>.

> After changing CSS or JS, hard-refresh with `Ctrl+Shift+R`. The asset links carry a
> `?v=` number in `index.html` — bump it after a breaking change so returning visitors
> get the new files.

---

## 2. How the project is put together

```
index.html      structure of every chapter
styles.css      all presentation, in numbered sections
script.js       all behaviour, in numbered modules
content.js      ALL text and project data — edit here first
assets/         images and the 3D scene the site loads
references/     the design references this build follows (not shipped)
```

Four rules hold the whole thing together:

| Rule | Why |
| --- | --- |
| Content lives in `content.js` | You can rewrite every word without touching animation code |
| Scroll drives sections, the mouse drives robots | The two never fight each other |
| Animation uses `transform` and `opacity` only | Anything else re-rasterises and drops frames |
| Off-screen work stops | Each 3D scene pauses and each loop parks when idle |

`styles.css` and `script.js` are both numbered, and the numbers line up with the chapters
below, so a section in one file has an obvious counterpart in the other.

---

## 3. The flow, chapter by chapter

```
Hero
  ↓ scroll
Creative section
  ↓ scroll
Puzzle transition
  ↓ scroll
About Me ──── click "What I Do" ────► Selected Works (hidden chapter)
  ↓ scroll                                    │ back
Big robot                          ◄──────────┘
  ↓ scroll
Code is my medium
  ↓ scroll
Small robot
  ↓ scroll
Footer
```

### 3.1 Hero

A timed cinematic entrance — the only chapter that plays on a clock rather than on scroll.
Darkness → red atmosphere → header → the portrait revealed by light → a small glint
crossing each eye → the typography → the notification → a calm interactive state where the
portrait and lighting drift with the cursor.

*Reference:* `references/01-header.jpg`, `references/01-hero-text.jpg`

### 3.2 Creative section

Pinned and scrubbed to scroll. The three lines rise through their own masks, then the
coloured labels pop outward from the centre. Scroll back and it reverses exactly.

*Reference:* `references/02-creative.jpg`

### 3.3 Puzzle transition

The finished composition becomes a framed "window", then breaks into clipped clones of
itself — real pieces of the real section — that pull apart while About Me rises behind
them.

*Reference:* `references/03-puzzle-transition.jpg`

### 3.4 About Me

Three doors: **Who I Am**, **What I Do**, **How I Think**. Who and How open into a themed
detail layer that grows out of the box you clicked. **What I Do is different** — it is the
entrance to Selected Works.

*Reference:* `references/03-about.jpg`

### 3.5 Selected Works (hidden)

Not part of the scroll flow. Scrolling can never reveal it; it is `display: none` until
opened. Clicking **What I Do** (or **Projects** in the nav) black-flashes into a full-screen
chapter where an internal scroll dollies a 3D camera through the projects. The red ✕, the
outro button, or `Esc` flashes you back to About.

*Reference:* `references/04-selected-works.jpeg`

### 3.6 Big robot

The large robot on black, at its own scale and lighting. **Its head follows your mouse** —
left, centre, right — with damping. Scroll, meanwhile, flies two glass idea panels out of
the depth and past the camera. Mouse and scroll stay independent.

### 3.7 Code is my medium

Pinned and scrubbed. The statement enters **from the left**, revealed by movement behind
masks. Then the skills arrive **from the right, one at a time**, the list drifting so the
newest item holds focus while earlier ones recede. A calm tail follows: mindset, currently
exploring, and the closing lines.

### 3.8 Small robot

A deliberately minimal chapter. The little robot **follows your mouse** too, with a gentler
range, opposite a short block of copy.

### 3.9 Footer

Arrives after a beat of dark space. The statement rises through its masks, then the contact
address, the link columns and the base row. **Back to top** returns to the hero.

---

## 4. Editing the content

Open `content.js`. Every chapter has its own object:

| Key | Chapter |
| --- | --- |
| `nav`, `cta`, `headline`, `role`, `meta`, `notification` | Hero |
| `section2` | Creative section |
| `about` | About Me doors and detail layers |
| `works` | Selected Works projects |
| `bigRobot` | Big robot copy + the two idea panels |
| `editorial` | "Code is my medium" + skills, mindset, exploring, ending |
| `smallRobot` | Small robot copy |
| `footer` | Contact, link columns, legal line |

Change the strings, save, refresh. No other file needs touching.

Two footer fields deserve a decision:

- `email` — your public contact address. Delete the field and the whole mail block
  disappears.
- `social` — empty on purpose. Add `{ label: "GitHub", href: "https://…" }` entries and an
  "Elsewhere" column appears automatically.

---

## 5. Adding a project

1. Put the image in `assets/`.
2. Add an entry to `works.projects` in `content.js`:

```js
{
  key: "myproject",
  name: "MyProject",
  img: "assets/myproject.jpg",
  w: 1200, h: 800,              // real pixel size — prevents layout shift
  cat: "SaaS · Web",
  year: "2026",
  accent: "#4da3ff",            // colours the number, dot and button
  title: "One line about what it is"
}
```

That is all. The Selected Works chapter builds its stage from this array, and the scroll
length adjusts itself.

To add an idea panel to the big robot, add an entry to `bigRobot.techIdeas` the same way.

---

## 6. Tuning the motion

| What | Where |
| --- | --- |
| Hero timings | `--t-*` / `--d-*` tokens at the top of `styles.css` |
| Eye glint position | `--eye-x` / `--eye-y` (and `--eye2-*`) |
| Creative section timeline | `LINE_RANGES`, `META_RANGE`, `LABEL_*` in `script.js` |
| Puzzle pieces | `TILES_DESKTOP` / `TILES_MOBILE` |
| Works camera | `applyWk` in `script.js` |
| Big robot look + panels | the `RB` object |
| Small robot look | the `SR` object |
| Skills choreography | the `ED` object |
| Scroll length of any pinned chapter | that section's `height` in `styles.css` |

All damping uses a time constant, so motion feels the same at 30, 60 or 120 fps.

---

## 7. QA shortcuts

Add these to the URL to jump straight to a moment:

| URL | Shows |
| --- | --- |
| `?at=3280` | the hero's eye glint, frozen |
| `?at=8000` | the hero settled |
| `?s2p=1` | the creative section completed |
| `?s3t=0.35` | mid puzzle break-up |
| `?s3t=1` | About Me locked in |
| `?wk=1` | Selected Works, opened directly |

`window.__rbBig` and `window.__rbSmall` expose each robot's scene in the console.

---

## 8. Publishing

The site is static, so anything that serves files will host it.

**GitHub Pages:** repository → **Settings → Pages** → Source: *Deploy from a branch* →
branch `main`, folder `/ (root)` → **Save**. The site appears at
`https://<user>.github.io/<repo>/` after a minute.

**Netlify / Vercel / Cloudflare Pages:** connect the repository. No build command, no
output directory — publish the root.

Before publishing, check `references/` — those are design references, not part of the site.
Delete the folder if you would rather not ship them.

---

## 9. Rules worth keeping

- **Never animate `filter` or `backdrop-filter` per frame.** Glass panels re-rasterise and
  the frame rate collapses. Fade with `opacity`, move with `transform`.
- **Selected Works must stay hidden.** It is a chapter you enter deliberately, never
  something scrolling reveals.
- **The robots answer to the mouse, sections answer to scroll.** Keeping them apart is what
  makes the site feel calm.
- **Declare image dimensions.** Every `<img>` carries `width`/`height` so nothing jumps as
  the page loads.
- **Respect reduced motion.** Every chapter has a static, readable version; test it before
  shipping a change.
