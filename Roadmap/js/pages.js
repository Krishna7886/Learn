/* ==========================================================================
   ALL 14 NAVIGATION PAGES + 16-SECTION TOPIC LEARNING PAGE + QUIZ ENGINE
   ========================================================================== */

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/* 1. MAIN DASHBOARD */
function renderDashboard() {
  const stats = getOverallStats();
  const currentTopic = SYLLABUS_TOPICS.find(t => t.id === AppState.currentTopicId) || SYLLABUS_TOPICS[0];
  const nextTopic = SYLLABUS_TOPICS.find(t => getTopicCompletionPercent(t.id) < 100 && t.id !== currentTopic.id) || SYLLABUS_TOPICS[1];
  const circumference = 2 * Math.PI * 38;
  const offset = circumference - (stats.overallPercent / 100) * circumference;

  const pendingQuizzes = SYLLABUS_TOPICS.filter(t => !AppState.quizHistory.some(q => q.topicId === t.id && q.passed)).slice(0, 4);
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return `
    <div class="hero-banner">
      <div class="hero-content">
        <span class="hero-pill">🎓 MY PERSONAL LEARNING UNIVERSITY • ZERO TO JOB-READY</span>
        <h1>Welcome back, ${escapeHtml(AppState.studentName)}!</h1>
        <p>Current Focus: <strong>${currentTopic.icon} ${currentTopic.title}</strong> (${getTopicCompletionPercent(currentTopic.id)}% complete). Daily target: <strong>${AppState.dailyTargetHours} hrs/day</strong>.</p>
        <div class="hero-actions">
          <button class="btn hero-btn-white" onclick="openTopicPage('${currentTopic.id}')">▶ Resume Learning</button>
          <button class="btn hero-btn-glass" onclick="navigateTo('roadmap')">🗺️ View Full Roadmap</button>
          <button class="btn hero-btn-glass" onclick="openAiDrawerWithContext('${currentTopic.id}')">🤖 Ask AI Tutor</button>
        </div>
      </div>

      <div class="circular-progress-box">
        <div class="ring-wrapper">
          <svg class="ring-svg" viewBox="0 0 92 92">
            <circle class="ring-bg" cx="46" cy="46" r="38"></circle>
            <circle class="ring-fill" cx="46" cy="46" r="38" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"></circle>
          </svg>
          <div class="ring-text">${stats.overallPercent}%</div>
        </div>
        <div>
          <div style="font-size:12px;opacity:0.85;">Overall Syllabus</div>
          <div style="font-size:18px;font-weight:800;">${stats.completedCount} / ${stats.totalTopics} Topics</div>
          <div style="font-size:12px;color:#bae6fd;margin-top:3px;">Level ${stats.level} ${stats.levelTitle} (${AppState.xp} XP)</div>
        </div>
      </div>
    </div>

    <!-- KPI CARDS -->
    <div class="grid-4" style="margin-bottom:22px;">
      <div class="card stat-card">
        <div>
          <div class="stat-label">Total Learning Hours</div>
          <div class="stat-value">${stats.totalHours}h</div>
          <div class="stat-sub">Target: ${AppState.dailyTargetHours}h / day</div>
        </div>
        <div class="stat-icon-box">⏱️</div>
      </div>
      <div class="card stat-card">
        <div>
          <div class="stat-label">Completed Concepts</div>
          <div class="stat-value">${stats.completedCount}</div>
          <div class="stat-sub">${stats.remainingCount} remaining in syllabus</div>
        </div>
        <div class="stat-icon-box">✅</div>
      </div>
      <div class="card stat-card">
        <div>
          <div class="stat-label">Daily Study Streak</div>
          <div class="stat-value">${AppState.streakDays} Days</div>
          <div class="stat-sub">🔥 Active learning habit</div>
        </div>
        <div class="stat-icon-box">🔥</div>
      </div>
      <div class="card stat-card">
        <div>
          <div class="stat-label">Quizzes Passed</div>
          <div class="stat-value">${AppState.quizHistory.filter(q => q.passed).length}</div>
          <div class="stat-sub">Passing threshold: ${AppState.passingScore}%</div>
        </div>
        <div class="stat-icon-box">🏆</div>
      </div>
    </div>

    <div class="grid-2" style="margin-bottom:22px;">
      <!-- WEEKLY LEARNING STATS -->
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <h3>📊 Weekly Learning Statistics</h3>
          <span class="badge badge-primary">This Week: ${AppState.weeklyActivity.reduce((a,b)=>a+b,0).toFixed(1)} hrs</span>
        </div>
        <p style="font-size:13px;color:var(--text-secondary);">Daily study hours across Monday – Sunday</p>
        <div class="bar-chart">
          ${AppState.weeklyActivity.map((hrs, idx) => `
            <div class="bar-col">
              <span style="font-size:11px;font-weight:700;">${hrs}h</span>
              <div class="bar-fill" style="height:${Math.min(100, (hrs / 3.5) * 100)}%;"></div>
              <span class="bar-day">${days[idx]}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- SUBJECT-WISE COMPLETION -->
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
          <h3>📈 Subject Path Progress</h3>
          <button class="btn-link" onclick="navigateTo('progress')">Detailed Analytics →</button>
        </div>
        <div style="display:flex;flex-direction:column;gap:12px;">
          ${SYLLABUS_PATHS.slice(0, 5).map(p => {
            const pct = getPathCompletionPercent(p.id);
            return `
              <div>
                <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:600;margin-bottom:4px;">
                  <span>${p.icon} ${p.title}</span>
                  <span>${pct}%</span>
                </div>
                <div class="progress-bar-bg"><div class="progress-bar-fill ${pct===100?'success':''}" style="width:${pct}%"></div></div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>

    <!-- RECOMMENDED NEXT, PENDING QUIZZES & ACHIEVEMENTS -->
    <div class="grid-3">
      <div class="card">
        <h3 style="margin-bottom:12px;">🎯 Recommended Next</h3>
        <div style="background:var(--bg-elevated);padding:14px;border-radius:12px;margin-bottom:12px;">
          <span class="badge badge-primary">${nextTopic.level}</span>
          <h4 style="margin:8px 0 4px;">${nextTopic.icon} ${nextTopic.title}</h4>
          <p style="font-size:12.5px;color:var(--text-secondary);">${nextTopic.whatIsIt.slice(0, 95)}...</p>
        </div>
        <button class="btn btn-primary" style="width:100%;" onclick="openTopicPage('${nextTopic.id}')">Start Topic Lesson →</button>
      </div>

      <div class="card">
        <h3 style="margin-bottom:12px;">📝 Pending Quizzes</h3>
        <div style="display:flex;flex-direction:column;gap:9px;">
          ${pendingQuizzes.map(t => `
            <div style="display:flex;justify-content:space-between;align-items:center;padding:9px 12px;background:var(--bg-elevated);border-radius:10px;">
              <span style="font-size:13px;font-weight:600;">${t.icon} ${t.title}</span>
              <button class="btn btn-sm btn-outline" onclick="openQuizPage('${t.id}')">Take Quiz</button>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="card">
        <h3 style="margin-bottom:12px;">🏅 Recent Achievements</h3>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <div style="display:flex;align-items:center;gap:10px;padding:10px;background:var(--bg-elevated);border-radius:10px;">
            <span style="font-size:22px;">🚀</span>
            <div>
              <strong style="font-size:13px;display:block;">First Step Explorer</strong>
              <span style="font-size:11.5px;color:var(--text-secondary);">Started your zero-to-pro journey</span>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:10px;padding:10px;background:var(--bg-elevated);border-radius:10px;">
            <span style="font-size:22px;">🔥</span>
            <div>
              <strong style="font-size:13px;display:block;">${AppState.streakDays}-Day Streak Keeper</strong>
              <span style="font-size:11.5px;color:var(--text-secondary);">Consistent daily study habit</span>
            </div>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="navigateTo('achievements')">View All Badges & Certificates</button>
        </div>
      </div>
    </div>
  `;
}

/* 2. COMPLETE INTERACTIVE VISUAL LEARNING ROADMAP */
let selectedRoadmapPath = 'all';
function renderRoadmap() {
  const topics = selectedRoadmapPath === 'all'
    ? SYLLABUS_TOPICS
    : SYLLABUS_TOPICS.filter(t => t.pathId === selectedRoadmapPath);

  return `
    <div class="section-header">
      <div>
        <h1>🗺️ Interactive Visual Learning Roadmap</h1>
        <p>Explore all 24 concepts in order. Green = Completed, Indigo = Current Focus, Grey = Prerequisite Recommended (click anytime to explore).</p>
      </div>
      <span class="badge badge-primary">Overall Completion: ${getOverallStats().overallPercent}%</span>
    </div>

    <div class="roadmap-path-tabs">
      <button class="path-tab ${selectedRoadmapPath === 'all' ? 'active' : ''}" onclick="setRoadmapFilter('all')">All Paths (24)</button>
      ${SYLLABUS_PATHS.map(p => `
        <button class="path-tab ${selectedRoadmapPath === p.id ? 'active' : ''}" onclick="setRoadmapFilter('${p.id}')">
          ${p.icon} ${p.title.split('. ')[1]} (${getPathCompletionPercent(p.id)}%)
        </button>
      `).join('')}
    </div>

    <div class="roadmap-timeline">
      ${topics.map(t => {
        const pct = getTopicCompletionPercent(t.id);
        const isCurrent = AppState.currentTopicId === t.id;
        const unlocked = isTopicUnlocked(t);
        const statusClass = pct === 100 ? 'completed' : isCurrent ? 'current' : (!unlocked ? 'locked' : '');
        const statusBadge = pct === 100
          ? '<span class="badge badge-success">✓ Completed (100%)</span>'
          : isCurrent
            ? '<span class="badge badge-primary">★ Current Topic</span>'
            : unlocked
              ? '<span class="badge badge-warning">Upcoming • Ready</span>'
              : '<span class="badge badge-neutral">🔒 Prerequisite Recommended</span>';

        return `
          <div class="roadmap-node ${statusClass}">
            <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;">
              <div>
                <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:6px;">
                  <span style="font-size:12px;font-weight:700;color:var(--text-muted);">TOPIC #${t.number}</span>
                  ${statusBadge}
                  <span class="badge badge-neutral">${t.level} • ${t.estimatedHours}h</span>
                </div>
                <h3 style="font-size:18px;">${t.icon} ${t.title}</h3>
                <p style="font-size:13px;color:var(--text-secondary);margin-top:4px;">${t.whatIsIt}</p>
              </div>
              <div style="display:flex;gap:8px;align-items:center;">
                <button class="btn btn-primary btn-sm" onclick="openTopicPage('${t.id}')">Open Learning Page →</button>
                <button class="btn btn-outline btn-sm" onclick="openQuizPage('${t.id}')">Quiz</button>
              </div>
            </div>

            <div style="margin-top:12px;">
              <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px;">
                ${t.subtopics.map(sub => `<span style="font-size:11.5px;background:var(--bg-elevated);padding:3px 9px;border-radius:6px;color:var(--text-secondary);">${escapeHtml(sub)}</span>`).join('')}
              </div>
              <div style="display:flex;align-items:center;gap:12px;">
                <div class="progress-bar-bg" style="flex:1;"><div class="progress-bar-fill ${pct===100?'success':''}" style="width:${pct}%"></div></div>
                <strong style="font-size:12.5px;">${pct}%</strong>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function setRoadmapFilter(pathId) {
  selectedRoadmapPath = pathId;
  renderCurrentView();
}

/* 3. ALL SUBJECTS CATALOG (9 MAJOR PATHS, ALL 24 TOPICS & SUBTOPICS) */
function renderAllSubjects() {
  return `
    <div class="section-header">
      <div>
        <h1>📚 Complete University Syllabus (24 Subjects)</h1>
        <p>Every concept from Frontend, Backend, Generative AI, Digital Marketing, Media Editing, Logo Design, Cutter Machines & Print Publishing.</p>
      </div>
    </div>

    ${SYLLABUS_PATHS.map(path => {
      const pathTopics = SYLLABUS_TOPICS.filter(t => t.pathId === path.id);
      const pathPct = getPathCompletionPercent(path.id);
      return `
        <div class="card" style="margin-bottom:24px;">
          <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid var(--border-color);">
            <div>
              <h2 style="font-size:20px;">${path.icon} ${path.title}</h2>
              <p style="font-size:13.5px;color:var(--text-secondary);">${path.description}</p>
            </div>
            <div style="min-width:180px;text-align:right;">
              <strong style="font-size:14px;">Path Completion: ${pathPct}%</strong>
              <div class="progress-bar-bg" style="margin-top:6px;"><div class="progress-bar-fill ${pathPct===100?'success':''}" style="width:${pathPct}%"></div></div>
            </div>
          </div>

          <div class="grid-3">
            ${pathTopics.map(t => {
              const pct = getTopicCompletionPercent(t.id);
              const isBookmarked = AppState.bookmarks.includes(t.id);
              return `
                <div class="card card-hover" style="background:var(--bg-elevated);padding:18px;display:flex;flex-direction:column;justify-content:space-between;">
                  <div>
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                      <span class="badge badge-primary">#${t.number} • ${t.level}</span>
                      <button class="icon-btn" style="width:30px;height:30px;" onclick="toggleBookmark('${t.id}')" title="Bookmark Topic">${isBookmarked ? '🔖' : '☆'}</button>
                    </div>
                    <h3 style="font-size:16.5px;margin-bottom:6px;">${t.icon} ${t.title}</h3>
                    <p style="font-size:12.5px;color:var(--text-secondary);margin-bottom:12px;">${t.subtopics.length} Subtopics • ${t.estimatedHours} hrs</p>
                    <div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:14px;">
                      ${t.subtopics.slice(0, 5).map(s => `<span style="font-size:11px;background:var(--bg-card);padding:2px 7px;border-radius:4px;">${escapeHtml(s)}</span>`).join('')}
                      ${t.subtopics.length > 5 ? `<span style="font-size:11px;color:var(--primary);padding:2px 5px;">+${t.subtopics.length - 5} more</span>` : ''}
                    </div>
                  </div>
                  <div>
                    <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px;">
                      <span>Progress</span><strong>${pct}%</strong>
                    </div>
                    <div class="progress-bar-bg" style="margin-bottom:12px;"><div class="progress-bar-fill ${pct===100?'success':''}" style="width:${pct}%"></div></div>
                    <button class="btn btn-primary btn-sm" style="width:100%;" onclick="openTopicPage('${t.id}')">Learn Topic →</button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }).join('')}
  `;
}

/* 4. DETAILED 16-SECTION TOPIC LEARNING PAGE */
function renderTopicDetailPage(topicId) {
  const topic = SYLLABUS_TOPICS.find(t => t.id === topicId) || SYLLABUS_TOPICS[0];
  AppState.currentTopicId = topic.id;
  saveState();

  const pct = getTopicCompletionPercent(topic.id);
  const doneLessons = AppState.completedLessons[topic.id] || [];
  const isBookmarked = AppState.bookmarks.includes(topic.id);
  const userNote = AppState.notes[topic.id] || '';
  const topicIdx = SYLLABUS_TOPICS.findIndex(t => t.id === topic.id);
  const prevTopic = topicIdx > 0 ? SYLLABUS_TOPICS[topicIdx - 1] : null;
  const nextTopic = topicIdx < SYLLABUS_TOPICS.length - 1 ? SYLLABUS_TOPICS[topicIdx + 1] : null;

  return `
    <div style="margin-bottom:16px;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:10px;">
      <button class="btn btn-secondary btn-sm" onclick="navigateTo('roadmap')">← Back to Roadmap</button>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn btn-outline btn-sm" onclick="toggleBookmark('${topic.id}')">${isBookmarked ? '🔖 Bookmarked' : '☆ Bookmark Topic'}</button>
        <button class="btn btn-outline btn-sm" onclick="downloadTopicNotes('${topic.id}')">⬇ Download Study Notes</button>
        <button class="btn btn-primary btn-sm" onclick="openAiDrawerWithContext('${topic.id}')">🤖 Ask AI About This Topic</button>
      </div>
    </div>

    <div class="hero-banner" style="padding:22px 26px;">
      <div class="hero-content">
        <span class="hero-pill">TOPIC #${topic.number} OF 24 • ${topic.level.toUpperCase()} • ${topic.estimatedHours} HOURS</span>
        <h1>${topic.icon} ${topic.title}</h1>
        <p>${topic.whatIsIt}</p>
        <div style="display:flex;flex-wrap:wrap;gap:6px;">
          ${topic.subtopics.map(s => `<span style="background:rgba(255,255,255,0.16);padding:3px 10px;border-radius:999px;font-size:11.5px;">${escapeHtml(s)}</span>`).join('')}
        </div>
      </div>
      <div class="circular-progress-box">
        <div>
          <div style="font-size:12px;opacity:0.85;">Topic Mastery</div>
          <div style="font-size:28px;font-weight:800;">${pct}%</div>
          <div style="font-size:12px;color:#bae6fd;">${doneLessons.length}/${topic.stepByStepLessons.length} Lessons Done</div>
        </div>
      </div>
    </div>

    ${topic.configurableSoftware ? `
      <div class="card" style="margin-bottom:20px;border-color:var(--secondary);">
        <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;">
          <div>
            <h4>✂️ Configurable Cutter Machine Software</h4>
            <p style="font-size:13px;color:var(--text-secondary);">Select your workshop’s exact plotter/cutter software to tailor calibration & export steps:</p>
          </div>
          <select class="form-control" style="max-width:260px;" onchange="updateCutterSoftware(this.value)">
            ${['Silhouette Studio', 'Cricut Design Space', 'SignMaster Cut', 'FlexiSIGN-PRO', 'CorelDRAW + Cutting Master', 'Inkscape + Ink/Cut'].map(sw =>
              `<option value="${sw}" ${AppState.cutterSoftware === sw ? 'selected' : ''}>${sw}</option>`
            ).join('')}
          </select>
        </div>
        <p style="margin-top:10px;font-size:13px;color:var(--secondary);">Active Software Profile: <strong>${escapeHtml(AppState.cutterSoftware)}</strong> — Ensure vector paths are welded and exported as SVG/DXF/PLT.</p>
      </div>
    ` : ''}

    <div class="lesson-layout">
      <!-- STICKY TABLE OF CONTENTS (16 REQUIRED SECTIONS) -->
      <aside class="lesson-toc">
        <div style="font-size:11px;font-weight:700;color:var(--text-muted);margin-bottom:8px;">16-POINT LESSON GUIDE</div>
        <a class="toc-link" href="#sec-intro">1–4. Intro, Why & Real-Life Use</a>
        <a class="toc-link" href="#sec-diagram">5. Visual Diagram & How It Works</a>
        <a class="toc-link" href="#sec-lessons">6–7. Step-by-Step Lessons</a>
        <a class="toc-link" href="#sec-terms">8. Key Terminology</a>
        <a class="toc-link" href="#sec-syntax">9–10. Syntax, Code & Sandbox</a>
        <a class="toc-link" href="#sec-exercises">11–12. Practice & Mistakes</a>
        <a class="toc-link" href="#sec-interview">13. Interview Questions</a>
        <a class="toc-link" href="#sec-quiz">14–15. Summary & Mini Quiz</a>
        <a class="toc-link" href="#sec-resources">16. Free Learning Resources</a>
        <a class="toc-link" href="#sec-notes">📝 My Personal Notes</a>
      </aside>

      <div>
        <!-- SECTIONS 1-4: INTRO, WHAT, WHY, REAL-LIFE -->
        <section class="lesson-section" id="sec-intro">
          <h2>1–4. Introduction, Importance & Real-World Applications</h2>
          ${AppState.language === 'te' ? `
            <div style="background:var(--primary-soft);border-left:4px solid var(--primary);padding:14px;border-radius:8px;margin-bottom:14px;">
              <strong>🇮🇳 తెలుగు సారాంశం (Telugu Explanation):</strong>
              <p style="margin-top:4px;">${topic.teluguSummary}</p>
            </div>
          ` : ''}
          <div class="grid-2">
            <div style="background:var(--bg-elevated);padding:15px;border-radius:12px;">
              <strong>❓ What is ${topic.title}?</strong>
              <p style="font-size:13.5px;color:var(--text-secondary);margin-top:6px;">${topic.whatIsIt}</p>
            </div>
            <div style="background:var(--bg-elevated);padding:15px;border-radius:12px;">
              <strong>🚀 Why is it important?</strong>
              <p style="font-size:13.5px;color:var(--text-secondary);margin-top:6px;">${topic.whyImportant}</p>
            </div>
          </div>
          <div style="background:var(--bg-elevated);padding:15px;border-radius:12px;margin-top:12px;">
            <strong>🌍 Where is it used in real life?</strong>
            <p style="font-size:13.5px;color:var(--text-secondary);margin-top:6px;">${topic.realLifeUse}</p>
          </div>
        </section>

        <!-- SECTION 5: HOW IT WORKS + VISUAL DIAGRAM -->
        <section class="lesson-section" id="sec-diagram">
          <h2>5. How Does It Work? (Visual Architecture & Diagram)</h2>
          <p style="font-size:14px;color:var(--text-secondary);">${topic.howItWorks}</p>
          <div class="diagram-frame">
            ${renderTopicDiagram(topic.diagramType)}
            <div class="diagram-caption">${escapeHtml(topic.diagramCaption)}</div>
          </div>
        </section>

        <!-- SECTIONS 6-7: STEP-BY-STEP LESSONS FROM ZERO -->
        <section class="lesson-section" id="sec-lessons">
          <h2>6–7. Step-by-Step Lessons From Zero</h2>
          <p style="font-size:13.5px;color:var(--text-secondary);margin-bottom:14px;">Check off each lesson as you master it to earn +35 XP and update your roadmap progress automatically.</p>
          <div style="display:flex;flex-direction:column;gap:12px;">
            ${topic.stepByStepLessons.map((lesson, idx) => {
              const checked = doneLessons.includes(idx);
              return `
                <div style="padding:16px;border-radius:12px;background:var(--bg-elevated);border:1px solid ${checked ? 'var(--success)' : 'var(--border-color)'};">
                  <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:6px;">
                    <strong style="font-size:15px;">${checked ? '✅' : '📘'} ${escapeHtml(lesson.title)}</strong>
                    <button class="btn btn-sm ${checked ? 'btn-success' : 'btn-outline'}" onclick="toggleLessonAndRefresh('${topic.id}', ${idx})">
                      ${checked ? 'Completed ✓' : 'Mark Complete (+35 XP)'}
                    </button>
                  </div>
                  <p style="font-size:13.5px;color:var(--text-secondary);">${escapeHtml(lesson.content)}</p>
                </div>
              `;
            }).join('')}
          </div>
        </section>

        <!-- SECTION 8: IMPORTANT TERMINOLOGY -->
        <section class="lesson-section" id="sec-terms">
          <h2>8. Important Terminology (Beginner Glossary)</h2>
          <div class="term-grid">
            ${topic.terminology.map(item => `
              <div class="term-card">
                <strong style="color:var(--primary);display:block;margin-bottom:4px;">${escapeHtml(item.term)}</strong>
                <span style="font-size:13px;color:var(--text-secondary);">${escapeHtml(item.def)}</span>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- SECTIONS 9-10: SYNTAX, REAL-WORLD EXAMPLE & INTERACTIVE PLAYGROUND -->
        <section class="lesson-section" id="sec-syntax">
          <h2>9–10. Syntax, Real-World Example & Live Practice Sandbox</h2>
          <p style="font-size:13.5px;color:var(--text-secondary);"><strong>Real-World Scenario:</strong> ${escapeHtml(topic.realWorldExample)}</p>
          <pre class="code-block">${escapeHtml(topic.codeExample)}</pre>

          ${topic.sandboxDefault ? `
            <div class="code-playground">
              <div class="playground-bar">
                <span>⚡ Interactive Live Code Sandbox — Edit & Test Instantly</span>
                <button class="btn btn-primary btn-sm" onclick="runLiveSandbox()">▶ Run Code</button>
              </div>
              <textarea class="playground-editor" id="sandboxEditor">${escapeHtml(topic.sandboxDefault)}</textarea>
              <iframe class="playground-output" id="sandboxOutput" title="Live Sandbox Preview" style="width:100%;border:none;min-height:110px;"></iframe>
            </div>
          ` : ''}
        </section>

        <!-- SECTIONS 11-12: PRACTICAL EXERCISES & COMMON MISTAKES -->
        <section class="lesson-section" id="sec-exercises">
          <h2>11–12. Practical Exercises & Common Mistakes to Avoid</h2>
          <div class="grid-2">
            <div>
              <h4 style="margin-bottom:8px;color:var(--success);">🛠️ Hands-On Practice Exercises</h4>
              <ol style="padding-left:20px;font-size:13.5px;color:var(--text-secondary);display:flex;flex-direction:column;gap:8px;">
                ${topic.practicalExercises.map(ex => `<li>${escapeHtml(ex)}</li>`).join('')}
              </ol>
            </div>
            <div>
              <h4 style="margin-bottom:8px;color:var(--danger);">⚠️ Common Beginner Mistakes</h4>
              <ul style="padding-left:20px;font-size:13.5px;color:var(--text-secondary);display:flex;flex-direction:column;gap:8px;">
                ${topic.commonMistakes.map(m => `<li>${escapeHtml(m)}</li>`).join('')}
              </ul>
            </div>
          </div>
        </section>

        <!-- SECTION 13: INTERVIEW QUESTIONS -->
        <section class="lesson-section" id="sec-interview">
          <h2>13. Job Interview Questions & Model Answers</h2>
          <div style="display:flex;flex-direction:column;gap:12px;">
            ${topic.interviewQuestions.map((iq, i) => `
              <details style="background:var(--bg-elevated);padding:14px;border-radius:10px;cursor:pointer;" ${i===0?'open':''}>
                <summary style="font-weight:700;font-size:14px;">Q${i+1}: ${escapeHtml(iq.q)}</summary>
                <p style="margin-top:8px;font-size:13.5px;color:var(--success);"><strong>Model Answer:</strong> ${escapeHtml(iq.a)}</p>
              </details>
            `).join('')}
          </div>
        </section>

        <!-- SECTIONS 14-15: TOPIC SUMMARY & MINI QUIZ -->
        <section class="lesson-section" id="sec-quiz">
          <h2>14–15. Topic Summary & Mini Quiz</h2>
          <div style="background:var(--primary-soft);padding:14px;border-radius:10px;margin-bottom:16px;">
            <strong>📌 Key Summary:</strong> ${escapeHtml(topic.summary)}
          </div>
          <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;">
            <div>
              <h4>Ready to verify your mastery?</h4>
              <p style="font-size:13px;color:var(--text-secondary);">Score at least <strong>${AppState.passingScore}%</strong> to mark this topic quiz as passed.</p>
            </div>
            <button class="btn btn-primary" onclick="openQuizPage('${topic.id}')">📝 Start ${topic.title} Mini Quiz →</button>
          </div>
        </section>

        <!-- SECTION 16: FURTHER LEARNING RESOURCES -->
        <section class="lesson-section" id="sec-resources">
          <h2>16. Trusted Free Learning Resources & Documentation</h2>
          <div style="display:flex;flex-direction:column;gap:10px;">
            ${topic.resources.map(r => `
              <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:10px;padding:12px 14px;background:var(--bg-elevated);border-radius:10px;">
                <div>
                  <strong style="font-size:14px;display:block;">${escapeHtml(r.title)}</strong>
                  <span class="badge ${r.verified ? 'badge-success' : 'badge-warning'}" style="margin-top:4px;">
                    ${r.verified ? '✓ Verified Official / Free Resource' : '🔍 Suggested YouTube Search'} • ${r.type}
                  </span>
                </div>
                <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">Open Resource ↗</a>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- PERSONAL NOTES FOR THIS TOPIC -->
        <section class="lesson-section" id="sec-notes">
          <h2>📝 Personal Study Notes (${topic.title})</h2>
          <textarea class="form-control" id="topicNoteArea" rows="4" placeholder="Write your personal takeaways, formulas, or revision reminders here...">${escapeHtml(userNote)}</textarea>
          <div style="margin-top:10px;display:flex;justify-content:flex-end;">
            <button class="btn btn-primary btn-sm" onclick="saveTopicNote('${topic.id}')">💾 Save Note</button>
          </div>
        </section>

        <!-- PREV / NEXT NAVIGATION -->
        <div style="display:flex;justify-content:space-between;gap:12px;margin-top:10px;">
          ${prevTopic ? `<button class="btn btn-secondary" onclick="openTopicPage('${prevTopic.id}')">← Previous: ${prevTopic.title}</button>` : '<div></div>'}
          ${nextTopic ? `<button class="btn btn-primary" onclick="openTopicPage('${nextTopic.id}')">Next Topic: ${nextTopic.title} →</button>` : '<div></div>'}
        </div>
      </div>
    </div>
  `;
}

/* 5. INTERACTIVE QUIZ & EXAM ENGINE */
let activeQuizState = {
  topicId: 'html-html5',
  mode: 'topic', // 'topic' | 'full-mock'
  questions: [],
  answers: {},
  submitted: false
};

function startQuizSession(topicId, mode = 'topic') {
  let questions = [];
  if (mode === 'full-mock') {
    SYLLABUS_TOPICS.slice(0, 12).forEach(t => {
      questions.push(getQuestionsForTopic(t.id)[0]);
    });
  } else {
    questions = getQuestionsForTopic(topicId);
  }
  activeQuizState = { topicId, mode, questions, answers: {}, submitted: false };
}

function renderQuizzesPage() {
  if (!activeQuizState.questions.length) {
    startQuizSession(AppState.currentTopicId || 'html-html5', 'topic');
  }
  const topic = SYLLABUS_TOPICS.find(t => t.id === activeQuizState.topicId) || SYLLABUS_TOPICS[0];
  const qs = activeQuizState.questions;

  let score = 0;
  if (activeQuizState.submitted) {
    qs.forEach((q, idx) => {
      if (activeQuizState.answers[idx] === q.answerIndex) score++;
    });
  }
  const pct = qs.length ? Math.round((score / qs.length) * 100) : 0;
  const passed = pct >= AppState.passingScore;

  return `
    <div class="section-header">
      <div>
        <h1>📝 Practice Quizzes & Syllabus Mock Exams</h1>
        <p>Instant answer checking, detailed explanations, configurable passing score (${AppState.passingScore}%), and quiz history.</p>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <select class="form-control" style="width:230px;" onchange="openQuizPage(this.value)">
          ${SYLLABUS_TOPICS.map(t => `<option value="${t.id}" ${t.id === activeQuizState.topicId && activeQuizState.mode==='topic' ? 'selected' : ''}>Topic Quiz: ${t.title}</option>`).join('')}
        </select>
        <button class="btn btn-secondary btn-sm" onclick="launchFullMockExam()">🎯 Full Syllabus Mock Exam</button>
      </div>
    </div>

    ${activeQuizState.submitted ? `
      <div class="card" style="margin-bottom:22px;border-color:${passed ? 'var(--success)' : 'var(--warning)'};">
        <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:14px;">
          <div>
            <span class="badge ${passed ? 'badge-success' : 'badge-warning'}">${passed ? '🎉 PASSED!' : '⚠️ BELOW PASSING THRESHOLD'}</span>
            <h2 style="margin-top:6px;">Your Score: ${score} / ${qs.length} (${pct}%)</h2>
            <p style="font-size:13.5px;color:var(--text-secondary);">Required to pass: ${AppState.passingScore}%. Review all explanations below.</p>
          </div>
          <button class="btn btn-primary" onclick="retryActiveQuiz()">🔄 Retry Quiz</button>
        </div>
      </div>
    ` : ''}

    <div class="card" style="margin-bottom:24px;">
      <h3 style="margin-bottom:16px;">${activeQuizState.mode === 'full-mock' ? '🏆 Full Syllabus Mock Exam (12 Subjects)' : `${topic.icon} ${topic.title} — Mini Quiz`}</h3>
      ${qs.map((q, qIdx) => {
        const chosen = activeQuizState.answers[qIdx];
        return `
          <div style="margin-bottom:22px;padding-bottom:18px;border-bottom:1px solid var(--border-color);">
            <div style="display:flex;gap:8px;align-items:center;margin-bottom:8px;">
              <span class="badge badge-primary">Q${qIdx + 1} • ${q.type}</span>
            </div>
            <p style="font-weight:700;font-size:15px;margin-bottom:12px;">${escapeHtml(q.question)}</p>
            ${q.options.map((opt, optIdx) => {
              let cls = 'quiz-option';
              if (activeQuizState.submitted) {
                if (optIdx === q.answerIndex) cls += ' correct';
                else if (chosen === optIdx) cls += ' wrong';
              } else if (chosen === optIdx) {
                cls += ' selected';
              }
              return `
                <div class="${cls}" onclick="selectQuizOption(${qIdx}, ${optIdx})">
                  <strong>${String.fromCharCode(65 + optIdx)}.</strong>
                  <span>${escapeHtml(opt)}</span>
                </div>
              `;
            }).join('')}
            ${activeQuizState.submitted ? `
              <div style="margin-top:8px;padding:10px 14px;background:var(--bg-elevated);border-radius:8px;font-size:13px;">
                <strong>💡 Explanation:</strong> ${escapeHtml(q.explanation)}
              </div>
            ` : ''}
          </div>
        `;
      }).join('')}

      ${!activeQuizState.submitted ? `
        <button class="btn btn-primary btn-lg" onclick="submitActiveQuiz()">✅ Submit Quiz & Check Answers</button>
      ` : ''}
    </div>

    <div class="card">
      <h3 style="margin-bottom:12px;">📜 Recent Quiz History</h3>
      ${AppState.quizHistory.length === 0 ? '<p style="color:var(--text-secondary);font-size:13.5px;">No quizzes completed yet. Submit your first quiz above!</p>' : `
        <table class="data-table">
          <thead><tr><th>Topic / Exam</th><th>Score</th><th>Status</th><th>Date</th></tr></thead>
          <tbody>
            ${AppState.quizHistory.slice(0, 10).map(h => `
              <tr>
                <td><strong>${escapeHtml(h.topicTitle)}</strong></td>
                <td>${h.score}%</td>
                <td><span class="badge ${h.passed ? 'badge-success' : 'badge-danger'}">${h.passed ? 'Passed' : 'Retry Needed'}</span></td>
                <td>${h.date}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `}
    </div>
  `;
}

/* 6. PRACTICAL PROJECTS PAGE */
function renderProjectsPage() {
  return `
    <div class="section-header">
      <div>
        <h1>🛠️ Real-World Practical Projects</h1>
        <p>Build portfolio-grade projects across Frontend, Backend, Generative AI, Digital Marketing & Graphic/Print Design.</p>
      </div>
      <span class="badge badge-success">Completed: ${AppState.completedProjects.length} / ${PRACTICAL_PROJECTS.length}</span>
    </div>

    <div class="grid-2">
      ${PRACTICAL_PROJECTS.map(proj => {
        const isDone = AppState.completedProjects.includes(proj.id);
        return `
          <div class="card" style="display:flex;flex-direction:column;justify-content:space-between;border-color:${isDone?'var(--success)':'var(--border-color)'};">
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
                <span class="badge ${proj.difficulty==='Beginner'?'badge-success':proj.difficulty==='Intermediate'?'badge-primary':'badge-warning'}">${proj.difficulty}</span>
                ${isDone ? '<span class="badge badge-success">✓ Completed (+200 XP)</span>' : ''}
              </div>
              <h3 style="font-size:18px;margin-bottom:6px;">${escapeHtml(proj.title)}</h3>
              <p style="font-size:13.5px;color:var(--text-secondary);margin-bottom:12px;">${escapeHtml(proj.objective)}</p>

              <div style="margin-bottom:10px;">
                <strong style="font-size:12px;color:var(--text-muted);">SKILLS & TOOLS:</strong>
                <div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:5px;">
                  ${proj.skills.concat(proj.tools).map(s => `<span style="font-size:11.5px;background:var(--bg-elevated);padding:3px 8px;border-radius:6px;">${escapeHtml(s)}</span>`).join('')}
                </div>
              </div>

              <div style="margin-bottom:12px;">
                <strong style="font-size:12px;color:var(--text-muted);">STEP-BY-STEP INSTRUCTIONS:</strong>
                <ol style="padding-left:18px;font-size:13px;color:var(--text-secondary);margin-top:5px;">
                  ${proj.steps.map(st => `<li>${escapeHtml(st)}</li>`).join('')}
                </ol>
              </div>

              <div style="background:var(--bg-elevated);padding:10px 12px;border-radius:8px;margin-bottom:14px;">
                <strong style="font-size:12px;">✅ Evaluation Checklist:</strong>
                <ul style="padding-left:18px;font-size:12.5px;color:var(--text-secondary);margin-top:4px;">
                  ${proj.checklist.map(c => `<li>${escapeHtml(c)}</li>`).join('')}
                </ul>
              </div>
            </div>

            <button class="btn ${isDone ? 'btn-success' : 'btn-primary'}" onclick="toggleProjectDone('${proj.id}')">
              ${isDone ? '✓ Project Completed' : 'Mark Project Complete (+200 XP)'}
            </button>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

/* 7. PERSONALIZED DAILY STUDY PLANNER */
function renderPlannerPage() {
  return `
    <div class="section-header">
      <div>
        <h1>📅 Personalized Daily Learning Schedule</h1>
        <p>Configure your study hours, preferred time, and target role to auto-generate a realistic daily timetable.</p>
      </div>
    </div>

    <div class="grid-2" style="margin-bottom:22px;">
      <div class="card">
        <h3 style="margin-bottom:14px;">⚙️ Study Schedule Generator</h3>
        <div class="form-group">
          <label>Daily Available Study Hours</label>
          <input type="number" id="planHoursInput" class="form-control" min="1" max="12" step="0.5" value="${AppState.dailyTargetHours}" />
        </div>
        <div class="form-group">
          <label>Preferred Study Start Time</label>
          <input type="time" id="planTimeInput" class="form-control" value="${AppState.preferredTime}" />
        </div>
        <div class="form-group">
          <label>Target Job Role</label>
          <select id="planRoleSelect" class="form-control">
            ${CAREER_ROADMAPS.map(r => `<option value="${r.id}" ${AppState.targetRole === r.id ? 'selected' : ''}>${r.title}</option>`).join('')}
          </select>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <button class="btn btn-primary" onclick="generateSmartSchedule()">✨ Auto-Generate Schedule</button>
          <button class="btn btn-outline" onclick="rescheduleUnfinished()">🔄 Reschedule Unfinished</button>
        </div>
      </div>

      <div class="card">
        <h3 style="margin-bottom:14px;">✅ Daily Study Checklist</h3>
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${AppState.plannerTasks.map((task, idx) => `
            <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:12px;background:var(--bg-elevated);border-radius:10px;">
              <label style="display:flex;align-items:center;gap:10px;cursor:pointer;flex:1;">
                <input type="checkbox" ${task.done ? 'checked' : ''} onchange="togglePlannerTask(${idx})" />
                <div>
                  <span class="badge badge-primary" style="margin-right:6px;">${escapeHtml(task.day)} • ${escapeHtml(task.time)}</span>
                  <strong style="font-size:13.5px;${task.done ? 'text-decoration:line-through;opacity:0.6;' : ''}">${escapeHtml(task.title)}</strong>
                </div>
              </label>
              <button class="btn btn-sm btn-outline" onclick="openTopicPage('${task.topicId}')">Open</button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

/* 8. DETAILED PROGRESS TRACKING & ANALYTICS */
function renderProgressPage() {
  const stats = getOverallStats();
  const weakTopics = SYLLABUS_TOPICS.filter(t => getTopicCompletionPercent(t.id) < 40).slice(0, 5);

  return `
    <div class="section-header">
      <div>
        <h1>📈 Multi-Level Progress & Analytics</h1>
        <p>Track overall syllabus mastery, subject-wise completion, weak topic detection, and exportable PDF reports.</p>
      </div>
      <button class="btn btn-primary" onclick="window.print()">🖨️ Export Progress Report (PDF)</button>
    </div>

    <div class="grid-3" style="margin-bottom:22px;">
      <div class="card">
        <span class="stat-label">Overall Syllabus Mastery</span>
        <div class="stat-value">${stats.overallPercent}%</div>
        <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:${stats.overallPercent}%"></div></div>
      </div>
      <div class="card">
        <span class="stat-label">Estimated Study Time Logged</span>
        <div class="stat-value">${stats.totalHours} Hours</div>
        <span class="stat-sub">Across ${SYLLABUS_TOPICS.length} structured courses</span>
      </div>
      <div class="card">
        <span class="stat-label">Weak / Needs Attention Topics</span>
        <div class="stat-value">${weakTopics.length} Priority Topics</div>
        <span class="stat-sub">Focus here next for balanced growth</span>
      </div>
    </div>

    <div class="card" style="margin-bottom:22px;">
      <h3 style="margin-bottom:16px;">📊 Subject-by-Subject Completion Breakdown</h3>
      <div class="grid-2">
        ${SYLLABUS_TOPICS.map(t => {
          const pct = getTopicCompletionPercent(t.id);
          return `
            <div style="padding:10px 14px;background:var(--bg-elevated);border-radius:10px;">
              <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:600;margin-bottom:5px;">
                <span>#${t.number} ${t.icon} ${t.title}</span>
                <span>${pct}%</span>
              </div>
              <div class="progress-bar-bg"><div class="progress-bar-fill ${pct===100?'success':''}" style="width:${pct}%"></div></div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

/* 9. NOTES, BOOKMARKS & SPACED REPETITION FLASHCARDS */
let currentFlashcardIdx = 0;
let flashcardFlipped = false;

function renderNotesAndBookmarksPage() {
  const cardTopic = SYLLABUS_TOPICS[currentFlashcardIdx % SYLLABUS_TOPICS.length];
  const term = cardTopic.terminology[0];

  return `
    <div class="section-header">
      <div>
        <h1>🗒️ Notes, Bookmarks & Revision Flashcards</h1>
        <p>Review saved topics, export/import personal study notes, and practice spaced-repetition flashcards.</p>
      </div>
      <div style="display:flex;gap:8px;">
        <button class="btn btn-outline btn-sm" onclick="exportNotesJson()">⬇ Export Notes (JSON)</button>
      </div>
    </div>

    <div class="grid-2" style="margin-bottom:22px;">
      <!-- SPACED REPETITION FLASHCARDS -->
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
          <h3>🃏 Spaced Repetition Flashcards</h3>
          <span class="badge badge-primary">Card ${currentFlashcardIdx + 1} / ${SYLLABUS_TOPICS.length}</span>
        </div>
        <div onclick="flipFlashcard()" style="min-height:170px;background:var(--gradient-hero);color:#fff;border-radius:14px;padding:24px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;cursor:pointer;">
          <span style="font-size:11.5px;opacity:0.85;margin-bottom:8px;">${cardTopic.title} • Click card to flip</span>
          <h3 style="font-size:20px;">${flashcardFlipped ? escapeHtml(term.def) : escapeHtml(term.term)}</h3>
        </div>
        <div style="display:flex;justify-content:space-between;gap:8px;margin-top:12px;">
          <button class="btn btn-outline btn-sm" onclick="nextFlashcard('hard')">Needs Review</button>
          <button class="btn btn-primary btn-sm" onclick="flipFlashcard()">Flip Card</button>
          <button class="btn btn-success btn-sm" onclick="nextFlashcard('easy')">Mastered ✓</button>
        </div>
      </div>

      <!-- BOOKMARKED TOPICS -->
      <div class="card">
        <h3 style="margin-bottom:12px;">🔖 Bookmarked Topics (${AppState.bookmarks.length})</h3>
        ${AppState.bookmarks.length === 0 ? '<p style="color:var(--text-secondary);font-size:13.5px;">No bookmarks yet. Click ☆ Bookmark on any topic page.</p>' : `
          <div style="display:flex;flex-direction:column;gap:8px;">
            ${AppState.bookmarks.map(id => {
              const t = SYLLABUS_TOPICS.find(x => x.id === id);
              if (!t) return '';
              return `
                <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:var(--bg-elevated);border-radius:10px;">
                  <span><strong>${t.icon} ${t.title}</strong> (${getTopicCompletionPercent(t.id)}%)</span>
                  <button class="btn btn-primary btn-sm" onclick="openTopicPage('${t.id}')">Open</button>
                </div>
              `;
            }).join('')}
          </div>
        `}
      </div>
    </div>

    <div class="card">
      <h3 style="margin-bottom:12px;">📒 All Saved Topic Notes</h3>
      <div class="grid-2">
        ${Object.entries(AppState.notes).filter(([_, val]) => val && val.trim()).map(([tid, text]) => {
          const t = SYLLABUS_TOPICS.find(x => x.id === tid);
          return `
            <div style="background:var(--bg-elevated);padding:14px;border-radius:10px;">
              <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
                <strong>${t ? t.title : tid}</strong>
                <button class="btn-link" onclick="openTopicPage('${tid}')">Edit →</button>
              </div>
              <p style="font-size:13px;color:var(--text-secondary);white-space:pre-wrap;">${escapeHtml(text)}</p>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

/* 10. CAREER PREPARATION, SKILL GAP & RESUME BUILDER */
function renderCareerPage() {
  const selectedCareer = CAREER_ROADMAPS.find(c => c.id === AppState.targetRole) || CAREER_ROADMAPS[0];
  const reqTopics = selectedCareer.requiredTopics.map(id => SYLLABUS_TOPICS.find(t => t.id === id)).filter(Boolean);
  const readiness = Math.round(reqTopics.reduce((acc, t) => acc + getTopicCompletionPercent(t.id), 0) / reqTopics.length);
  const missingSkills = reqTopics.filter(t => getTopicCompletionPercent(t.id) < 70);

  return `
    <div class="section-header">
      <div>
        <h1>💼 Career Development & Job Readiness Center</h1>
        <p>Analyze skill gaps, prepare for technical & HR interviews, build your resume, and track job applications.</p>
      </div>
      <select class="form-control" style="max-width:290px;" onchange="changeTargetCareer(this.value)">
        ${CAREER_ROADMAPS.map(c => `<option value="${c.id}" ${c.id === selectedCareer.id ? 'selected' : ''}>Career Path: ${c.title}</option>`).join('')}
      </select>
    </div>

    <div class="grid-3" style="margin-bottom:22px;">
      <div class="card">
        <span class="stat-label">Career Readiness Score</span>
        <div class="stat-value">${readiness}%</div>
        <div class="progress-bar-bg" style="margin-top:6px;"><div class="progress-bar-fill ${readiness>=80?'success':''}" style="width:${readiness}%"></div></div>
      </div>
      <div class="card">
        <span class="stat-label">Target Role Compensation Range</span>
        <div class="stat-value" style="font-size:21px;">${selectedCareer.salaryRange}</div>
        <span class="stat-sub">Entry to Mid-Level Benchmark</span>
      </div>
      <div class="card">
        <span class="stat-label">Skills Needed Before Applying</span>
        <div class="stat-value">${missingSkills.length} Topics</div>
        <span class="stat-sub">${missingSkills.length === 0 ? '🎉 You are ready to apply!' : 'Complete these to hit 100% readiness'}</span>
      </div>
    </div>

    <div class="grid-2" style="margin-bottom:22px;">
      <!-- SKILL GAP ANALYSIS -->
      <div class="card">
        <h3 style="margin-bottom:12px;">🎯 Required Skills & Gap Analysis (${selectedCareer.title})</h3>
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${reqTopics.map(t => {
            const pct = getTopicCompletionPercent(t.id);
            return `
              <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:var(--bg-elevated);border-radius:10px;">
                <div>
                  <strong>${t.icon} ${t.title}</strong>
                  <div style="font-size:12px;color:${pct>=70?'var(--success)':'var(--warning)'};">${pct>=70 ? '✓ Job-Ready Level' : '⚠️ Skill Gap — Needs Study'} (${pct}%)</div>
                </div>
                <button class="btn btn-sm btn-primary" onclick="openTopicPage('${t.id}')">Study</button>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- INSTANT RESUME & PORTFOLIO GENERATOR -->
      <div class="card">
        <h3 style="margin-bottom:12px;">📄 Auto-Generated Job-Ready Resume Preview</h3>
        <div style="background:var(--bg-input);padding:16px;border-radius:12px;border:1px solid var(--border-strong);font-size:13px;">
          <h4 style="font-size:16px;color:var(--primary);">${escapeHtml(AppState.studentName)} — ${selectedCareer.title}</h4>
          <p style="color:var(--text-secondary);margin:4px 0 10px;">GitHub Portfolio • Personal Website • LinkedIn</p>
          <strong>Verified Technical & Creative Skills:</strong>
          <p style="margin:4px 0 10px;">${SYLLABUS_TOPICS.filter(t => getTopicCompletionPercent(t.id) > 0).map(t => t.title).join(' • ') || 'HTML5, CSS3, JavaScript, Python, Generative AI'}</p>
          <strong>Key Portfolio Projects:</strong>
          <ul style="padding-left:18px;margin-top:4px;color:var(--text-secondary);">
            ${PRACTICAL_PROJECTS.slice(0, 3).map(p => `<li>${escapeHtml(p.title)} (${p.skills.slice(0, 3).join(', ')})</li>`).join('')}
          </ul>
        </div>
        <button class="btn btn-outline btn-sm" style="margin-top:12px;" onclick="window.print()">🖨️ Print / Save Resume PDF</button>
      </div>
    </div>

    <!-- JOB APPLICATION TRACKER -->
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <h3>📋 Job Application Tracker</h3>
        <button class="btn btn-primary btn-sm" onclick="addSampleJobApp()">+ Add Application</button>
      </div>
      <table class="data-table">
        <thead><tr><th>Company</th><th>Target Role</th><th>Status</th><th>Date</th></tr></thead>
        <tbody>
          ${AppState.jobApplications.map(j => `
            <tr>
              <td><strong>${escapeHtml(j.company)}</strong></td>
              <td>${escapeHtml(j.role)}</td>
              <td><span class="badge badge-primary">${escapeHtml(j.status)}</span></td>
              <td>${escapeHtml(j.date)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

/* 11. FREE LEARNING RESOURCES DIRECTORY */
function renderResourcesPage() {
  return `
    <div class="section-header">
      <div>
        <h1>🔗 Curated Free Learning Resources & Official Docs</h1>
        <p>Verified official documentation, free certification academies, and English/Telugu YouTube search guides for all 24 topics.</p>
      </div>
    </div>

    <div class="grid-2">
      ${SYLLABUS_TOPICS.map(t => `
        <div class="card">
          <h3 style="margin-bottom:10px;">${t.icon} #${t.number} ${t.title}</h3>
          <div style="display:flex;flex-direction:column;gap:8px;">
            ${t.resources.map(r => `
              <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;padding:8px 12px;background:var(--bg-elevated);border-radius:8px;">
                <span style="font-size:13px;">${escapeHtml(r.title)}</span>
                <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">Visit ↗</a>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

/* 12. ACHIEVEMENTS & CERTIFICATES */
function renderAchievementsPage() {
  const stats = getOverallStats();
  return `
    <div class="section-header">
      <div>
        <h1>🏆 Achievements, XP Leaderboard & Certificates</h1>
        <p>Earn XP by completing lessons (+35 XP), passing quizzes (+100 XP), and finishing projects (+200 XP).</p>
      </div>
      <span class="badge badge-primary">Level ${stats.level} ${stats.levelTitle} • ${AppState.xp} XP</span>
    </div>

    <div class="grid-3" style="margin-bottom:24px;">
      ${SYLLABUS_PATHS.map(p => {
        const pct = getPathCompletionPercent(p.id);
        return `
          <div class="card">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
              <span style="font-size:24px;">${p.icon}</span>
              <span class="badge ${pct===100?'badge-success':'badge-neutral'}">${pct}% Complete</span>
            </div>
            <h4>${p.title}</h4>
            <p style="font-size:12.5px;color:var(--text-secondary);margin:6px 0 12px;">Complete all topics in this learning path to unlock your verified certificate.</p>
            <button class="btn ${pct>=50?'btn-primary':'btn-outline'} btn-sm" style="width:100%;" onclick="openCertificateModal('${p.title}', ${pct})">
              🎓 ${pct === 100 ? 'View Official Certificate' : 'Preview Path Certificate'}
            </button>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

/* 13. SETTINGS & ACCESSIBILITY */
function renderSettingsPage() {
  return `
    <div class="section-header">
      <div>
        <h1>⚙️ University Settings & Preferences</h1>
        <p>Customize your profile, quiz passing score, language (English / Telugu), accessibility, and progress backups.</p>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <h3 style="margin-bottom:14px;">👤 Profile & Learning Preferences</h3>
        <div class="form-group">
          <label>Your Display Name (Appears on Dashboard & Certificates)</label>
          <input type="text" id="setStudentName" class="form-control" value="${escapeHtml(AppState.studentName)}" />
        </div>
        <div class="form-group">
          <label>Minimum Quiz Passing Score (%)</label>
          <input type="number" id="setPassingScore" class="form-control" min="50" max="100" value="${AppState.passingScore}" />
        </div>
        <div class="form-group">
          <label>Preferred Explanation Language</label>
          <select id="setLangSelect" class="form-control">
            <option value="en" ${AppState.language==='en'?'selected':''}>English</option>
            <option value="te" ${AppState.language==='te'?'selected':''}>English + తెలుగు (Telugu Summaries)</option>
          </select>
        </div>
        <button class="btn btn-primary" onclick="saveGeneralSettings()">💾 Save Settings</button>
      </div>

      <div class="card">
        <h3 style="margin-bottom:14px;">♿ Accessibility & Data Management</h3>
        <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:18px;">
          <label style="display:flex;align-items:center;gap:10px;cursor:pointer;">
            <input type="checkbox" ${AppState.accessibility.largeText ? 'checked' : ''} onchange="toggleAccessibility('largeText', this.checked)" />
            <span>Enable Larger Reading Typography</span>
          </label>
          <label style="display:flex;align-items:center;gap:10px;cursor:pointer;">
            <input type="checkbox" ${AppState.accessibility.highContrast ? 'checked' : ''} onchange="toggleAccessibility('highContrast', this.checked)" />
            <span>Enable High-Contrast Borders</span>
          </label>
        </div>

        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <button class="btn btn-outline btn-sm" onclick="exportProgressBackup()">⬇ Export Progress Backup (.json)</button>
          <button class="btn btn-outline btn-sm" style="color:var(--danger);" onclick="resetAllProgress()">🗑️ Reset Demo Progress</button>
        </div>
      </div>
    </div>
  `;
}

/* 14. DEDICATED FULL-SCREEN AI TUTOR PAGE */
function renderFullAiTutorPage() {
  const topic = SYLLABUS_TOPICS.find(t => t.id === AppState.currentTopicId) || SYLLABUS_TOPICS[0];
  return `
    <div class="section-header">
      <div>
        <h1>🤖 AI Personal Tutor Studio</h1>
        <p>Currently tuned to: <strong>${topic.icon} ${topic.title}</strong>. Switch topics or explanation styles anytime.</p>
      </div>
      <select class="form-control" style="max-width:260px;" onchange="AppState.currentTopicId=this.value;saveState();renderCurrentView();">
        ${SYLLABUS_TOPICS.map(t => `<option value="${t.id}" ${t.id===topic.id?'selected':''}>Context: ${t.title}</option>`).join('')}
      </select>
    </div>

    <div class="card">
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px;">
        <button class="btn btn-sm btn-primary" onclick="quickAskFullPage('Explain this topic from zero like I have never coded before')">🌱 Teach From Zero</button>
        <button class="btn btn-sm btn-secondary" onclick="quickAskFullPage('Give me a real-world example and workflow')">🌍 Real-Life Example</button>
        <button class="btn btn-sm btn-secondary" onclick="quickAskFullPage('Give me a practice question with a hint')">📝 Practice Question + Hint</button>
        <button class="btn btn-sm btn-secondary" onclick="quickAskFullPage('Prepare me for job interview questions on this topic')">💼 Interview Questions</button>
      </div>
      <div id="fullPageAiFeed" style="min-height:280px;max-height:420px;overflow-y:auto;background:var(--bg-input);padding:16px;border-radius:12px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px;">
        ${aiChatHistory.map(m => `<div class="ai-msg ${m.role}">${m.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>')}</div>`).join('')}
      </div>
      <form onsubmit="handleFullPageAiSubmit(event)" style="display:flex;gap:10px;">
        <input type="text" id="fullPageAiInput" class="form-control" placeholder="Ask any question, request a custom revision lesson, or paste code..." required />
        <button type="submit" class="btn btn-primary">Ask Tutor</button>
      </form>
    </div>
  `;
}
