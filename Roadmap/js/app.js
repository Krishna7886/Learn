/* ==========================================================================
   MAIN APPLICATION ROUTER, EVENT BINDINGS & INTERACTIVE CONTROLLERS
   ========================================================================== */

let currentRoute = 'dashboard';
let activeTopicDetailId = AppState.currentTopicId || 'html-html5';

function navigateTo(route) {
  currentRoute = route;
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.route === route);
  });

  const sidebar = document.getElementById('sidebar');
  if (sidebar) sidebar.classList.remove('open');

  if (route === 'continue') {
    openTopicPage(AppState.currentTopicId || 'html-html5');
    return;
  }

  renderCurrentView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openTopicPage(topicId) {
  activeTopicDetailId = topicId;
  currentRoute = 'topic-detail';
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.route === 'continue');
  });
  renderCurrentView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(runLiveSandbox, 60);
}

function openQuizPage(topicId) {
  startQuizSession(topicId, 'topic');
  currentRoute = 'quizzes';
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.route === 'quizzes');
  });
  renderCurrentView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function launchFullMockExam() {
  startQuizSession('html-html5', 'full-mock');
  renderCurrentView();
}

function renderCurrentView() {
  const container = document.getElementById('viewContainer');
  const breadcrumb = document.getElementById('topBreadcrumb');
  if (!container) return;

  const titles = {
    'dashboard': 'Dashboard',
    'roadmap': 'My Interactive Learning Roadmap',
    'subjects': 'All Subjects (24)',
    'ai-tutor': 'AI Personal Tutor Studio',
    'quizzes': 'Practice & Quizzes',
    'projects': 'Practical Projects',
    'planner': 'Personalized Study Planner',
    'progress': 'My Progress & Analytics',
    'notes': 'Notes, Bookmarks & Flashcards',
    'career': 'Career & Job Readiness',
    'resources': 'Free Learning Resources',
    'achievements': 'Achievements & Certificates',
    'settings': 'University Settings'
  };

  if (currentRoute === 'topic-detail') {
    const t = SYLLABUS_TOPICS.find(x => x.id === activeTopicDetailId) || SYLLABUS_TOPICS[0];
    breadcrumb.textContent = `Learning / #${t.number} ${t.title}`;
    container.innerHTML = renderTopicDetailPage(t.id);
    updateAiContextBadge();
    return;
  }

  breadcrumb.textContent = titles[currentRoute] || 'Dashboard';

  switch (currentRoute) {
    case 'dashboard': container.innerHTML = renderDashboard(); break;
    case 'roadmap': container.innerHTML = renderRoadmap(); break;
    case 'subjects': container.innerHTML = renderAllSubjects(); break;
    case 'ai-tutor': container.innerHTML = renderFullAiTutorPage(); break;
    case 'quizzes': container.innerHTML = renderQuizzesPage(); break;
    case 'projects': container.innerHTML = renderProjectsPage(); break;
    case 'planner': container.innerHTML = renderPlannerPage(); break;
    case 'progress': container.innerHTML = renderProgressPage(); break;
    case 'notes': container.innerHTML = renderNotesAndBookmarksPage(); break;
    case 'career': container.innerHTML = renderCareerPage(); break;
    case 'resources': container.innerHTML = renderResourcesPage(); break;
    case 'achievements': container.innerHTML = renderAchievementsPage(); break;
    case 'settings': container.innerHTML = renderSettingsPage(); break;
    default: container.innerHTML = renderDashboard();
  }
  updateAiContextBadge();
}

/* Interactive Lesson & Sandbox Actions */
function toggleLessonAndRefresh(topicId, idx) {
  toggleLessonComplete(topicId, idx);
  renderCurrentView();
}

function runLiveSandbox() {
  const editor = document.getElementById('sandboxEditor');
  const frame = document.getElementById('sandboxOutput');
  if (!editor || !frame) return;
  frame.srcdoc = editor.value;
}

function saveTopicNote(topicId) {
  const area = document.getElementById('topicNoteArea');
  if (!area) return;
  AppState.notes[topicId] = area.value;
  saveState();
  showToast('💾 Study note saved locally!');
}

function toggleBookmark(topicId) {
  const idx = AppState.bookmarks.indexOf(topicId);
  if (idx === -1) {
    AppState.bookmarks.push(topicId);
    showToast('🔖 Topic added to Bookmarks!');
  } else {
    AppState.bookmarks.splice(idx, 1);
    showToast('Bookmark removed.');
  }
  saveState();
  renderCurrentView();
}

function updateCutterSoftware(sw) {
  AppState.cutterSoftware = sw;
  saveState();
  showToast(`✂️ Cutter software updated to ${sw}`);
  renderCurrentView();
}

