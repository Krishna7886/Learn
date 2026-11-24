/* ==========================================================================
   PERSISTENT STATE ENGINE (localStorage + Automatic Calculations)
   ========================================================================== */

const STORAGE_KEY = 'mplu_user_state_v1';

const DEFAULT_STATE = {
  studentName: 'Future Engineer',
  targetRole: 'fullstack-dev',
  theme: 'dark',
  language: 'en', // 'en' | 'te'
  passingScore: 70,
  cutterSoftware: 'Silhouette Studio',
  dailyTargetHours: 2,
  preferredTime: '19:00',
  learningDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  streakDays: 3,
  xp: 240,
  currentTopicId: 'html-html5',
  completedLessons: {
    'html-html5': [0, 1] // First 2 lessons completed as starter progress
  },
  completedTopics: [],
  quizHistory: [], // { topicId, topicTitle, score, passed, date }
  completedProjects: [],
  bookmarks: ['html-html5', 'rag'],
  notes: {
    'html-html5': 'Remember: Always include <!DOCTYPE html> and meaningful semantic tags like <main> and <article>.'
  },
  flashcardProgress: {},
  plannerTasks: [
    { id: 'pt-1', day: 'Today', time: '07:00 PM', topicId: 'html-html5', title: 'Complete HTML5 Forms & Semantic Tags', done: false },
    { id: 'pt-2', day: 'Today', time: '08:00 PM', topicId: 'html-html5', title: 'Take HTML5 Mini Quiz (70% to pass)', done: false },
    { id: 'pt-3', day: 'Tomorrow', time: '07:00 PM', topicId: 'css3-css5', title: 'CSS Box Model, Flexbox & Grid', done: false }
  ],
  jobApplications: [
    { id: 'job-1', company: 'TechNova Solutions', role: 'Junior Frontend Developer', status: 'Preparing', date: '2026-11-20' }
  ],
  weeklyActivity: [1.5, 2.0, 1.0, 2.5, 1.5, 3.0, 1.2], // Mon-Sun hours
  notifications: [
    { id: 'n1', title: 'Welcome to My Personal Learning University!', body: 'Start from zero and master all 24 syllabus topics step by step.', time: 'Just now', unread: true },
    { id: 'n2', title: 'Daily Study Streak: 3 Days 🔥', body: 'Keep going! Complete 1 lesson today to extend your streak.', time: '2h ago', unread: true },
    { id: 'n3', title: 'Quiz Ready: HTML & HTML5', body: 'Score 70% or higher to unlock your next milestone.', time: '5h ago', unread: true }
  ],
  accessibility: {
    largeText: false,
    highContrast: false,
    browserNotifications: false
  }
};

let AppState = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return JSON.parse(JSON.stringify(DEFAULT_STATE));
    return { ...JSON.parse(JSON.stringify(DEFAULT_STATE)), ...JSON.parse(raw) };
  } catch (e) {
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(AppState));
  } catch (e) {
    console.warn('Storage quota exceeded', e);
  }
  updateGlobalChrome();
}

function getTopicCompletionPercent(topicId) {
  if (AppState.completedTopics.includes(topicId)) return 100;
  const topic = SYLLABUS_TOPICS.find(t => t.id === topicId);
  if (!topic) return 0;
  const doneLessons = (AppState.completedLessons[topicId] || []).length;
  const totalLessons = topic.stepByStepLessons.length;
  const passedQuiz = AppState.quizHistory.some(q => q.topicId === topicId && q.passed);

  const lessonWeight = (doneLessons / totalLessons) * 70;
  const quizWeight = passedQuiz ? 30 : 0;
  return Math.min(100, Math.round(lessonWeight + quizWeight));
}

function getPathCompletionPercent(pathId) {
  const topics = SYLLABUS_TOPICS.filter(t => t.pathId === pathId);
  if (!topics.length) return 0;
  const sum = topics.reduce((acc, t) => acc + getTopicCompletionPercent(t.id), 0);
  return Math.round(sum / topics.length);
}

function getOverallStats() {
  const totalTopics = SYLLABUS_TOPICS.length;
  const completedCount = SYLLABUS_TOPICS.filter(t => getTopicCompletionPercent(t.id) === 100).length;
  const totalPercent = Math.round(
    SYLLABUS_TOPICS.reduce((acc, t) => acc + getTopicCompletionPercent(t.id), 0) / totalTopics
  );
  const totalHours = SYLLABUS_TOPICS.reduce((acc, t) => {
    return acc + (t.estimatedHours * (getTopicCompletionPercent(t.id) / 100));
  }, 0).toFixed(1);

  const level = Math.floor(AppState.xp / 250) + 1;
  const levelTitles = ['Explorer', 'Apprentice', 'Builder', 'Practitioner', 'Specialist', 'Architect', 'Master'];
  const levelTitle = levelTitles[Math.min(level - 1, levelTitles.length - 1)];

  return {
    totalTopics,
    completedCount,
    remainingCount: totalTopics - completedCount,
    overallPercent: totalPercent,
    totalHours,
    level,
    levelTitle
  };
}

function toggleLessonComplete(topicId, lessonIndex) {
  if (!AppState.completedLessons[topicId]) AppState.completedLessons[topicId] = [];
  const arr = AppState.completedLessons[topicId];
  const idx = arr.indexOf(lessonIndex);
  if (idx === -1) {
    arr.push(lessonIndex);
    AppState.xp += 35;
    showToast('+35 XP! Lesson marked as completed.');
  } else {
    arr.splice(idx, 1);
  }
  checkAutoTopicComplete(topicId);
  saveState();
}

function checkAutoTopicComplete(topicId) {
  const topic = SYLLABUS_TOPICS.find(t => t.id === topicId);
  if (!topic) return;
  const allLessonsDone = (AppState.completedLessons[topicId] || []).length >= topic.stepByStepLessons.length;
  const quizPassed = AppState.quizHistory.some(q => q.topicId === topicId && q.passed);
  if (allLessonsDone && quizPassed && !AppState.completedTopics.includes(topicId)) {
    AppState.completedTopics.push(topicId);
    AppState.xp += 150;
    addNotification(`Topic Mastered: ${topic.title} 🎉`, 'You earned +150 XP and unlocked the next milestone!');
    showToast(`🎉 Congratulations! You mastered ${topic.title}!`);
  }
}

function addNotification(title, body) {
  AppState.notifications.unshift({
    id: 'n-' + Date.now(),
    title,
    body,
    time: 'Just now',
    unread: true
  });
  if (AppState.notifications.length > 25) AppState.notifications.pop();
}

function isTopicUnlocked(topic) {
  if (!topic.prerequisites || topic.prerequisites.length === 0) return true;
  return topic.prerequisites.every(reqId => getTopicCompletionPercent(reqId) >= 50);
}
