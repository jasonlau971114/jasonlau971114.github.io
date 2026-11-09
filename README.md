# Senior Software Engineer Portfolio — GitHub Pages

A responsive dark-theme portfolio written in plain HTML, CSS, and JavaScript. No framework, npm install, or build step required.

## Files

- `index.html` — main website structure and sections
- `style.css` — layout, responsive styles, colors, animation preferences
- `script.js` — **edit this first**: name, profile, skills, project cards, experience, links
- `resume.html` — editable printable resume template, linked from the homepage
- `favicon.svg` — simple site icon

## Preview locally

Double-click `index.html` to open in a browser, or use the VS Code Live Server extension. For a local web server using Python:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Customize before publishing

1. Open `script.js` and edit the `portfolio` object near the top. **All names, claims, job history, metrics, and projects are fictional placeholders.** Only list skills and work you really have.
2. Replace the site title/description and initial HTML placeholders in `index.html` if you want meaningful content before JavaScript loads.
3. Edit `resume.html` with your actual work history and contact information. Open it in a browser and use **Print / Save as PDF** to export a PDF if needed. The homepage's resume buttons intentionally link to this working resume page.
4. Optionally change colors in `style.css` under `:root` and edit `favicon.svg`.
5. Replace `you@example.com`, `yourusername`, the example company names, and project descriptions. Project cards have optional `demo` URLs and `github` URLs.
6. Do not publish private phone numbers or other sensitive information that you don't want publicly accessible.

## Publish with GitHub Pages

1. Sign into GitHub and create a **public** repository named `YOUR_GITHUB_USERNAME.github.io`.
2. Upload all five files **at the repository root**, including `index.html`, and commit them to the `main` branch.
3. Open **Settings → Pages → Build and deployment**.
4. Select **Deploy from a branch**, then branch `main`, folder `/(root)`, and save.
5. Open `https://YOUR_GITHUB_USERNAME.github.io/` after GitHub completes publishing. Updates are deployed automatically after new commits.

Alternatively, use a normal repository (for example `portfolio`) and the site will usually be at `https://YOUR_GITHUB_USERNAME.github.io/portfolio/`. All asset paths in this project are relative and work for both options.

## Key features

- Accessible mobile navigation with keyboard support
- Responsive layouts for phones and desktops
- Project filtering (All / Backend / Full stack / AI)
- JavaScript data configuration without touching the HTML for most edits
- Copy-email button (uses clipboard API in secure contexts with a manual-copy fallback)
- Email contact (`mailto:`), GitHub and LinkedIn links
- Resume page with print-to-PDF support
- No third-party fonts, trackers, frameworks, or external assets
- Reduced-motion preference support

## Notes

Project placeholders intentionally link to a sample GitHub profile until you replace them. External hyperlinks won't show your real code until you supply your real project URLs. The resume page is a **template**; do not represent the example career history as your own.