function downloadTopicNotes(topicId) {
  const t = SYLLABUS_TOPICS.find(x => x.id === topicId);
  if (!t) return;
  const content = `# ${t.title} — Study Notes\n\n## What is it?\n${t.whatIsIt}\n\n## Why it matters\n${t.whyImportant}\n\n## Key Lessons\n${t.stepByStepLessons.map(l => `- ${l.title}: ${l.content}`).join('\n')}\n\n## My Personal Notes\n${AppState.notes[t.id] || '(No custom notes yet)'}`;
  downloadTextFile(`${t.id}-study-notes.md`, content);
}

/* Quiz Actions */
function selectQuizOption(qIdx, optIdx) {
  if (activeQuizState.submitted) return;
  activeQuizState.answers[qIdx] = optIdx;
  renderCurrentView();
}

function submitActiveQuiz() {
  const qs = activeQuizState.questions;
  let score = 0;
  qs.forEach((q, idx) => {
    if (activeQuizState.answers[idx] === q.answerIndex) score++;
  });
  const pct = Math.round((score / qs.length) * 100);
  const passed = pct >= AppState.passingScore;
  activeQuizState.submitted = true;

  const topic = SYLLABUS_TOPICS.find(t => t.id === activeQuizState.topicId) || SYLLABUS_TOPICS[0];
  const label = activeQuizState.mode === 'full-mock' ? 'Full Syllabus Mock Exam' : topic.title;

  AppState.quizHistory.unshift({
    topicId: activeQuizState.topicId,
    topicTitle: label,
    score: pct,
    passed,
    date: new Date().toLocaleDateString()
  });

  if (passed) {
    AppState.xp += 100;
    if (activeQuizState.mode === 'topic') checkAutoTopicComplete(activeQuizState.topicId);
    showToast(`🎉 Quiz Passed (${pct}%)! +100 XP earned!`);
  } else {
    showToast(`Score: ${pct}%. Review explanations and retry to pass (${AppState.passingScore}%).`);
  }
  saveState();
  renderCurrentView();
}

function retryActiveQuiz() {
  startQuizSession(activeQuizState.topicId, activeQuizState.mode);
  renderCurrentView();
}

/* Projects, Planner, Flashcards, Career & Settings Actions */
function toggleProjectDone(projId) {
  const idx = AppState.completedProjects.indexOf(projId);
  if (idx === -1) {
    AppState.completedProjects.push(projId);
    AppState.xp += 200;
    showToast('🛠️ Project marked complete! +200 XP!');
  } else {
    AppState.completedProjects.splice(idx, 1);
  }
  saveState();
  renderCurrentView();
}

function generateSmartSchedule() {
  const hrs = parseFloat(document.getElementById('planHoursInput').value) || 2;
  const time = document.getElementById('planTimeInput').value || '19:00';
  const role = document.getElementById('planRoleSelect').value;

  AppState.dailyTargetHours = hrs;
  AppState.preferredTime = time;
  AppState.targetRole = role;

  const career = CAREER_ROADMAPS.find(c => c.id === role) || CAREER_ROADMAPS[0];
  const pendingTopics = career.requiredTopics
    .map(id => SYLLABUS_TOPICS.find(t => t.id === id))
    .filter(t => t && getTopicCompletionPercent(t.id) < 100);

  const days = ['Day 1 (Today)', 'Day 2', 'Day 3', 'Day 4', 'Day 5'];
  AppState.plannerTasks = (pendingTopics.length ? pendingTopics : SYLLABUS_TOPICS).slice(0, 5).map((t, i) => ({
    id: 'plan-' + Date.now() + i,
    day: days[i],
    time: `${time} (${hrs}h)`,
    topicId: t.id,
    title: `Study ${t.title} + Practice Exercise & Mini Quiz`,
    done: false
  }));

  saveState();
  showToast('✨ Personalized daily study timetable generated!');
  renderCurrentView();
}

function rescheduleUnfinished() {
  AppState.plannerTasks.forEach(t => {
    if (!t.done) t.day = 'Rescheduled • Next Session';
  });
  saveState();
  showToast('🔄 Unfinished lessons safely rescheduled without losing progress!');
  renderCurrentView();
}

function togglePlannerTask(idx) {
  AppState.plannerTasks[idx].done = !AppState.plannerTasks[idx].done;
  if (AppState.plannerTasks[idx].done) {
    AppState.xp += 25;
    showToast('✅ Daily study task completed! +25 XP');
  }
  saveState();
  renderCurrentView();
}

function flipFlashcard() {
  flashcardFlipped = !flashcardFlipped;
  renderCurrentView();
}

function nextFlashcard(rating) {
  if (rating === 'easy') AppState.xp += 10;
  flashcardFlipped = false;
  currentFlashcardIdx = (currentFlashcardIdx + 1) % SYLLABUS_TOPICS.length;
  saveState();
  renderCurrentView();
}

