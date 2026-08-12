<div align="center">

# 🛡️ Zaber Mahmud Asif — Security Portfolio

**Cybersecurity Researcher · Penetration Tester · Bug Bounty Hunter**

A single-page, fully responsive portfolio built with **zero frameworks** — plain HTML, CSS and JavaScript, no build step required.

[![Live Demo](https://img.shields.io/badge/demo-live-2dd4bf?style=for-the-badge&logo=googlechrome&logoColor=white)](#)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](#-license)
[![Made with HTML CSS JS](https://img.shields.io/badge/made%20with-HTML%20%7C%20CSS%20%7C%20JS-1f2937?style=for-the-badge)](#-tech-stack)

[![GitHub](https://img.shields.io/badge/GitHub-T1M3--30M3-181717?style=flat-square&logo=github)](https://github.com/T1M3-30M3)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-zaber--mahmud--asif-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/zaber-mahmud-asif)
[![Email](https://img.shields.io/badge/Email-contact-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:zabermahmudasif01@gmail.com)

</div>

---

## 📖 About

This repository hosts the personal portfolio site of **Zaber Mahmud Asif**, a cybersecurity researcher and penetration tester based in Dhaka, Bangladesh. It showcases skills, certifications, CTF achievements, workshops, and contact information in a terminal-themed, dark-mode design.

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Sections](#-sections)
- [Getting Started](#-getting-started)
- [Customizing](#-customizing)
- [Deploying to GitHub Pages](#-deploying-to-github-pages)
- [Notes](#-notes)
- [License](#-license)

## ✨ Features

- 🖥️ Terminal-style hero section with typing animation
- 📱 Fully responsive layout with mobile hamburger navigation
- 🎓 Interactive certificate gallery with modal viewer
- 🏆 CTF & workshop achievement showcase
- 🌓 Dark theme with CSS custom-property theming
- ♿ Respects `prefers-reduced-motion` for accessibility
- 🚀 No frameworks, no build step, no backend — deploy anywhere as static files

## 🧰 Tech Stack

| Category | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, no preprocessor) |
| Scripting | Vanilla JavaScript (ES6+) |
| Icons | Font Awesome 6 |
| Fonts | Google Fonts — `Inter`, `JetBrains Mono` |
| Hosting | GitHub Pages (or any static host) |

## 📂 Project Structure

```
.
├── index.html
├── terminal.html
├── css/
│   ├── style.css
│   └── terminal.css
├── js/
│   ├── script.js
│   └── terminal.js
└── assets/
    ├── certs/          # certification images (+ ctf/ subfolder)
    └── workshop/        # workshop & event images/graphics
```

## 🧭 Sections

`Home` · `About` · `Skills` · `Experience` · `Certificate` · `Project` · `Achievement` · `Workshop` · `Contact`

All sections live in `index.html` and are navigable from the sticky top nav (with a mobile hamburger menu).

## 🚀 Getting Started

No build tools required — just clone and open.

```bash
# Clone the repository
git clone https://github.com/T1M3-30M3/portfolio.git
cd portfolio

# Open directly in a browser
open index.html        # macOS
# or
start index.html       # Windows
# or
xdg-open index.html    # Linux
```

Optionally serve it locally for a closer-to-production experience:

```bash
# Python 3
python3 -m http.server 8000

# then visit http://localhost:8000
```

## 🛠️ Customizing

| What | Where |
|---|---|
| **Photo / avatar** | Replace the avatar asset and update the `src` in the *About* section of `index.html` |
| **Certificates** | Replace files in `assets/certs/` (same filenames, or update the `certificates` array near the top of `js/script.js`) |
| **CV / Resume link** | Search `index.html` for `your-cv-link` and replace both placeholder links |
| **Social icons** | Update `href` values in `class="social-icons"` inside the *Contact* section |
| **Copy & data** | All text (experience, skills, achievements, contact) lives directly in `index.html` |
| **Colors & type** | Controlled by CSS custom properties in `:root { ... }` at the top of `css/style.css` |
| **Contact form** | Submits via `mailto:` — fully static, no backend or third-party service needed |

## 🌐 Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `your-username.github.io` for a root-level personal site, or any repo name for a project site).
2. Push these files to the repository root (or a `docs/` folder, or a `gh-pages` branch).
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Pick the branch (e.g. `main`) and folder (`/root` or `/docs`), then **Save**.
6. Your site goes live at:
   - `https://your-username.github.io/` — if the repo is named `your-username.github.io`
   - `https://your-username.github.io/repo-name/` — otherwise

## 📝 Notes

- Fully static site — no inline `<script>` execution of remote content, no `eval`, no server-side code.
- Respects `prefers-reduced-motion` for the terminal typing effect and scroll reveals.
- Fonts load from Google Fonts (`Inter`, `JetBrains Mono`); remove the `<link>` tags in `index.html` to self-host for a fully offline build.

## 📬 Contact

<div align="left">

[![Email](https://img.shields.io/badge/-zabermahmudasif01%40gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:zabermahmudasif01@gmail.com)
[![LinkedIn](https://img.shields.io/badge/-zaber--mahmud--asif-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/zaber-mahmud-asif)
[![GitHub](https://img.shields.io/badge/-T1M3--30M3-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/T1M3-30M3)
[![Facebook](https://img.shields.io/badge/-Z4b3r.M4hMu3.As1F-1877F2?style=flat-square&logo=facebook&logoColor=white)](https://www.facebook.com/Z4b3r.M4hMu3.As1F)

</div>

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to fork and adapt it for your own portfolio.

---

<div align="center">

Made with 🖤 by **Zaber Mahmud Asif**

</div>
