# Gireesh — Cinematic Portfolio

A scroll-driven personal portfolio for a Computer Science student: a cinematic hero, a
pinned typography chapter that breaks apart like a puzzle, an interactive About Me, a
hidden Selected Works experience, two mouse-tracking 3D robots, and an editorial closing.

Built with plain HTML, CSS and JavaScript — **no framework, no build step, no dependencies.**

**→ [Read the step-by-step guide](GUIDE.md)**

---

## Run it

Double-click `index.html`, or serve the folder:

```bash
python -m http.server 4173
```

Then open <http://localhost:4173>.

---

## The flow

| # | Chapter | Driven by |
| --- | --- | --- |
| 01 | **Hero** — darkness → red atmosphere → portrait revealed by light → eye glint → typography → notification | a timed entrance, then cursor parallax |
| 02 | **Where Code Meets Creative Thinking** — typography rises through masks, labels pop from the centre | scroll (pinned, scrubbed) |
| — | **Puzzle transition** — the composition breaks into real clipped pieces of itself | scroll |
| 03 | **About Me** — three doors: Who I Am · What I Do · How I Think | click |
| 04 | **Selected Works** — a hidden chapter behind a black flash, with a 3D camera journey | click, then scroll |
| 05 | **Big robot** — the large robot on black, head tracking the cursor, glass idea panels flying past | mouse + scroll |
| 06 | **Code is my medium** — the statement enters from the left, the skills from the right, one at a time | scroll (pinned, scrubbed) |
| 07 | **Small robot** — a minimal chapter, head following the cursor | mouse |
| 08 | **Footer** — contact, links, back to top | scroll |

Every scroll animation is scrubbed: stop and it stops, scroll back and it reverses.

---

## Project structure

```
index.html        every chapter's structure
styles.css        all presentation, in numbered sections
script.js         all behaviour, in numbered modules
content.js        ALL text and project data — edit here first
assets/           images + the 3D scene the site loads
references/       the design references this build follows (not shipped)
GUIDE.md          the full step-by-step guide
```

---

## Editing

All copy lives in `content.js`, one object per chapter (`nav`, `section2`, `about`,
`works`, `bigRobot`, `editorial`, `smallRobot`, `footer`). Change the strings, save,
refresh — no animation code is involved.

Adding a project is one entry in `works.projects` plus an image in `assets/`. See
[GUIDE.md § 5](GUIDE.md#5-adding-a-project).

---

## Behaviour

- **Responsive** — every chapter is recomposed for tablet and phone, not merely scaled down.
- **Reduced motion** — `prefers-reduced-motion` gives a calm, static, fully readable version.
- **Touch** — cursor-only interactions fall back to tap and drag.
- **No JS** — the composed hero still renders.
- **Performance** — transform/opacity animation, lazy-loaded 3D that pauses off-screen,
  declared image dimensions so nothing shifts as the page loads.

---

## Credits

3D robots built in [Spline](https://spline.design). Type: Anton, Archivo and Inter via
Google Fonts. Everything else is hand-written for this site.