function changeTargetCareer(careerId) {
  AppState.targetRole = careerId;
  saveState();
  renderCurrentView();
}

function addSampleJobApp() {
  const company = prompt('Enter Company Name (e.g., Google, Infosys, Startup):');
  if (!company) return;
  const career = CAREER_ROADMAPS.find(c => c.id === AppState.targetRole) || CAREER_ROADMAPS[0];
  AppState.jobApplications.unshift({
    id: 'job-' + Date.now(),
    company,
    role: career.title,
    status: 'Applied',
    date: new Date().toISOString().slice(0, 10)
  });
  saveState();
  renderCurrentView();
}

function openCertificateModal(pathTitle, pct) {
  const modal = document.getElementById('modalBackdrop');
  document.getElementById('modalTitle').textContent = 'Certificate of Completion';
  document.getElementById('modalBody').innerHTML = `
    <div class="certificate-box">
      <div style="font-size:13px;letter-spacing:2px;color:#a5b4fc;margin-bottom:8px;">MY PERSONAL LEARNING UNIVERSITY</div>
      <h2 style="font-size:26px;margin-bottom:10px;">CERTIFICATE OF ACHIEVEMENT</h2>
      <p style="opacity:0.85;">This proudly certifies that</p>
      <h1 style="font-size:30px;color:#38bdf8;margin:10px 0;">${escapeHtml(AppState.studentName)}</h1>
      <p style="opacity:0.9;">has demonstrated dedication and mastery in</p>
      <h3 style="font-size:20px;margin:10px 0 16px;">${escapeHtml(pathTitle)}</h3>
      <span class="badge ${pct===100?'badge-success':'badge-warning'}">Current Path Progress: ${pct}%</span>
      <div style="margin-top:20px;">
        <button class="btn hero-btn-white btn-sm" onclick="window.print()">🖨️ Print / Save Certificate PDF</button>
      </div>
    </div>
  `;
  modal.classList.add('open');
}

function saveGeneralSettings() {
  AppState.studentName = document.getElementById('setStudentName').value.trim() || 'Future Engineer';
  AppState.passingScore = Math.min(100, Math.max(50, parseInt(document.getElementById('setPassingScore').value, 10) || 70));
  AppState.language = document.getElementById('setLangSelect').value;
  saveState();
  showToast('⚙️ Settings saved!');
  renderCurrentView();
}

function toggleAccessibility(key, val) {
  AppState.accessibility[key] = val;
  document.body.classList.toggle('large-text', AppState.accessibility.largeText);
  document.body.classList.toggle('high-contrast', AppState.accessibility.highContrast);
  saveState();
}

function exportNotesJson() {
  downloadTextFile('my-learning-notes.json', JSON.stringify(AppState.notes, null, 2));
}

function exportProgressBackup() {
  downloadTextFile('mplu-progress-backup.json', JSON.stringify(AppState, null, 2));
}

function resetAllProgress() {
  if (!confirm('Reset all progress, notes, and quiz history to starter defaults?')) return;
  localStorage.removeItem(STORAGE_KEY);
  AppState = loadState();
  saveState();
  renderCurrentView();
  showToast('Progress reset to defaults.');
}

function downloadTextFile(filename, content) {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
}

/* AI Tutor Drawer & Full-Page Helpers */
function openAiDrawerWithContext(topicId) {
  if (topicId) AppState.currentTopicId = topicId;
  updateAiContextBadge();
  document.getElementById('aiDrawer').classList.add('open');
  renderAiMessages();
}

function updateAiContextBadge() {
  const t = SYLLABUS_TOPICS.find(x => x.id === AppState.currentTopicId) || SYLLABUS_TOPICS[0];
  const lbl = document.getElementById('aiContextLabel');
  if (lbl) lbl.textContent = `Context: ${t.title}`;
}

function quickAskFullPage(promptText) {
  sendAiPrompt(promptText);
  renderCurrentView();
}

function handleFullPageAiSubmit(e) {
  e.preventDefault();
  const inp = document.getElementById('fullPageAiInput');
  if (!inp || !inp.value.trim()) return;
  sendAiPrompt(inp.value.trim());
  renderCurrentView();
}

