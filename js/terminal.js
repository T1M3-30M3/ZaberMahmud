(() => {
  const output = document.getElementById('termOutput');
  const input = document.getElementById('termInput');
  const anchor = document.getElementById('termAnchor');
  const screen = document.getElementById('termScreen');
  const promptTag = document.getElementById('promptTag');
  const USER = 'zaber@sec';
  const HOST_PATH = '~';

  /* ---------------- helpers ---------------- */

  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function scrollToBottom() {
    screen.scrollTop = screen.scrollHeight;
  }

  function printRaw(html, cls) {
    const div = document.createElement('div');
    div.className = 'term-line' + (cls ? ' ' + cls : '');
    div.innerHTML = html;
    output.appendChild(div);
    scrollToBottom();
    return div;
  }

  function printText(text, cls) {
    return printRaw(escapeHTML(text), cls);
  }

  function printBlank() {
    printRaw('&nbsp;');
  }

  function wait(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  async function typeLine(text, cls, speed = 10) {
    const div = document.createElement('div');
    div.className = 'term-line' + (cls ? ' ' + cls : '');
    output.appendChild(div);
    for (let i = 1; i <= text.length; i += 2) {
      div.textContent = text.slice(0, i);
      scrollToBottom();
      await wait(speed);
    }
    div.textContent = text;
    scrollToBottom();
  }

  /* ---------------- content data ---------------- */

  const ASCII_BANNER = [
    ' ____   _    ___  ___  ___ ',
    '|_  /  /_\\  | _ )| __|| _ \\',
    ' / /  / _ \\ | _ \\| _| |   /',
    '/___|/_/ \\_\\|___/|___||_|_\\',
  ].join('\n');

  const COMMANDS_LIST = [
    ['help', 'list all available commands'],
    ['whoami', 'who is running this terminal'],
    ['about', 'short bio & focus areas'],
    ['skills', 'tooling & technique breakdown'],
    ['experience', 'work history timeline'],
    ['certs', 'certifications earned'],
    ['projects', 'sample engagements & builds'],
    ['achievements', 'honors & competition results'],
    ['workshops', 'training organised / attended'],
    ['contact', 'email & linkedin'],
    ['social', 'social / profile links'],
    ['ls', 'list portfolio sections as files'],
    ['cat <file>', 'print a section, e.g. cat skills'],
    ['banner', 'reprint the ascii banner'],
    ['matrix', 'toggle matrix rain background'],
    ['clear', 'clear the screen'],
    ['history', 'show command history'],
    ['date', 'show current date & time'],
    ['echo <text>', 'print text back to the terminal'],
    ['open', 'return to the normal portfolio site'],
  ];

  const SKILLS = [
    ['Offensive Security', 'Web Pentesting, Network Pentesting, API Pentesting, VAPT, OWASP Top 10, SQLi, XSS, CSRF, SSRF, IDOR'],
    ['Defensive Security', 'Digital Forensics, Incident Response, Log Analysis, Threat Detection, Endpoint Security'],
    ['Red Team', 'Recon, Enumeration, Exploitation, Bug Bounty, Responsible Disclosure'],
    ['Tools', 'Burp Suite, Metasploit, Nmap, Wireshark, Ghidra, Kali Linux, HackTheBox'],
    ['Programming', 'Python, Bash, C / C++, SQL'],
    ['Standards & Frameworks', 'OWASP, PTES, NIST CSF, CIS Controls, CVSS'],
  ];

  const EXPERIENCE = [
    ['Vice President – Technical', 'EWU Cyber Security Club (EWUCSC)', 'Mar 2026 – Present · Dhaka, BD',
      ['Lead technical operations for a 750+ member university cybersecurity club', 'Organise CTF events, pentesting workshops and security awareness programs', 'Mentor students in ethical hacking, exploit development and CTF strategies']],
    ['CTF Event Co-Ordinator', 'EWU Cyber Security Club', 'Oct 2024 – Mar 2026 · Dhaka, BD',
      ['Designed web, forensics, crypto and pwn CTF challenges', 'Successfully ran 5+ events end to end, from logistics to debriefs']],
    ['Trainee Security Engineer', 'Smart Technologies (BD) Ltd', 'Sep 2025 – Dec 2025 · Dhaka, BD',
      ['Deployed Kaspersky Endpoint Security enterprise-wide via Security Center', 'Monitored threats, performed incident response, managed patch/signature updates']],
    ['Security Researcher', 'Hidden Investigations', 'Nov 2023 – Mar 2025 · Dhaka, BD',
      ['Full-scope web, network and API pentests using OWASP Top 10, PTES and CVSS', 'Discovered SQLi, XSS, CSRF, SSRF, IDOR and privilege escalation chains', 'Achieved 3rd place nationally; top finalist in 40+ global CTF events']],
    ['Ethical Hacking & DFIR Intern', 'TechnoHacks EduTech', 'Dec 2023 – Feb 2024',
      ['Applied DFIR techniques: evidence acquisition, log analysis and malware triage']],
    ['Cybersecurity Trainee & Campus Ambassador', 'Cyber Bangla / Hackviser', 'Oct 2023 – Present · Dhaka / Remote',
      ['Performed threat analysis, network monitoring and practical cyber defense training', 'Hosted security awareness sessions and promoted offensive security platforms']],
  ];

  const CERTS = [
    ['CAP', 'Certified AppSec Practitioner', 'Practical DevSecOps'],
    ['CNSP', 'Certified Network Security Practitioner', 'The SecOps Group'],
    ['C3SA', 'Cyber Security Analyst', 'Cyberwarfare Labs'],
    ['ACP', 'APIsec Certified Practitioner', 'APIsec University'],
    ['CASA', 'Certified API Security Analyst', 'The SecOps Group'],
    ['SEC+/CYSA+', 'Security+ & CySA+ Assessment', 'CompTIA'],
    ['GCC', 'Foundations of Cybersecurity', 'Google Career Certificates'],
    ['PEH', 'Practical Ethical Hacking', 'TCM Security'],
  ];

  const PROJECTS = [
    ['Enterprise Web & API Pentest', 'Full-scope assessment uncovering an IDOR-to-privilege-escalation chain and multiple injection points, delivered with a CVSS-scored remediation roadmap.'],
    ['East West University Internal Pentest', 'Led an internal penetration test across campus network and web assets, identifying critical web and network vulnerabilities.'],
    ['EWUCSC Challenge Suite', 'Designed and deployed 5+ CTF events spanning web, forensics, crypto and pwn categories for a 750+ member club.'],
    ['Enterprise Endpoint Hardening', 'Rolled out Kaspersky Endpoint Security across an enterprise fleet, cutting endpoint vulnerability exposure through active monitoring.'],
    ['Digital Forensics & Malware Triage', 'Applied evidence acquisition, log analysis and malware triage techniques on simulated incident cases.'],
    ['Responsible Disclosure Track Record', 'Active bug bounty contributor identifying and responsibly disclosing vulnerabilities following coordinated disclosure timelines.'],
  ];

  const ACHIEVEMENTS = [
    ['#3', 'National CTF — 3rd Place', 'Placed 3rd nationally at the National Cybersecurity Competition.'],
    ['40+', 'Global CTF Finalist', 'Reached the finals in 40+ international CTF competitions.'],
    ['OK', 'Internal Pentest Lead — EWU', 'Led an internal penetration test, maintaining an active responsible-disclosure track record.'],
  ];

  const WORKSHOPS = [
    ['[organised]', 'Pentesting Workshops — EWUCSC', 'Dhaka, Bangladesh'],
    ['[organised]', 'CTF Events — 5+ Editions', 'Dhaka, Bangladesh'],
    ['[organised]', 'Security Awareness Sessions', 'Remote / Online'],
    ['[attended]', 'Practical Ethical Hacking — TCM Security', 'Remote'],
    ['[attended]', 'Network Pentesting & Ethical Hacking', 'Remote / Online'],
    ['[attended]', 'Ethical Hacking & Cybersecurity Webinar', 'Remote / Online'],
    ['[attended]', 'Foundations of Cybersecurity — Google', 'Remote'],
  ];

  /* ---------------- command implementations ---------------- */

  function cmdHelp() {
    printText('Available commands:', 'term-section-title');
    const wrap = document.createElement('div');
    wrap.className = 'term-cmd-table';
    COMMANDS_LIST.forEach(([name, desc]) => {
      const row = document.createElement('div');
      row.className = 'term-cmd-row';
      row.innerHTML = `<span class="cmd-name">${escapeHTML(name)}</span><span class="cmd-desc">${escapeHTML(desc)}</span>`;
      wrap.appendChild(row);
    });
    output.appendChild(wrap);
    printText('Tip: use ↑ / ↓ for command history, Tab to autocomplete.', 'term-muted');
    scrollToBottom();
  }

  function cmdWhoami() {
    printText('zaber_mahmud_asif', 'term-accent');
    printText('role      : Cybersecurity Researcher & Penetration Tester');
    printText('base      : Dhaka, Bangladesh');
    printText('experience: 3+ years, offensive & defensive security');
    printText('status    : OPEN_TO_WORK', 'term-warn');
  }

  function cmdAbout() {
    printText('whoami --verbose', 'term-section-title');
    printText("I'm a security researcher and penetration tester based in Dhaka, Bangladesh, with 3+ years of hands-on experience across offensive and defensive cybersecurity.");
    printText('Work spans web, network and API penetration testing, VAPT, digital forensics and incident response — delivered against OWASP, NIST and PTES standards.');
    printText('Vice President – Technical at the EWU Cyber Security Club, leading technical operations for a 750+ member community.');
    printBlank();
    printText('education : BSc CSE, East West University');
    printText('focus     : Offensive Security & DFIR');
  }

  function cmdSkills() {
    printText('cat skills.txt', 'term-section-title');
    SKILLS.forEach(([cat, chips]) => {
      printText(cat, 'term-accent');
      printText('  ' + chips, 'term-muted');
    });
  }

  function cmdExperience() {
    printText('history | tail -6', 'term-section-title');
    EXPERIENCE.forEach(([role, org, meta, bullets]) => {
      printBlank();
      printText(role, 'term-accent');
      printText(org + '  ·  ' + meta, 'term-muted');
      bullets.forEach((b) => printText('  › ' + b));
    });
  }

  function cmdCerts() {
    printText('ls certificates/', 'term-section-title');
    CERTS.forEach(([code, title, issuer]) => {
      printText(`[${code}]`.padEnd(14) + title, 'term-accent');
      printText('  '.padEnd(14) + issuer, 'term-muted');
    });
  }

  function cmdProjects() {
    printText('ls -la projects/', 'term-section-title');
    PROJECTS.forEach(([title, desc]) => {
      printBlank();
      printText(title, 'term-accent');
      printText('  ' + desc, 'term-muted');
    });
  }

  function cmdAchievements() {
    printText('cat honors.log', 'term-section-title');
    ACHIEVEMENTS.forEach(([rank, title, desc]) => {
      printText(`${rank}  ${title}`, 'term-accent');
      printText('    ' + desc, 'term-muted');
    });
  }

  function cmdWorkshops() {
    printText('history --workshops', 'term-section-title');
    WORKSHOPS.forEach(([tag, title, loc]) => {
      printText(`${tag.padEnd(13)} ${title}`, 'term-accent');
      printText(''.padEnd(14) + loc, 'term-muted');
    });
  }

  function cmdContact() {
    printText('nc -lvp contact', 'term-section-title');
    printRaw('email     : <a class="term-link" href="mailto:zabermahmudasif01@gmail.com">zabermahmudasif01@gmail.com</a>');
    printRaw('linkedin  : <a class="term-link" href="https://linkedin.com/in/zaber-mahmud-asif" target="_blank" rel="noopener noreferrer">linkedin.com/in/zaber-mahmud-asif</a>');
  }

  function cmdSocial() {
    printRaw('linkedin  : <a class="term-link" href="https://linkedin.com/in/zaber-mahmud-asif" target="_blank" rel="noopener noreferrer">linkedin.com/in/zaber-mahmud-asif</a>');
    printText('facebook  : (link not set)', 'term-muted');
    printText('github    : (link not set)', 'term-muted');
  }

  const FILES = {
    'about.txt': cmdAbout,
    'skills.txt': cmdSkills,
    'experience.txt': cmdExperience,
    'certs.txt': cmdCerts,
    'projects.txt': cmdProjects,
    'achievements.txt': cmdAchievements,
    'workshops.txt': cmdWorkshops,
    'contact.txt': cmdContact,
  };

  function cmdLs() {
    printText('drwxr-xr-x  about.txt  skills.txt  experience.txt  certs.txt  projects.txt  achievements.txt  workshops.txt  contact.txt', 'term-muted');
    printText("use 'cat <file>' to read one, e.g. cat skills.txt", 'term-muted');
  }

  function cmdCat(arg) {
    if (!arg) {
      printText('usage: cat <file>  (try: cat skills.txt)', 'term-danger');
      return;
    }
    let key = arg.trim();
    if (!key.endsWith('.txt')) key += '.txt';
    if (FILES[key]) {
      FILES[key]();
    } else {
      printText(`cat: ${arg}: No such file or directory — run 'ls' to see available files.`, 'term-danger');
    }
  }

  function printBannerBlock() {
    printRaw(escapeHTML(ASCII_BANNER), 'term-banner');
    printText('cybersecurity researcher // penetration tester // ctf player', 'term-muted');
    printBlank();
  }

  let historyOn = false;

  function cmdMatrix() {
    historyOn = !historyOn;
    const canvas = document.getElementById('matrixCanvas');
    canvas.classList.toggle('on', historyOn);
    printText(`matrix rain ${historyOn ? 'enabled' : 'disabled'}.`, 'term-muted');
  }

  function cmdEcho(rest) {
    printText(rest || '');
  }

  function cmdDate() {
    printText(new Date().toString());
  }

  function cmdSudo(rest) {
    if (/hire[- ]?me/i.test(rest || '')) {
      printText('permission granted. redirecting to contact info...', 'term-ok');
      cmdContact();
      return;
    }
    printText(`[sudo] password for zaber: `, 'term-muted');
    printText('Permission denied — nice try. This account has no root on production systems.', 'term-danger');
  }

  function cmdOpen() {
    printText('opening portfolio...', 'term-muted');
    setTimeout(() => { window.location.href = 'index.html'; }, 500);
  }

  /* ---------------- input loop ---------------- */

  const cmdHistory = [];
  let historyIndex = -1;

  function runCommand(raw) {
    const trimmed = raw.trim();
    const echoLine = document.createElement('div');
    echoLine.className = 'term-echo-line';
    echoLine.innerHTML = `<span class="prompt-tag">${USER}:${HOST_PATH}$</span><span class="cmd-tag">${escapeHTML(raw)}</span>`;
    output.appendChild(echoLine);

    if (!trimmed) { scrollToBottom(); return; }

    cmdHistory.push(raw);
    historyIndex = cmdHistory.length;

    const [cmdRaw, ...rest] = trimmed.split(' ');
    const cmd = cmdRaw.toLowerCase();
    const argStr = rest.join(' ');

    switch (cmd) {
      case 'help': cmdHelp(); break;
      case 'whoami': cmdWhoami(); break;
      case 'about': cmdAbout(); break;
      case 'skills': cmdSkills(); break;
      case 'experience': case 'exp': cmdExperience(); break;
      case 'certs': case 'certifications': case 'certificate': cmdCerts(); break;
      case 'projects': case 'project': cmdProjects(); break;
      case 'achievements': case 'achievement': cmdAchievements(); break;
      case 'workshops': case 'workshop': cmdWorkshops(); break;
      case 'contact': cmdContact(); break;
      case 'social': cmdSocial(); break;
      case 'ls': cmdLs(); break;
      case 'cat': cmdCat(argStr); break;
      case 'banner': printBannerBlock(); break;
      case 'matrix': cmdMatrix(); break;
      case 'clear': case 'cls': output.innerHTML = ''; break;
      case 'history': cmdHistory.slice(0, -1).forEach((h, i) => printText(`${i + 1}  ${h}`, 'term-muted')); break;
      case 'date': cmdDate(); break;
      case 'echo': cmdEcho(argStr); break;
      case 'sudo': cmdSudo(argStr); break;
      case 'open': case 'home': case 'exit': case 'back': cmdOpen(); break;
      case 'man':
        if (argStr) printText(`${argStr}: no manual entry — try 'help' for a full command list.`, 'term-muted');
        else printText("usage: man <command>", 'term-muted');
        break;
      default:
        printText(`command not found: ${cmd} — type 'help' to see available commands.`, 'term-danger');
    }
    scrollToBottom();
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = input.value;
      input.value = '';
      runCommand(val);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      historyIndex = Math.max(0, historyIndex - 1);
      input.value = cmdHistory[historyIndex] || '';
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      historyIndex = Math.min(cmdHistory.length, historyIndex + 1);
      input.value = cmdHistory[historyIndex] || '';
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const partial = input.value.toLowerCase();
      if (!partial) return;
      const match = COMMANDS_LIST.map((c) => c[0].split(' ')[0]).find((name) => name.startsWith(partial));
      if (match) input.value = match;
    }
  });

  /* ---------------- matrix rain ---------------- */

  const canvas = document.getElementById('matrixCanvas');
  const ctx = canvas.getContext('2d');
  let cols, drops;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cols = Math.floor(canvas.width / 16);
    drops = new Array(cols).fill(1);
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const glyphs = 'アイウエオカキクケコサシスセソ01アルファハッキング';

  function drawMatrix() {
    ctx.fillStyle = 'rgba(5,7,12,0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#2dd4bf';
    ctx.font = '14px monospace';
    for (let i = 0; i < drops.length; i += 1) {
      const text = glyphs[Math.floor(Math.random() * glyphs.length)];
      ctx.fillText(text, i * 16, drops[i] * 16);
      if (drops[i] * 16 > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i] += 1;
    }
    requestAnimationFrame(drawMatrix);
  }
  requestAnimationFrame(drawMatrix);

  /* ---------------- boot sequence ---------------- */

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  async function boot() {
    printRaw(escapeHTML(ASCII_BANNER), 'term-banner');
    printText('cybersecurity researcher // penetration tester // ctf player', 'term-muted');
    printBlank();

    const bootLines = [
      'initializing secure shell...',
      'loading identity: zaber_mahmud_asif',
      'mounting sections: about, skills, experience, certs, projects, achievements, workshops, contact',
      'connection established.',
    ];

    if (reduceMotion) {
      bootLines.forEach((l) => printText(l, 'term-boot'));
    } else {
      for (const line of bootLines) {
        await typeLine(line, 'term-boot', 6);
        await wait(120);
      }
    }

    printBlank();
    printRaw('Type <span class="term-accent">help</span> to see available commands.', 'term-muted');
    printBlank();
    input.focus();
  }

  boot();
})();
