document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

const navDropdown = document.querySelector('.nav-dropdown');
const navDropdownToggle = document.querySelector('.nav-dropdown-toggle');

navDropdownToggle.addEventListener('click', (e) => {
  if (window.matchMedia('(max-width: 760px)').matches) {
    e.preventDefault();
    navDropdown.classList.toggle('open');
  }
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', (e) => {
    if (link === navDropdownToggle && window.matchMedia('(max-width: 760px)').matches) return;
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navDropdown.classList.remove('open');
  });
});

const sections = document.querySelectorAll('main section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach((a) => {
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
);

sections.forEach((s) => spy.observe(s));

const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => revealObserver.observe(el));

const roles = [
  'Cybersecurity Researcher',
  'Penetration Tester',
  'Bug Bounty Hunter',
  'CTF Player',
  'Blue Teamer',
  'Aspiring AI/ML Learner',
  'SOC Learner',
];

const rotatorEl = document.getElementById('rotatorText');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function runRoleRotator() {
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = roles[roleIndex];

    if (!deleting) {
      charIndex += 1;
      rotatorEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
      setTimeout(tick, 55);
      return;
    }

    charIndex -= 1;
    rotatorEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(tick, 300);
      return;
    }
    setTimeout(tick, 30);
  }

  tick();
}

if (rotatorEl) {
  if (reduceMotion) {
    rotatorEl.textContent = roles.join(' · ');
  } else {
    runRoleRotator();
  }
}

const terminalLines = [
  { key: 'target', value: 'zaber_mahmud_asif' },
  { key: 'role', value: 'security_researcher / pentester' },
  { key: 'base', value: 'Dhaka, Bangladesh' },
  { key: 'experience', value: '3+ years' },
  { key: 'specialization', value: 'web/api pentest · VAPT · DFIR · blue team' },
  { key: 'certs', value: '8 active certifications' },
  { key: 'status', value: 'OPEN_TO_WORK', ok: true },
];

const terminalBody = document.getElementById('typedTerminal');

function buildLineHTML(item) {
  const valueClass = item.ok ? 'val ok' : 'val';
  return `<span class="key">${item.key}:</span> <span class="${valueClass}">${item.value}</span>`;
}

