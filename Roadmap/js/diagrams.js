/* ==========================================================================
   RICH VISUAL SVG DIAGRAMS & FLOWCHARTS FOR ALL 24 SYLLABUS TOPICS
   ========================================================================== */

function renderTopicDiagram(diagramType) {
  const diagrams = {
    'html-structure': `
      <svg viewBox="0 0 680 230" width="100%" style="max-width:660px;height:auto;">
        <rect x="10" y="10" width="660" height="210" rx="14" fill="#1e293b" stroke="#6366f1" stroke-width="2"/>
        <text x="30" y="38" fill="#818cf8" font-family="monospace" font-size="14" font-weight="bold">&lt;!DOCTYPE html&gt; &lt;html lang="en"&gt;</text>
        <rect x="30" y="50" width="290" height="145" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="48" y="75" fill="#38bdf8" font-family="monospace" font-size="13" font-weight="bold">&lt;head&gt; (Invisible Brain)</text>
        <text x="48" y="102" fill="#cbd5e1" font-family="monospace" font-size="12">&lt;meta charset="UTF-8"&gt;</text>
        <text x="48" y="126" fill="#cbd5e1" font-family="monospace" font-size="12">&lt;title&gt;Page Tab Title&lt;/title&gt;</text>
        <text x="48" y="150" fill="#cbd5e1" font-family="monospace" font-size="12">&lt;link rel="stylesheet"&gt;</text>
        <rect x="340" y="50" width="310" height="145" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
        <text x="358" y="75" fill="#10b981" font-family="monospace" font-size="13" font-weight="bold">&lt;body&gt; (Visible Webpage)</text>
        <rect x="358" y="86" width="274" height="24" rx="5" fill="#1e293b"/><text x="370" y="102" fill="#f8fafc" font-family="monospace" font-size="11">&lt;header&gt; &amp; &lt;nav&gt;</text>
        <rect x="358" y="116" width="274" height="38" rx="5" fill="#1e293b"/><text x="370" y="139" fill="#f8fafc" font-family="monospace" font-size="11">&lt;main&gt; (&lt;h1&gt;, &lt;p&gt;, &lt;form&gt;)</text>
        <rect x="358" y="160" width="274" height="24" rx="5" fill="#1e293b"/><text x="370" y="176" fill="#f8fafc" font-family="monospace" font-size="11">&lt;footer&gt; Copyright &amp; Links</text>
      </svg>`,

    'css-box-model': `
      <svg viewBox="0 0 640 240" width="100%" style="max-width:620px;height:auto;">
        <rect x="40" y="12" width="560" height="216" rx="14" fill="rgba(245,158,11,0.16)" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4"/>
        <text x="60" y="34" fill="#fbbf24" font-family="sans-serif" font-size="13" font-weight="bold">MARGIN (Outer Space Between Elements)</text>
        <rect x="95" y="45" width="450" height="162" rx="12" fill="rgba(168,85,247,0.22)" stroke="#a855f7" stroke-width="3"/>
        <text x="115" y="67" fill="#d8b4fe" font-family="sans-serif" font-size="13" font-weight="bold">BORDER (Visible Edge / Frame)</text>
        <rect x="150" y="78" width="340" height="108" rx="10" fill="rgba(16,185,129,0.22)" stroke="#10b981" stroke-width="2"/>
        <text x="170" y="100" fill="#6ee7b7" font-family="sans-serif" font-size="13" font-weight="bold">PADDING (Inner Breathing Room)</text>
        <rect x="205" y="112" width="230" height="54" rx="8" fill="#4f46e5"/>
        <text x="320" y="144" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="14" font-weight="bold">CONTENT (Text / Image)</text>
      </svg>`,

    'api-flow': `
      <svg viewBox="0 0 680 190" width="100%" style="max-width:660px;height:auto;">
        <rect x="20" y="35" width="170" height="120" rx="14" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="105" y="88" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Frontend App</text>
        <text x="105" y="110" text-anchor="middle" fill="#94a3b8" font-size="12">(Browser / Mobile)</text>

        <line x1="195" y1="70" x2="475" y2="70" stroke="#6366f1" stroke-width="3"/>
        <polygon points="485,70 472,63 472,77" fill="#6366f1"/>
        <text x="340" y="58" text-anchor="middle" fill="#a5b4fc" font-size="12" font-weight="bold">HTTP Request: GET / POST / PUT / DELETE</text>

        <line x1="485" y1="125" x2="205" y2="125" stroke="#10b981" stroke-width="3"/>
        <polygon points="195,125 208,118 208,132" fill="#10b981"/>
        <text x="340" y="146" text-anchor="middle" fill="#6ee7b7" font-size="12" font-weight="bold">JSON Response + Status (200 OK / 201 / 404)</text>

        <rect x="490" y="35" width="170" height="120" rx="14" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <text x="575" y="88" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Backend Server</text>
        <text x="575" y="110" text-anchor="middle" fill="#94a3b8" font-size="12">(REST API + DB)</text>
      </svg>`,

    'rag-architecture': `
      <svg viewBox="0 0 700 200" width="100%" style="max-width:680px;height:auto;">
        <rect x="15" y="30" width="120" height="60" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="75" y="65" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="bold">1. PDFs / Docs</text>

        <line x1="135" y1="60" x2="175" y2="60" stroke="#94a3b8" stroke-width="2"/>
        <rect x="175" y="30" width="130" height="60" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="240" y="65" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">2. Text Chunks</text>

        <line x1="305" y1="60" x2="345" y2="60" stroke="#94a3b8" stroke-width="2"/>
        <rect x="345" y="30" width="145" height="60" rx="10" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
        <text x="417" y="58" text-anchor="middle" fill="#d8b4fe" font-size="13" font-weight="bold">3. Vector DB</text>
        <text x="417" y="76" text-anchor="middle" fill="#94a3b8" font-size="11">(Embeddings)</text>

        <line x1="490" y1="60" x2="530" y2="60" stroke="#94a3b8" stroke-width="2"/>
        <rect x="530" y="30" width="155" height="135" rx="12" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
        <text x="607" y="85" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold">4. Grounded LLM</text>
        <text x="607" y="108" text-anchor="middle" fill="#c7d2fe" font-size="11">Answers with Facts</text>
        <text x="607" y="126" text-anchor="middle" fill="#6ee7b7" font-size="11">&amp; Zero Hallucination</text>

        <rect x="175" y="115" width="315" height="50" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
        <text x="332" y="145" text-anchor="middle" fill="#6ee7b7" font-size="12" font-weight="bold">User Query -&gt; Top-K Similarity Search -&gt; Context</text>
      </svg>`
  };

  if (diagrams[diagramType]) return diagrams[diagramType];

  // Universal clean architectural flowchart SVG tailored to any topic
  const topic = SYLLABUS_TOPICS.find(t => t.diagramType === diagramType) || SYLLABUS_TOPICS[0];
  const steps = topic.subtopics.slice(0, 4);
  return `
    <svg viewBox="0 0 700 165" width="100%" style="max-width:680px;height:auto;">
      <rect x="10" y="15" width="680" height="135" rx="14" fill="#0f172a" stroke="#6366f1" stroke-width="1.5"/>
      <text x="350" y="42" text-anchor="middle" fill="#a5b4fc" font-size="13" font-weight="bold">${topic.title} — Step-by-Step Learning Flow</text>
      ${steps.map((st, idx) => {
        const x = 28 + idx * 165;
        return `
          <rect x="${x}" y="62" width="145" height="62" rx="10" fill="#1e293b" stroke="${idx === 0 ? '#10b981' : '#38bdf8'}" stroke-width="1.5"/>
          <text x="${x + 72}" y="87" text-anchor="middle" fill="#94a3b8" font-size="10" font-weight="bold">STEP ${idx + 1}</text>
          <text x="${x + 72}" y="106" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">${st.slice(0, 18)}</text>
          ${idx < 3 ? `<line x1="${x + 145}" y1="93" x2="${x + 165}" y2="93" stroke="#6366f1" stroke-width="2"/>` : ''}
        `;
      }).join('')}
    </svg>
  `;
}
