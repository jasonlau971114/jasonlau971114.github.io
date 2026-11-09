/*
  EDIT YOUR PORTFOLIO HERE.
  All values below are examples. Replace them with your real details,
  projects, experience, and links before publishing.
*/
const portfolio = {
  name: 'Jasonlau Morgan',
  email: 'you@example.com',
  location: 'Your City · Remote-friendly',
  availability: 'Open to interesting opportunities',
  github: 'https://github.com/jasonlau971114',
  linkedin: 'https://www.linkedin.com/in/jasonlau971114/',
  headline: "I'm a senior software engineer who turns complex problems into thoughtful, fast, and dependable digital experiences. I love clean architecture, well-crafted products, and teams that ship.",
  about: 'I care about the whole picture: the people using the product, the engineers maintaining it, and the systems keeping it running. My approach is equal parts curiosity, pragmatism, and craftsmanship. I enjoy mentoring teammates and making hard technical decisions feel simple.',
  stats: { years: '8+', projects: '20+', focus: '100%' },
  skills: {
    backend: ['Python', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
    frontend: ['React', 'Next.js', 'HTML/CSS', 'Accessibility'],
    cloud: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    leadership: ['System Design', 'Mentoring', 'Code Review', 'Agile']
  },
  projects: [
    { title: 'Distributed Task Platform', category: 'backend', categoryLabel: 'Backend / Infrastructure', description: 'A fault-tolerant task processing platform with durable queues, automated retries, metrics, and API-first integrations.', tech: ['Python', 'Redis', 'Docker'], github: 'https://github.com/jasonlau971114/git_tutorial', demo: '', glyph: '⌘', dark: '#1b3456', light: '#3962a5' },
    { title: 'Commerce Analytics Dashboard', category: 'fullstack', categoryLabel: 'Full Stack / Data', description: 'An interactive analytics experience that transforms complex sales data into fast, actionable insights.', tech: ['React', 'TypeScript', 'PostgreSQL'], github: 'https://github.com/jasonlau971114', demo: '', glyph: '▥', dark: '#183e46', light: '#268d8b' },
    { title: 'Intelligent Document Search', category: 'ai', categoryLabel: 'AI / Machine Learning', description: 'Semantic retrieval over documents, with embeddings, relevance scoring, and a clean search interface.', tech: ['Python', 'FastAPI', 'Vector Search'], github: 'https://github.com/jasonlau971114', demo: '', glyph: '✳', dark: '#3b295a', light: '#7451b7' },
    { title: 'Developer Experience Toolkit', category: 'backend', categoryLabel: 'Developer Tools', description: 'A collection of internal automation tools to simplify service scaffolding, testing, and deployments.', tech: ['Go', 'GitHub Actions', 'CLI'], github: 'https://github.com/jasonlau971114', demo: '', glyph: '⚡', dark: '#4b3447', light: '#ad5a85' }
  ],
  experience: [
    { dates: '2022 — Present', role: 'Senior Software Engineer', company: 'Example Company · Remote', description: 'Led architecture and delivery of scalable services, partnered with product teams, and mentored engineers.' },
    { dates: '2019 — 2022', role: 'Software Engineer', company: 'Previous Company · Your City', description: 'Built product features and robust backend APIs, improved performance, and automated delivery workflows.' },
    { dates: '2017 — 2019', role: 'Junior Software Engineer', company: 'First Company · Your City', description: 'Developed features, wrote automated tests, and learned to ship reliable software within a collaborative team.' }
  ]
};

const byId = (id) => document.getElementById(id);
function text(id, value) { const el = byId(id); if (el) el.textContent = value; }
function createTag(name) { const tag = document.createElement('span'); tag.className = 'tag'; tag.textContent = name; return tag; }

function renderProjects(filter = 'all') {
  const grid = byId('projectGrid');
  grid.replaceChildren();
  const projects = portfolio.projects.filter(p => filter === 'all' || p.category === filter);
  if (!projects.length) { const p = document.createElement('p'); p.textContent = 'No projects in this category yet.'; grid.append(p); return; }
  projects.forEach(project => {
    const card = document.createElement('article'); card.className = 'project-card';
    const visual = document.createElement('div'); visual.className = 'project-visual';
    visual.style.setProperty('--project-dark', project.dark || '#1b3456');
    visual.style.setProperty('--project-light', project.light || '#3962a5');
    const glyph = document.createElement('span'); glyph.className = 'project-glyph'; glyph.textContent = project.glyph || '✳'; glyph.setAttribute('aria-hidden', 'true'); visual.append(glyph);
    const body = document.createElement('div'); body.className = 'project-body';
    const cat = document.createElement('span'); cat.className = 'project-category'; cat.textContent = project.categoryLabel;
    const heading = document.createElement('h3'); heading.textContent = project.title;
    const desc = document.createElement('p'); desc.textContent = project.description;
    const tags = document.createElement('div'); tags.className = 'tags'; (project.tech || []).forEach(t => tags.append(createTag(t)));
    const links = document.createElement('div'); links.className = 'project-links';
    if (project.github) { const a = document.createElement('a'); a.href = project.github; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.textContent = 'Source code ↗'; links.append(a); }
    if (project.demo) { const a = document.createElement('a'); a.href = project.demo; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.textContent = 'Live demo ↗'; links.append(a); }
    body.append(cat, heading, desc, tags, links); card.append(visual, body); grid.append(card);
  });
}

function init() {
  document.title = `${portfolio.name} — Senior Software Engineer`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = `Portfolio of ${portfolio.name}, Senior Software Engineer.`;
  text('heroFirstName', portfolio.name.trim().split(/\s+/)[0].toUpperCase());
  text('editorName', `'${portfolio.name}'`);
  text('heroDescription', portfolio.headline); text('aboutText', portfolio.about);
  text('statusText', portfolio.availability); text('locationText', portfolio.location);
  text('statYears', portfolio.stats.years); text('statProjects', portfolio.stats.projects); text('statFocus', portfolio.stats.focus);
  text('footerName', portfolio.name); text('currentYear', new Date().getFullYear());
  for (const [key, skills] of Object.entries(portfolio.skills)) {
    const el = byId(`${key}Tags`); if (el) skills.forEach(skill => el.append(createTag(skill)));
  }
  for (const id of ['githubLink', 'footerGithub']) byId(id).href = portfolio.github;
  byId('linkedinLink').href = portfolio.linkedin;
  byId('emailButton').href = `mailto:${portfolio.email}?subject=${encodeURIComponent('Hello from your portfolio')}`;
  byId('experienceList').replaceChildren(...portfolio.experience.map(job => {
    const article = document.createElement('article'); article.className = 'timeline-item';
    const date = document.createElement('div'); date.className = 'timeline-date'; date.textContent = job.dates;
    const content = document.createElement('div');
    const role = document.createElement('div'); role.className = 'timeline-role'; role.textContent = job.role;
    const company = document.createElement('div'); company.className = 'timeline-company'; company.textContent = job.company;
    const desc = document.createElement('p'); desc.className = 'timeline-desc'; desc.textContent = job.description;
    content.append(role, company, desc); article.append(date, content); return article;
  }));
  renderProjects();
  byId('projectFilters').addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]'); if (!button) return;
    document.querySelectorAll('.filter').forEach(el => { el.classList.toggle('active', el === button); el.setAttribute('aria-pressed', String(el === button)); });
    renderProjects(button.dataset.filter);
  });
  const menuButton = byId('menuToggle'); const menu = byId('navLinks');
  const closeMenu = () => { menu.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open navigation menu'); };
  menuButton.addEventListener('click', () => { const open = menu.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu'); });
  menu.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', event => { if (!event.target.closest('.nav')) closeMenu(); });
  byId('copyEmail').addEventListener('click', async () => {
    const message = byId('copyMessage');
    try { await navigator.clipboard.writeText(portfolio.email); message.textContent = 'Email copied to clipboard!'; }
    catch { message.textContent = `Copy manually: ${portfolio.email}`; }
  });
}

document.addEventListener('DOMContentLoaded', init);
