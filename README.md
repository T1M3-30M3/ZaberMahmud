# Zaber Mahmud Asif — Security Portfolio

A single-page, responsive portfolio site for a cybersecurity researcher / penetration tester, built with plain HTML, CSS and JavaScript (no frameworks, no build step).

## Structure

```
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    ├── avatar.svg
    └── certs/
        ├── cap.svg
        ├── cnsp.svg
        ├── c3sa.svg
        ├── acp.svg
        ├── casa.svg
        ├── secpluscysa.svg
        ├── google-cyber.svg
        └── tcm-peh.svg
```

## Sections

Home · About · Skills · Experience · Certificate · Project · Achievement · Workshop · Contact — all in `index.html`, navigable from the sticky top nav (with a mobile hamburger menu).

## Customizing

- **Photo / avatar** — replace `assets/avatar.svg` with your own photo (`.jpg`/`.png`/`.webp`), and update the `src` in the "About" section of `index.html`.
- **Certificates** — replace the files in `assets/certs/` with scans or exports of your real certificates (same filenames, or update the `img` paths in the `certificates` array near the top of `js/script.js`). Click/hover behavior and the 60–70vw / 60–70vh modal viewer are already wired up.
- **CV / Resume link** — there are two placeholder links pointing to `https://drive.google.com/your-cv-link`: one in the hero "Download CV" button, one in the Contact section. Replace both with your real hosted CV link (Google Drive "Anyone with the link can view" share link, Dropbox, etc.) — search `index.html` for `your-cv-link`.
- **Social icons** — in the Contact section (`class="social-icons"`), the GitHub, Facebook and X/Twitter icons use placeholder `href="#"`. Replace with your real profile URLs; LinkedIn and Email are already filled in.
- **Copy & data** — all text (experience, skills, achievements, contact details) lives directly in `index.html`; edit it there.
- **Colors & type** — everything is controlled by CSS custom properties at the top of `css/style.css` (`:root { ... }`).
- **Contact form** — submits via a `mailto:` link (opens the visitor's email client) so the site can be hosted as fully static with no backend or third-party form service required.

## Hosting on GitHub Pages

1. Create a new GitHub repository (e.g. `your-username.github.io` for a root-level personal site, or any repo name for a project site).
2. Push these files to the repository root (or to a `docs/` folder, or a `gh-pages` branch — your choice).
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Pick the branch (e.g. `main`) and folder (`/root` or `/docs`), then **Save**.
6. Wait a minute for the build, then your site will be live at:
   - `https://your-username.github.io/` (if the repo is named `your-username.github.io`), or
   - `https://your-username.github.io/repo-name/` otherwise.

## Notes

- No inline `<script>` execution of remote/untrusted content, no `eval`, no server-side code — the site is fully static and safe to host as-is.
- Respects `prefers-reduced-motion` for the terminal typing effect and scroll reveals.
- Fonts are loaded from Google Fonts (`Inter` and `JetBrains Mono`); remove the `<link>` tags in `index.html` and self-host the fonts if you need a fully offline / no-external-request build.
