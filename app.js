/* Edit portfolio-data.js to personalize the site. No build step is needed. */
(() => {
  'use strict';
  const data = window.PORTFOLIO_DATA;
  if (!data) return;
  const profile = data.profile || {};
  const projects = Array.isArray(data.projects) ? data.projects : [];
  const grid = document.getElementById('project-grid');
  const dialog = document.getElementById('project-dialog');
  let dialogTrigger = null;
  const escape = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeUrl = (value) => {
    if (!value) return '';
    try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : ''; } catch { return ''; }
  };
  const validDate = (value) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return false;
    const [year, month, day] = value.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
  };
  const dateLabel = (value) => {
    if (!validDate(value)) return 'Date to be added';
    const [year, month, day] = value.split('-').map(Number);
    return new Intl.DateTimeFormat('en', {day:'2-digit', month:'short', year:'numeric'}).format(new Date(year, month - 1, day));
  };
  const sortedUpdates = (project) => (Array.isArray(project.updates) ? project.updates : []).filter((update) => validDate(update.date)).slice().sort((a,b) => b.date.localeCompare(a.date));
  const externalLink = (url, label, className = 'text-link') => safeUrl(url) ? `<a class="${className}" href="${escape(safeUrl(url))}" target="_blank" rel="noopener noreferrer">${escape(label)} <span aria-hidden="true">↗</span></a>` : '';
  const status = (value) => `<span class="status-badge status-${escape(String(value || 'Exploring').toLowerCase().replace(/[^a-z]/g,''))}">${escape(value || 'Exploring')}</span>`;
  const stack = (items) => `<div class="stack">${(Array.isArray(items) ? items : []).map((item) => `<span class="stack-tag">${escape(item)}</span>`).join('')}</div>`;

  document.querySelectorAll('[data-profile]').forEach((element) => { element.textContent = profile[element.dataset.profile] || ''; });
  document.getElementById('profile-intro').textContent = profile.intro || '';
  document.getElementById('profile-about').textContent = profile.about || '';
  document.getElementById('profile-initials').textContent = profile.initials || '↗';
  const profileMeta = document.getElementById('profile-meta');
  profileMeta.innerHTML = [
    profile.location ? `<span><strong>Based in</strong> ${escape(profile.location)}</span>` : '',
    profile.availability ? `<span><strong>Currently</strong> ${escape(profile.availability)}</span>` : ''
  ].join('');
  profileMeta.hidden = !profile.location && !profile.availability;
  document.getElementById('sample-note').hidden = !data.sampleContent;
  document.getElementById('project-count').textContent = String(projects.length).padStart(2,'0');
  document.getElementById('all-count').textContent = projects.length;
  document.getElementById('copyright-year').textContent = new Date().getFullYear();
  document.title = `${profile.name || 'Portfolio'} — Research & Robotics`;
  document.querySelector('meta[name="description"]').content = `${profile.name || 'Personal'} — ${profile.role || 'Research and technology portfolio'}. Projects, experiments, and latest updates.`;
  document.querySelectorAll('[data-github-link]').forEach((element) => {
    const url = safeUrl(profile.github);
    if (url) element.href = url; else element.hidden = true;
  });
  const email = String(profile.email || '').trim();
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    const emailLink = document.createElement('a');
    emailLink.className = 'button button-dark';
    emailLink.href = `mailto:${encodeURIComponent(email)}`;
    emailLink.innerHTML = 'Say hello <span aria-hidden="true">↗</span>';
    document.getElementById('contact-actions').prepend(emailLink);
    const githubLink = document.querySelector('#contact-actions [data-github-link]');
    if (githubLink) githubLink.className = 'text-link';
  }
  document.getElementById('focus-list').innerHTML = (profile.focus || []).map((item,index) => `<div class="focus-item"><span class="focus-number">${String(index+1).padStart(2,'0')}</span><div><h3>${escape(item.label)}</h3><p>${escape(item.detail)}</p></div></div>`).join('');

  const art = (project, index) => {
    const variant = ['signal','relay','fieldnotes'].includes(project.visual) ? project.visual : 'signal';
    // Local image paths also work when opening index.html directly from disk.
    // Absolute links may use HTTPS. Unsupported schemes fall back to a sketch.
    let image = '';
    const imagePath = String(project.image || '').trim();
    if (imagePath) {
      try {
        const url = new URL(imagePath, document.baseURI);
        const isRelative = !/^[a-z][a-z0-9+.-]*:/i.test(imagePath) && !imagePath.startsWith('//');
        if (url.protocol === 'https:' || (isRelative && ['http:','file:'].includes(url.protocol))) image = url.href;
      } catch { /* Leave the built-in visual in place. */ }
    }
    const imageFit = project.imageFit === 'contain' ? 'contain' : 'cover';
    const illustrations = {
      signal: `<svg viewBox="0 0 540 350" aria-hidden="true"><defs><pattern id="project-grid-${index}" width="25" height="25" patternUnits="userSpaceOnUse"><path d="M25 0H0V25" fill="none" stroke="#889e74" stroke-opacity=".12"/></pattern></defs><rect width="540" height="350" fill="url(#project-grid-${index})"/><g fill="none" stroke="#a5b494"><ellipse cx="270" cy="178" rx="106" ry="106"/><ellipse cx="270" cy="178" rx="151" ry="68" transform="rotate(-30 270 178)"/><ellipse cx="270" cy="178" rx="151" ry="68" transform="rotate(30 270 178)"/><path d="M105 178H435M270 57V299" stroke-dasharray="3 6"/></g><g transform="translate(232 130)"><path d="M0 24L40 0L80 24L40 48Z" fill="#d2e6b8" stroke="#677e51"/><path d="M0 24V72L40 96V48Z" fill="#aec791" stroke="#677e51"/><path d="M40 48V96L80 72V24Z" fill="#718959" stroke="#677e51"/></g><g fill="#45652c"><circle cx="390" cy="126" r="5"/><circle cx="139" cy="213" r="4"/><circle cx="270" cy="72" r="4"/></g><g fill="#6c7c5e" font-family="monospace" font-size="8" letter-spacing="1"><text x="407" y="122">QUESTION</text><text x="48" y="232">EXPERIMENT</text><text x="282" y="67">DISCOVERY</text></g></svg>`,
      relay: `<svg viewBox="0 0 540 260" aria-hidden="true"><g fill="none" stroke="#a4b5ad"><path d="M74 171L126 107L201 157L276 75L347 125L430 66"/><path d="M74 171H457M126 107V195M201 157V195M276 75V195M347 125V195M430 66V195" stroke-dasharray="3 5"/></g><g fill="#cedcd2" stroke="#708b79"><rect x="107" y="87" width="38" height="38" transform="rotate(9 126 106)"/><rect x="257" y="56" width="38" height="38" transform="rotate(9 276 75)"/><rect x="411" y="47" width="38" height="38" transform="rotate(9 430 66)"/></g><path d="M74 171L126 107L201 157L276 75L347 125L430 66" fill="none" stroke="#5f806b" stroke-width="2"/><g fill="#f1f5f0" stroke="#5f806b" stroke-width="2"><circle cx="74" cy="171" r="5"/><circle cx="126" cy="107" r="5"/><circle cx="201" cy="157" r="5"/><circle cx="276" cy="75" r="5"/><circle cx="347" cy="125" r="5"/><circle cx="430" cy="66" r="5"/></g><g font-family="monospace" font-size="8" fill="#6c7c73" letter-spacing="1"><text x="70" y="216">OBSERVE</text><text x="245" y="216">INTERPRET</text><text x="415" y="216">LEARN</text></g></svg>`,
      fieldnotes: `<svg viewBox="0 0 540 260" aria-hidden="true"><defs><pattern id="control-grid-${index}" width="25" height="25" patternUnits="userSpaceOnUse"><path d="M25 0H0V25" fill="none" stroke="#978a6e" stroke-opacity=".12"/></pattern></defs><rect width="540" height="260" fill="url(#control-grid-${index})"/><path d="M107 143H173M254 143H320M386 143H429V203H137V163" fill="none" stroke="#9a8b6d" stroke-width="1.5"/><path d="M167 139L173 143L167 147M314 139L320 143L314 147M137 169L133 175M137 169L141 175" fill="none" stroke="#9a8b6d"/><g fill="#f3efe5" stroke="#9b8c70"><rect x="71" y="112" width="67" height="61" rx="3"/><rect x="174" y="100" width="80" height="86" rx="3"/><rect x="321" y="112" width="67" height="61" rx="3"/></g><circle cx="214" cy="143" r="22" fill="#cec5aa" stroke="#9b8c70"/><path d="M199 147L208 136L218 150L230 134" fill="none" stroke="#827152" stroke-width="2"/><g fill="#82765d" font-family="monospace" font-size="8" text-anchor="middle" letter-spacing="1"><text x="104" y="147">INPUT</text><text x="354" y="147">OUTPUT</text><text x="214" y="85">CONTROL LOOP</text></g></svg>`
    };
    return `<div class="project-art art-${variant}${image ? ' has-project-image' : ''}"><div class="art-topline"><span>EXPLORATION ${String(index+1).padStart(2,'0')}</span><span>↗</span></div>${illustrations[variant]}<span class="art-label">${data.sampleContent ? 'CONCEPT SKETCH / EXAMPLE PROJECT' : 'CONCEPT SKETCH'}</span>${image ? `<img class="project-image" src="${escape(image)}" alt="${escape(project.imageAlt || `${project.name} project image`)}" loading="lazy" decoding="async" style="object-fit:${imageFit}">` : ''}</div>`;
  };
  grid.innerHTML = projects.map((project,index) => {
    const latest = sortedUpdates(project)[0];
    return `<article class="project-card ${project.featured ? 'featured' : ''}" id="project-${escape(project.id)}" data-status="${escape(project.status || 'Exploring')}">${art(project,index)}<div class="project-body"><div class="project-meta"><span class="project-category">${escape(project.category)}</span>${status(project.status)}</div><h3>${escape(project.name)}</h3><p class="project-description">${escape(project.description)}</p>${stack(project.stack)}<div class="project-update"><div class="project-update-label"><span>LATEST UPDATE</span>${latest ? `<time datetime="${escape(latest.date)}">${escape(dateLabel(latest.date))}</time>` : ''}</div><p>${escape(latest?.title || 'Project notes coming soon.')}</p></div><div class="project-actions"><button class="project-details-button" data-project-index="${index}" aria-label="Read project notes for ${escape(project.name)}">Project notes <span aria-hidden="true">↗</span></button>${externalLink(project.repo,'Code')}${externalLink(project.demo,'Live demo')}</div><p class="commit-note" id="commit-${index}" hidden></p></div></article>`;
  }).join('');
  grid.querySelectorAll('.project-image').forEach((image) => {
    const useSketch = () => {
      image.parentElement.classList.remove('has-project-image');
      image.remove();
    };
    image.addEventListener('error',useSketch,{once:true});
    // Cached failures can finish before the listener is attached.
    if (image.complete && !image.naturalWidth) useSketch();
  });
  document.querySelectorAll('[data-filter]').forEach((button) => button.addEventListener('click', () => {
    let visibleCount = 0;
    document.querySelectorAll('[data-filter]').forEach((item) => {
      const selected = item === button;
      item.classList.toggle('active',selected);
      item.setAttribute('aria-pressed',String(selected));
    });
    grid.querySelectorAll('.project-card').forEach((card) => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.status !== button.dataset.filter;
      if (!card.hidden) visibleCount++;
    });
    document.getElementById('empty-state').hidden = visibleCount > 0;
    document.getElementById('filter-announcement').textContent = `${visibleCount} ${visibleCount === 1 ? 'project' : 'projects'} shown.`;
  }));
  const allUpdates = projects.flatMap((project,index) => sortedUpdates(project).map((update) => ({...update,project,index}))).sort((a,b) => b.date.localeCompare(a.date));
  document.getElementById('updates-list').innerHTML = allUpdates.length ? allUpdates.slice(0,5).map((update) => `<article class="update-row"><div class="update-date"><time datetime="${escape(update.date)}">${escape(dateLabel(update.date))}</time></div><div class="update-text"><h3>${escape(update.title)}</h3><p>${escape(update.description)}</p></div><span class="update-project">${escape(update.project.name)}</span><button class="update-open" data-project-index="${update.index}" aria-label="Read notes for ${escape(update.project.name)}">↗</button></article>`).join('') : '<p class="updates-footnote">New project notes will appear here.</p>';
  const openProject = (index, trigger) => {
    const project = projects[index];
    if (!project) return;
    dialogTrigger = trigger;
    const updates = sortedUpdates(project);
    document.getElementById('dialog-content').innerHTML = `${data.sampleContent ? '<p class="dialog-sample">DRAFT / EXAMPLE PROJECT CONTENT</p>' : ''}<div class="project-meta"><span class="project-category">${escape(project.category)}</span>${status(project.status)}</div><h2 id="dialog-title">${escape(project.name)}</h2><p class="dialog-description">${escape(project.description)}</p>${stack(project.stack)}<div class="project-actions">${externalLink(project.repo,'View code')}${externalLink(project.demo,'Open live demo')}</div><h3 class="dialog-section-title">Project update history</h3>${updates.length ? updates.map((update) => `<article class="dialog-update"><time datetime="${escape(update.date)}">${escape(dateLabel(update.date))}</time><h3>${escape(update.title)}</h3><p>${escape(update.description)}</p></article>`).join('') : '<p class="dialog-description">Project notes coming soon.</p>'}`;
    dialog.showModal();
    document.body.classList.add('dialog-open');
  };
  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-project-index]');
    if (button) openProject(Number(button.dataset.projectIndex),button);
  });
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); dialogTrigger?.focus(); });

  // Optional public GitHub activity; authored updates still drive the build log.
  // No token is needed or accepted. API failure leaves written updates intact.
  const githubRepository = (value) => {
    try {
      const url = new URL(value);
      if (url.hostname.toLowerCase() !== 'github.com' || url.protocol !== 'https:') return null;
      const parts = url.pathname.split('/').filter(Boolean);
      if (parts.length !== 2 || !parts.every((part) => /^[A-Za-z0-9_.-]+$/.test(part))) return null;
      return parts.map(encodeURIComponent).join('/');
    } catch { return null; }
  };
  const syncCommit = async (project,index) => {
    const repository = githubRepository(project.repo);
    if (!repository) return;
    const note = document.getElementById(`commit-${index}`);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(),7000);
    try {
      const response = await fetch(`https://api.github.com/repos/${repository}/commits?per_page=1`, {headers:{Accept:'application/vnd.github+json'},signal:controller.signal});
      if (!response.ok) throw new Error('GitHub unavailable');
      const commits = await response.json();
      const commit = commits[0];
      const date = commit?.commit?.committer?.date?.slice(0,10);
      const url = safeUrl(commit?.html_url);
      if (!commit || !validDate(date) || !url) throw new Error('No commit available');
      note.innerHTML = `Latest GitHub commit · <a href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(dateLabel(date))} ↗</a>`;
      note.title = String(commit.commit.message || '').split('\n')[0];
    } catch {
      note.textContent = 'GitHub activity is unavailable. Written project updates are shown above.';
    } finally {
      clearTimeout(timer);
      note.hidden = false;
    }
  };
  if (data.github?.enabled) projects.forEach((project,index) => { void syncCommit(project,index); });
})();