async function typeTerminal() {
  const promptLine = document.createElement('div');
  promptLine.className = 'ln';
  promptLine.innerHTML = '<span class="prompt">$</span> ./recon.sh --target zaber';
  terminalBody.appendChild(promptLine);
  await wait(500);

  for (const item of terminalLines) {
    const line = document.createElement('div');
    line.className = 'ln';
    terminalBody.appendChild(line);
    const full = buildLineHTML(item);
    await typeHTMLInto(line, full);
    await wait(180);
  }

  const donePrompt = document.createElement('div');
  donePrompt.className = 'ln';
  donePrompt.innerHTML = '<span class="prompt">$</span> <span class="type-cursor"></span>';
  terminalBody.appendChild(donePrompt);
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function typeHTMLInto(el, html) {
  return new Promise((resolve) => {
    const container = document.createElement('div');
    container.innerHTML = html;
    const fullText = container.textContent;
    let i = 0;
    const speed = 14;
    const interval = setInterval(() => {
      i += 2;
      if (i >= fullText.length) {
        el.innerHTML = html;
        clearInterval(interval);
        resolve();
        return;
      }
      el.textContent = fullText.slice(0, i);
    }, speed);
  });
}

if (reduceMotion) {
  terminalLines.forEach((item) => {
    const line = document.createElement('div');
    line.className = 'ln';
    line.innerHTML = buildLineHTML(item);
    terminalBody.appendChild(line);
  });
} else {
  typeTerminal();
}

const certificates = [
  { id: 'cap', code: 'CAP', title: 'Certified AppSec Practitioner', issuer: 'Practical DevSecOps', img: 'assets/certs/CAP.jpg' },
  { id: 'cnsp', code: 'CNSP', title: 'Certified Network Security Practitioner', issuer: 'The SecOps Group', img: 'assets/certs/CNSP.jpg' },
  { id: 'c3sa', code: 'C3SA', title: 'Cyber Security Analyst', issuer: 'Cyberwarfare Labs', img: 'assets/certs/C3SA.jpg' },
  { id: 'acp', code: 'ACP', title: 'APIsec Certified Practitioner', issuer: 'APIsec University', img: 'assets/certs/ACP.jpg' },
  { id: 'casa', code: 'CASA', title: 'Certified API Security Analyst', issuer: 'The SecOps Group', img: 'assets/certs/CASA.jpg' },
  { id: 'secpluscysa', code: 'SEC+/CYSA+', title: 'Security+ & CySA+ Assessment', issuer: 'CompTIA', img: 'assets/certs/Coursera.jpg' },
  { id: 'google-cyber', code: 'GCC', title: 'Foundations of Cybersecurity', issuer: 'Google Career Certificates', img: 'assets/certs/Google_Cyber.jpg' },
  { id: 'tcm-peh', code: 'PEH', title: 'Practical Ethical Hacking', issuer: 'TCM Security', img: 'assets/certs/TCM.jpg' },
];

const certGrid = document.getElementById('certGrid');

certificates.forEach((cert) => {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'cert-card reveal';
  card.setAttribute('data-cert', cert.id);
  card.innerHTML = `
    <div class="cert-thumb"><img src="${cert.img}" alt="${cert.title} certificate preview" loading="lazy"></div>
    <div class="cert-info">
      <div class="code">${cert.code}</div>
      <h3>${cert.title}</h3>
      <div class="issuer">${cert.issuer}</div>
    </div>
  `;
  card.addEventListener('click', () => openCertModal(cert));
  certGrid.appendChild(card);
  revealObserver.observe(card);
});

// Real CTF certificates. Add more objects below the same way when you earn new ones.
const ctfCertificates = [
  { id: 'ctf-cyber-apocalypse-2026', code: 'HTB', title: 'Cyber Apocalypse CTF 2026 — The Salt Crown', issuer: 'Hack The Box · Rank 168/6744 · 60,625 pts', img: 'assets/certs/ctf/cyber-apocalypse-2026.jpg' },
  { id: 'ctf-phoenix-summit-2025', code: 'CTF', title: 'Phoenix Summit CTF 2025', issuer: 'Red Team Village x ThreatSims · Rank #35', img: 'assets/certs/ctf/phoenix-summit-2025.jpg' },
  { id: 'ctf-bcs-ict-fest-2025', code: 'BCS', title: 'BCS ICT FEST 2025 — CTF Category', issuer: 'Bangladesh Computer Society', img: 'assets/certs/ctf/bcs-ict-fest-2025.jpg.png' },
  { id: 'ctf-cyber-raid-2025', code: 'ARMY', title: 'Cyber Raid 2025 — Finals', issuer: 'IT Directorate, Bangladesh Army x MIST', img: 'assets/certs/ctf/cyber-raid-2025.jpg' },
  { id: 'Knight CTF 2025', code: 'CTF', title: 'Knight CTF 2025', issuer: 'Knight Squad · Rank 525/8130 · 26,050 pts', img: 'assets/certs/ctf/cyber-apocalypse-2025.jpg' },
  { id: 'phoenix-summit-2024', code: 'CTF', title: 'Phoenix CTF 2024', issuer: 'The Team Phoenix', img: 'assets/certs/ctf/phoenix-summit-2024.jpg' },
  { id: 'ctf-knightctf-2024', code: 'CTF', title: 'Cyber APOCALYPSE CTF 2025 - Tales From ELDORIA', issuer: 'HTB', img: 'assets/certs/ctf/HTB2024.jpg' },
 // { id: 'ctf-8', code: 'CTF', title: 'Add your CTF certificate #8', issuer: 'Event / Platform name', img: 'assets/certs/ctf/placeholder.svg' },
 // { id: 'ctf-9', code: 'CTF', title: 'Add your CTF certificate #9', issuer: 'Event / Platform name', img: 'assets/certs/ctf/placeholder.svg' },
  //{ id: 'ctf-10', code: 'CTF', title: 'Add your CTF certificate #10', issuer: 'Event / Platform name', img: 'assets/certs/ctf/placeholder.svg' },
];

const ctfCertGrid = document.getElementById('ctfCertGrid');

if (ctfCertGrid) {
  ctfCertificates.forEach((cert) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'cert-card reveal';
    card.setAttribute('data-cert', cert.id);
    card.innerHTML = `
      <div class="cert-thumb"><img src="${cert.img}" alt="${cert.title} certificate preview" loading="lazy"></div>
      <div class="cert-info">
        <div class="code">${cert.code}</div>
        <h3>${cert.title}</h3>
        <div class="issuer">${cert.issuer}</div>
      </div>
    `;
    card.addEventListener('click', () => openCertModal(cert));
    ctfCertGrid.appendChild(card);
    revealObserver.observe(card);
  });
}

