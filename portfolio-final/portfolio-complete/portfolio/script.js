/* ============ EDIT THIS SECTION ============
   Leave a value as "" until you have the real one.
   Empty links show as disabled instead of pointing to a fake URL. */
const CONFIG = {
  email: "kyanpaglinawan@gmail.com",   // used by the form fallback, not shown in Contact
  phone: "+63 994 530 9213",                  // shown in Contact and used for tap-to-call
  github: "https://github.com/kyan26",                      // e.g. "https://github.com/your-username"
  linkedin: "https://www.linkedin.com/in/ryan-paglinawan-453765447/",                    // e.g. "https://www.linkedin.com/in/your-name"
  resume: "docs/resume.pdf",                      // e.g. "docs/resume.pdf"
  formEndpoint: "https://formspree.io/f/xzeeqeya"                 // Formspree URL, e.g. "https://formspree.io/f/xxxxxxx"
};

const PH = (t) => `[Add: ${t}]`;     // anything starting with "[" renders as a placeholder

const SKILLS = [
  { domain: "Programming Languages", items: [["Python", "Familiar"], ["JavaScript", "Familiar"]] },
  { domain: "Front-End Technologies", items: [["HTML", "Familiar"], ["CSS", "Familiar"], ["Tailwind CSS", "Currently Learning"]] },
  { domain: "Computer Vision", items: [["MediaPipe", "Currently Learning"], ["OpenCV", "Currently Learning"]] },
  { domain: "Databases", items: [["SQL", "Familiar"], ["PostgreSQL", "Currently Learning"], ["MySQL", "Familiar"]] },
  { domain: "Frameworks and Tools", items: [["Django", "Familiar"], ["Git", "Currently Learning"], ["GitHub", "Currently Learning"], ["Visual Studio Code", "Currently Learning"], ["XAMPP", "Familiar"]] }
];

const PROJECTS = [
  {
    title: "Scholarship Management System",
    status: "Academic project, May 2025",
    overview: "A Django web application that manages scholars, scholarships, applications, documents, grades, and announcements.",
    problem: "A city office offers many scholarships and handles the applications on paper. With so many scholars, paper documents can go missing, which makes it hard to keep records complete and to track each application.",
    solution: "One web application for the whole scholarship process. Scholars keep a profile, apply, and track their applications, grades, and announcements. Staff and admins manage scholarships, scholars, applications, users, and announcements from a dashboard. The system automatically rejects applications below the GPA requirement and tracks how many scholarship slots are left.",
    architecture: "Users work in the browser. Django handles the pages and business rules, with session-based login and four roles (Admin, Staff, Scholar, User). Data is stored in a MySQL database. Tailwind CSS and JavaScript handle the layout and form checks in the browser.",
    stack: "Django and Python: Django was the framework our course focused on, and it gives a ready structure for pages, forms, and the database. MySQL: stores the system's data. Tailwind CSS: styles the pages and layout. JavaScript: learned in another course and used for interactive behavior in the browser, such as form checks.",
    contributions: "Team project of 3 members. I worked on role-based access control for four user roles (Admin, Staff, Scholar, User) with session-based login, and on the automatic GPA-based rejection of applications and scholarship slot tracking. The GPA rule was the hardest part: I learned how to build it by studying online tutorials, then applied it to the system.",
    results: "I tested the features myself while building the system, and I found and fixed bugs by researching solutions online. Formal testing and testing with other users have not been done yet.",
    shots: [
      { src: "assets/scholarship-1.png", alt: "Admin dashboard of the scholarship system", caption: "Admin dashboard with application status overview" },
      { src: "assets/scholarship-2.png", alt: "User list page showing Admin and Scholar roles", caption: "User management with roles (admin view)" },
      { src: "assets/scholarship-3.png", alt: "Scholar grades page with GPA summary", caption: "Scholar's grades and GPA summary" }
    ],
    diagram: { src: "assets/architecture-iskolar.svg", alt: "Architecture diagram: browser to Django to MySQL database" },
    github: "https://github.com/kyan26/Iskolar-ng-bayan-finalize", demo: "",
    video: "assets/demo/iskolar-demo.mp4",
    videoPoster: "assets/demo/iskolar-poster.jpg"
  },
  {
    title: "Nonoy Ice Cream Website",
    status: "Academic project, 2nd year, 1st semester",
    overview: "A website for Nonoy Ice Cream, a real ice cream shop in Brgy. Dayao, Roxas City. It began as an academic project in my second year, first semester, and I rebuilt it as a cleaner, more complete version.",
    problem: "Nonoy Ice Cream sells ice cream by the tube. Customers need an easy way to see the flavors and prices, work out their total, and find and contact the shop.",
    solution: "A responsive website where customers browse flavors with photos and prices per tube, pick how many tubes they want and see the total, read customer reviews, and find the shop through a map, directions, phone numbers, and a Facebook link. It also has a light and dark mode.",
    architecture: "A front-end website built with HTML, Tailwind CSS, and JavaScript. Tailwind CSS handles the layout on phones, tablets, and laptops. JavaScript powers the tube counter and total, the review viewer, and the light and dark mode. The shop location is shown with an embedded Google Map.",
    stack: "HTML, Tailwind CSS, and JavaScript, with an embedded Google Map for the location. I chose these technologies because they were part of our lessons in the second semester, so I could apply what I learned in class to a real shop's website.",
    contributions: "I built this website entirely on my own. After the original code was lost, I rebuilt it from scratch, including the flavor and tube-order section, the customer reviews, the shop location map, and the light and dark mode.",
    results: "I tested the website myself on a computer by opening it and trying out its features as I built it. I have not yet tested it on phones or tablets.",
    shots: [
      { src: "assets/nonoy-1.png", alt: "Home page of the Nonoy Ice Cream website", caption: "Home page: ice cream by the tube" },
      { src: "assets/nonoy-2.png", alt: "Flavor cards with prices per tube and a tube counter", caption: "Flavors with prices and a tube counter" },
      { src: "assets/nonoy-3.png", alt: "Customer reviews section", caption: "Customer reviews" },
      { src: "assets/nonoy-4.png", alt: "Visit us section with address, contact details, and Google Map", caption: "Shop location, contacts, and map" }
    ],
    diagram: { src: "assets/architecture-nonoy.svg", alt: "Architecture diagram: visitor browser to the Nonoy Ice Cream website and Google Maps" },
    github: "https://github.com/kyan26/Nonoy-Ice-Cream", demo: "https://nonoy-ice-cream-site.vercel.app/"
  }
];

