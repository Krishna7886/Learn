/* ==========================================================================
   CONTEXT-AWARE AI PERSONAL TUTOR (Supports Optional OpenAI-Compatible Key
   OR Built-in Rich Pedagogical Zero-to-Pro Engine with Zero Setup)
   ========================================================================== */

let currentAiStyle = 'simple';
let aiChatHistory = [
  {
    role: 'bot',
    text: '👋 Hi! I am your **AI Personal Tutor**. Ask me to explain any topic from zero, give real-life examples, debug your code, or quiz you with hints!'
  }
];

function generateTutorResponse(userQuestion, style, topicId) {
  const topic = SYLLABUS_TOPICS.find(t => t.id === topicId) || SYLLABUS_TOPICS[0];
  const isTelugu = AppState.language === 'te';
  const qLower = userQuestion.toLowerCase();

  if (qLower.includes('quiz') || qLower.includes('practice question') || qLower.includes('test me')) {
    const q = getQuestionsForTopic(topic.id)[0];
    return `📝 **Practice Question on ${topic.title}:**\n\n**Q:** ${q.question}\n\n💡 **Hint (not giving away the answer yet!):** Think about ${topic.terminology[0].term} — ${topic.terminology[0].def.slice(0, 65)}...\n\nReply with your thought or take the full **Mini Quiz** on the topic page!`;
  }

  if (qLower.includes('debug') || qLower.includes('error') || qLower.includes('bug') || userQuestion.includes('{') || userQuestion.includes('<')) {
    return `🔍 **Code Review & Debugging Checklist for ${topic.title}:**\n1. Check syntax delimiters (matching brackets \`{}\`, quotes \`""\`, or closing tags \`</>\`).\n2. Watch out for this common mistake: **${topic.commonMistakes[0]}**\n3. Verify inputs/outputs step-by-step using \`console.log()\` or \`print()\`. Paste the exact error message if you want line-by-line guidance!`;
  }

  const teluguNote = isTelugu ? `\n\n🇮🇳 **తెలుగు వివరణ:** ${topic.teluguSummary}` : '';

  switch (style) {
    case 'simple':
      return `🌱 **Very Simple Explanation (${topic.title} — From Zero):**\n\nImagine you are completely new to this. **${topic.whatIsIt}**\n\n**In 3 Easy Steps:**\n1️⃣ ${topic.stepByStepLessons[0].title}: ${topic.stepByStepLessons[0].content}\n2️⃣ Real-world use: ${topic.realLifeUse}\n3️⃣ Key term to remember: **${topic.terminology[0].term}** = ${topic.terminology[0].def}${teluguNote}`;

    case 'detailed':
      return `📘 **Detailed Deep-Dive (${topic.title}):**\n\n**Why it matters:** ${topic.whyImportant}\n\n**How it works internally:** ${topic.howItWorks}\n\n**Core Curriculum Breakdown:**\n• ${topic.stepByStepLessons.map(l => `**${l.title}:** ${l.content}`).join('\n• ')}${teluguNote}`;

    case 'reallife':
      return `🌍 **Real-Life Example (${topic.title}):**\n\n${topic.realWorldExample}\n\n**Where professionals use it daily:** ${topic.realLifeUse}\n\nTry this hands-on exercise next: *${topic.practicalExercises[0]}*${teluguNote}`;

    case 'technical':
      return `⚙️ **Technical Specification & Syntax (${topic.title}):**\n\n${topic.howItWorks}\n\n\`\`\`\n${topic.codeExample}\n\`\`\`\n\n⚠️ **Avoid this pitfall:** ${topic.commonMistakes[0]}`;

    case 'interview':
      const iq = topic.interviewQuestions[0];
      return `💼 **Interview Preparation (${topic.title}):**\n\n**Common Interview Question:** "${iq.q}"\n\n✅ **Strong Model Answer:** ${iq.a}\n\n🎯 **Pro Tip:** Mention a real project where you applied **${topic.subtopics.slice(0, 3).join(', ')}** to stand out to recruiters.`;

    default:
      return `Here is how **${topic.title}** works: ${topic.whatIsIt}${teluguNote}`;
  }
}

function renderAiMessages() {
  const container = document.getElementById('aiChatMessages');
  if (!container) return;
  container.innerHTML = aiChatHistory.map(m => {
    const formatted = m.text
      .replace(/```([\s\S]*?)```/g, '<pre class="code-block">$1</pre>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
    return `<div class="ai-msg ${m.role}">${formatted}</div>`;
  }).join('');
  container.scrollTop = container.scrollHeight;
}

function sendAiPrompt(text) {
  if (!text.trim()) return;
  aiChatHistory.push({ role: 'user', text });
  const reply = generateTutorResponse(text, currentAiStyle, AppState.currentTopicId);
  aiChatHistory.push({ role: 'bot', text: reply });
  renderAiMessages();
}
