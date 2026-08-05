# Temitope Olaniran — Portfolio Website

A multi-page static portfolio for **Temitope Olaniran**, IT Support Specialist / System Administrator and DevOps Cloud Engineering enthusiast.

Built with plain HTML, CSS, and JavaScript — no frameworks, no build step.

## Pages

- `index.html` — Home / hero with animated stats
- `about.html` — Professional summary and core competencies
- `experience.html` — Work history, education, and certifications
- `projects.html` — Projects (IT ops, automation, cloud)
- `contact.html` — Contact details + message form (opens the visitor's email app)

## Running locally

Serve the folder from a static server:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Then open `http://localhost:8000`.

## Deploying to GitHub Pages

1. Create a repo named `yourusername.github.io` (or any name and enable Pages).
2. Push this folder to the repo:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

3. In GitHub: **Settings → Pages**, set **Source** to `Deploy from a branch` → `main` / `/ (root)`.
4. Your site is live at `https://yourusername.github.io`.

> Tip: Since this uses root-relative CSS/JS paths, it works at both the domain root and in a `/<repo>/` subpath.

## Customizing

- Replace the **LinkedIn link** in `contact.html` with your real profile URL.
- Update project details in `projects.html` as you build new things.
- Update the stats in `index.html` (`data-target` values) to reflect real numbers.