/* Certificates: text only, no images needed. Add one line per certificate.
   Leave the list empty and the Certificates section stays hidden.
   Example:
   { title: "Python (Basic)", issuer: "HackerRank", date: "November 2026", note: "Short description", url: "" }
   Only add certificates you really earned. "url" is optional (a link where it can be verified). */
const CERTS = [
  { title: "English for IT 1", issuer: "Cisco Networking Academy", date: "24 Nov 2026", id: "1597aed4-f021-4fab-a272-cc6dcbf2c752", file: "docs/certificates/english-for-it-1.pdf", image: "assets/certificates/english-for-it-1.jpg" },
  { title: "English for IT 2", issuer: "Cisco Networking Academy", date: "24 Nov 2026", id: "5ff2ef29-52c7-42f9-8c36-06bb1ccfa59c", file: "docs/certificates/english-for-it-2.pdf", image: "assets/certificates/english-for-it-2.jpg" },
  { title: "Creating Compelling Reports", issuer: "Cisco Networking Academy", date: "24 Nov 2026", id: "b61b2f15-2df8-4894-9053-6fe9bfde8f11", file: "docs/certificates/creating-compelling-reports.pdf", image: "assets/certificates/creating-compelling-reports.jpg" },
  { title: "Getting Started with Cisco Packet Tracer", issuer: "Cisco Networking Academy", date: "23 Nov 2026", id: "24510bfa-948d-4328-8d34-bf89de345d3a", file: "docs/certificates/getting-started-packet-tracer.pdf", image: "assets/certificates/getting-started-packet-tracer.jpg" },
  { title: "Exploring Networking with Cisco Packet Tracer", issuer: "Cisco Networking Academy", date: "23 Nov 2026", id: "1beeea6d-9589-4ec7-a462-363367c1443c", file: "docs/certificates/exploring-networking-packet-tracer.pdf", image: "assets/certificates/exploring-networking-packet-tracer.jpg" },
  { title: "Exploring Internet of Things with Cisco Packet Tracer", issuer: "Cisco Networking Academy", date: "23 Nov 2026", id: "d5ec21dd-a5d9-487c-95a7-6b89047853fe", file: "docs/certificates/exploring-iot-packet-tracer.pdf", image: "assets/certificates/exploring-iot-packet-tracer.jpg" }
];