// Achievements — same card/grid/modal pattern as CTF Certificates, plus an
// optional short description and links (LinkedIn post, event page, etc.).
// Replace title/issuer/img with your real achievement, or add more objects the same way.
//   body  (optional) — 2-3 lines describing the achievement. Omit the key to skip it.
//   links (optional) — array of { type: 'linkedin' | 'link', url }. Omit the key to skip it.
const achievements = [
  {
    id: 'achievement-1',
    code: 'Clubbing',
    title: 'Vice President [Technical]',
    issuer: 'EWU Cyber Security Club (EWUCSC)',
    img: 'assets/DSC02565.jpg',
    body: 'Leading the technical wing of EWUCSC — planning workshops and CTFs, and mentoring members on offensive security fundamentals. Coordinated with faculty and industry speakers for club events.',
    links: [
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/posts/zaber-mahmud-asif_ewucsc-activity-7437173415280582656-eA3Z?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD074YgB18JTlipDQ4Qzi0GPCceIFyk8gEE'
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/posts/zaber-mahmud-asif_ewucsc-activity-7436742772751110144-6Q_W?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD074YgB18JTlipDQ4Qzi0GPCceIFyk8gEE'
      }
    ]
  },

  {
    id: 'achievement-2',
    code: 'EWUCSC',
    title: 'BlackHat MEA 2025 Finals - Global Qualification',
    issuer: 'EWU Cyber Security Club (EWUCSC)',
    body: 'Qualified for the BlackHat MEA 2025 Finals in Riyadh, Saudi Arabia as part of the EWU Cyber Security team NullOverFlow, securing 117th place among 600+ teams worldwide.',
    img: 'assets/workshop/1779606829141.jpg',
    links: [
      {
        type: 'Link',
        url: 'https://www.ewubd.edu/storage/app/media/Annual%20Report/Annual%20Report%202025.pdf'
      },
      {
        type: 'Link',
        url: 'https://www.ewubd.edu/storage/app/media/News%20Letter/VC%20Newsletter/VC%20Newsletter%20Final%20Compressed.pdf'
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/posts/zaber-mahmud-asif_reflection-cybersecurity-ewucsc-activity-7464212047539539968-4g6r?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD074YgB18JTlipDQ4Qzi0GPCceIFyk8gEE'
      }
    ]
  }
];

const achievementGrid = document.getElementById('achievementGrid');

if (achievementGrid) {
  achievements.forEach((ach) => {
    const card = document.createElement('div');
    card.className = 'cert-card reveal';
    card.setAttribute('data-cert', ach.id);

    const linksHTML = (ach.links || []).map((link) => {
      const isLinkedIn = link.type === 'linkedin';
      return `<a class="icon-btn-sm" href="${link.url}" target="_blank" rel="noopener noreferrer" aria-label="${isLinkedIn ? 'LinkedIn' : 'Link'}"><span>${isLinkedIn ? 'in' : '\u2197'}</span></a>`;
    }).join('');

    card.innerHTML = `
      <button type="button" class="cert-thumb" aria-label="View full image: ${ach.title}"><img src="${ach.img}" alt="${ach.title} achievement preview" loading="lazy"></button>
      <div class="cert-info">
        <div class="code">${ach.code}</div>
        <h3>${ach.title}</h3>
        <div class="issuer">${ach.issuer}</div>
        ${ach.body ? `<p class="body">${ach.body}</p>` : ''}
        ${linksHTML ? `<div class="cert-links">${linksHTML}</div>` : ''}
      </div>
    `;

    card.querySelector('.cert-thumb').addEventListener('click', () => openCertModal(ach));
    achievementGrid.appendChild(card);
    revealObserver.observe(card);
  });
}

const certModal = document.getElementById('certModal');
const certModalImg = document.getElementById('certModalImg');
const certModalLabel = document.getElementById('certModalLabel');
const certModalClose = document.getElementById('certModalClose');
const certModalBackdrop = document.getElementById('certModalBackdrop');

let lastFocusedEl = null;

function openCertModal(cert) {
  lastFocusedEl = document.activeElement;
  certModalImg.src = cert.img;
  certModalImg.alt = `${cert.title}, full view`;
  const ext = cert.img.split('.').pop();
  certModalLabel.textContent = `${cert.id}.${ext}`;
  certModal.classList.add('open');
  document.body.style.overflow = 'hidden';
  certModalClose.focus();
}

function closeCertModal() {
  certModal.classList.remove('open');
  document.body.style.overflow = '';
  certModalImg.src = '';
  if (lastFocusedEl) lastFocusedEl.focus();
}

certModalClose.addEventListener('click', closeCertModal);
certModalBackdrop.addEventListener('click', closeCertModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && certModal.classList.contains('open')) {
    closeCertModal();
  }
});

// Workshop thumbnails (Hosted & Organised + As a Guest) open the same full-view modal on hover/click.
document.querySelectorAll('.workshop-thumb').forEach((thumb) => {
  const img = thumb.querySelector('img');
  if (!img) return;
  const title = thumb.getAttribute('aria-label')?.replace(/^View full image:\s*/, '') || img.alt || 'Workshop photo';
  thumb.addEventListener('click', () => {
    openCertModal({ id: 'workshop', title, img: img.getAttribute('src') });
  });
});