/* Global Chrome Updates (Theme, Language, Notifications, XP, Search) */
function updateGlobalChrome() {
  document.documentElement.setAttribute('data-theme', AppState.theme);
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) themeBtn.textContent = AppState.theme === 'dark' ? '☀️' : '🌙';

  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === AppState.language);
  });

  const stats = getOverallStats();
  const lvlBadge = document.getElementById('sidebarLevelBadge');
  const xpText = document.getElementById('sidebarXpText');
  const xpBar = document.getElementById('sidebarXpBar');
  const streakEl = document.getElementById('topStreakCount');

  if (lvlBadge) lvlBadge.textContent = `Level ${stats.level} • ${stats.levelTitle}`;
  if (xpText) xpText.textContent = `${AppState.xp} XP`;
  if (xpBar) xpBar.style.width = `${(AppState.xp % 250) / 2.5}%`;
  if (streakEl) streakEl.textContent = AppState.streakDays;

  const unreadCount = AppState.notifications.filter(n => n.unread).length;
  const badge = document.getElementById('notifBadge');
  if (badge) {
    badge.textContent = unreadCount;
    badge.style.display = unreadCount > 0 ? 'flex' : 'none';
  }

  const notifList = document.getElementById('notifList');
  if (notifList) {
    notifList.innerHTML = AppState.notifications.map(n => `
      <div class="notif-item ${n.unread ? 'unread' : ''}">
        <strong style="display:block;font-size:13px;">${escapeHtml(n.title)}</strong>
        <span style="font-size:12px;color:var(--text-secondary);">${escapeHtml(n.body)}</span>
        <div style="font-size:10.5px;color:var(--text-muted);margin-top:3px;">${escapeHtml(n.time)}</div>
      </div>
    `).join('');
  }
}

function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(() => el.remove(), 3400);
}

/* BOOTSTRAP APPLICATION */
document.addEventListener('DOMContentLoaded', () => {
  // Sidebar navigation
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => navigateTo(btn.dataset.route));
  });

  // Mobile sidebar toggles
  document.getElementById('openSidebarBtn')?.addEventListener('click', () => {
    document.getElementById('sidebar').classList.add('open');
  });
  document.getElementById('closeSidebarBtn')?.addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('open');
  });

  // Theme toggle
  document.getElementById('themeToggleBtn')?.addEventListener('click', () => {
    AppState.theme = AppState.theme === 'dark' ? 'light' : 'dark';
    saveState();
  });

  // Language toggle (EN / Telugu)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      AppState.language = btn.dataset.lang;
      saveState();
      renderCurrentView();
      showToast(AppState.language === 'te' ? '🇮🇳 తెలుగు వివరణలు యాక్టివేట్ అయ్యాయి!' : 'Language switched to English');
    });
  });

  // Top Resume button
  document.getElementById('topResumeBtn')?.addEventListener('click', () => {
    openTopicPage(AppState.currentTopicId || 'html-html5');
  });

  // Notifications drawer
  document.getElementById('notifToggleBtn')?.addEventListener('click', () => {
    document.getElementById('notifPanel').classList.toggle('open');
  });
  document.getElementById('markAllReadBtn')?.addEventListener('click', () => {
    AppState.notifications.forEach(n => n.unread = false);
    saveState();
  });

  // Floating AI Tutor drawer
  document.getElementById('floatingAiBtn')?.addEventListener('click', () => {
    openAiDrawerWithContext(AppState.currentTopicId);
  });
  document.getElementById('closeAiDrawerBtn')?.addEventListener('click', () => {
    document.getElementById('aiDrawer').classList.remove('open');
  });

  document.querySelectorAll('.style-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.style-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentAiStyle = chip.dataset.style;
    });
  });

  document.querySelectorAll('.quick-prompt-btn').forEach(btn => {
    btn.addEventListener('click', () => sendAiPrompt(btn.dataset.prompt));
  });

  document.getElementById('aiInputForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const inp = document.getElementById('aiUserInput');
    if (!inp.value.trim()) return;
    sendAiPrompt(inp.value.trim());
    inp.value = '';
  });

  // Global Instant Search
  const searchInput = document.getElementById('globalSearchInput');
  const searchDropdown = document.getElementById('searchDropdown');
  searchInput?.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) {
      searchDropdown.classList.remove('open');
      return;
    }
    const matches = SYLLABUS_TOPICS.filter(t =>
      t.title.toLowerCase().includes(q) ||
      t.subtopics.some(s => s.toLowerCase().includes(q)) ||
      t.whatIsIt.toLowerCase().includes(q)
    );
    searchDropdown.innerHTML = matches.length
      ? matches.map(m => `
          <div class="search-result-item" onclick="openTopicPage('${m.id}');document.getElementById('searchDropdown').classList.remove('open');">
            <strong>${m.icon} #${m.number} ${escapeHtml(m.title)}</strong>
            <span>${m.subtopics.slice(0, 3).join(', ')}</span>
          </div>
        `).join('')
      : '<div class="search-result-item"><span>No matching topics found</span></div>';
    searchDropdown.classList.add('open');
  });

  // Modal Close
  document.getElementById('closeModalBtn')?.addEventListener('click', () => {
    document.getElementById('modalBackdrop').classList.remove('open');
  });

  // Apply saved accessibility classes
  document.body.classList.toggle('large-text', AppState.accessibility.largeText);
  document.body.classList.toggle('high-contrast', AppState.accessibility.highContrast);

  updateGlobalChrome();
  renderCurrentView();
});
