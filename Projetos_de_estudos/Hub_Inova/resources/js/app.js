/* ═══════════════════════════════════════════
   PRODUTIVO — app.js
   HTML/CSS/JS puro, sem frameworks
═══════════════════════════════════════════ */

//'use strict';

/* global lucide */

// ─── CONSTANTES ─────────────────────────────
/*const COLORS = ['#7c5cfc','#38bdf8','#f472b6','#facc15','#34d399','#fb923c','#a78bfa'];

const QUOTES = [
  "A disciplina é a ponte entre metas e realizações.",
  "Pequenos progressos todos os dias levam a grandes resultados.",
  "O segredo de ir em frente é começar.",
  "Cada dia é uma nova oportunidade para crescer.",
  "Foco, força e fé — seu sucesso é inevitável.",
  "A consistência supera o talento quando o talento não é consistente.",
  "Grandes coisas acontecem para quem não desiste.",
  "Você é mais forte do que imagina.",
  "Comece onde você está, use o que você tem, faça o que pode.",
  "A jornada de mil milhas começa com um único passo."
];

const MONTHS_PT = [
  'Janeiro','Fevereiro','Março','Abril','Maio','Junho',
  'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'
];
const DAYS_PT = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];

// ─── STORAGE HELPERS ────────────────────────
function load(key, fallback = []) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
}
function save(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

// ─── STATE ──────────────────────────────────
const state = {
  events:       load('prod_events', []),
  tasks:        load('prod_tasks', []),
  notes:        load('prod_notes', []),
  folders:      load('prod_folders', [{ id:'demo1', name:'Maria', password:'1234' }, { id:'demo2', name:'João', password:'1234' }]),
  entries:      load('prod_entries', []),
  // calendar
  calMonth:     new Date().getMonth(),
  calYear:      new Date().getFullYear(),
  calSelected:  null,
  calColor:     COLORS[0],
  // notes
  noteColor:    COLORS[0],
  // diary
  diaryFolder:  null,
  // todo filter
  todoFilter:   'all',
};

// persist folders initial if none saved
if (!localStorage.getItem('prod_folders')) save('prod_folders', state.folders);

// ─── DOM SHORTCUTS ───────────────────────────
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ═══════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════
function navigate(pageId) {
  // Hide all pages
  $$('.page').forEach(p => p.classList.remove('active'));
  // Show target
  const target = $(`#page-${pageId}`);
  if (target) target.classList.add('active');

  // Update nav items
  $$('.nav-item, .mob-item').forEach(el => {
    el.classList.toggle('active', el.dataset.page === pageId);
  });

  // Refresh page content
  if (pageId === 'dashboard') renderDashboard();
  if (pageId === 'calendar')  renderCalendar();
  if (pageId === 'todos')     renderTodos();
  if (pageId === 'notes')     renderNotes();
  if (pageId === 'diary')     showFoldersView();

  // Close mobile sidebar
  closeSidebar();
}

// Wire up all [data-page] links
document.addEventListener('click', e => {
  const el = e.target.closest('[data-page]');
  if (!el) return;
  e.preventDefault();
  navigate(el.dataset.page);
});

// ═══════════════════════════════════════════
// SIDEBAR MOBILE
// ═══════════════════════════════════════════
const sidebar  = $('#sidebar');
const overlay  = $('#overlay');
const hamburger = $('#hamburger');

hamburger.addEventListener('click', () => {
  sidebar.classList.add('open');
  overlay.classList.add('show');
});
function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
}
overlay.addEventListener('click', closeSidebar);

// ═══════════════════════════════════════════
// DASHBOARD
// ═══════════════════════════════════════════
function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Bom dia! ☀️';
  if (h < 18) return 'Boa tarde! 🌤️';
  return 'Boa noite! 🌙';
}

function formatDatePT(dateStr) {
  // dateStr: "yyyy-mm-dd"
  const [y, m, d] = dateStr.split('-').map(Number);
  return `${d} de ${MONTHS_PT[m - 1]}`;
}

function renderDashboard() {
  // Greeting
  $('#greeting').textContent = getGreeting();

  // Date label
  const now = new Date();
  const dayName = DAYS_PT[now.getDay()];
  $('#date-label').textContent = `${dayName}, ${now.getDate()} de ${MONTHS_PT[now.getMonth()]} de ${now.getFullYear()}`;

  // Quote
  $('#daily-quote').textContent = QUOTES[now.getDate() % QUOTES.length];

  // Stats
  const pending   = state.tasks.filter(t => t.status === 'pending').length;
  const done      = state.tasks.filter(t => t.status === 'completed').length;
  const todayStr  = toDateStr(new Date());
  const upcoming  = state.events.filter(e => e.date >= todayStr).length;

  $('#stat-pending').textContent = pending;
  $('#stat-done').textContent    = done;
  $('#stat-events').textContent  = upcoming;
  $('#stat-notes').textContent   = state.notes.length;

  // Upcoming events (next 3)
  const evList = $('#dash-events-list');
  const upEvents = state.events.filter(e => e.date >= todayStr).slice(0, 3);
  if (upEvents.length === 0) {
    evList.innerHTML = '<p class="empty-msg">Nenhum evento próximo</p>';
  } else {
    evList.innerHTML = upEvents.map(ev => `
      <div class="dash-event-item">
        <div class="dash-event-dot" style="background:${ev.color || COLORS[0]}"></div>
        <div class="dash-event-info">
          <p>${escHtml(ev.title)}</p>
          <span>${formatDatePT(ev.date)}</span>
        </div>
      </div>`).join('');
  }

  // Pending tasks (top 4)
  const taskList = $('#dash-tasks-list');
  const pendingTasks = state.tasks.filter(t => t.status === 'pending').slice(0, 4);
  if (pendingTasks.length === 0) {
    taskList.innerHTML = '<p class="empty-msg">Nenhuma tarefa pendente</p>';
  } else {
    taskList.innerHTML = pendingTasks.map(t => `
      <div class="dash-task-item">
        <div class="dash-task-dot"></div>
        <p>${escHtml(t.title)}</p>
      </div>`).join('');
  }

  // Recent notes (top 4)
  const notesList = $('#dash-notes-list');
  const recentNotes = state.notes.slice(0, 4);
  if (recentNotes.length === 0) {
    notesList.innerHTML = '<p class="empty-msg">Nenhuma nota criada</p>';
  } else {
    notesList.innerHTML = recentNotes.map(n => `
      <div class="note-preview-item" style="border-color:${n.color || COLORS[0]}">
        <p class="title">${escHtml(n.title)}</p>
        <p class="body">${escHtml(n.content || '')}</p>
      </div>`).join('');
  }

  lucide.createIcons();
}

// ═══════════════════════════════════════════
// CALENDAR
// ═══════════════════════════════════════════
function toDateStr(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function renderCalendar() {
  const { calYear, calMonth } = state;

  $('#cal-month-label').textContent =
    `${MONTHS_PT[calMonth]} ${calYear}`;

  // Build grid
  const firstDay = new Date(calYear, calMonth, 1);
  const lastDay  = new Date(calYear, calMonth + 1, 0);
  const startDow = firstDay.getDay(); // 0=Sun
  const totalCells = Math.ceil((startDow + lastDay.getDate()) / 7) * 7;

  const todayStr = toDateStr(new Date());
  const grid = $('#cal-grid');
  grid.innerHTML = '';

  for (let i = 0; i < totalCells; i++) {
    const dayOffset = i - startDow;
    const cellDate  = new Date(calYear, calMonth, 1 + dayOffset);
    const dateStr   = toDateStr(cellDate);
    const isCurrentMonth = cellDate.getMonth() === calMonth;
    const isToday   = dateStr === todayStr;
    const isSelected = state.calSelected === dateStr;

    const dayEvents = state.events.filter(e => e.date === dateStr);

    const cell = document.createElement('button');
    cell.className = 'cal-day'
      + (!isCurrentMonth ? ' other-month' : '')
      + (isToday && !isSelected ? ' today' : '')
      + (isSelected ? ' selected' : '');

    cell.innerHTML = `
      <span>${cellDate.getDate()}</span>
      ${dayEvents.length ? `<div class="cal-day-dots">${dayEvents.slice(0,3).map(e =>
        `<div class="cal-dot" style="background:${e.color || COLORS[0]}"></div>`
      ).join('')}</div>` : ''}`;

    cell.addEventListener('click', () => {
      state.calSelected = dateStr;
      renderCalendar();
      renderCalDayPanel();
    });
    grid.appendChild(cell);
  }

  renderCalDayPanel();
}

function renderCalDayPanel() {
  const label = $('#cal-selected-label');
  const addBtn = $('#cal-add-btn');
  const dayEventsEl = $('#cal-day-events');

  if (!state.calSelected) {
    label.textContent = 'Selecione um dia';
    addBtn.style.display = 'none';
    dayEventsEl.innerHTML = '<p class="empty-msg">Nenhum evento neste dia</p>';
    return;
  }

  const [y, m, d] = state.calSelected.split('-').map(Number);
  label.textContent = `${d} de ${MONTHS_PT[m - 1]}`;
  addBtn.style.display = 'flex';

  const dayEvents = state.events.filter(e => e.date === state.calSelected);
  if (dayEvents.length === 0) {
    dayEventsEl.innerHTML = '<p class="empty-msg">Nenhum evento neste dia</p>';
  } else {
    dayEventsEl.innerHTML = dayEvents.map(ev => `
      <div class="event-item">
        <div class="event-item-bar" style="background:${ev.color || COLORS[0]}"></div>
        <div class="event-item-info">
          <p>${escHtml(ev.title)}</p>
          ${ev.description ? `<span>${escHtml(ev.description)}</span>` : ''}
        </div>
        <button class="event-item-del" data-del-event="${ev.id}">
          <i data-lucide="x"></i>
        </button>
      </div>`).join('');
    lucide.createIcons();

    $$('[data-del-event]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.events = state.events.filter(e => e.id !== btn.dataset.delEvent);
        save('prod_events', state.events);
        renderCalDayPanel();
        renderCalendar();
      });
    });
  }
}

// Calendar nav
$('#cal-prev').addEventListener('click', () => {
  state.calMonth--;
  if (state.calMonth < 0) { state.calMonth = 11; state.calYear--; }
  renderCalendar();
});
$('#cal-next').addEventListener('click', () => {
  state.calMonth++;
  if (state.calMonth > 11) { state.calMonth = 0; state.calYear++; }
  renderCalendar();
});

// Add button toggles form
$('#cal-add-btn').addEventListener('click', () => {
  const form = $('#cal-form');
  form.style.display = form.style.display === 'none' ? 'flex' : 'none';
});

// Color picker — calendar
buildColorPicker('cal-colors', (c) => { state.calColor = c; });

// Calendar form submit
$('#cal-form').addEventListener('submit', e => {
  e.preventDefault();
  const title = $('#cal-title').value.trim();
  const desc  = $('#cal-desc').value.trim();
  if (!title || !state.calSelected) return;

  const ev = { id: uid(), title, description: desc, date: state.calSelected, color: state.calColor };
  state.events.push(ev);
  save('prod_events', state.events);

  $('#cal-title').value = '';
  $('#cal-desc').value  = '';
  $('#cal-form').style.display = 'none';
  renderCalendar();
});

// ═══════════════════════════════════════════
// TO-DO LIST
// ═══════════════════════════════════════════
function renderTodos() {
  const filter  = state.todoFilter;
  const all     = state.tasks;
  const pending = all.filter(t => t.status === 'pending');
  const done    = all.filter(t => t.status === 'completed');

  $('#todo-count-all').textContent     = all.length;
  $('#todo-count-pending').textContent = pending.length;
  $('#todo-count-done').textContent    = done.length;

  const filtered = filter === 'pending' ? pending
                 : filter === 'completed' ? done
                 : all;

  const list = $('#todo-list');
  if (filtered.length === 0) {
    list.innerHTML = `
      <div class="glass-card empty-full">
        <svg class="empty-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
        <p>Nenhuma tarefa encontrada</p>
      </div>`;
    return;
  }

  list.innerHTML = filtered.map(t => `
    <div class="task-item" data-id="${t.id}">
      <button class="task-check ${t.status === 'completed' ? 'done' : ''}" data-toggle="${t.id}">
        ${t.status === 'completed' ? '<i data-lucide="check"></i>' : ''}
      </button>
      <div class="task-body">
        <p class="task-title ${t.status === 'completed' ? 'done' : ''}">${escHtml(t.title)}</p>
        ${t.description ? `<p class="task-desc">${escHtml(t.description)}</p>` : ''}
      </div>
      <div class="task-actions">
        <button class="task-action-btn" data-edit-task="${t.id}" title="Editar">
          <i data-lucide="pencil"></i>
        </button>
        <button class="task-action-btn del" data-del-task="${t.id}" title="Excluir">
          <i data-lucide="trash-2"></i>
        </button>
      </div>
    </div>`).join('');

  lucide.createIcons();

  // Toggle complete
  $$('[data-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const task = state.tasks.find(t => t.id === btn.dataset.toggle);
      if (task) {
        task.status = task.status === 'completed' ? 'pending' : 'completed';
        save('prod_tasks', state.tasks);
        renderTodos();
      }
    });
  });

  // Edit
  $$('[data-edit-task]').forEach(btn => {
    btn.addEventListener('click', () => {
      const task = state.tasks.find(t => t.id === btn.dataset.editTask);
      if (!task) return;
      $('#todo-edit-id').value = task.id;
      $('#todo-title').value   = task.title;
      $('#todo-desc').value    = task.description || '';
      $('#todo-form-wrap').style.display = 'block';
      $('#todo-title').focus();
    });
  });

  // Delete
  $$('[data-del-task]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.tasks = state.tasks.filter(t => t.id !== btn.dataset.delTask);
      save('prod_tasks', state.tasks);
      renderTodos();
    });
  });
}

// New task button
$('#todo-new-btn').addEventListener('click', () => {
  $('#todo-edit-id').value = '';
  $('#todo-title').value   = '';
  $('#todo-desc').value    = '';
  const wrap = $('#todo-form-wrap');
  wrap.style.display = wrap.style.display === 'none' ? 'block' : 'none';
  if (wrap.style.display === 'block') $('#todo-title').focus();
});

$('#todo-cancel').addEventListener('click', () => {
  $('#todo-form-wrap').style.display = 'none';
});

$('#todo-form').addEventListener('submit', e => {
  e.preventDefault();
  const title = $('#todo-title').value.trim();
  const desc  = $('#todo-desc').value.trim();
  const editId = $('#todo-edit-id').value;
  if (!title) return;

  if (editId) {
    const task = state.tasks.find(t => t.id === editId);
    if (task) { task.title = title; task.description = desc; }
  } else {
    state.tasks.unshift({ id: uid(), title, description: desc, status: 'pending' });
  }

  save('prod_tasks', state.tasks);
  $('#todo-form-wrap').style.display = 'none';
  $('#todo-edit-id').value = '';
  renderTodos();
});

// Filter buttons
$$('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.todoFilter = btn.dataset.filter;
    renderTodos();
  });
});

// ═══════════════════════════════════════════
// NOTES
// ═══════════════════════════════════════════
function openNoteModal(note = null) {
  const modal = $('#note-modal');
  $('#note-modal-title').textContent = note ? 'Editar Nota' : 'Nova Nota';
  $('#note-edit-id').value   = note ? note.id : '';
  $('#note-title').value     = note ? note.title : '';
  $('#note-content').value   = note ? (note.content || '') : '';
  state.noteColor = note ? (note.color || COLORS[0]) : COLORS[0];
  updateColorPicker('note-colors', state.noteColor);
  modal.classList.add('open');
  setTimeout(() => $('#note-title').focus(), 50);
}
function closeNoteModal() { $('#note-modal').classList.remove('open'); }

$('#note-new-btn').addEventListener('click', () => openNoteModal());
$('#note-modal-close').addEventListener('click', closeNoteModal);
$('#note-cancel').addEventListener('click', closeNoteModal);
$('#note-modal').addEventListener('click', e => { if (e.target === $('#note-modal')) closeNoteModal(); });

buildColorPicker('note-colors', (c) => { state.noteColor = c; });

$('#note-form').addEventListener('submit', e => {
  e.preventDefault();
  const title   = $('#note-title').value.trim();
  const content = $('#note-content').value.trim();
  const editId  = $('#note-edit-id').value;
  if (!title) return;

  if (editId) {
    const note = state.notes.find(n => n.id === editId);
    if (note) { note.title = title; note.content = content; note.color = state.noteColor; }
  } else {
    state.notes.unshift({ id: uid(), title, content, color: state.noteColor });
  }

  save('prod_notes', state.notes);
  closeNoteModal();
  renderNotes();
});

function renderNotes() {
  const grid = $('#notes-grid');
  if (state.notes.length === 0) {
    grid.innerHTML = `
      <div class="glass-card empty-full" style="grid-column:1/-1">
        <svg class="empty-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><polyline points="14 2 14 8 20 8"/></svg>
        <p>Nenhuma nota criada ainda</p>
      </div>`;
    return;
  }

  grid.innerHTML = state.notes.map(n => `
    <div class="note-card" style="border-top-color:${n.color || COLORS[0]}">
      <div class="note-bg-orb" style="background:${n.color || COLORS[0]}"></div>
      <p class="note-title">${escHtml(n.title)}</p>
      <p class="note-body">${escHtml(n.content || '')}</p>
      <div class="note-actions">
        <button class="task-action-btn" data-edit-note="${n.id}"><i data-lucide="pencil"></i></button>
        <button class="task-action-btn del" data-del-note="${n.id}"><i data-lucide="trash-2"></i></button>
      </div>
    </div>`).join('');

  lucide.createIcons();

  $$('[data-edit-note]').forEach(btn => {
    btn.addEventListener('click', () => {
      const note = state.notes.find(n => n.id === btn.dataset.editNote);
      if (note) openNoteModal(note);
    });
  });

  $$('[data-del-note]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.notes = state.notes.filter(n => n.id !== btn.dataset.delNote);
      save('prod_notes', state.notes);
      renderNotes();
    });
  });
}

// ═══════════════════════════════════════════
// DIARY
// ═══════════════════════════════════════════
function showFoldersView() {
  $('#diary-folders-view').style.display  = 'block';
  $('#diary-password-view').style.display = 'none';
  $('#diary-entries-view').style.display  = 'none';
  state.diaryFolder = null;
  renderFolders();
}

function showPasswordView(folder) {
  state.diaryFolder = folder;
  $('#diary-folders-view').style.display  = 'none';
  $('#diary-password-view').style.display = 'block';
  $('#diary-entries-view').style.display  = 'none';
  $('#lock-folder-name').textContent = `Diário de ${folder.name}`;
  $('#diary-pw-input').value = '';
  $('#diary-pw-error').textContent = '';
  setTimeout(() => $('#diary-pw-input').focus(), 50);
}

function showEntriesView() {
  $('#diary-folders-view').style.display  = 'none';
  $('#diary-password-view').style.display = 'none';
  $('#diary-entries-view').style.display  = 'block';
  $('#diary-folder-title').textContent = `Diário de ${state.diaryFolder.name}`;
  renderEntries();
}

function renderFolders() {
  const grid = $('#folders-grid');
  if (state.folders.length === 0) {
    grid.innerHTML = `
      <div class="glass-card empty-full" style="grid-column:1/-1">
        <i data-lucide="book-open" class="empty-icon"></i>
        <p>Nenhuma pasta criada</p>
      </div>`;
    lucide.createIcons();
    return;
  }

  grid.innerHTML = state.folders.map(f => `
    <div class="folder-card" data-open-folder="${f.id}">
      <button class="folder-del" data-del-folder="${f.id}"><i data-lucide="trash-2"></i></button>
      <div class="folder-icon-wrap"><i data-lucide="folder-open"></i></div>
      <p class="folder-name">${escHtml(f.name)}</p>
      <div class="folder-lock"><i data-lucide="lock"></i><span>Protegido</span></div>
    </div>`).join('');

  lucide.createIcons();

  $$('[data-open-folder]').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('[data-del-folder]')) return;
      const folder = state.folders.find(f => f.id === card.dataset.openFolder);
      if (folder) showPasswordView(folder);
    });
  });

  $$('[data-del-folder]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      state.folders = state.folders.filter(f => f.id !== btn.dataset.delFolder);
      state.entries = state.entries.filter(e => e.folderId !== btn.dataset.delFolder);
      save('prod_folders', state.folders);
      save('prod_entries', state.entries);
      renderFolders();
    });
  });
}

// Password form
$('#diary-pw-form').addEventListener('submit', e => {
  e.preventDefault();
  const input = $('#diary-pw-input').value;
  if (input === state.diaryFolder.password) {
    showEntriesView();
  } else {
    $('#diary-pw-error').textContent = 'Senha incorreta';
    $('#diary-pw-input').value = '';
    $('#diary-pw-input').focus();
  }
});
$('#diary-pw-back').addEventListener('click', showFoldersView);

// Back from entries
$('#diary-back-btn').addEventListener('click', showFoldersView);

// Folder form
$('#diary-new-folder-btn').addEventListener('click', () => {
  $('#folder-modal').classList.add('open');
  setTimeout(() => $('#folder-name').focus(), 50);
});
$('#folder-modal-close').addEventListener('click', () => $('#folder-modal').classList.remove('open'));
$('#folder-cancel').addEventListener('click', () => $('#folder-modal').classList.remove('open'));
$('#folder-modal').addEventListener('click', e => { if (e.target === $('#folder-modal')) $('#folder-modal').classList.remove('open'); });

$('#folder-form').addEventListener('submit', e => {
  e.preventDefault();
  const name = $('#folder-name').value.trim();
  const pwd  = $('#folder-password').value.trim();
  if (!name || !pwd) return;
  state.folders.push({ id: uid(), name, password: pwd });
  save('prod_folders', state.folders);
  $('#folder-modal').classList.remove('open');
  $('#folder-name').value = '';
  $('#folder-password').value = '';
  renderFolders();
});

// Entry form
function openEntryModal(entry = null) {
  const modal = $('#entry-modal');
  $('#entry-modal-title').textContent = entry ? 'Editar Entrada' : 'Nova Entrada';
  $('#entry-edit-id').value   = entry ? entry.id : '';
  $('#entry-title').value     = entry ? entry.title : '';
  $('#entry-content').value   = entry ? (entry.content || '') : '';
  modal.classList.add('open');
  setTimeout(() => $('#entry-title').focus(), 50);
}
function closeEntryModal() { $('#entry-modal').classList.remove('open'); }

$('#diary-new-entry-btn').addEventListener('click', () => openEntryModal());
$('#entry-modal-close').addEventListener('click', closeEntryModal);
$('#entry-cancel').addEventListener('click', closeEntryModal);
$('#entry-modal').addEventListener('click', e => { if (e.target === $('#entry-modal')) closeEntryModal(); });

$('#entry-form').addEventListener('submit', e => {
  e.preventDefault();
  const title   = $('#entry-title').value.trim();
  const content = $('#entry-content').value.trim();
  const editId  = $('#entry-edit-id').value;
  if (!title || !content) return;

  const now = new Date();
  const dateStr = `${now.getDate()} de ${MONTHS_PT[now.getMonth()]} de ${now.getFullYear()}`;

  if (editId) {
    const entry = state.entries.find(en => en.id === editId);
    if (entry) { entry.title = title; entry.content = content; }
  } else {
    state.entries.unshift({ id: uid(), folderId: state.diaryFolder.id, title, content, date: dateStr });
  }

  save('prod_entries', state.entries);
  closeEntryModal();
  renderEntries();
});

function renderEntries() {
  const list = $('#entries-list');
  const entries = state.entries.filter(e => e.folderId === state.diaryFolder.id);

  if (entries.length === 0) {
    list.innerHTML = `
      <div class="glass-card empty-full">
        <i data-lucide="book-open" class="empty-icon"></i>
        <p>Nenhuma entrada ainda</p>
      </div>`;
    lucide.createIcons();
    return;
  }

  list.innerHTML = entries.map(en => `
    <div class="diary-entry">
      <div class="entry-header">
        <div>
          <p class="entry-title">${escHtml(en.title)}</p>
          <p class="entry-date">${escHtml(en.date || '')}</p>
        </div>
        <div class="entry-actions">
          <button class="task-action-btn" data-edit-entry="${en.id}"><i data-lucide="pencil"></i></button>
          <button class="task-action-btn del" data-del-entry="${en.id}"><i data-lucide="trash-2"></i></button>
        </div>
      </div>
      <p class="entry-body">${escHtml(en.content)}</p>
    </div>`).join('');

  lucide.createIcons();

  $$('[data-edit-entry]').forEach(btn => {
    btn.addEventListener('click', () => {
      const entry = state.entries.find(e => e.id === btn.dataset.editEntry);
      if (entry) openEntryModal(entry);
    });
  });

  $$('[data-del-entry]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.entries = state.entries.filter(e => e.id !== btn.dataset.delEntry);
      save('prod_entries', state.entries);
      renderEntries();
    });
  });
}

// ═══════════════════════════════════════════
// COLOR PICKER HELPER
// ═══════════════════════════════════════════
function buildColorPicker(containerId, onChange) {
  const container = $(`#${containerId}`);
  container.innerHTML = COLORS.map((c, i) => `
    <button type="button" class="color-swatch ${i === 0 ? 'selected' : ''}"
      data-color="${c}" style="background:${c}"></button>`).join('');

  container.addEventListener('click', e => {
    const swatch = e.target.closest('.color-swatch');
    if (!swatch) return;
    $$('.color-swatch', container).forEach(s => s.classList.remove('selected'));
    swatch.classList.add('selected');
    onChange(swatch.dataset.color);
  });
}

function updateColorPicker(containerId, selectedColor) {
  $$(`#${containerId} .color-swatch`).forEach(s => {
    s.classList.toggle('selected', s.dataset.color === selectedColor);
  });
}

// ═══════════════════════════════════════════
// UTILITY
// ═══════════════════════════════════════════
function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

// ═══════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  navigate('dashboard');
});*/