const DOCS = [
  { title: "Professional Resume", desc: "ATS-friendly resume with my skills, projects, and education.", file: "docs/resume.pdf" },
  { title: "Cover Letter", desc: "A cover letter introducing my skills and projects for a junior developer role.", file: "docs/cover-letter.pdf" },
  { title: "Developer Guide", desc: "A step-by-step guide for setting up, running, updating, and publishing this portfolio website.", file: "docs/developer-guide.pdf" }
  // To add another document, copy a line above and change the title, desc, and file path.
];
if (CONFIG.resume) DOCS[0].file = CONFIG.resume;

/* ============ Helpers ============ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const isPh = (t) => t.trim().startsWith("[");
const text = (t) => isPh(t) ? `<p class="ph">${esc(t)}</p>` : `<p class="case-text">${esc(t)}</p>`;
const chipClass = { Comfortable: "chip-comfortable", Familiar: "chip-familiar", "Currently Learning": "chip-learning" };

function linkBtn(label, href, cls = "btn-ghost") {
  // No link yet means no button, so nothing looks broken or unfinished.
  return href ? `<a class="btn btn-sm ${cls}" href="${esc(href)}" target="_blank" rel="noopener">${label}</a>` : "";
}

/* ============ Render ============ */
/* Skill logos live in assets/skills/. A skill without a logo file gets a letter badge. */
const SKILL_ICONS = {
  "Python": "python.svg", "JavaScript": "javascript.svg", "HTML": "html.svg", "CSS": "css.svg",
  "Tailwind CSS": "tailwind.svg", "Django": "django.svg", "PostgreSQL": "postgresql.svg", "MySQL": "mysql.svg",
  "Git": "git.svg", "GitHub": "github.svg", "Visual Studio Code": "vscode.svg", "OpenCV": "opencv.svg", "MediaPipe": "mediapipe.svg"
};
const SKILL_BADGES = { "SQL": "SQL", "XAMPP": "X" };
const levelClass = { Comfortable: "lv-comfortable", Familiar: "lv-familiar", "Currently Learning": "lv-learning" };

$("#skillsGrid").innerHTML = SKILLS.map((g) => `
  <article class="card skill-group">
    <h3>${g.domain}</h3>
    <ul class="skill-tiles">
      ${g.items.map(([n, l]) => `
        <li class="skill-tile ${levelClass[l]}" tabindex="0" aria-label="${n}, ${l}">
          <span class="skill-logo">${SKILL_ICONS[n]
            ? `<img src="assets/skills/${SKILL_ICONS[n]}" alt="" width="36" height="36" loading="lazy">`
            : `<span class="skill-badge">${SKILL_BADGES[n] || n[0]}</span>`}</span>
          <span class="skill-name">${n}</span>
          <span class="skill-level" aria-hidden="true">${l}</span>
        </li>`).join("")}
    </ul>
  </article>`).join("");

const field = (label, body) => `<div><p class="case-label">${label}</p>${text(body)}</div>`;
$("#projectList").innerHTML = PROJECTS.map((p) => `
  <article class="card case">
    <div class="case-head">
      <h3>${esc(p.title)}</h3>
      <span class="chip chip-status">${esc(p.status)}</span>
    </div>
    <div class="case-overview">${field("Project Overview", p.overview)}</div>
    <div class="case-grid">
      ${field("Real-World Problem", p.problem)}
      ${field("Proposed Solution", p.solution)}
      ${field("System Architecture", p.architecture)}
      ${field("Technology Stack and Justification", p.stack)}
      ${field("My Individual Contributions", p.contributions)}
      ${field("Measurable Results / Testing Outcomes", p.results)}
    </div>
    ${p.diagram ? `<p class="case-label shots-title">Architecture Diagram</p><figure class="diagram"><img src="${esc(p.diagram.src)}" alt="${esc(p.diagram.alt)}" loading="lazy"></figure>` : ""}
    <p class="case-label shots-title">Project Screenshots</p>
    <div class="shots">
      ${Array.from({ length: Math.max(3, (p.shots || []).length) }, (_, i) => i).map((i) => p.shots && p.shots[i]
        ? `<figure class="shot-fig"><a href="${esc(p.shots[i].src)}"><img src="${esc(p.shots[i].src)}" alt="${esc(p.shots[i].alt)}" loading="lazy"></a><figcaption>${esc(p.shots[i].caption)}</figcaption></figure>`
        : `<div class="ph shot">Screenshot ${i + 1} placeholder<br>assets/${p.title.split(/[ :]/)[0].toLowerCase()}-${i + 1}.png</div>`).join("")}
    </div>
    <div class="case-actions">
      ${linkBtn("GitHub Repository", p.github, "btn-primary")}${linkBtn("Live Demo", p.demo)}${!p.video ? "" : /^https?:/.test(p.video) ? linkBtn("Watch Demo Video", p.video) : `<button type="button" class="btn btn-sm btn-ghost" data-video="${esc(p.video)}" data-poster="${esc(p.videoPoster || "")}" data-caption="${esc(p.title)}: demo video">&#9654; Watch Demo Video</button>`}
      ${(p.demo || p.video) ? "" : `<span class="btn btn-sm btn-ghost is-disabled" aria-disabled="true">Live demo not available</span>`}
    </div>
  </article>`).join("");

$("#docGrid").innerHTML = DOCS.map((d) => `
  <article class="card doc">
    <h3>${esc(d.title)}</h3>
    <p>${esc(d.desc)}</p>
    <div class="doc-body">
      ${d.file ? `<iframe class="doc-frame" src="${esc(d.file)}" title="${esc(d.title)} preview"></iframe>`
               : `<div class="doc-frame ph">PDF preview placeholder. Upload your file to docs/ and set its path in script.js</div>`}
    </div>
    ${d.file ? `<p class="doc-hint">Preview not showing on your phone? Tap View Document.</p>` : ""}
    <div class="doc-actions">
      ${d.file ? `<a class="btn btn-sm btn-primary" href="${esc(d.file)}" target="_blank" rel="noopener" data-pdf="${esc(d.file)}" data-title="${esc(d.title)}">View Document</a>
                  <a class="btn btn-sm btn-ghost" href="${esc(d.file)}" download data-filename="Ryan Paglinawan - ${esc(d.title)}.pdf">Download PDF</a>`
               : `<span class="btn btn-sm btn-primary is-disabled" aria-disabled="true">View Document</span>
                  <span class="btn btn-sm btn-ghost is-disabled" aria-disabled="true">Download PDF</span>`}
    </div>
  </article>`).join("");

/* ============ Certificates (flip cards) ============ */
if (CERTS.length) {
  $("#certificates").hidden = false;
  $$("[data-cert-link]").forEach((el) => { el.hidden = false; });   // show the Certificates menu item only when there are certificates
  $("#certList").innerHTML = CERTS.map((c, i) => `
    <li class="cert-flip" data-i="${i}">
      <div class="cert-inner">
        <button type="button" class="cert-face cert-front" aria-label="Show certificate: ${esc(c.title)}">
          <span class="cert-title">${esc(c.title)}</span>
          <span class="cert-meta">${esc(c.issuer)}${c.date ? " &middot; " + esc(c.date) : ""}</span>
          <span class="cert-hint">Click to see certificate</span>
        </button>
        <div class="cert-face cert-back" inert>
          <button type="button" class="cert-thumb" aria-label="View ${esc(c.title)} larger">
            <img src="${esc(c.image)}" alt="Certificate of completion: ${esc(c.title)}" loading="lazy">
            <span class="cert-zoom">Click to enlarge</span>
          </button>
          <div class="cert-back-actions">
            <button type="button" class="btn btn-sm btn-ghost cert-flipback">Flip back</button>
          </div>
        </div>
      </div>
    </li>`).join("");

  const setFlip = (li, on) => {
    li.classList.toggle("is-flipped", on);
    $(".cert-front", li).inert = on;
    $(".cert-back", li).inert = !on;
    $(on ? ".cert-thumb" : ".cert-front", li).focus({ preventScroll: true });
  };
  $("#certList").addEventListener("click", (e) => {
    const li = e.target.closest(".cert-flip");
    if (!li) return;
    const c = CERTS[+li.dataset.i];
    if (e.target.closest(".cert-front")) setFlip(li, true);
    else if (e.target.closest(".cert-flipback")) setFlip(li, false);
    else if (e.target.closest(".cert-thumb")) openLightbox(c.image, "Certificate of completion: " + c.title, c.title + " \u00b7 " + c.issuer + " \u00b7 " + c.date);
  });
}

/* ============ Links from CONFIG ============ */
function setLink(el, href, label) {
  if (href) { el.href = href; if (/^https?:/.test(href)) { el.target = "_blank"; el.rel = "noopener"; } return; }
  el.classList.add("is-disabled"); el.setAttribute("aria-disabled", "true");
  el.title = label + " not added yet"; el.addEventListener("click", (e) => e.preventDefault());
}
$$("[data-link]").forEach((el) => {
  const k = el.dataset.link, v = CONFIG[k];
  const href = k === "email" && v ? "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(v) + "&su=" + encodeURIComponent("Hello Ryan") : k === "phone" && v ? "tel:" + v.replace(/[^\d+]/g, "") : v;
  setLink(el, href, k);
  if ((k === "email" || k === "phone") && v) ($(".contact-text", el) || el).textContent = v;
});
$$("[data-resume]").forEach((el) => {
  setLink(el, CONFIG.resume, "Resume");
  if (CONFIG.resume) { el.setAttribute("download", ""); el.dataset.filename = "Ryan Paglinawan - Resume.pdf"; }
});

/* ============ Direct downloads (the file saves right here, no new tab) ============ */
let toastTimer;
function toast(msg) {
  let t = $("#toast");
  if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), 3500);
}
// Saves a file straight to the visitor's device. The helper link is marked data-direct so the
// handler below ignores it (otherwise it would intercept its own click and loop forever).
function saveFile(href, name) {
  const link = document.createElement("a");
  link.href = href; link.download = name; link.dataset.direct = "1"; link.style.display = "none";
  document.body.appendChild(link); link.click(); link.remove();
}
// When index.html is opened by double-clicking it (file://), browsers refuse to save local files and
// would open the PDF in the tab instead. docs/offline-downloads.js (made by make_offline_downloads.py)
// holds the PDFs so they can still be saved on the page. It is only loaded in that situation.
let offlineData;
function loadOfflineData() {
  if (!offlineData) offlineData = new Promise((resolve) => {
    const s = document.createElement("script");
    s.src = "docs/offline-downloads.js";
    s.onload = () => resolve(window.OFFLINE_PDFS || null);
    s.onerror = () => resolve(null);
    document.head.appendChild(s);
  });
  return offlineData;
}
function base64ToBlob(b64) {
  const bin = atob(b64), bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new Blob([bytes], { type: "application/octet-stream" });
}
document.addEventListener("click", async (e) => {
  const a = e.target.closest("a[download]");
  if (!a || a.dataset.direct) return;                       // our own helper link: let the browser save it
  const href = a.getAttribute("href");
  if (!href || href === "#" || a.getAttribute("aria-disabled") === "true") return;
  const url = new URL(a.href, location.href);
  const local = location.protocol === "file:";
  if (!local && url.origin !== location.origin) return;     // files on other sites: let the browser handle them
  e.preventDefault();                                       // never navigate or open a new tab
  if (a.dataset.busy) return;                               // ignore double clicks while it is saving
  const name = a.dataset.filename || decodeURIComponent(url.pathname.split("/").pop()) || "download.pdf";
  a.dataset.busy = "1"; a.setAttribute("aria-busy", "true");
  try {
    let blob;
    if (local) {
      const data = await loadOfflineData();
      const b64 = data && data[decodeURIComponent(href)];
      if (!b64) { toast("To download while testing locally, run make_offline_downloads.py once (or use Live Server)."); return; }
      blob = base64ToBlob(b64);
    } else {
      toast("Downloading " + name + "...");
      const res = await fetch(url);
      if (!res.ok) throw new Error("File not found (" + res.status + ")");
      // octet-stream makes the browser save the file instead of showing the PDF in a tab
      blob = new Blob([await res.blob()], { type: "application/octet-stream" });
    }
    const objectUrl = URL.createObjectURL(blob);
    saveFile(objectUrl, name);
    setTimeout(() => URL.revokeObjectURL(objectUrl), 10000);
    toast("Saved: " + name + ". Check your Downloads folder.");
  } catch (err) {
    toast("Sorry, the download did not work. Please try again in a moment.");
  } finally {
    delete a.dataset.busy; a.removeAttribute("aria-busy");
  }
});

/* ============ Navigation ============ */
const menuBtn = $("#menuBtn"), mobileMenu = $("#mobileMenu");
menuBtn.addEventListener("click", () => {
  mobileMenu.hidden = !mobileMenu.hidden;
  menuBtn.setAttribute("aria-expanded", String(!mobileMenu.hidden));
});
$$("#mobileMenu a").forEach((a) => a.addEventListener("click", () => { mobileMenu.hidden = true; menuBtn.setAttribute("aria-expanded", "false"); }));
// Keep the phone menu tidy: Esc closes it, and it resets when the screen grows to tablet/desktop size
function closeMenu() { mobileMenu.hidden = true; menuBtn.setAttribute("aria-expanded", "false"); }
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !mobileMenu.hidden) { closeMenu(); menuBtn.focus(); } });
matchMedia("(min-width: 768px)").addEventListener("change", (e) => { if (e.matches) closeMenu(); });

const links = $$("#navLinks .nav-link");
const spy = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
$$("main section[id]").forEach((s) => spy.observe(s));

/* ============ Contact form ============ */
const form = $("#contactForm"), status = $("#formStatus");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  let ok = true;
  $$("input, textarea", form).forEach((f) => {
    const bad = !f.value.trim() || (f.type === "email" && !/^\S+@\S+\.\S+$/.test(f.value));
    f.classList.toggle("invalid", bad); if (bad) ok = false;
  });
  if (!ok) { status.textContent = "Please fill in every field with a valid email address."; status.className = "status err"; return; }

  if (CONFIG.formEndpoint) {
    const btn = $("button[type=submit]", form);
    btn.disabled = true; btn.textContent = "Sending...";
    status.textContent = ""; status.className = "status";
    try {
      const res = await fetch(CONFIG.formEndpoint, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error("Request failed");
      form.reset(); status.textContent = "Message sent. Thank you, I'll get back to you soon!"; status.className = "status ok";
    } catch {
      status.textContent = "Could not send. Please email me directly at " + (CONFIG.email || "my email") + ".";
      status.className = "status err";
    } finally { btn.disabled = false; btn.textContent = "Send Message"; }
  } else if (CONFIG.email) {
    const body = `${data.message}\n\nFrom: ${data.name} (${data.email})`;
    location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = "Opening your email app..."; status.className = "status info";
  } else {
    status.textContent = "Form is not connected yet. Add your email or Formspree URL in script.js."; status.className = "status warn";
  }
});

/* ============ Name and job title reveal (plays once) ============ */
function revealLetters(el, startMs, stepMs) {
  const full = el.textContent.trim();
  let n = 0;
  el.setAttribute("aria-label", full);
  el.innerHTML = full.split(" ").map((w) =>
    `<span class="word" aria-hidden="true">${[...w].map((c) => `<span class="ch" style="animation-delay:${startMs + n++ * stepMs}ms">${esc(c)}</span>`).join("")}</span>`
  ).join(" ");
}
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const nameEl = $("h1"), roleEl = $("#roleText");
  if (nameEl) revealLetters(nameEl, 200, 45);
  if (roleEl) { revealLetters(roleEl, 1000, 32); roleEl.classList.add("role-animate"); }
}

/* ============ Email shortcuts (optional: only runs if the buttons exist in index.html) ============ */
const gmailLink = $("#gmailLink"), copyBtn = $("#copyEmail");
if (gmailLink && copyBtn && CONFIG.email) {
  gmailLink.href = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(CONFIG.email);
  copyBtn.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(CONFIG.email); }
    catch { const t = document.createElement("textarea"); t.value = CONFIG.email; document.body.appendChild(t); t.select(); document.execCommand("copy"); t.remove(); }
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = "Copy email"), 1800);
  });
}

/* ============ Back to top ============ */
const toTop = $("#toTop");
if (toTop) addEventListener("scroll", () => { toTop.hidden = scrollY < 700; }, { passive: true });

$("#year").textContent = new Date().getFullYear();

/* ============ Preview window (screenshots and certificates) ============ */
const lb = $("#lightbox");
function openVideo(src, poster, cap) {
  if (!lb || typeof lb.showModal !== "function") { window.open(src, "_blank", "noopener"); return; }
  const v = $("#lightboxVideo");
  pdfFrame().hidden = true;
  $("#lightboxImg").hidden = true;
  $("#lightboxDownload").hidden = true;
  v.hidden = false; v.poster = poster || ""; v.src = src;
  $("#lightboxCap").textContent = cap || "";
  document.documentElement.classList.add("no-scroll");
  lb.showModal();
  v.play().catch(() => {});
}
function pdfFrame() {
  let f = $("#lightboxPdf");
  if (!f) {
    f = document.createElement("iframe");
    f.id = "lightboxPdf"; f.className = "lightbox-pdf"; f.title = "Document preview"; f.hidden = true;
    $("#lightboxVideo").after(f);
  }
  return f;
}
function openPdf(src, cap) {
  if (!lb || typeof lb.showModal !== "function") { window.open(src, "_blank", "noopener"); return; }
  $("#lightboxImg").hidden = true;
  $("#lightboxVideo").hidden = true;
  $("#lightboxDownload").hidden = true;
  const f = pdfFrame();
  f.hidden = false; f.src = src;
  $("#lightboxCap").textContent = cap || "";
  document.documentElement.classList.add("no-scroll");
  lb.showModal();
}
function openLightbox(src, alt, cap, downloadUrl) {
  if (!lb || typeof lb.showModal !== "function") { window.open(downloadUrl || src, "_blank", "noopener"); return; }
  const dl = $("#lightboxDownload");
  pdfFrame().hidden = true;
  $("#lightboxVideo").hidden = true;
  $("#lightboxImg").hidden = false;
  $("#lightboxImg").src = src;
  $("#lightboxImg").alt = alt || "";
  $("#lightboxCap").textContent = cap || "";
  dl.hidden = !downloadUrl;
  if (downloadUrl) { dl.href = downloadUrl; dl.dataset.filename = "Ryan Paglinawan - " + (cap || "").split(" \u00b7 ")[0] + ".pdf"; }
  document.documentElement.classList.add("no-scroll");
  lb.showModal();
}
if (lb && typeof lb.showModal === "function") {
  $("#projectList").addEventListener("click", (e) => {
    const a = e.target.closest(".shot-fig a");
    if (!a || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return; // let "open in new tab" still work
    e.preventDefault();
    const thumb = $("img", a), cap = a.parentElement.querySelector("figcaption");
    openLightbox(a.getAttribute("href"), thumb ? thumb.alt : "", cap ? cap.textContent : "", "");
  });
  $("#lightboxClose").addEventListener("click", () => lb.close());
  lb.addEventListener("click", (e) => { if (e.target === lb) lb.close(); }); // click outside to close
  lb.addEventListener("close", () => {
    document.documentElement.classList.remove("no-scroll");
    $("#lightboxImg").removeAttribute("src");
    pdfFrame().removeAttribute("src");
    const v = $("#lightboxVideo"); v.pause(); v.removeAttribute("src"); v.load();
  });
  $("#docGrid").addEventListener("click", (e) => {
    const a = e.target.closest("a[data-pdf]");
    if (!a || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return; // let "open in new tab" still work
    e.preventDefault();
    openPdf(a.dataset.pdf, a.dataset.title);
  });
  $("#projectList").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-video]");
    if (btn) openVideo(btn.dataset.video, btn.dataset.poster, btn.dataset.caption);
  });
}

/* ============ Theme (light / dark) ============ */
const themeBtn = $("#themeBtn");
function applyTheme(t, save) {
  const root = document.documentElement;
  root.dataset.theme = t;
  if (themeBtn) {
    themeBtn.setAttribute("aria-label", t === "dark" ? "Switch to light mode" : "Switch to dark mode");
    themeBtn.title = t === "dark" ? "Light mode" : "Dark mode";
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = t === "dark" ? "#0a1222" : "#ffffff";
  if (save) { try { localStorage.setItem("theme", t); } catch (e) {} }
  dispatchEvent(new Event("themechange"));
}
applyTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light", false);
if (themeBtn) themeBtn.addEventListener("click", () => {
  const root = document.documentElement;
  root.classList.add("theme-anim");
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
  setTimeout(() => root.classList.remove("theme-anim"), 450);
});

/* ============ Falling stars background ============ */
(function () {
  const cv = $("#starfield");
  if (!cv) return;
  const ctx = cv.getContext("2d");
  const guard = $(".hero-text");               // stars fade out behind the name and title
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const PALETTE = {                              // r,g,b, follows the theme
    light: ["29,78,216", "59,130,246", "125,179,240"],
    dark: ["255,255,255", "191,219,254", "125,179,240"]
  };
  const isDark = () => document.documentElement.dataset.theme === "dark";
  const rand = (a, b) => a + Math.random() * (b - a);
  let W = 0, H = 0, dpr = 1, falling = [], twinkles = [], raf = 0, last = 0;

  // Four-point sparkle shape
  function sparkle(x, y, r, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
      const rad = i % 2 ? r * 0.28 : r, a = (i * Math.PI) / 4;
      ctx.lineTo(Math.cos(a) * rad, Math.sin(a) * rad);
    }
    ctx.closePath(); ctx.fill(); ctx.restore();
  }

  function makeFalling(initial) {
    const angle = rand(0.28, 0.5);                 // tilt from vertical, falls toward bottom-left
    const speed = rand(110, 240);                  // px per second
    return {
      x: rand(0, W + H * 0.5), y: initial ? rand(-H * 0.2, H) : rand(-160, -20),
      vx: -Math.sin(angle) * speed, vy: Math.cos(angle) * speed,
      len: rand(70, 170), size: rand(5, 9), alpha: rand(0.55, 0.95),
      c: (Math.random() * 3) | 0, rot: rand(0, 6.28), spin: rand(-1.5, 1.5)
    };
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.max(8, Math.min(26, Math.round(W / 55)));
    falling = Array.from({ length: n }, () => makeFalling(true));
    twinkles = Array.from({ length: Math.round(W / 22) }, () => ({
      x: rand(0, W), y: rand(0, H), r: rand(2.2, 5), phase: rand(0, 6.28), rate: rand(0.8, 2.2),
      c: (Math.random() * 3) | 0
    }));
    if (reduce) draw(0);
  }

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    const dark = isDark(), P = PALETTE[dark ? "dark" : "light"];
    const g0 = guard ? guard.getBoundingClientRect() : null, lvl = dark ? 1 : 0.8;
    const damp = (x, y) => (g0 && x > g0.left - 28 && x < g0.right + 28 && y > g0.top - 20 && y < g0.bottom + 20) ? 0.1 : 1;
    // twinkling background stars
    for (const s of twinkles) {
      const a = reduce ? (dark ? 0.55 : 0.35) : (dark ? 0.2 : 0.15) + (dark ? 0.7 : 0.5) * (0.5 + 0.5 * Math.sin(t * s.rate + s.phase));
      ctx.fillStyle = `rgba(${P[s.c]},${a * lvl * damp(s.x, s.y)})`;
      sparkle(s.x, s.y, s.r, Math.PI / 4);
    }
    if (reduce) return;
    // falling stars with a fading tail
    for (const s of falling) {
      const col = P[s.c];
      const sp = Math.hypot(s.vx, s.vy), tx = s.x - (s.vx / sp) * s.len, ty = s.y - (s.vy / sp) * s.len;
      const g = ctx.createLinearGradient(s.x, s.y, tx, ty), f = lvl * Math.min(damp(s.x, s.y), damp(tx, ty));
      g.addColorStop(0, `rgba(${col},${s.alpha * f})`);
      g.addColorStop(1, `rgba(${col},0)`);
      ctx.strokeStyle = g; ctx.lineWidth = s.size * (dark ? 0.38 : 0.32); ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(tx, ty); ctx.stroke();
      ctx.shadowColor = `rgba(${col},${(dark ? 0.9 : 0.6) * f})`; ctx.shadowBlur = dark ? 14 : 8;
      ctx.fillStyle = `rgba(${col},${Math.min(1, s.alpha + 0.15) * f})`;
      sparkle(s.x, s.y, s.size, s.rot);
      ctx.shadowBlur = 0;
    }
  }

  function frame(now) {
    const dt = Math.min((now - last) / 1000 || 0, 0.05); last = now;
    for (let i = 0; i < falling.length; i++) {
      const s = falling[i];
      s.x += s.vx * dt; s.y += s.vy * dt; s.rot += s.spin * dt;
      if (s.y - s.len > H || s.x + s.len < 0) falling[i] = makeFalling(false);
    }
    draw(now / 1000);
    raf = requestAnimationFrame(frame);
  }

  function start() { if (!raf && !reduce) { last = performance.now(); raf = requestAnimationFrame(frame); } }
  function stop() { cancelAnimationFrame(raf); raf = 0; }

  addEventListener("resize", resize);
  addEventListener("themechange", () => { if (reduce) draw(0); });
  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
  resize(); start();
})();