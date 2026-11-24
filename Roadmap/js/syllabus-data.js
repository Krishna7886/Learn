/* ==========================================================================
   COMPLETE 24-SUBJECT SYLLABUS DATA (ALL PATHS, TOPICS, SUBTOPICS, LESSONS,
   QUIZZES, PROJECTS, VERIFIED RESOURCES & TELUGU EXPLANATIONS)
   ========================================================================== */

const SYLLABUS_PATHS = [
  { id: 'frontend', title: 'A. Frontend Development', icon: '🎨', color: '#6366f1', description: 'Build modern, responsive, interactive websites & web apps from zero.' },
  { id: 'backend', title: 'B. Backend Development', icon: '⚙️', color: '#06b6d4', description: 'Master UI/UX, React JSX, Python, Databases, SQL, JSON & Node.js APIs.' },
  { id: 'genai', title: 'C. Generative AI & Agents', icon: '🤖', color: '#a855f7', description: 'Learn LLMs, Prompt Engineering, RAG systems, AI Agents & LangGraph/n8n.' },
  { id: 'marketing', title: 'D. Digital Marketing', icon: '📣', color: '#f59e0b', description: 'Grow businesses with SEO, Google Ads (SEM), Meta Ads, SMM & Analytics.' },
  { id: 'image-editing', title: 'E. Image Editing', icon: '🖼️', color: '#ec4899', description: 'Professional photo retouching, masking & manipulation in Adobe Photoshop.' },
  { id: 'video-editing', title: 'F. Video Editing & VFX', icon: '🎬', color: '#ef4444', description: 'Edit cinematic videos, color grade & create motion graphics in Premiere & After Effects.' },
  { id: 'logo-design', title: 'G. Logo Designing & Branding', icon: '✒️', color: '#10b981', description: 'Design crisp vector logos, brand identities & icons in Adobe Illustrator.' },
  { id: 'cutter-machine', title: 'H. Cutter Machine Handling', icon: '✂️', color: '#14b8a6', description: 'Operate vinyl & plotter cutting machines with precision calibration & templates.' },
  { id: 'print-design', title: 'I. Banners & Pamphlets Making', icon: '📰', color: '#8b5cf6', description: 'Design print-ready banners, pamphlets & brochures in Adobe InDesign.' }
];

const SYLLABUS_TOPICS = [
  // ==================== A. FRONTEND DEVELOPMENT ====================
  {
    id: 'html-html5',
    number: 1,
    pathId: 'frontend',
    title: 'HTML & HTML5',
    icon: '🌐',
    level: 'Beginner',
    estimatedHours: 8,
    prerequisites: [],
    diagramType: 'html-structure',
    diagramCaption: 'Visual Anatomy of an HTML5 Document: <!DOCTYPE>, <html>, <head>, and semantic <body> layout.',
    subtopics: [
      'Introduction to HTML', 'HTML document structure', 'Elements and tags', 'Attributes',
      'Headings and paragraphs', 'Links and images', 'Lists and tables', 'Forms and input elements',
      'Semantic HTML', 'HTML5 features', 'Multimedia', 'Accessibility', 'Practical projects'
    ],
    teluguSummary: 'HTML (హైపర్ టెక్స్ట్ మార్కప్ లాంగ్వేజ్) అనేది ప్రతి వెబ్‌సైట్ యొక్క అస్థిపంజరం (Skeleton). వెబ్ పేజీలో హెడ్డింగ్స్, పేరాగ్రాఫ్‌లు, చిత్రాలు, లింకులు మరియు ఫారమ్‌లను అమర్చడానికి దీనిని ఉపయోగిస్తారు.',
    whatIsIt: 'HTML (HyperText Markup Language) is the standard skeleton language used to structure content on the web. Every webpage you visit—from Google to YouTube—starts with HTML.',
    whyImportant: 'Without HTML, web browsers would not know what text is a heading, what is a button, where an image goes, or how screen readers assist visually impaired users.',
    realLifeUse: 'Used in 100% of websites, web applications, HTML email templates, e-books, and hybrid mobile apps.',
    howItWorks: 'You write plain text wrapped in angle-bracket tags like <h1>Title</h1>. A web browser (Chrome, Edge, Safari) reads this file top-to-bottom and renders visual elements on screen.',
    stepByStepLessons: [
      { title: 'Lesson 1: Document Skeleton & Basic Tags', content: 'Every HTML5 file starts with <!DOCTYPE html>, followed by <html>, <head> (page metadata), and <body> (visible content). Use <h1>–<h6> for headings and <p> for paragraphs.' },
      { title: 'Lesson 2: Attributes, Links & Media', content: 'Attributes add extra info inside opening tags, such as href in <a href="https://example.com">Link</a> or src and alt in <img src="photo.jpg" alt="Description">.' },
      { title: 'Lesson 3: Lists, Tables & Interactive Forms', content: 'Organize items with <ul>/<ol>, structured data with <table>, and collect user input with <form>, <input>, <label>, <select>, and <button>.' },
      { title: 'Lesson 4: Semantic HTML5 & Accessibility (a11y)', content: 'Replace generic <div> soup with meaningful tags: <header>, <nav>, <main>, <article>, <section>, and <footer>. Always pair <label for="id"> with inputs.' }
    ],
    terminology: [
      { term: 'Tag', def: 'Keywords inside angle brackets like <p> that tell the browser how to format content.' },
      { term: 'Element', def: 'An opening tag, its content, and closing tag combined: <p>Hello</p>.' },
      { term: 'Attribute', def: 'Key-value settings inside an opening tag, e.g., id="hero" or required.' },
      { term: 'Semantic HTML', def: 'Tags that clearly describe their meaning to both browsers and developers (<nav>, <article>).' }
    ],
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>My First Webpage</title>
</head>
<body>
  <header>
    <h1>Welcome to My Portfolio</h1>
    <nav><a href="#projects">Projects</a></nav>
  </header>
  <main>
    <p>I am learning web development from zero!</p>
    <form>
      <label for="email">Subscribe:</label>
      <input id="email" type="email" placeholder="you@example.com" required />
      <button type="submit">Join</button>
    </form>
  </main>
</body>
</html>`,
    sandboxDefault: `<h2>Hello Future Developer!</h2>\n<p>Edit this HTML and click <strong>Run Code</strong> to see live results.</p>\n<button style="padding:8px 14px;background:#4f46e5;color:#fff;border:none;border-radius:6px;">Click Me</button>`,
    realWorldExample: 'When you fill out a sign-up form on Amazon or LinkedIn, <form>, <input type="email">, and <button> validate and submit your details.',
    practicalExercises: [
      'Build a personal bio page using <h1>, <p>, <img> with alt text, and an unordered list of 5 hobbies.',
      'Create a 3-column weekly timetable using <table>, <thead>, <tbody>, <tr>, <th>, and <td>.',
      'Build a student registration form with name, email, password, radio buttons, and a submit button.'
    ],
    commonMistakes: [
      'Forgetting to close tags like <div> or <p>, causing layout breakage.',
      'Omitting the alt attribute on <img> tags (hurts SEO and screen readers).',
      'Using multiple <h1> tags on a single page instead of one clear main title.'
    ],
    interviewQuestions: [
      { q: 'What is the difference between block-level and inline elements in HTML?', a: 'Block elements (<div>, <p>, <h1>) start on a new line and take full width; inline elements (<span>, <a>, <strong>) stay within the flow of text.' },
      { q: 'Why is <!DOCTYPE html> important?', a: 'It instructs the browser to render the page in modern HTML5 Standards Mode rather than legacy Quirks Mode.' },
      { q: 'What are semantic tags and why do they matter?', a: 'Tags like <header>, <main>, and <article> convey meaning, improving SEO rankings and screen-reader accessibility.' }
    ],
    summary: 'HTML5 provides the semantic structure, forms, tables, and media foundation for every webpage on the internet.',
    resources: [
      { title: 'MDN Web Docs: HTML Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content', type: 'Official Docs', verified: true },
      { title: 'freeCodeCamp Responsive Web Design', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/', type: 'Free Course', verified: true },
      { title: 'W3Schools HTML Tutorial', url: 'https://www.w3schools.com/html/', type: 'Reference', verified: true },
      { title: 'Suggested Search: HTML Full Course for Beginners in Telugu / English (YouTube)', url: 'https://www.youtube.com/results?search_query=HTML+full+course+for+beginners', type: 'YouTube Search', verified: false }
    ]
  },

  {
    id: 'css3-css5',
    number: 2,
    pathId: 'frontend',
    title: 'CSS3 & Modern CSS',
    icon: '🎨',
    level: 'Beginner',
    estimatedHours: 12,
    prerequisites: ['html-html5'],
    diagramType: 'css-box-model',
    diagramCaption: 'The CSS Box Model: Every element is a rectangular box made of Content, Padding, Border, and Margin.',
    subtopics: [
      'CSS introduction', 'Selectors', 'Colors and backgrounds', 'Typography', 'Box model',
      'Margin and padding', 'Borders', 'Flexbox', 'CSS Grid', 'Positioning',
      'Responsive design', 'Media queries', 'Animations and transitions', 'Advanced styling', 'Practical projects'
    ],
    teluguSummary: 'CSS (కాస్కేడింగ్ స్టైల్ షీట్స్) వెబ్‌సైట్‌కు అందమైన రంగులు, ఫాంట్లు, లేఅవుట్ (Flexbox, Grid) మరియు యానిమేషన్లను అందిస్తుంది.',
    whatIsIt: 'CSS (Cascading Style Sheets) controls the visual presentation of HTML—colors, fonts, spacing, responsive layouts, and smooth animations.',
    whyImportant: 'Raw HTML looks like a 1990s plain document. CSS transforms it into an attractive, mobile-responsive product like Linear or Stripe.',
    realLifeUse: 'Designing responsive mobile/desktop layouts, dark mode themes, interactive hover states, and grid dashboards.',
    howItWorks: 'CSS uses Selectors (e.g., .card or #header) to target HTML elements and apply Property: Value rules inside curly braces.',
    stepByStepLessons: [
      { title: 'Lesson 1: Selectors, Colors & Typography', content: 'Target elements via tag (p), class (.btn), or ID (#nav). Control text with font-family, font-size, line-height, and rem units.' },
      { title: 'Lesson 2: The Box Model (Margin, Border, Padding)', content: 'Always set box-sizing: border-box. Padding adds breathing room inside the border; margin adds space outside between elements.' },
      { title: 'Lesson 3: Flexbox & CSS Grid Layouts', content: 'Use Flexbox (display: flex) for 1D rows/columns (navbars, button groups) and CSS Grid (display: grid) for 2D card galleries and page shells.' },
      { title: 'Lesson 4: Responsive Media Queries & Animations', content: 'Use @media (max-width: 768px) to adapt layouts for phones, and transition / @keyframes for silky hover effects.' }
    ],
    terminology: [
      { term: 'Box Model', def: 'The four concentric layers around every HTML element: content, padding, border, and margin.' },
      { term: 'Flexbox', def: 'A 1-dimensional layout engine for aligning and distributing space among items in a row or column.' },
      { term: 'CSS Grid', def: 'A 2-dimensional layout system for creating complex rows and columns simultaneously.' },
      { term: 'Media Query', def: 'Conditional CSS rules that apply only when screen width or device features match criteria.' }
    ],
    codeExample: `.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.feature-card {
  background: #1e293b;
  color: #f8fafc;
  padding: 24px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.1);
  transition: transform 0.25s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
}`,
    sandboxDefault: `<style>\n  .demo-box { background: linear-gradient(135deg,#6366f1,#06b6d4); color: white; padding: 20px; border-radius: 12px; font-family: sans-serif; transition: 0.3s; }\n  .demo-box:hover { transform: scale(1.02); }\n</style>\n<div class="demo-box">Hover over this styled CSS Card!</div>`,
    realWorldExample: 'Netflix’s horizontal movie rows use Flexbox/Grid, while media queries switch a 4-column desktop grid into a 1-column mobile feed.',
    practicalExercises: [
      'Create a responsive navigation bar using Flexbox with logo on left and links on right.',
      'Build a 3-tier pricing card layout using CSS Grid that stacks into 1 column below 768px.',
      'Create a button with a smooth background gradient shift and subtle lift on :hover.'
    ],
    commonMistakes: [
      'Not setting box-sizing: border-box, causing padding to unexpectedly widen elements.',
      'Using fixed pixel widths (width: 1200px) instead of max-width: 100%, breaking mobile screens.',
      'Overusing !important instead of understanding CSS selector specificity.'
    ],
    interviewQuestions: [
      { q: 'When should you use Flexbox vs CSS Grid?', a: 'Use Flexbox for 1-dimensional alignment (navbars, centering items); use CSS Grid for 2-dimensional page layouts with both rows and columns.' },
      { q: 'Explain CSS specificity order.', a: 'Inline styles > ID selectors (#id) > Class/attribute/pseudo-class (.class) > Element tags (div).' }
    ],
    summary: 'CSS3 empowers you to craft responsive, accessible, and visually polished interfaces across mobile, tablet, and desktop screens.',
    resources: [
      { title: 'MDN Web Docs: CSS Styling Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics', type: 'Official Docs', verified: true },
      { title: 'CSS-Tricks Complete Guide to Flexbox', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', type: 'Guide', verified: true },
      { title: 'CSS-Tricks Complete Guide to Grid', url: 'https://css-tricks.com/snippets/css/complete-guide-grid/', type: 'Guide', verified: true }
    ]
  },

  {
    id: 'javascript-es6',
    number: 3,
    pathId: 'frontend',
    title: 'JavaScript (JS) & ES6+',
    icon: '⚡',
    level: 'Beginner',
    estimatedHours: 20,
    prerequisites: ['html-html5', 'css3-css5'],
    diagramType: 'js-flowchart',
    diagramCaption: 'JavaScript Logic & Event Loop Flow: Conditionals, Loops, DOM Events, and Async/Await Promises.',
    subtopics: [
      'Programming fundamentals', 'Variables', 'Data types', 'Operators', 'Conditions',
      'Loops', 'Functions', 'Arrays', 'Objects', 'DOM manipulation', 'Events',
      'ES6 features', 'Arrow functions', 'Promises', 'Async/Await', 'Fetch API',
      'Error handling', 'Practical projects'
    ],
    teluguSummary: 'JavaScript వెబ్‌సైట్‌కు ప్రాణం పోస్తుంది. బటన్ క్లిక్ చేసినప్పుడు ఏమి జరగాలి, డేటాను ఎలా ప్రాసెస్ చేయాలి మరియు సర్వర్ నుండి డేటాను ఎలా తీసుకురావాలో JS నిర్ణయిస్తుంది.',
    whatIsIt: 'JavaScript is the programming language of the web. While HTML is the skeleton and CSS is the clothing, JavaScript is the brain and muscles that make pages interactive.',
    whyImportant: 'Every modern interactive feature—live search, quizzes, shopping carts, dashboards, and React/Node apps—runs on JavaScript.',
    realLifeUse: 'Form validation, interactive maps, real-time chat apps, browser games, and full-stack web applications.',
    howItWorks: 'The browser’s JS engine (like V8 in Chrome) executes your code, listens to user events (clicks, typing), updates the DOM, and fetches live data asynchronously.',
    stepByStepLessons: [
      { title: 'Lesson 1: Variables (let, const) & Data Types', content: 'Store values in const (cannot be reassigned) and let (can change). Core types: String, Number, Boolean, Array, Object, null, and undefined.' },
      { title: 'Lesson 2: Conditions, Loops & Functions', content: 'Make decisions with if/else and switch. Repeat tasks with for loops and array methods (.map(), .filter()). Bundle reusable logic in arrow functions.' },
      { title: 'Lesson 3: DOM Manipulation & Events', content: 'Select HTML elements with document.querySelector(), modify text/styles, and react to clicks or keystrokes using addEventListener().' },
      { title: 'Lesson 4: Asynchronous JS (Promises, Async/Await, Fetch)', content: 'Load data from servers without freezing the UI using async/await and try/catch error handling.' }
    ],
    terminology: [
      { term: 'DOM (Document Object Model)', def: 'The live tree representation of HTML elements that JavaScript can read and modify.' },
      { term: 'Closure', def: 'A function that remembers variables from its outer scope even after the outer function finishes.' },
      { term: 'Promise', def: 'An object representing the eventual completion or failure of an asynchronous operation.' },
      { term: 'ES6+', def: 'Modern JavaScript standards introducing let/const, arrow functions, destructuring, and modules.' }
    ],
    codeExample: `const fetchUserProfile = async (username) => {
  try {
    const response = await fetch(\`https://api.github.com/users/\${username}\`);
    if (!response.ok) throw new Error('User not found');
    const data = await response.json();
    console.log(\`\${data.name} has \${data.public_repos} public repos!\`);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

fetchUserProfile('octocat');`,
    sandboxDefault: `<button id="countBtn" style="padding:10px 16px;font-weight:bold;cursor:pointer;">Clicks: 0</button>\n<script>\n  let count = 0;\n  const btn = document.getElementById('countBtn');\n  btn.addEventListener('click', () => {\n    count++;\n    btn.textContent = 'Clicks: ' + count;\n  });\n</script>`,
    realWorldExample: 'When you type in YouTube’s search bar and instant autocomplete suggestions appear without reloading the page, that is JavaScript DOM + Fetch API.',
    practicalExercises: [
      'Build an interactive To-Do list where users can add, check off, and delete tasks.',
      'Write a function that filters an array of student scores >= 70 and calculates their average.',
      'Fetch live weather or GitHub user data using async/await and display it on the page.'
    ],
    commonMistakes: [
      'Using == (loose equality) instead of === (strict equality), leading to unexpected type coercion.',
      'Forgetting await before fetch() or response.json(), resulting in a pending Promise instead of data.',
      'Mutating arrays/objects directly when pure copies (.map/.filter/spread) are expected.'
    ],
    interviewQuestions: [
      { q: 'What is the difference between let, const, and var?', a: 'var is function-scoped and hoisted; let and const are block-scoped. const prevents reassignment of the variable binding.' },
      { q: 'Explain Event Delegation in JavaScript.', a: 'Attaching a single event listener to a parent element to handle events from current and future child elements via event bubbling.' }
    ],
    summary: 'JavaScript & ES6+ give you full programming control over logic, user interactions, DOM updates, and asynchronous network requests.',
    resources: [
      { title: 'JavaScript.info — The Modern JavaScript Tutorial', url: 'https://javascript.info/', type: 'Free Book', verified: true },
      { title: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide', type: 'Official Docs', verified: true },
      { title: 'freeCodeCamp JavaScript Algorithms & Data Structures', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/', type: 'Free Course', verified: true }
    ]
  },

  {
    id: 'apis',
    number: 4,
    pathId: 'frontend',
    title: 'APIs & REST Architecture',
    icon: '🔌',
    level: 'Intermediate',
    estimatedHours: 8,
    prerequisites: ['javascript-es6'],
    diagramType: 'api-flow',
    diagramCaption: 'Client-Server REST API Cycle: HTTP Request (GET/POST/PUT/DELETE) -> Server -> JSON Response + Status Code.',
    subtopics: [
      'What are APIs?', 'REST APIs', 'HTTP methods', 'GET, POST, PUT, DELETE',
      'Request and response', 'Status codes', 'JSON', 'Authentication', 'API integration', 'Practical projects'
    ],
    teluguSummary: 'API (అప్లికేషన్ ప్రోగ్రామింగ్ ఇంటర్‌ఫేస్) అనేది రెండు సాఫ్ట్‌వేర్ సిస్టమ్‌ల మధ్య మాట్లాడే ఒక వెయిటర్ లాంటిది. మన వెబ్‌సైట్ సర్వర్ నుండి డేటాను అడగడానికి మరియు పంపడానికి APIs వాడతాము.',
    whatIsIt: 'An API (Application Programming Interface) is a structured messenger that lets your frontend app talk to a backend server or external service (like Stripe, OpenAI, or Google Maps).',
    whyImportant: 'Modern apps rarely store all data locally; they communicate with cloud databases, payment gateways, and AI models via REST APIs.',
    realLifeUse: 'Checking live cricket scores, processing UPI/card payments, logging in with Google, and calling AI models.',
    howItWorks: 'The client sends an HTTP Request (Method + URL + Headers + optional JSON Body) to an endpoint, and the server replies with an HTTP Status Code and JSON payload.',
    stepByStepLessons: [
      { title: 'Lesson 1: The Restaurant Waiter Analogy', content: 'You (Client) order from a menu (API documentation). The waiter (API) takes your request to the kitchen (Server) and brings back your food (JSON Response).' },
      { title: 'Lesson 2: HTTP Methods (CRUD)', content: 'GET reads data, POST creates new data, PUT/PATCH updates existing data, and DELETE removes data.' },
      { title: 'Lesson 3: HTTP Status Codes & Auth', content: '200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Server Error. Secure calls use Bearer tokens or API keys.' }
    ],
    terminology: [
      { term: 'REST', def: 'Representational State Transfer—a standard architectural style using stateless HTTP requests and resource URLs.' },
      { term: 'Endpoint', def: 'A specific URL path where an API resource is accessed, e.g., /api/v1/courses.' },
      { term: 'Bearer Token', def: 'An authentication string passed in the Authorization header to prove user identity.' }
    ],
    codeExample: `// Creating a new task via POST request
const createTask = async (title) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_TOKEN_HERE'
    },
    body: JSON.stringify({ title, completed: false })
  });
  console.log('Status:', res.status); // 201 Created
  return await res.json();
};`,
    realWorldExample: 'When you book a train ticket on IRCTC, the frontend sends a POST request with passenger details and receives a JSON booking confirmation.',
    practicalExercises: [
      'Use Postman or browser fetch() to call a public REST API and log status code 200.',
      'Handle a 404 Not Found response gracefully by showing a friendly error banner to the user.'
    ],
    commonMistakes: [
      'Exposing secret private API keys directly inside public frontend JavaScript files.',
      'Forgetting the Content-Type: application/json header when sending POST JSON data.'
    ],
    interviewQuestions: [
      { q: 'What is the difference between PUT and PATCH?', a: 'PUT replaces an entire resource with new data, whereas PATCH applies partial updates to specific fields.' },
      { q: 'What is CORS and why does it happen?', a: 'Cross-Origin Resource Sharing is a browser security policy restricting frontend requests to different domains unless the server explicitly permits them.' }
    ],
    summary: 'APIs connect your user interface to real-world data, authentication, payments, and AI services using standard HTTP methods and JSON.',
    resources: [
      { title: 'MDN: Introduction to Web APIs', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction', type: 'Official Docs', verified: true },
      { title: 'MDN: HTTP Response Status Codes', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status', type: 'Reference', verified: true }
    ]
  },

  {
    id: 'react-router',
    number: 5,
    pathId: 'frontend',
    title: 'React Router & SPA Navigation',
    icon: '🧭',
    level: 'Intermediate',
    estimatedHours: 7,
    prerequisites: ['javascript-es6', 'jsx'],
    diagramType: 'router-flow',
    diagramCaption: 'Single-Page Application (SPA) Routing: URL changes instantaneously swap components without full page reloads.',
    subtopics: [
      'Introduction', 'Routing fundamentals', 'BrowserRouter', 'Routes and Route',
      'Link and NavLink', 'Dynamic routing', 'Nested routes', 'Navigation', 'Protected routes', 'Practical projects'
    ],
    teluguSummary: 'React Router ద్వారా పేజీ పూర్తిగా రీలోడ్ అవ్వకుండానే వివిధ పేజీల మధ్య (ఉదా: /dashboard, /courses/1) వేగంగా మారవచ్చు.',
    whatIsIt: 'React Router is the standard routing library for React Single-Page Applications (SPAs), mapping browser URLs to UI components without full page refreshes.',
    whyImportant: 'Users expect bookmarkable URLs, browser Back/Forward button support, active navigation highlights, and login-protected pages.',
    realLifeUse: 'Multi-page SaaS dashboards, e-commerce product pages (/product/:id), and admin portals.',
    howItWorks: 'BrowserRouter listens to the HTML5 History API. When the URL changes via <Link>, <Routes> matches the path and renders the corresponding component.',
    stepByStepLessons: [
      { title: 'Lesson 1: BrowserRouter, Routes & Route', content: 'Wrap your app in <BrowserRouter> and map paths like <Route path="/courses" element={<Courses />} />.' },
      { title: 'Lesson 2: Link, NavLink & Dynamic Params', content: 'Use <Link to="/about"> instead of <a href> to avoid page reloads. Read dynamic IDs like /topic/:topicId using useParams().' },
      { title: 'Lesson 3: Nested & Protected Routes', content: 'Use <Outlet /> for shared dashboard layouts and wrap private pages in a <ProtectedRoute> component that redirects unauthenticated users.' }
    ],
    terminology: [
      { term: 'SPA (Single-Page Application)', def: 'A web app that loads one HTML shell and dynamically updates content via JavaScript.' },
      { term: 'useParams()', def: 'A React Router hook that extracts dynamic URL segments like :id.' },
      { term: 'Protected Route', def: 'A wrapper component that checks user login state before rendering private pages.' }
    ],
    codeExample: `import { BrowserRouter, Routes, Route, NavLink, useParams, Navigate } from 'react-router-dom';

function ProtectedRoute({ isLoggedIn, children }) {
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

function TopicDetail() {
  const { topicId } = useParams();
  return <h2>Viewing Topic: {topicId}</h2>;
}`,
    realWorldExample: 'In Notion or Gmail, clicking between Inbox and Sent changes the URL immediately without flickering or reloading the whole browser window.',
    practicalExercises: [
      'Build a 4-page SPA with Home, Courses, CourseDetail (/courses/:id), and a 404 Not Found fallback route.',
      'Highlight the active sidebar link automatically using NavLink.'
    ],
    commonMistakes: [
      'Using standard <a href="/dashboard"> tags inside React, which triggers a full page reload and wipes React state.',
      'Forgetting server fallback rewrites to index.html when deploying SPAs.'
    ],
    interviewQuestions: [
      { q: 'How does <Link> differ from a standard <a> tag in React Router?', a: '<Link> intercepts the click, updates the URL via the History API, and swaps components without reloading the entire page.' }
    ],
    summary: 'React Router enables instant, bookmarkable, multi-view navigation with dynamic URL parameters and role-based route protection.',
    resources: [
      { title: 'React Router Official Documentation', url: 'https://reactrouter.com/', type: 'Official Docs', verified: true }
    ]
  },

  {
    id: 'git-github',
    number: 6,
    pathId: 'frontend',
    title: 'Git & GitHub Version Control',
    icon: '🌿',
    level: 'Beginner',
    estimatedHours: 6,
    prerequisites: [],
    diagramType: 'git-workflow',
    diagramCaption: 'Git & GitHub Lifecycle: Working Directory -> git add (Staging) -> git commit (Local Repo) -> git push (GitHub).',
    subtopics: [
      'Version control', 'Git installation', 'Repositories', 'Git commands',
      'Commit and push', 'Branches', 'Merge', 'GitHub repositories', 'Pull requests', 'Collaboration', 'Portfolio hosting'
    ],
    teluguSummary: 'Git అనేది మీ కోడ్ మార్పులను సేవ్ చేసే టైమ్ మెషీన్ లాంటిది. GitHub ద్వారా మీ ప్రాజెక్ట్‌లను ఆన్‌లైన్‌లో భద్రపరచవచ్చు మరియు ఇతరులతో కలిసి పనిచేయవచ్చు.',
    whatIsIt: 'Git is a distributed version control system that tracks every change to your code; GitHub is the cloud platform for hosting Git repositories and collaborating.',
    whyImportant: 'Every software engineering job requires Git & GitHub. It prevents accidental code loss, enables team collaboration, and serves as your live developer portfolio.',
    realLifeUse: 'Saving checkpoints while coding, creating feature branches safely, reviewing team code via Pull Requests, and hosting static sites on GitHub Pages.',
    howItWorks: 'You initialize a repo (git init), stage modified files (git add .), record a snapshot (git commit -m "msg"), and upload to GitHub (git push).',
    stepByStepLessons: [
      { title: 'Lesson 1: Init, Add, Commit & Status', content: 'Check modified files with git status, stage them with git add ., and save a permanent checkpoint with git commit -m "Add navbar".' },
      { title: 'Lesson 2: Branches & Merging', content: 'Create isolated branches with git checkout -b feature-quiz so experiments never break your main branch, then merge back when ready.' },
      { title: 'Lesson 3: GitHub Remotes & Pull Requests', content: 'Connect local code to GitHub with git remote add origin <url>, push with git push -u origin main, and open Pull Requests for code review.' }
    ],
    terminology: [
      { term: 'Repository (Repo)', def: 'A project folder tracked by Git, containing all files and their complete commit history.' },
      { term: 'Branch', def: 'An independent line of development allowing safe parallel work.' },
      { term: 'Pull Request (PR)', def: 'A GitHub proposal to merge changes from one branch into another with code review.' }
    ],
    codeExample: `git init
git add .
git commit -m "feat: build initial learning university dashboard"
git branch -M main
git remote add origin https://github.com/username/my-learning-uni.git
git push -u origin main`,
    realWorldExample: 'When 50 developers build an app simultaneously, each works on their own Git branch and merges via reviewed Pull Requests.',
    practicalExercises: [
      'Initialize a Git repository locally, make 3 commits, and inspect history with git log --oneline.',
      'Push a portfolio project to a public GitHub repository with a clear README.md.'
    ],
    commonMistakes: [
      'Committing sensitive .env files or API keys to public GitHub repos (always add .env to .gitignore!).',
      'Writing vague commit messages like "fix" or "update" instead of clear descriptions.'
    ],
    interviewQuestions: [
      { q: 'What is the difference between git fetch and git pull?', a: 'git fetch downloads remote changes without modifying your local files; git pull fetches and immediately merges them into your current branch.' }
    ],
    summary: 'Git & GitHub protect your work, enable professional team collaboration, and showcase your real coding portfolio to employers.',
    resources: [
      { title: 'GitHub Skills — Interactive Courses', url: 'https://skills.github.com/', type: 'Interactive Lab', verified: true },
      { title: 'Pro Git Official Free Book', url: 'https://git-scm.com/book/en/v2', type: 'Official Book', verified: true }
    ]
  },

  // ==================== B. BACKEND DEVELOPMENT ====================
  {
    id: 'jsx',
    number: 7,
    pathId: 'backend',
    title: 'React & JSX Fundamentals',
    icon: '⚛️',
    level: 'Intermediate',
    estimatedHours: 10,
    prerequisites: ['html-html5', 'javascript-es6'],
    diagramType: 'jsx-component',
    diagramCaption: 'React Component & Props Tree: Reusable UI functions receiving Props and rendering dynamic JSX.',
    subtopics: [
      'Introduction', 'JSX syntax', 'Expressions', 'Components', 'Props',
      'Conditional rendering', 'Lists and keys', 'Practical exercises'
    ],
    teluguSummary: 'JSX (జావాస్క్రిప్ట్ XML) ద్వారా JavaScript లోపలే HTML లాంటి కోడ్ రాయవచ్చు. ఇది React లో రీయూజబుల్ కాంపోనెంట్లను తయారు చేయడానికి ఉపయోగపడుతుంది.',
    whatIsIt: 'JSX (JavaScript XML) is a syntax extension for JavaScript used in React that lets you write HTML-like markup directly inside JavaScript functions.',
    whyImportant: 'React is the #1 frontend library in the industry. Mastering JSX, components, props, and list rendering is essential for modern web development.',
    realLifeUse: 'Building reusable UI cards, navigation bars, dashboards, and dynamic feeds in React & Next.js.',
    howItWorks: 'Build tools (like Vite or Babel) compile JSX tags into standard React.createElement() JavaScript calls that efficiently update the Virtual DOM.',
    stepByStepLessons: [
      { title: 'Lesson 1: JSX Rules & Curly Brace Expressions', content: 'Return a single parent element (or <>Fragment</>), use className instead of class, and embed JS variables inside {curlyBraces}.' },
      { title: 'Lesson 2: Components & Props', content: 'Break UI into reusable functions (e.g., <CourseCard title="Python" progress={80} />) passing data downward via props.' },
      { title: 'Lesson 3: Conditional Rendering & Lists with Keys', content: 'Render conditionally with ternary operators (isDone ? "Done" : "Pending") and map arrays using unique key={item.id} props.' }
    ],
    terminology: [
      { term: 'Component', def: 'A reusable JavaScript function that accepts props and returns JSX UI.' },
      { term: 'Props', def: 'Read-only inputs passed from a parent component to a child component.' },
      { term: 'Key Prop', def: 'A stable unique identifier given to list items so React tracks updates accurately.' }
    ],
    codeExample: `function LessonCard({ title, hours, completed }) {
  return (
    <div className="lesson-card">
      <h3>{title}</h3>
      <p>Duration: {hours} hrs</p>
      {completed ? <span className="badge-done">Completed</span> : <span>In Progress</span>}
    </div>
  );
}`,
    realWorldExample: 'Every video thumbnail card on YouTube’s home feed is the exact same React component rendered hundreds of times with different props.',
    practicalExercises: [
      'Create a reusable <SkillBadge name="React" level="Intermediate" /> component.',
      'Render an array of 5 syllabus topics using .map() with unique keys and conditional status badges.'
    ],
    commonMistakes: [
      'Using array index as key when items can be reordered or deleted.',
      'Forgetting to close self-closing tags like <img /> or <input /> in JSX.'
    ],
    interviewQuestions: [
      { q: 'Why does React require a unique key prop when rendering lists?', a: 'Keys help React’s reconciliation algorithm identify which items changed, were added, or removed without re-rendering the entire list.' }
    ],
    summary: 'JSX lets you build modular, data-driven user interfaces cleanly using reusable components, props, and JavaScript expressions.',
    resources: [
      { title: 'React Official Docs: Writing Markup with JSX', url: 'https://react.dev/learn/writing-markup-with-jsx', type: 'Official Docs', verified: true }
    ]
  },

  {
    id: 'ui-ux',
    number: 8,
    pathId: 'backend',
    title: 'UI & UX Design Principles',
    icon: '🖌️',
    level: 'Beginner',
    estimatedHours: 10,
    prerequisites: [],
    diagramType: 'ui-ux-process',
    diagramCaption: 'End-to-End UX/UI Design Workflow: User Research -> Wireframes -> Visual Design System -> Interactive Prototype.',
    subtopics: [
      'UI fundamentals', 'UX fundamentals', 'User research', 'Wireframing', 'Prototyping',
      'Layout design', 'Color theory', 'Typography', 'Responsive interfaces', 'Accessibility', 'Figma basics'
    ],
    teluguSummary: 'UX (యూజర్ ఎక్స్‌పీరియన్స్) యాప్ ఎంత సులభంగా పనిచేస్తుందో చూస్తే, UI (యూజర్ ఇంటర్‌ఫేస్) యాప్ ఎంత అందంగా కనిపిస్తుందో నిర్ణయిస్తుంది.',
    whatIsIt: 'UX (User Experience) focuses on how intuitive and effortless a product feels to use; UI (User Interface) focuses on visual craft—colors, typography, spacing, and components.',
    whyImportant: 'Users judge a website within 0.05 seconds. Great UI/UX increases user trust, task completion rates, and conversion.',
    realLifeUse: 'Designing mobile apps, SaaS dashboards, e-commerce checkouts, and clickable Figma prototypes before writing code.',
    howItWorks: 'Designers interview users, sketch low-fidelity wireframes, establish a 8pt spacing & color system, and build clickable prototypes in Figma.',
    stepByStepLessons: [
      { title: 'Lesson 1: UX Research & Wireframing', content: 'Define user goals first. Sketch low-fidelity boxes (wireframes) to validate layout hierarchy before picking colors.' },
      { title: 'Lesson 2: Color Theory (60-30-10 Rule) & Typography', content: 'Use 60% neutral background, 30% secondary surface, and 10% brand accent color. Maintain clear heading-to-body font scale.' },
      { title: 'Lesson 3: WCAG Accessibility & Figma Prototyping', content: 'Ensure at least 4.5:1 text contrast ratio, 44px minimum touch targets on mobile, and build interactive frames in Figma.' }
    ],
    terminology: [
      { term: 'Wireframe', def: 'A low-fidelity black-and-white blueprint showing layout structure without visual styling.' },
      { term: 'Visual Hierarchy', def: 'Arranging size, contrast, and spacing so the eye naturally reads the most important element first.' },
      { term: 'Contrast Ratio', def: 'The luminance difference between text and background ensuring readability for all users.' }
    ],
    codeExample: `/* 8pt Grid & 60-30-10 Color Token System */
:root {
  --surface-60: #0f172a;   /* 60% Dominant Background */
  --surface-30: #1e293b;   /* 30% Cards & Containers */
  --accent-10:  #6366f1;   /* 10% Primary CTA Buttons */
  --space-unit: 8px;
}`,
    realWorldExample: 'Duolingo’s bright green primary button, clear progress bar, and instant celebratory feedback turn language study into an effortless habit.',
    practicalExercises: [
      'Sketch a wireframe for a food delivery checkout screen focusing on clear visual hierarchy.',
      'Create a 5-color accessible palette and verify text contrast.'
    ],
    commonMistakes: [
      'Using low-contrast light-grey text on white backgrounds.',
      'Cluttering screens with too many competing bright colors and font families.'
    ],
    interviewQuestions: [
      { q: 'What is the difference between UI and UX design?', a: 'UX solves the user’s problem and structures the journey; UI crafts the visual, interactive surface the user touches.' }
    ],
    summary: 'Strong UI/UX principles ensure every website or app you build is both effortless to navigate and visually trustworthy.',
    resources: [
      { title: 'Figma Learn — Design Basics', url: 'https://help.figma.com/hc/en-us/categories/360002051613', type: 'Official Guide', verified: true },
      { title: 'Laws of UX', url: 'https://lawsofux.com/', type: 'Reference', verified: true }
    ]
  },

  {
    id: 'python',
    number: 9,
    pathId: 'backend',
    title: 'Python Programming (Zero to OOP)',
    icon: '🐍',
    level: 'Beginner',
    estimatedHours: 22,
    prerequisites: [],
    diagramType: 'python-oop',
    diagramCaption: 'Python Data Structures & Object-Oriented Programming (Class Blueprint -> Object Instances).',
    subtopics: [
      'Python introduction', 'Installation and setup', 'Variables', 'Data types', 'Operators',
      'Conditions', 'Loops', 'Functions', 'Lists and tuples', 'Dictionaries and sets',
      'OOP', 'File handling', 'Modules', 'Exception handling', 'Practical projects'
    ],
    teluguSummary: 'Python నేర్చుకోవడానికి అత్యంత సులభమైన మరియు శక్తివంతమైన ప్రోగ్రామింగ్ భాష. దీనిని వెబ్ బ్యాకెండ్, డేటా సైన్స్ మరియు ఆర్టిఫిషియల్ ఇంటెలిజెన్స్ (AI) లో విస్తృతంగా వాడతారు.',
    whatIsIt: 'Python is a clean, beginner-friendly, general-purpose programming language renowned for readable English-like syntax and dominance in AI, automation, and backend engineering.',
    whyImportant: 'Python is the primary language behind Generative AI, LangGraph, data analysis, scripting, and backend APIs (FastAPI/Django).',
    realLifeUse: 'AI assistants, automated Excel/PDF scripts, backend servers, Instagram/Spotify infrastructure, and scientific computing.',
    howItWorks: 'Python uses indentation (4 spaces) instead of curly braces to define code blocks, executed line-by-line by the Python interpreter.',
    stepByStepLessons: [
      { title: 'Lesson 1: Variables, Data Types & Control Flow', content: 'Create variables without type keywords (name = "Ravi", score = 95). Use if/elif/else and for/while loops.' },
      { title: 'Lesson 2: Lists, Tuples, Dictionaries & Sets', content: 'Store ordered collections in lists [], immutable records in tuples (), key-value pairs in dicts {}, and unique items in sets.' },
      { title: 'Lesson 3: Functions, Modules & Exception Handling', content: 'Define reusable logic with def, import built-in modules (json, os, math), and prevent crashes using try/except.' },
      { title: 'Lesson 4: Object-Oriented Programming (OOP) & File I/O', content: 'Model real-world entities using class, __init__, attributes, and methods, and read/write files safely with with open().' }
    ],
    terminology: [
      { term: 'Dictionary', def: 'A fast key-value data structure in Python, e.g., {"name": "Asha", "role": "AI Dev"}.' },
      { term: 'OOP (Class & Object)', def: 'A paradigm organizing code into blueprints (Classes) and concrete instances (Objects).' },
      { term: 'Exception Handling', def: 'Catching runtime errors with try/except blocks so programs recover gracefully.' }
    ],
    codeExample: `class Student:
    def __init__(self, name, goal):
        self.name = name
        self.goal = goal
        self.completed_topics = []

    def complete_topic(self, topic):
        self.completed_topics.append(topic)
        return f"{self.name} mastered {topic}! Total: {len(self.completed_topics)}"

learner = Student("Kiran", "Full-Stack AI Engineer")
print(learner.complete_topic("Python OOP"))`,
    realWorldExample: 'An automated Python script can read 500 customer invoices from a folder, extract totals, and export a clean summary report in 2 seconds.',
    practicalExercises: [
      'Write a Python function that counts word frequency in a paragraph using a dictionary.',
      'Create a BankAccount class with deposit(), withdraw(), and insufficient-balance exception handling.'
    ],
    commonMistakes: [
      'Mixing tabs and spaces for indentation (causing IndentationError).',
      'Using mutable default arguments like def add_item(item, items=[]):.'
    ],
    interviewQuestions: [
      { q: 'What is the difference between a List and a Tuple in Python?', a: 'Lists are mutable (can be modified after creation) using []; Tuples are immutable (fixed) using () and faster for constant data.' },
      { q: 'What are *args and **kwargs?', a: '*args passes a variable number of positional arguments as a tuple; **kwargs passes variable keyword arguments as a dictionary.' }
    ],
    summary: 'Python gives you clean syntax, versatile data structures, OOP architecture, and direct entry into backend and AI engineering.',
    resources: [
      { title: 'Python Official Beginner Tutorial', url: 'https://docs.python.org/3/tutorial/index.html', type: 'Official Docs', verified: true },
      { title: 'W3Schools Python Tutorial', url: 'https://www.w3schools.com/python/', type: 'Reference', verified: true }
    ]
  },

  {
    id: 'database',
    number: 10,
    pathId: 'backend',
    title: 'Database Design & Fundamentals',
    icon: '🗄️',
    level: 'Beginner',
    estimatedHours: 8,
    prerequisites: [],
    diagramType: 'db-erd',
    diagramCaption: 'Relational Entity-Relationship Diagram (ERD): Users (PK) linked via Foreign Key (FK) to Enrollments & Courses.',
    subtopics: [
      'Database fundamentals', 'Relational databases', 'Database design', 'Tables and relationships',
      'Primary keys', 'Foreign keys', 'Normalization', 'CRUD operations'
    ],
    teluguSummary: 'డేటాబేస్ అనేది సమాచారాన్ని క్రమపద్ధతిలో దాచే డిజిటల్ లైబ్రరీ. Primary Key మరియు Foreign Key ద్వారా టేబుల్స్ మధ్య సంబంధాలను ఏర్పరుస్తాము.',
    whatIsIt: 'A database is an organized, persistent system for storing, retrieving, and managing structured application data securely at scale.',
    whyImportant: 'Without a database, user accounts, course progress, orders, and messages would vanish every time a server restarts.',
    realLifeUse: 'Banking ledgers, university student records, e-commerce catalogs, and user authentication tables.',
    howItWorks: 'Relational databases organize data into tables (rows & columns). Primary Keys uniquely identify rows; Foreign Keys link related tables without duplicating data.',
    stepByStepLessons: [
      { title: 'Lesson 1: Tables, Primary Keys (PK) & Foreign Keys (FK)', content: 'Every table needs a unique Primary Key (e.g., user_id). A Foreign Key in an orders table references user_id to link each order to its buyer.' },
      { title: 'Lesson 2: Relationships (1:1, 1:N, M:N)', content: 'One user has many orders (1:N). Many students enroll in many courses (M:N) using a junction table (enrollments).' },
      { title: 'Lesson 3: Normalization & CRUD', content: 'Normalization (1NF, 2NF, 3NF) eliminates duplicate data anomalies. CRUD stands for Create, Read, Update, Delete.' }
    ],
    terminology: [
      { term: 'Primary Key (PK)', def: 'A unique, non-null column identifying each record in a table.' },
      { term: 'Foreign Key (FK)', def: 'A column that links to the Primary Key of another table to enforce referential integrity.' },
      { term: 'Normalization', def: 'Structuring tables cleanly to eliminate redundant data and update anomalies.' }
    ],
    codeExample: `-- Relational Schema Example
CREATE TABLE students (
  student_id INT PRIMARY KEY AUTO_INCREMENT,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(120) UNIQUE NOT NULL
);

CREATE TABLE enrollments (
  enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
  student_id INT,
  course_name VARCHAR(100),
  FOREIGN KEY (student_id) REFERENCES students(student_id)
);`,
    realWorldExample: 'In a hospital database, patient details are stored once in a Patients table and linked via patient_id to Appointments and Prescriptions.',
    practicalExercises: [
      'Design an Entity-Relationship diagram for an online bookstore with Users, Books, and Orders tables.',
      'Normalize a flat spreadsheet containing repeated customer addresses into 2 linked tables.'
    ],
    commonMistakes: [
      'Storing comma-separated values in a single column (violates First Normal Form).',
      'Creating tables without Primary Keys or indexes on frequently queried Foreign Keys.'
    ],
    interviewQuestions: [
      { q: 'What is the difference between a Primary Key and a Unique Key?', a: 'A table can have only one Primary Key (which never allows NULL), whereas it can have multiple Unique Keys.' }
    ],
    summary: 'Clean database design with Primary Keys, Foreign Keys, and Normalization keeps your application data reliable, fast, and scalable.',
    resources: [
      { title: 'Microsoft Learn: Relational Database Concepts', url: 'https://learn.microsoft.com/en-us/azure/architecture/data-guide/relational-data/', type: 'Official Guide', verified: true }
    ]
  },

  {
    id: 'sql-mysql',
    number: 11,
    pathId: 'backend',
    title: 'SQL & MySQL Mastery',
    icon: '🐬',
    level: 'Beginner',
    estimatedHours: 14,
    prerequisites: ['database'],
    diagramType: 'sql-joins',
    diagramCaption: 'SQL JOIN Visual Guide: INNER JOIN, LEFT JOIN, and Aggregation Pipeline (WHERE -> GROUP BY -> ORDER BY).',
    subtopics: [
      'SQL fundamentals', 'SELECT', 'INSERT', 'UPDATE', 'DELETE', 'WHERE',
      'ORDER BY', 'GROUP BY', 'JOIN', 'Subqueries', 'Aggregate functions', 'Database management', 'Practical exercises'
    ],
    teluguSummary: 'SQL (స్ట్రక్చర్డ్ క్వెరీ లాంగ్వేజ్) ద్వారా మనం డేటాబేస్ నుండి కావలసిన సమాచారాన్ని వెతకవచ్చు (SELECT), కొత్త డేటా చేర్చవచ్చు (INSERT) మరియు మార్చవచ్చు (UPDATE).',
    whatIsIt: 'SQL (Structured Query Language) is the universal language used to query, filter, join, and manage data inside relational databases like MySQL and PostgreSQL.',
    whyImportant: 'Whether you become a backend developer, data analyst, or AI engineer, writing accurate SQL queries is a core daily skill.',
    realLifeUse: 'Generating monthly sales reports, finding top-performing students, checking inventory, and powering backend APIs.',
    howItWorks: 'You write declarative queries describing WHAT data you want (e.g., SELECT name FROM users WHERE score > 80), and the database engine optimizes how to fetch it.',
    stepByStepLessons: [
      { title: 'Lesson 1: CRUD Queries (SELECT, INSERT, UPDATE, DELETE)', content: 'Read rows with SELECT, add records with INSERT INTO, modify with UPDATE ... SET ... WHERE, and remove safely with DELETE FROM ... WHERE.' },
      { title: 'Lesson 2: Filtering, Sorting & Aggregations', content: 'Filter with WHERE, sort with ORDER BY DESC, and summarize using COUNT(), SUM(), AVG(), MAX() paired with GROUP BY.' },
      { title: 'Lesson 3: INNER & LEFT JOINs + Subqueries', content: 'Combine data across multiple related tables using INNER JOIN and LEFT JOIN on matching primary/foreign keys.' }
    ],
    terminology: [
      { term: 'INNER JOIN', def: 'Returns only rows where matching keys exist in both joined tables.' },
      { term: 'LEFT JOIN', def: 'Returns all rows from the left table, plus matched rows from the right table (or NULL if none).' },
      { term: 'GROUP BY', def: 'Groups rows sharing a column value so aggregate functions (COUNT, SUM) run per group.' }
    ],
    codeExample: `SELECT 
  s.full_name,
  COUNT(e.enrollment_id) AS courses_taken,
  AVG(e.quiz_score) AS avg_score
FROM students s
LEFT JOIN enrollments e ON s.student_id = e.student_id
WHERE s.active = 1
GROUP BY s.student_id, s.full_name
HAVING avg_score >= 70
ORDER BY avg_score DESC;`,
    realWorldExample: 'An e-commerce dashboard runs a GROUP BY category query with SUM(amount) every morning to calculate revenue per product category.',
    practicalExercises: [
      'Write a query to find the top 5 highest-scoring students in MySQL.',
      'Use LEFT JOIN to list all students, including those who have enrolled in 0 courses yet.'
    ],
    commonMistakes: [
      'Running UPDATE or DELETE without a WHERE clause, accidentally modifying every row in the table!',
      'Using WHERE instead of HAVING to filter aggregated COUNT() or SUM() results.'
    ],
    interviewQuestions: [
      { q: 'What is the difference between WHERE and HAVING in SQL?', a: 'WHERE filters individual rows before grouping; HAVING filters grouped summary rows after GROUP BY executes.' }
    ],
    summary: 'SQL & MySQL let you retrieve, aggregate, and join relational business data with precision and speed.',
    resources: [
      { title: 'W3Schools SQL Tutorial & Interactive Try-It', url: 'https://www.w3schools.com/sql/', type: 'Interactive Guide', verified: true },
      { title: 'MySQL Official Documentation', url: 'https://dev.mysql.com/doc/', type: 'Official Docs', verified: true }
    ]
  },

  {
    id: 'json',
    number: 12,
    pathId: 'backend',
    title: 'JSON Data Interchange',
    icon: '📦',
    level: 'Beginner',
    estimatedHours: 4,
    prerequisites: ['javascript-es6'],
    diagramType: 'json-tree',
    diagramCaption: 'JSON Serialization & Parsing: JavaScript/Python Object <-> JSON String over HTTP.',
    subtopics: [
      'JSON fundamentals', 'Objects and arrays', 'Key-value pairs', 'JSON syntax',
      'Parsing', 'Serialization', 'JSON with APIs', 'Practical exercises'
    ],
    teluguSummary: 'JSON (జావాస్క్రిప్ట్ ఆబ్జెక్ట్ నోటేషన్) అనేది వెబ్‌సైట్లు మరియు సర్వర్‌ల మధ్య డేటాను పంపడానికి ఉపయోగించే తేలికపాటి టెక్స్ట్ ఫార్మాట్.',
    whatIsIt: 'JSON (JavaScript Object Notation) is the lightweight, human-readable text format used worldwide to exchange structured data between web clients, servers, and AI APIs.',
    whyImportant: 'Almost every REST API, configuration file (package.json), NoSQL database, and LLM structured output uses JSON.',
    realLifeUse: 'API responses, user profile exports, app settings storage (localStorage), and AI tool-calling payloads.',
    howItWorks: 'Data is written in double-quoted "key": value pairs inside curly braces {} for objects and square brackets [] for arrays.',
    stepByStepLessons: [
      { title: 'Lesson 1: Strict JSON Syntax Rules', content: 'Keys MUST use double quotes ("name"). Values can be strings, numbers, booleans, null, arrays, or nested objects. Trailing commas are illegal.' },
      { title: 'Lesson 2: Serialization & Parsing in JS and Python', content: 'Convert objects to JSON text with JSON.stringify() (JS) / json.dumps() (Python), and parse text back with JSON.parse() / json.loads().' }
    ],
    terminology: [
      { term: 'Serialization', def: 'Converting an in-memory object into a JSON string for network transmission or storage.' },
      { term: 'Parsing', def: 'Converting a raw JSON string back into a usable programming object.' }
    ],
    codeExample: `{
  "university": "My Personal Learning University",
  "student": {
    "id": 101,
    "active": true,
    "skills": ["HTML", "CSS", "Python", "RAG"]
  }
}`,
    realWorldExample: 'When you export your notes or progress in this platform, your data is serialized into a clean .json backup file.',
    practicalExercises: [
      'Write a valid JSON object representing a syllabus course with nested lessons and quiz questions.',
      'Parse a JSON string in JavaScript and extract the second skill in the array.'
    ],
    commonMistakes: [
      'Using single quotes (\'key\') or leaving trailing commas after the last item in JSON.',
      'Forgetting JSON.parse() when reading strings from localStorage.'
    ],
    interviewQuestions: [
      { q: 'Why is JSON preferred over XML in modern web APIs?', a: 'JSON is far less verbose, faster to parse, maps natively to JavaScript/Python objects, and uses less bandwidth.' }
    ],
    summary: 'JSON is the universal data language connecting frontends, backends, databases, and Generative AI APIs.',
    resources: [
      { title: 'MDN: Working with JSON', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON', type: 'Official Docs', verified: true }
    ]
  },

  {
    id: 'nodejs-express',
    number: 13,
    pathId: 'backend',
    title: 'Node.js & Express.js Basics',
    icon: '🚀',
    level: 'Intermediate',
    estimatedHours: 14,
    prerequisites: ['javascript-es6', 'apis', 'json'],
    diagramType: 'express-middleware',
    diagramCaption: 'Express.js Request Pipeline: Incoming Request -> Auth/JSON Middleware -> Route Handler -> JSON Response.',
    subtopics: [
      'Introduction to Node.js', 'Installation', 'Node.js fundamentals', 'NPM', 'Modules',
      'Express.js', 'Routing', 'Middleware', 'REST API development', 'Error handling', 'Backend projects'
    ],
    teluguSummary: 'Node.js ద్వారా మనం JavaScript ను సర్వర్ వైపు (Backend) కూడా రన్ చేయవచ్చు. Express.js సహాయంతో వేగంగా REST APIs తయారు చేయవచ్చు.',
    whatIsIt: 'Node.js is a runtime that lets you run JavaScript outside the browser on servers; Express.js is the fast, minimalist web framework for building Node APIs.',
    whyImportant: 'Allows you to become a Full-Stack Developer using a single language (JavaScript/TypeScript) across both frontend and backend.',
    realLifeUse: 'REST API servers, authentication backends, real-time chat servers, and AI API proxy gateways.',
    howItWorks: 'Node uses a non-blocking, event-driven I/O architecture. Express routes incoming HTTP requests through middleware functions to send JSON responses.',
    stepByStepLessons: [
      { title: 'Lesson 1: Node Runtime & NPM Packages', content: 'Initialize a project with npm init -y, install packages like express and cors, and import modules.' },
      { title: 'Lesson 2: Express Routing & Middleware', content: 'Use app.use(express.json()) middleware to parse incoming JSON bodies, and define routes like app.get("/api/courses", handler).' },
      { title: 'Lesson 3: Centralized Error Handling', content: 'Create a 4-parameter Express error middleware (err, req, res, next) to return clean JSON error responses.' }
    ],
    terminology: [
      { term: 'NPM', def: 'Node Package Manager—the world’s largest registry of reusable JavaScript libraries.' },
      { term: 'Middleware', def: 'Functions with access to req, res, and next() that run before your final route handler (e.g., logging, auth).' }
    ],
    codeExample: `const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', university: 'Online' });
});

app.post('/api/notes', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title required' });
  res.status(201).json({ id: Date.now(), title });
});

app.listen(3000, () => console.log('Server running on port 3000'));`,
    realWorldExample: 'PayPal, LinkedIn, and Netflix use Node.js microservices to handle millions of concurrent API requests efficiently.',
    practicalExercises: [
      'Build an Express REST API with GET, POST, and DELETE endpoints for managing study tasks.',
      'Write a custom request-logger middleware that prints the HTTP method and URL.'
    ],
    commonMistakes: [
      'Forgetting app.use(express.json()), leaving req.body as undefined on POST requests.',
      'Not calling next() inside custom middleware, causing requests to hang forever.'
    ],
    interviewQuestions: [
      { q: 'What is Middleware in Express.js?', a: 'Functions that execute during the request-response cycle to parse bodies, verify JWT tokens, log requests, or handle errors.' }
    ],
    summary: 'Node.js and Express empower you to build fast, scalable REST APIs and secure backend services in JavaScript.',
    resources: [
      { title: 'Express.js Official Getting Started Guide', url: 'https://expressjs.com/en/starter/installing.html', type: 'Official Docs', verified: true },
      { title: 'Node.js Official Learn Portal', url: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs', type: 'Official Docs', verified: true }
    ]
  },

  // ==================== C. GENERATIVE AI ====================
  {
    id: 'ai-ml-llm',
    number: 14,
    pathId: 'genai',
    title: 'AI, Machine Learning & LLMs',
    icon: '🧠',
    level: 'Beginner',
    estimatedHours: 12,
    prerequisites: [],
    diagramType: 'llm-pipeline',
    diagramCaption: 'AI Hierarchy & LLM Architecture: AI -> ML -> Deep Learning -> Transformer Tokens & Embeddings.',
    subtopics: [
      'Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Neural networks',
      'Generative AI', 'Large Language Models', 'Tokens', 'Embeddings',
      'Model training and inference', 'Model limitations'
    ],
    teluguSummary: 'AI (కృత్రిమ మేధస్సు) కంప్యూటర్లకు ఆలోచించే శక్తిని ఇస్తే, LLM (లార్జ్ లాంగ్వేజ్ మోడల్స్) కోట్లాది పుస్తకాలు మరియు వెబ్ పేజీల నుండి నేర్చుకుని మనుషుల్లా సమాధానాలు ఇస్తాయి.',
    whatIsIt: 'Artificial Intelligence enables machines to mimic human reasoning. Large Language Models (LLMs) are deep neural networks trained on massive text corpora to understand and generate human language and code.',
    whyImportant: 'Generative AI is transforming every software, marketing, and creative profession. Understanding tokens, embeddings, and hallucinations makes you an informed builder.',
    realLifeUse: 'AI coding assistants, customer support bots, document summarizers, translation engines, and voice tutors.',
    howItWorks: 'Text is broken into numeric Tokens, converted into dense meaning vectors (Embeddings), and passed through Transformer attention layers to predict the next best token during Inference.',
    stepByStepLessons: [
      { title: 'Lesson 1: AI vs ML vs Deep Learning vs GenAI', content: 'AI is the broad umbrella; ML learns patterns from data; Deep Learning uses multi-layer neural networks; GenAI creates new text, code, images, and audio.' },
      { title: 'Lesson 2: Tokens, Context Windows & Embeddings', content: '1 token ≈ 4 English characters. Embeddings map words with similar meanings close together in high-dimensional math space.' },
      { title: 'Lesson 3: Training vs Inference & Limitations', content: 'Training teaches weights on GPUs; Inference runs the trained model to answer prompts. Always guard against hallucinations and knowledge cutoffs.' }
    ],
    terminology: [
      { term: 'Token', def: 'The basic chunk of text (word or sub-word) processed by an LLM.' },
      { term: 'Embedding', def: 'A list of numbers representing the semantic meaning of text for similarity search.' },
      { term: 'Hallucination', def: 'When an LLM confidently generates plausible-sounding but factually false information.' }
    ],
    codeExample: `// Conceptual Token & Embedding Representation
const text = "Learn AI from zero";
const tokens = ["Learn", " AI", " from", " zero"]; // 4 tokens
const embeddingVector = [0.021, -0.448, 0.892, /* ... 1536 dimensions */];`,
    realWorldExample: 'When you ask an AI tutor to explain Python loops, the model predicts the clearest step-by-step explanation one token at a time.',
    practicalExercises: [
      'Calculate approximate token counts for a 500-word article (~650-700 tokens).',
      'List 3 business tasks suited for LLMs and 2 tasks where deterministic SQL/code is safer.'
    ],
    commonMistakes: [
      'Treating LLMs as infallible encyclopedias without verifying critical facts or math.',
      'Exceeding the model’s maximum context window and losing early instructions.'
    ],
    interviewQuestions: [
      { q: 'What are Embeddings and why are they critical in AI apps?', a: 'Embeddings convert text into numerical vectors capturing semantic meaning, enabling fast similarity search in RAG and recommendation systems.' }
    ],
    summary: 'Understanding how LLMs use tokens, embeddings, and neural transformers gives you the foundation to build reliable AI applications.',
    resources: [
      { title: 'Google Machine Learning Crash Course', url: 'https://developers.google.com/machine-learning/crash-course', type: 'Free Course', verified: true },
      { title: 'OpenAI Platform Documentation: Key Concepts', url: 'https://platform.openai.com/docs/concepts', type: 'Official Docs', verified: true }
    ]
  },

  {
    id: 'prompt-engineering',
    number: 15,
    pathId: 'genai',
    title: 'Prompt Engineering & Context Design',
    icon: '✍️',
    level: 'Beginner',
    estimatedHours: 8,
    prerequisites: ['ai-ml-llm'],
    diagramType: 'prompt-framework',
    diagramCaption: 'Structured Prompt Blueprint: Role + Context + Task + Few-Shot Examples + Output Format.',
    subtopics: [
      'Prompt fundamentals', 'Prompt structure', 'Role prompting', 'Context engineering',
      'Few-shot prompting', 'Chain-of-thought concepts', 'Structured outputs', 'Prompt optimization', 'Practical exercises'
    ],
    teluguSummary: 'AI నుండి ఖచ్చితమైన మరియు నాణ్యమైన సమాధానాలు పొందడానికి సరైన పద్ధతిలో ప్రశ్నలు (Prompts) అడిగే కళే Prompt Engineering.',
    whatIsIt: 'Prompt Engineering is the discipline of designing clear instructions, roles, examples, and output schemas so AI models produce accurate, reliable results.',
    whyImportant: 'The difference between a vague answer and production-grade structured output comes down to how well you engineer the prompt and context.',
    realLifeUse: 'Extracting structured JSON from invoices, generating tailored lesson plans, automated code reviews, and marketing copywriting.',
    howItWorks: 'By combining System Role, Grounded Context, Few-Shot Input/Output examples, Step-by-Step reasoning cues, and strict JSON formatting rules.',
    stepByStepLessons: [
      { title: 'Lesson 1: Role + Context + Task Formula', content: 'Assign an expert persona ("Act as a senior Python tutor"), supply background context, and give an unambiguous action verb.' },
      { title: 'Lesson 2: Few-Shot & Chain-of-Thought Prompting', content: 'Provide 2–3 input/output examples (Few-Shot) and ask the model to reason step-by-step before giving its final answer.' },
      { title: 'Lesson 3: Structured JSON Outputs', content: 'Specify exact JSON keys and data types so your application code can parse AI responses reliably without breaking.' }
    ],
    terminology: [
      { term: 'Few-Shot Prompting', def: 'Including a few concrete input-output examples inside the prompt to teach desired style/format.' },
      { term: 'Chain-of-Thought (CoT)', def: 'Instructing the model to break down intermediate reasoning steps before concluding.' },
      { term: 'Context Engineering', def: 'Curating the exact documents, user state, and rules injected into the model’s prompt window.' }
    ],
    codeExample: `SYSTEM: You are a technical interviewer. Output ONLY valid JSON.
USER: Generate 1 beginner HTML question.
SCHEMA: { "question": string, "options": string[], "answerIndex": number, "explanation": string }`,
    realWorldExample: 'Customer support classifiers use Few-Shot prompts to tag incoming tickets into {"category": "Billing", "urgency": "High"} with >95% accuracy.',
    practicalExercises: [
      'Rewrite a vague prompt ("help me study") into a structured Role + Context + Output Format prompt.',
      'Create a Few-Shot prompt that converts messy meeting notes into JSON action items.'
    ],
    commonMistakes: [
      'Writing ambiguous one-line prompts and expecting mind-reading.',
      'Mixing conflicting instructions in the same prompt without delimiters (### or XML tags).'
    ],
    interviewQuestions: [
      { q: 'When should you use Few-Shot prompting vs Zero-Shot prompting?', a: 'Use Zero-Shot for simple general tasks; use Few-Shot when you need strict formatting, domain tone, or consistent classification.' }
    ],
    summary: 'Prompt & Context Engineering turn general LLMs into predictable, structured, high-accuracy software components.',
    resources: [
      { title: 'OpenAI Prompt Engineering Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering', type: 'Official Docs', verified: true },
      { title: 'Prompting Guide (DAIR.AI)', url: 'https://www.promptingguide.ai/', type: 'Free Guide', verified: true }
    ]
  },

  {
    id: 'rag',
    number: 16,
    pathId: 'genai',
    title: 'RAG (Retrieval-Augmented Generation)',
    icon: '📚',
    level: 'Intermediate',
    estimatedHours: 14,
    prerequisites: ['python', 'ai-ml-llm', 'prompt-engineering'],
    diagramType: 'rag-architecture',
    diagramCaption: 'RAG Architecture: PDFs -> Chunking -> Embeddings -> Vector DB -> Similarity Search -> Grounded LLM Answer.',
    subtopics: [
      'What is RAG?', 'RAG architecture', 'Documents and data ingestion', 'Text chunking',
      'Embeddings', 'Vector databases', 'Retrieval', 'Similarity search',
      'Context generation', 'RAG applications', 'Practical projects'
    ],
    teluguSummary: 'RAG ద్వారా మనం మన స్వంత PDFలు, నోట్స్ లేదా కంపెనీ డేటాను AI కి అనుసంధానించి, ఆ డేటా ఆధారంగా ఖచ్చితమైన సమాధానాలు పొందవచ్చు.',
    whatIsIt: 'RAG (Retrieval-Augmented Generation) connects an LLM to your private documents, PDFs, or live databases so it answers using verified facts instead of guessing.',
    whyImportant: 'RAG is the #1 real-world enterprise AI architecture because it eliminates hallucinations on private company data without expensive model fine-tuning.',
    realLifeUse: 'Chat-with-your-PDF assistants, internal HR/policy bots, legal contract analyzers, and AI study tutors grounded in your syllabus.',
    howItWorks: '1) Split documents into chunks; 2) Convert chunks into Embeddings and store in a Vector DB; 3) On user query, retrieve top-K similar chunks via cosine similarity and pass them into the LLM prompt.',
    stepByStepLessons: [
      { title: 'Lesson 1: Document Ingestion & Smart Chunking', content: 'Load PDFs/Docs and split them into overlapping chunks (e.g., 500 tokens with 50-token overlap) so sentences aren’t cut mid-thought.' },
      { title: 'Lesson 2: Vector Embeddings & Vector Databases', content: 'Embed each chunk and index it in Chroma, Pinecone, pgvector, or FAISS for millisecond semantic search.' },
      { title: 'Lesson 3: Retrieval & Grounded Answer Generation', content: 'Retrieve the top 3–5 matching passages and instruct the LLM: "Answer ONLY using the provided context; cite sources."' }
    ],
    terminology: [
      { term: 'Chunking', def: 'Dividing long documents into smaller, searchable segments with slight overlap.' },
      { term: 'Vector Database', def: 'A specialized database optimized for storing and searching high-dimensional embedding vectors.' },
      { term: 'Cosine Similarity', def: 'A mathematical measure of how close two embedding vectors point in meaning space.' }
    ],
    codeExample: `# Conceptual RAG Retrieval Step
query_embedding = embed_model.encode("How does RAG prevent hallucinations?")
top_chunks = vector_db.similarity_search(query_embedding, top_k=3)

prompt = f"Use ONLY the context below to answer.\nContext: {top_chunks}\nQuestion: How does RAG prevent hallucinations?"`,
    realWorldExample: 'Notion AI and NotebookLM use RAG to answer questions strictly from your uploaded notes and cite exact paragraphs.',
    practicalExercises: [
      'Design a chunking strategy for a 100-page textbook (chunk size, overlap, metadata tags).',
      'Write a grounded prompt instructing an AI to say "I do not have that information" if context is missing.'
    ],
    commonMistakes: [
      'Making chunks too large (dilutes search accuracy) or too small (loses surrounding context).',
      'Skipping metadata (page numbers, filenames), making source citations impossible.'
    ],
    interviewQuestions: [
      { q: 'When should you choose RAG over Fine-Tuning?', a: 'Choose RAG when you need up-to-date external knowledge, source citations, and zero hallucinations; choose Fine-Tuning to teach specialized style or domain jargon.' }
    ],
    summary: 'RAG bridges private documents with LLMs through chunking, embeddings, and vector search to deliver accurate, verifiable AI answers.',
    resources: [
      { title: 'OpenAI Cookbook: Retrieval-Augmented Generation', url: 'https://cookbook.openai.com/', type: 'Code Examples', verified: true }
    ]
  },

  {
    id: 'ai-agents',
    number: 17,
    pathId: 'genai',
    title: 'AI Agents & Tool Calling',
    icon: '🕵️',
    level: 'Advanced',
    estimatedHours: 16,
    prerequisites: ['python', 'apis', 'rag'],
    diagramType: 'agent-loop',
    diagramCaption: 'Autonomous AI Agent Loop: Goal -> Plan & Reason -> Tool Call (API/Code/DB) -> Observe Result -> Final Action.',
    subtopics: [
      'Introduction to AI agents', 'Agent architecture', 'Tool calling', 'Memory',
      'Planning', 'Reasoning', 'Agent workflows', 'Multi-agent systems', 'Practical projects'
    ],
    teluguSummary: 'AI Agents కేవలం సమాధానాలు చెప్పడమే కాకుండా, సొంతంగా ఆలోచించి, ప్లాన్ చేసి, వివిధ టూల్స్ (APIs, కాలిక్యులేటర్, డేటాబేస్) వాడి పనులను పూర్తి చేస్తాయి.',
    whatIsIt: 'An AI Agent is an LLM-powered system equipped with Memory, Planning, and Tools (APIs, search, code execution) that can autonomously take multi-step actions to achieve a goal.',
    whyImportant: 'Chatbots only talk; AI Agents actually execute workflows—researching leads, querying databases, debugging code, and updating CRMs.',
    realLifeUse: 'Autonomous coding assistants, research analysts, customer support resolvers, and multi-agent workflow pipelines.',
    howItWorks: 'The agent follows a Reason-Act-Observe (ReAct) loop: it inspects available tool schemas, chooses a tool + JSON arguments, executes it, reads the output, and repeats until finished.',
    stepByStepLessons: [
      { title: 'Lesson 1: Function / Tool Calling', content: 'Define clean JSON schemas describing external Python functions or APIs so the LLM can request tool execution safely.' },
      { title: 'Lesson 2: Short-Term & Long-Term Agent Memory', content: 'Combine conversation buffer memory (current session) with vector/database memory (user preferences across weeks).' },
      { title: 'Lesson 3: Planning & Multi-Agent Collaboration', content: 'Coordinate specialized agents (e.g., Researcher Agent + Writer Agent + Reviewer Agent) with human-in-the-loop guardrails.' }
    ],
    terminology: [
      { term: 'Tool Calling', def: 'The LLM outputting a structured JSON request to invoke an external function or API.' },
      { term: 'ReAct Loop', def: 'Reason + Act + Observe—the iterative cycle an agent uses to solve multi-step tasks.' },
      { term: 'Human-in-the-Loop', def: 'Requiring user approval before an agent executes high-impact actions like sending emails or payments.' }
    ],
    codeExample: `tools = [{
  "name": "get_student_progress",
  "description": "Fetch completion percentage for a given subject",
  "parameters": { "type": "object", "properties": { "subject": { "type": "string" } } }
}]`,
    realWorldExample: 'A travel agent AI checks flight APIs, compares hotel availability, checks your calendar, and drafts an itinerary automatically.',
    practicalExercises: [
      'Write a JSON tool schema for a calculator or weather lookup function.',
      'Design a 3-agent workflow (Researcher -> Outline Creator -> Quiz Generator) for any syllabus topic.'
    ],
    commonMistakes: [
      'Giving an agent too many overlapping tools (causes tool-selection confusion).',
      'Running agents without a max_iterations loop limit or human confirmation on destructive actions.'
    ],
    interviewQuestions: [
      { q: 'How does an AI Agent differ from a standard RAG pipeline?', a: 'RAG performs a single retrieve-then-generate pass; an Agent dynamically plans, calls multiple tools iteratively, and adapts based on observations.' }
    ],
    summary: 'AI Agents combine LLM reasoning with memory and external tools to automate complex, multi-step real-world workflows.',
    resources: [
      { title: 'OpenAI Function Calling & Agents Guide', url: 'https://platform.openai.com/docs/guides/function-calling', type: 'Official Docs', verified: true }
    ]
  },

  {
    id: 'genai-frameworks',
    number: 18,
    pathId: 'genai',
    title: 'GenAI Frameworks (OpenAI SDK, LangGraph, n8n)',
    icon: '🔗',
    level: 'Advanced',
    estimatedHours: 15,
    prerequisites: ['python', 'ai-agents'],
    diagramType: 'frameworks-flow',
    diagramCaption: 'GenAI Stack: OpenAI SDK (Model Calls) + LangGraph (Stateful Agent Graphs) + n8n (Visual Workflow Automation).',
    subtopics: [
      'OpenAI SDK', 'LangGraph', 'n8n', 'GenAI tools and frameworks',
      'Framework installation', 'Framework fundamentals', 'Creating AI applications',
      'Connecting tools and APIs', 'Building practical AI workflows'
    ],
    teluguSummary: 'OpenAI SDK, LangGraph మరియు n8n వంటి ఫ్రేమ్‌వర్క్‌ల సహాయంతో ప్రొడక్షన్-స్థాయి AI అప్లికేషన్లు మరియు ఆటోమేషన్ వర్క్‌ఫ్లోలను సులభంగా నిర్మించవచ్చు.',
    whatIsIt: 'Production frameworks that accelerate building AI software: OpenAI SDK for direct model/tool calls, LangGraph for stateful cyclic agent graphs, and n8n for visual no-code/low-code API automation.',
    whyImportant: 'Companies hire GenAI Engineers who can ship reliable, observable workflows using standard SDKs and orchestration frameworks rather than fragile scripts.',
    realLifeUse: 'Automated lead-enrichment pipelines in n8n, stateful multi-agent customer support in LangGraph, and streaming AI apps with OpenAI SDK.',
    howItWorks: 'OpenAI SDK handles streaming & structured outputs; LangGraph models agent steps as state-machine nodes and conditional edges; n8n connects 400+ apps with AI nodes.',
    stepByStepLessons: [
      { title: 'Lesson 1: OpenAI SDK Fundamentals', content: 'Install openai via pip/npm, configure environment variables safely, and build streaming responses & structured outputs.' },
      { title: 'Lesson 2: Stateful Agent Workflows with LangGraph', content: 'Define a TypedDict State, add Python node functions, and connect conditional edges for loops and human approval.' },
      { title: 'Lesson 3: Visual AI Automation with n8n', content: 'Trigger workflows on webhooks/schedules, chain AI Agent nodes with Gmail, Google Sheets, and Slack without boilerplate glue code.' }
    ],
    terminology: [
      { term: 'LangGraph', def: 'A framework for building stateful, multi-actor LLM applications using directed graphs with cycles.' },
      { term: 'n8n', def: 'An open-source, fair-code workflow automation platform with native AI agent and tool nodes.' }
    ],
    codeExample: `# OpenAI Python SDK Example (API key loaded from environment)
from openai import OpenAI
client = OpenAI() # Reads OPENAI_API_KEY from env

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "Explain REST APIs in 2 sentences."}]
)
print(response.choices[0].message.content)`,
    realWorldExample: 'An n8n workflow watches incoming support emails, summarizes them with an LLM, checks order status in MySQL, and drafts a reply.',
    practicalExercises: [
      'Map out a LangGraph state flow with a Generator node and a Quality-Check Critic node.',
      'Design an n8n automation connecting a Webhook -> AI Summarizer -> Google Sheet row.'
    ],
    commonMistakes: [
      'Hardcoding API keys directly inside source files instead of using .env environment variables.',
      'Over-engineering simple single-prompt tasks with complex multi-agent graphs.'
    ],
    interviewQuestions: [
      { q: 'Why use LangGraph over simple linear chains for AI agents?', a: 'Real agents need loops (retry on error, ask follow-up questions) and persistent state checkpoints, which graph architectures handle natively.' }
    ],
    summary: 'OpenAI SDK, LangGraph, and n8n give you both code-first and visual automation superpowers for real-world GenAI products.',
    resources: [
      { title: 'n8n Official Documentation', url: 'https://docs.n8n.io/', type: 'Official Docs', verified: true },
      { title: 'LangGraph Official Documentation', url: 'https://langchain-ai.github.io/langgraph/', type: 'Official Docs', verified: true },
      { title: 'OpenAI Official API Docs', url: 'https://platform.openai.com/docs/overview', type: 'Official Docs', verified: true }
    ]
  },

  // ==================== D. DIGITAL MARKETING ====================
  {
    id: 'digital-marketing',
    number: 19,
    pathId: 'marketing',
    title: 'Complete Digital Marketing (SEO, SEM, SMM, Ads & Analytics)',
    icon: '📣',
    level: 'Beginner',
    estimatedHours: 25,
    prerequisites: [],
    diagramType: 'marketing-funnel',
    diagramCaption: 'Full-Funnel Digital Marketing Engine: Awareness (SEO/SMM) -> Consideration (Content/Email) -> Conversion (SEM/Meta Ads) -> Analytics.',
    subtopics: [
      'Introduction to digital marketing', 'Digital marketing fundamentals', 'Digital marketing dimensions',
      'Traditional vs digital marketing', 'Marketing funnel', 'Customer journey',
      'Website fundamentals', 'Website creation', 'Landing pages', 'Conversion optimization',
      'SEO fundamentals', 'On-page SEO', 'Off-page SEO', 'Technical SEO', 'Keyword research', 'Backlinks', 'Website optimization',
      'Search Engine Marketing (SEM)', 'Google Ads fundamentals', 'Search campaigns', 'Keyword targeting', 'Campaign optimization',
      'Social Media Marketing (SMM)', 'Social media platforms', 'Social media strategy', 'Audience targeting', 'Content calendars', 'Engagement',
      'Meta Ads', 'Content Marketing', 'Email Marketing', 'Affiliate Marketing', 'YouTube Marketing',
      'Analytics & Data Tracking', 'E-commerce Marketing', 'Influencer Marketing', 'Marketing Automation', 'Freelancing'
    ],
    teluguSummary: 'డిజిటల్ మార్కెటింగ్ ద్వారా ఇంటర్నెట్, గూగుల్ (SEO/Ads), యూట్యూబ్ మరియు సోషల్ మీడియా వేదికల ద్వారా వ్యాపారాలను లక్షలాది కస్టమర్లకు చేరువ చేయవచ్చు.',
    whatIsIt: 'Digital Marketing is the data-driven practice of attracting, engaging, and converting customers online through SEO, Google Ads (SEM), Social Media, Meta Ads, Content, Email, and Analytics.',
    whyImportant: 'Every business—from local clinics to global SaaS startups—depends on measurable digital customer acquisition and offers lucrative full-time and freelance careers.',
    realLifeUse: 'Ranking a website #1 on Google, running profitable Google/Meta ad campaigns, growing YouTube channels, and optimizing landing page conversions.',
    howItWorks: 'You guide prospects through the Marketing Funnel (Awareness -> Interest -> Desire -> Action) using targeted organic and paid channels while tracking ROI via Analytics.',
    stepByStepLessons: [
      { title: 'Lesson 1: Marketing Funnel & High-Converting Landing Pages', content: 'Understand TOFU/MOFU/BOFU stages. Build focused landing pages with clear value propositions, social proof, and single CTAs.' },
      { title: 'Lesson 2: SEO (On-Page, Off-Page & Technical)', content: 'Research buyer keywords, optimize title tags/H1s/page speed, and earn authoritative backlinks for free long-term organic Google traffic.' },
      { title: 'Lesson 3: Paid Acquisition (Google Ads SEM & Meta Ads)', content: 'Master search intent keyword match types, Quality Score, Meta audience targeting, A/B ad creatives, and ROAS optimization.' },
      { title: 'Lesson 4: SMM, YouTube, Email, Analytics & Freelancing', content: 'Plan 30-day content calendars, automate email sequences, track conversions with Google Analytics 4, and pitch freelance clients.' }
    ],
    terminology: [
      { term: 'SEO (Search Engine Optimization)', def: 'Improving website content and technical health to rank organically in unpaid search results.' },
      { term: 'CTR (Click-Through Rate)', def: 'Percentage of people who click your ad or link after seeing it (Clicks ÷ Impressions × 100).' },
      { term: 'ROAS (Return on Ad Spend)', def: 'Revenue generated for every rupee or dollar spent on advertising.' },
      { term: 'Conversion Rate (CRO)', def: 'Percentage of visitors who complete a desired goal (purchase, signup, lead form).' }
    ],
    codeExample: `<!-- On-Page SEO Essential Meta Tags -->
<title>Best Online Coding & AI University | Learn From Zero</title>
<meta name="description" content="Master Web Development, Python, GenAI & Digital Marketing with interactive roadmaps and projects." />
<link rel="canonical" href="https://example.com/courses" />`,
    realWorldExample: 'An e-commerce brand uses Meta Ads for product discovery, retargets cart abandoners via Email Marketing, and captures high-intent buyers via Google Search Ads.',
    practicalExercises: [
      'Perform a 10-point On-Page SEO audit on any live webpage (Title, Meta Description, H1, Alt tags, Mobile speed).',
      'Draft a complete Google Search Ad campaign plan (5 keywords, 2 ad headlines, landing page CTA) for a local business.',
      'Build a 7-day Instagram & YouTube content calendar with hooks and hashtags.'
    ],
    commonMistakes: [
      'Sending paid ad traffic to a cluttered homepage instead of a dedicated conversion landing page.',
      'Keyword stuffing content instead of solving genuine user search intent.'
    ],
    interviewQuestions: [
      { q: 'What is the difference between SEO and SEM?', a: 'SEO earns free organic search traffic over time through optimization; SEM (like Google Ads) buys immediate top search placement via paid auctions.' },
      { q: 'How does Google Ads Quality Score affect ad cost?', a: 'Higher Quality Score (relevant ad copy + high CTR + great landing page) lowers your Cost-Per-Click (CPC) and improves ad rank.' }
    ],
    summary: 'Digital Marketing unites organic SEO, paid Google/Meta ads, social content, email automation, and analytics into a measurable business growth engine.',
    resources: [
      { title: 'Google Skillshop — Free Google Ads & Analytics Certifications', url: 'https://skillshop.withgoogle.com/', type: 'Free Certification', verified: true },
      { title: 'Google Search Central — SEO Starter Guide', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide', type: 'Official Docs', verified: true },
      { title: 'HubSpot Academy — Free Digital Marketing Courses', url: 'https://academy.hubspot.com/', type: 'Free Certification', verified: true }
    ]
  },

  // ==================== E. IMAGE EDITING ====================
  {
    id: 'photoshop',
    number: 20,
    pathId: 'image-editing',
    title: 'Adobe Photoshop — Professional Image Editing',
    icon: '🖼️',
    level: 'Beginner',
    estimatedHours: 14,
    prerequisites: [],
    diagramType: 'photoshop-layers',
    diagramCaption: 'Non-Destructive Photoshop Layer Stack: Smart Objects, Layer Masks, and Adjustment Layers.',
    subtopics: [
      'Interface', 'Tools', 'Layers', 'Selection tools', 'Masks', 'Retouching',
      'Background removal', 'Color correction', 'Photo manipulation', 'Professional image editing', 'Practical projects'
    ],
    teluguSummary: 'Adobe Photoshop ద్వారా ఫోటోలను ఎడిట్ చేయడం, బ్యాక్‌గ్రౌండ్ తొలగించడం, కలర్ కరెక్షన్ మరియు సోషల్ మీడియా పోస్టర్లు తయారు చేయడం నేర్చుకోవచ్చు.',
    whatIsIt: 'Adobe Photoshop is the industry-standard raster graphics editor for photo retouching, compositing, background removal, color grading, and social media creative design.',
    whyImportant: 'High-impact visuals drive clicks in digital marketing, e-commerce product listings, YouTube thumbnails, and brand campaigns.',
    realLifeUse: 'E-commerce product cutouts, YouTube thumbnail creation, portrait skin retouching, and surreal ad composites.',
    howItWorks: 'Photoshop edits pixel-based images using stacked Layers, non-destructive Layer Masks (white reveals, black conceals), and Adjustment Layers.',
    stepByStepLessons: [
      { title: 'Lesson 1: Workspace, Layers & Smart Objects', content: 'Master the Layers panel, convert images to Smart Objects so scaling never blurs pixels, and learn essential shortcuts (V, B, M, L, Ctrl+J).' },
      { title: 'Lesson 2: Precision Selections & Layer Masks', content: 'Use Object Selection, Select Subject, and Pen Tool with Layer Masks instead of the Eraser tool so edits remain 100% reversible.' },
      { title: 'Lesson 3: Retouching & Color Grading', content: 'Remove blemishes cleanly with Spot Healing / Remove Tool, balance skin tones with Curves, and match lighting across composited photos.' }
    ],
    terminology: [
      { term: 'Layer Mask', def: 'A grayscale attachment on a layer where black hides pixels and white reveals them non-destructively.' },
      { term: 'Smart Object', def: 'A container preserving an image’s original source data so resizing and filters remain editable.' },
      { term: 'Adjustment Layer', def: 'A non-destructive color/tone layer (Curves, Hue/Saturation) affecting layers beneath it.' }
    ],
    codeExample: `/* Essential Photoshop Workflow Shortcuts */
V = Move Tool | M = Marquee Select | L = Lasso | B = Brush
Ctrl/Cmd + J = Duplicate Layer | Ctrl/Cmd + T = Free Transform
X = Swap Foreground/Background Colors (Black/White for Masking)`,
    realWorldExample: 'An e-commerce designer isolates a sneaker photo with Select Subject + Mask, adds a soft drop shadow, and exports crisp WebP/PNG product images.',
    practicalExercises: [
      'Remove the background from a portrait cleanly using Select Subject and Refine Edge Hair.',
      'Design a high-CTR YouTube thumbnail combining a cutout portrait, bold typography, and rim lighting.'
    ],
    commonMistakes: [
      'Using the Eraser tool directly on images instead of non-destructive Layer Masks.',
      'Over-smoothing skin portraits until they look plastic instead of preserving natural texture.'
    ],
    interviewQuestions: [
      { q: 'Why are Layer Masks superior to the Eraser tool?', a: 'Layer Masks hide pixels non-destructively—you can restore any part at any time by painting white, whereas erasing permanently deletes pixel data.' }
    ],
    summary: 'Mastering Layers, Masks, Selections, and Color Grading in Photoshop lets you create studio-grade visuals and marketing graphics.',
    resources: [
      { title: 'Adobe Photoshop Official Tutorials', url: 'https://helpx.adobe.com/photoshop/tutorials.html', type: 'Official Docs', verified: true }
    ]
  },

  // ==================== F. VIDEO EDITING ====================
  {
    id: 'video-editing',
    number: 21,
    pathId: 'video-editing',
    title: 'Adobe Premiere Pro & After Effects',
    icon: '🎬',
    level: 'Intermediate',
    estimatedHours: 18,
    prerequisites: [],
    diagramType: 'video-timeline',
    diagramCaption: 'Multi-Track Video Timeline: V1 A-Roll, V2 B-Roll/Motion Graphics, A1 Voiceover (-6dB), A2 Music (-22dB).',
    subtopics: [
      'Video editing fundamentals', 'Timeline', 'Cutting and trimming', 'Transitions',
      'Effects', 'Audio editing', 'Color grading', 'Motion graphics', 'Keyframes', 'Visual effects', 'Video export', 'Practical projects'
    ],
    teluguSummary: 'Premiere Pro లో వీడియోలను కట్ చేయడం, ఆడియో మరియు కలర్ గ్రేడింగ్ చేయడం; After Effects లో మోషన్ గ్రాఫిక్స్ మరియు VFX తయారు చేయడం నేర్చుకుంటారు.',
    whatIsIt: 'Adobe Premiere Pro is the industry-standard non-linear video editor for storytelling, pacing, audio mixing, and color grading; After Effects powers keyframed motion graphics and VFX.',
    whyImportant: 'Video dominates social media, YouTube, ads, and online education. Skilled editors and motion designers are in constant global demand.',
    realLifeUse: 'YouTube videos, Instagram Reels/Shorts, commercial video ads, explainer animations, and corporate documentaries.',
    howItWorks: 'Premiere arranges video and audio clips across non-destructive multi-track timelines; After Effects animates properties (position, scale, opacity) over time using Keyframes.',
    stepByStepLessons: [
      { title: 'Lesson 1: Timeline Storytelling, J/L Cuts & Pacing', content: 'Organize bins, assemble A-roll narrative, layer B-roll cutaways, and use J-cuts/L-cuts so audio flows smoothly across scene edits.' },
      { title: 'Lesson 2: Crystal-Clear Audio Mixing & Lumetri Color', content: 'Normalize dialogue to -6dB to -12dB, duck background music to -22dB, and apply Lumetri Color correction + creative LUTs.' },
      { title: 'Lesson 3: Keyframes, Motion Graphics & Export', content: 'Animate lower-thirds and titles with Easy Ease keyframes in After Effects, and export H.264 MP4 presets for YouTube/Reels.' }
    ],
    terminology: [
      { term: 'A-Roll & B-Roll', def: 'A-Roll is the primary spoken narrative; B-Roll is supplementary footage illustrating what is being discussed.' },
      { term: 'Keyframe', def: 'A marker defining a property’s value at a specific timestamp so software interpolates smooth motion between points.' },
      { term: 'J-Cut / L-Cut', def: 'Audio transitions where the next scene’s audio starts early (J-cut) or lingers over the next shot (L-cut).' }
    ],
    codeExample: `/* Standard Export Settings (YouTube / Web 1080p & 4K) */
Format: H.264 (.mp4) | Frame Rate: Match Source (24/30/60 fps)
Target Bitrate: 15–20 Mbps (1080p) / 40–50 Mbps (4K)
Audio: AAC, 48 kHz, 320 kbps Stereo`,
    realWorldExample: 'Top educational YouTube creators combine tight Premiere Pro jump-cuts with After Effects animated diagrams every 15 seconds to keep viewer retention high.',
    practicalExercises: [
      'Edit a 60-second vertical Reel (1080x1920) with tight cuts, background music ducking, and animated captions.',
      'Animate a smooth lower-third title bar using Easy Ease position & opacity keyframes.'
    ],
    commonMistakes: [
      'Leaving background music too loud so viewers struggle to hear spoken dialogue.',
      'Overusing flashy 3D transitions instead of clean cuts timed to speech rhythm.'
    ],
    interviewQuestions: [
      { q: 'When do you use Premiere Pro vs After Effects?', a: 'Use Premiere Pro for multi-clip timeline editing, audio mixing, and color grading; use After Effects for complex keyframe animations, text motion graphics, and VFX compositing.' }
    ],
    summary: 'Premiere Pro and After Effects empower you to turn raw camera footage into polished, high-retention videos and motion graphics.',
    resources: [
      { title: 'Adobe Premiere Pro Official Tutorials', url: 'https://helpx.adobe.com/premiere-pro/tutorials.html', type: 'Official Docs', verified: true },
      { title: 'Adobe After Effects Official Tutorials', url: 'https://helpx.adobe.com/after-effects/tutorials.html', type: 'Official Docs', verified: true }
    ]
  },

  // ==================== G. LOGO DESIGNING & EDITING ====================
  {
    id: 'illustrator',
    number: 22,
    pathId: 'logo-design',
    title: 'Adobe Illustrator — Vector Logo & Brand Design',
    icon: '✒️',
    level: 'Beginner',
    estimatedHours: 14,
    prerequisites: [],
    diagramType: 'vector-vs-raster',
    diagramCaption: 'Vector Math Curves vs Raster Pixels: Why Illustrator Logos Scale Infinitely from Favicon to Billboard.',
    subtopics: [
      'Vector graphics', 'Pen tool', 'Shape tools', 'Typography', 'Logo design',
      'Color theory', 'Branding', 'Icon design', 'Vector editing', 'Professional logo projects'
    ],
    teluguSummary: 'Adobe Illustrator లో వెక్టర్ గ్రాఫిక్స్ మరియు Pen Tool ఉపయోగించి ఏ సైజుకైనా నాణ్యత తగ్గని ప్రొఫెషనల్ లోగోలు, ఐకాన్లు తయారు చేయవచ్చు.',
    whatIsIt: 'Adobe Illustrator is the premier vector graphics software for creating infinitely scalable logos, brand identities, custom icons, and typography.',
    whyImportant: 'Logos must look razor-sharp on both a tiny 16px website favicon and a 40-foot highway billboard—only vector graphics can do that.',
    realLifeUse: 'Startup logos, brand style guides, app icons, custom illustrations, and laser/vinyl cutting paths.',
    howItWorks: 'Instead of fixed pixels, Illustrator stores mathematical anchor points and Bezier curves that recalculate cleanly at any zoom level.',
    stepByStepLessons: [
      { title: 'Lesson 1: Vector Fundamentals, Shapes & Pathfinder', content: 'Combine basic geometric primitives using Pathfinder (Unite, Minus Front) and the Shape Builder Tool (Shift+M) to construct clean marks.' },
      { title: 'Lesson 2: Mastering the Pen Tool & Bezier Curves', content: 'Place minimal anchor points at curve extrema with smooth tangent handles for fluid, balanced silhouettes.' },
      { title: 'Lesson 3: Logo Typography, Brand Systems & Export', content: 'Pair geometric or humanist typefaces, test logos in pure black & white first, and export SVG, EPS, PDF, and PNG brand kits.' }
    ],
    terminology: [
      { term: 'Vector Graphics', def: 'Resolution-independent artwork defined by mathematical points, lines, and Bezier curves.' },
      { term: 'Pathfinder / Shape Builder', def: 'Tools that merge, subtract, or intersect overlapping vector shapes into a unified logo mark.' },
      { term: 'Kerning', def: 'Adjusting the horizontal spacing between individual letter pairs for visual balance.' }
    ],
    codeExample: `<!-- Scalable Vector Output (SVG) -->
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="50" fill="#4f46e5" />
  <path d="M40 65 L55 80 L85 45" stroke="#ffffff" stroke-width="8" fill="none" />
</svg>`,
    realWorldExample: 'Iconic logos like Nike, Apple, and FedEx are simple, memorable vector marks that work in single-color print and digital UI.',
    practicalExercises: [
      'Trace a geometric animal or tech emblem using the Pen Tool with fewer than 12 anchor points.',
      'Design a complete logo suite (Primary Logo, Monochrome Version, Favicon Icon) for an AI startup.'
    ],
    commonMistakes: [
      'Designing logos with complex gradients and tiny details that vanish when scaled down.',
      'Forgetting to Convert Text to Outlines (Ctrl+Shift+O) before sending final vector files to printers.'
    ],
    interviewQuestions: [
      { q: 'Why should logos always be designed in Illustrator (vector) rather than Photoshop (raster)?', a: 'Vector logos use mathematical paths that scale infinitely without pixelation and export directly to SVG, EPS, and print/cutter formats.' }
    ],
    summary: 'Adobe Illustrator gives you precision vector mastery to design timeless logos, custom icons, and cohesive brand identities.',
    resources: [
      { title: 'Adobe Illustrator Official Tutorials', url: 'https://helpx.adobe.com/illustrator/tutorials.html', type: 'Official Docs', verified: true },
      { title: 'The Bezier Game — Master the Pen Tool', url: 'https://bezier.method.ac/', type: 'Interactive Game', verified: true }
    ]
  },

  // ==================== H. CUTTER MACHINE HANDLING ====================
  {
    id: 'cutter-machine',
    number: 23,
    pathId: 'cutter-machine',
    title: 'Cutter Machine Handling & Plotter Operations',
    icon: '✂️',
    level: 'Beginner',
    estimatedHours: 10,
    prerequisites: ['illustrator'],
    diagramType: 'cutter-workflow',
    diagramCaption: 'Vinyl & Plotter Cutting Pipeline: Vector Outline -> Software Driver Setup -> Blade Force/Speed Test -> Cut & Weed.',
    configurableSoftware: true,
    subtopics: [
      'Machine fundamentals', 'Software installation and setup', 'Design preparation',
      'File formats', 'Cutting settings', 'Material selection', 'Machine operation',
      'Troubleshooting', 'Practical cutting projects'
    ],
    teluguSummary: 'కట్టర్ మెషిన్ (Vinyl/Plotter Cutter) ద్వారా స్టిక్కర్లు, సైన్ బోర్డులు, టీ-షర్ట్ ప్రింట్ కటౌట్లను ఖచ్చితమైన బ్లేడ్ సెట్టింగ్స్‌తో కట్ చేయడం నేర్చుకుంటారు.',
    whatIsIt: 'Cutter Machine Handling covers operating computer-controlled vinyl/plotter cutting machines to precision-cut stickers, signage, heat-transfer vinyl (HTV), cardstock, and decals.',
    whyImportant: 'Signage shops, custom apparel businesses, packaging studios, and print shops rely on accurate vector-to-blade execution without wasting expensive vinyl rolls.',
    realLifeUse: 'Shopfront vinyl lettering, custom t-shirt heat-transfer decals, vehicle graphics, product labels, and packaging prototypes.',
    howItWorks: 'Cutting software translates closed vector paths (SVG/DXF/EPS/PLT) into X-Y carriage coordinates while a spring-loaded tungsten blade slices only the top vinyl layer, leaving the backing intact.',
    stepByStepLessons: [
      { title: 'Lesson 1: Machine Anatomy & Software Setup', content: 'Understand pinch rollers, grit rollers, carriage head, blade holder depth, and USB/driver setup in your chosen cutter software (Silhouette Studio, Cricut Design Space, SignMaster, FlexiSign, or CorelDRAW plugin).' },
      { title: 'Lesson 2: Vector Preparation & File Formats', content: 'Convert all fonts to vector outlines, weld overlapping paths so the blade doesn’t cross-cut letters, and export clean SVG/DXF/EPS files.' },
      { title: 'Lesson 3: Blade Force, Speed Calibration & Test Cut', content: 'Always run a 1cm square+triangle Test Cut before full jobs. Adjust blade depth, force (grams), and speed (mm/s) for vinyl vs cardstock vs HTV.' },
      { title: 'Lesson 4: Weeding, Transfer Tape & Troubleshooting', content: 'Weed excess vinyl smoothly, apply transfer tape without air bubbles, and troubleshoot incomplete corners (blade offset) or media skewing.' }
    ],
    terminology: [
      { term: 'Kiss Cut', def: 'Cutting cleanly through the top vinyl film while leaving the paper backing liner uncut.' },
      { term: 'Blade Offset', def: 'The microscopic distance (e.g., 0.25mm) between the blade shaft center and cutting tip required for sharp 90° corners.' },
      { term: 'Weeding', def: 'Peeling away unwanted negative vinyl around your cut design using a hook pick.' }
    ],
    codeExample: `/* Standard Material Calibration Reference */
Adhesive Vinyl (3 mil):   Blade 45° | Force: 80–110g  | Speed: 300 mm/s
Heat Transfer Vinyl (HTV): Mirror Design ON! | Force: 90–120g | Speed: 250 mm/s
Cardstock (220 gsm):       Blade 60° | Force: 180–230g | Speed: 150 mm/s`,
    realWorldExample: 'Before cutting a 6-foot storefront sign, an operator aligns pinch rollers over the grit marks, runs a 10-second test cut, and verifies clean weeding.',
    practicalExercises: [
      'Prepare a vector decal in SVG format with welded text and zero duplicate overlapping cut lines.',
      'Run a calibration checklist: Pinch roller alignment -> Test cut -> Kiss-cut verification -> Weeding.'
    ],
    commonMistakes: [
      'Forgetting to Mirror (flip horizontally) Heat Transfer Vinyl (HTV) designs before cutting!',
      'Exposing too much blade tip, slicing straight through the backing liner and damaging the cutting strip.'
    ],
    interviewQuestions: [
      { q: 'What is a Kiss Cut and how do you verify it?', a: 'A Kiss Cut slices only the top vinyl layer while leaving the backing sheet intact. You verify it via a small corner test cut before running the main job.' }
    ],
    summary: 'Proper vector prep, blade calibration, test cuts, and material settings guarantee crisp, waste-free cutter machine production.',
    resources: [
      { title: 'Silhouette Studio Official Support & Guides', url: 'https://www.silhouetteamerica.com/software', type: 'Software Docs', verified: true },
      { title: 'Cricut Help Center — Machine & Blade Setup', url: 'https://help.cricut.com/', type: 'Software Docs', verified: true }
    ]
  },

  // ==================== I. BANNERS & PAMPHLETS MAKING ====================
  {
    id: 'indesign',
    number: 24,
    pathId: 'print-design',
    title: 'Adobe InDesign — Banners, Pamphlets & Print Design',
    icon: '📰',
    level: 'Beginner',
    estimatedHours: 14,
    prerequisites: ['ui-ux'],
    diagramType: 'print-layout',
    diagramCaption: 'Print-Ready Layout Anatomy: Trim Line, 3mm Bleed Area, Safety Margin, CMYK Color & 300 DPI.',
    subtopics: [
      'Introduction', 'Interface', 'Document setup', 'Page layouts', 'Typography',
      'Images and graphics', 'Color management', 'Print design', 'Banner design',
      'Pamphlet design', 'Brochure design', 'Exporting print-ready PDFs', 'Practical projects'
    ],
    teluguSummary: 'Adobe InDesign ద్వారా ఫ్లెక్స్ బ్యానర్లు, పాంప్లెట్లు, బ్రోచర్లు మరియు పుస్తకాలను ప్రింటింగ్‌కు సిద్ధంగా (CMYK, Bleed, 300 DPI) డిజైన్ చేయడం నేర్చుకుంటారు.',
    whatIsIt: 'Adobe InDesign is the professional desktop publishing layout software for designing multi-page brochures, tri-fold pamphlets, posters, banners, and print-ready PDFs.',
    whyImportant: 'Print errors cost real money once ink hits paper or flex vinyl. InDesign’s grids, master pages, CMYK color profiles, and bleed controls prevent costly print mistakes.',
    realLifeUse: 'Event flex banners, tri-fold business pamphlets, school/college prospectuses, flyers, and product catalogs.',
    howItWorks: 'You set exact page dimensions with a 3mm–5mm Bleed, arrange text and linked 300 DPI images on column grids, and export press-ready PDF/X-1a files.',
    stepByStepLessons: [
      { title: 'Lesson 1: Document Setup, Margins, Columns & Bleed', content: 'Configure exact trim dimensions (A4, A5, Tri-fold, or Banner feet/inches), add 3mm Bleed on all edges, and establish clean column grids.' },
      { title: 'Lesson 2: Editorial Typography & Paragraph Styles', content: 'Use Paragraph & Character Styles for consistent headings, subheadings, and body text; eliminate awkward widows/orphans.' },
      { title: 'Lesson 3: CMYK Color, 300 DPI Images & Preflight Export', content: 'Verify all images are 300 DPI in CMYK color mode via the Preflight panel, extend backgrounds to the bleed line, and export PDF/X-1a with crop marks.' }
    ],
    terminology: [
      { term: 'Bleed', def: 'Extra background artwork extending 3mm–5mm beyond the trim edge so paper cutting leaves zero white borders.' },
      { term: 'CMYK vs RGB', def: 'CMYK (Cyan, Magenta, Yellow, Black) is ink-based for physical printing; RGB is light-based for screens.' },
      { term: 'DPI (Dots Per Inch)', def: 'Print image resolution—300 DPI is required for sharp pamphlets/brochures.' }
    ],
    codeExample: `/* Print-Ready Export Checklist (Adobe InDesign) */
1. Color Mode: CMYK (Coated FOGRA39 / US Web Coated SWOP)
2. Resolution: All linked images >= 300 DPI (Effective PPI)
3. Bleed: 3 mm (0.125 in) on Top, Bottom, Left, Right
4. Export Preset: [PDF/X-1a:2001] with Crop Marks & Use Document Bleed`,
    realWorldExample: 'A hospital marketing team designs an A4 tri-fold patient pamphlet in InDesign using 3 columns, CMYK brand colors, and 3mm bleed for offset printing.',
    practicalExercises: [
      'Set up an A4 Tri-Fold Pamphlet document with 3 panels, 10mm inner margins, and 3mm bleed.',
      'Design a promotional event banner with bold visual hierarchy, readable contact info, and export a print-ready PDF.'
    ],
    commonMistakes: [
      'Designing print brochures in RGB mode, resulting in dull, shifted colors when printed in CMYK.',
      'Placing text too close to the edge or fold crease without safety margins.'
    ],
    interviewQuestions: [
      { q: 'What is Bleed in print design and why is it mandatory?', a: 'Bleed extends background graphics 3–5mm past the final trim line so slight mechanical blade shifts during cutting never leave unsightly white edges.' }
    ],
    summary: 'Adobe InDesign equips you with grid typography, CMYK color control, bleed setup, and preflight checks to deliver flawless banners and pamphlets.',
    resources: [
      { title: 'Adobe InDesign Official Tutorials', url: 'https://helpx.adobe.com/indesign/tutorials.html', type: 'Official Docs', verified: true }
    ]
  }
];

function getQuestionsForTopic(topicId) {
  const topic = SYLLABUS_TOPICS.find(t => t.id === topicId) || SYLLABUS_TOPICS[0];
  return [
    {
      id: `${topic.id}-q1`,
      type: 'MCQ',
      question: `What is the primary real-world purpose of ${topic.title}?`,
      options: [
        topic.whatIsIt,
        'It is solely a hardware BIOS firmware utility for motherboards.',
        'It only works offline on legacy floppy disk systems.',
        'It replaces electricity in computer monitors.'
      ],
      answerIndex: 0,
      explanation: topic.whatIsIt
    },
    {
      id: `${topic.id}-q2`,
      type: 'True/False',
      question: `True or False: ${topic.commonMistakes[0].replace(/\.$/, '')} is considered a best practice in ${topic.title}.`,
      options: ['False — this is a common mistake to avoid', 'True — always do this in production'],
      answerIndex: 0,
      explanation: `Mistake to avoid: ${topic.commonMistakes[0]}`
    },
    {
      id: `${topic.id}-q3`,
      type: 'Scenario',
      question: `In a real-world ${topic.title} workflow, which concept corresponds to: "${topic.terminology[0].def}"?`,
      options: [
        topic.terminology[0].term,
        topic.terminology[1] ? topic.terminology[1].term : 'Kernel Panic',
        'DNS Cache Flush',
        'RGB Pixel Grid'
      ],
      answerIndex: 0,
      explanation: `${topic.terminology[0].term}: ${topic.terminology[0].def}`
    },
    {
      id: `${topic.id}-q4`,
      type: 'Practical',
      question: `Which of the following is an essential subtopic covered in ${topic.title}?`,
      options: [
        `${topic.subtopics[0]} & ${topic.subtopics[Math.min(2, topic.subtopics.length - 1)]}`,
        'COBOL Punchcard Punching',
        'Cathode Ray Tube Soldering',
        '1980s Fax Modem Handshakes'
      ],
      answerIndex: 0,
      explanation: `${topic.title} covers ${topic.subtopics.slice(0, 4).join(', ')}, and more.`
    },
    {
      id: `${topic.id}-q5`,
      type: 'Interview',
      question: topic.interviewQuestions[0].q,
      options: [
        topic.interviewQuestions[0].a,
        'There is no technical difference; both behave identically in all environments.',
        'It is deprecated and forbidden in all modern projects.',
        'It only applies to printer ink cartridges.'
      ],
      answerIndex: 0,
      explanation: topic.interviewQuestions[0].a
    },
    {
      id: `${topic.id}-q6`,
      type: 'Fill-in-the-Blank',
      question: `Complete the key takeaway: "${topic.summary.split(' ').slice(0, 6).join(' ')} _____"`,
      options: [
        topic.summary.split(' ').slice(6).join(' '),
        'is completely unrelated to modern digital workflows.',
        'requires mainframe punchcards to compile.',
        'cannot be used in real-world projects.'
      ],
      answerIndex: 0,
      explanation: topic.summary
    }
  ];
}

const PRACTICAL_PROJECTS = [
  {
    id: 'proj-fe-1', pathId: 'frontend', difficulty: 'Beginner', title: 'Personal Portfolio Website',
    objective: 'Build a clean, accessible semantic HTML5 & responsive CSS3 personal portfolio showcasing your bio, skills, and contact form.',
    skills: ['HTML5', 'CSS3 Flexbox/Grid', 'Responsive Media Queries', 'Git & GitHub'],
    tools: ['VS Code', 'Chrome DevTools', 'GitHub Pages'],
    steps: ['Create semantic structure (<header>, <main>, <section>, <footer>).', 'Style responsive project cards with CSS Grid.', 'Add mobile navigation media query below 768px.', 'Deploy live via GitHub Pages.'],
    checklist: ['Uses single <h1> and valid alt attributes', 'Zero horizontal scroll on 375px mobile screen', 'Hosted on public GitHub repo']
  },
  {
    id: 'proj-fe-2', pathId: 'frontend', difficulty: 'Intermediate', title: 'Interactive Live Weather & GitHub Explorer',
    objective: 'Fetch real-time public REST API data using Async/Await, handle loading/error states, and render dynamic DOM cards.',
    skills: ['JavaScript ES6+', 'Fetch API', 'Async/Await', 'JSON', 'Error Handling'],
    tools: ['VS Code', 'GitHub REST API'],
    steps: ['Build search input with debounce/submit event.', 'Call GitHub Users API with async/await and try/catch.', 'Render avatar, bio, and repository count dynamically.', 'Display graceful 404 banner if user does not exist.'],
    checklist: ['Handles 404 and network errors without crashing', 'Shows loading indicator during fetch', 'Clean ES6 modular functions']
  },
  {
    id: 'proj-be-1', pathId: 'backend', difficulty: 'Intermediate', title: 'RESTful Task & Student API with MySQL',
    objective: 'Design a normalized relational database and build a complete CRUD REST API in Node.js/Express or Python.',
    skills: ['Database Design', 'SQL & MySQL', 'Node.js & Express', 'JSON', 'REST APIs'],
    tools: ['Node.js', 'Express', 'MySQL', 'Postman'],
    steps: ['Create normalized students and tasks tables with Primary & Foreign keys.', 'Implement GET, POST, PUT, and DELETE routes.', 'Add input validation and centralized error middleware.', 'Test all endpoints with status codes 200, 201, 400, 404.'],
    checklist: ['Proper HTTP status codes returned', 'Parameterized SQL queries prevent SQL injection', 'JSON responses follow consistent schema']
  },
  {
    id: 'proj-ai-1', pathId: 'genai', difficulty: 'Intermediate', title: 'PDF Study Notes RAG Question-Answering Assistant',
    objective: 'Build a Retrieval-Augmented Generation pipeline that ingests study PDFs, chunks text, stores embeddings, and answers with exact citations.',
    skills: ['Python', 'Prompt Engineering', 'RAG Architecture', 'Embeddings & Vector Search'],
    tools: ['Python', 'OpenAI SDK / Embedding Model', 'Chroma / FAISS'],
    steps: ['Extract text from PDF and split into 500-token chunks with 50-token overlap.', 'Generate embeddings and index in a local vector store.', 'Retrieve top-3 relevant chunks for user questions.', 'Prompt LLM to answer strictly from retrieved context.'],
    checklist: ['Refuses to hallucinate when answer is not in PDF', 'Displays source chunk references', 'API key loaded safely via .env']
  },
  {
    id: 'proj-ai-2', pathId: 'genai', difficulty: 'Advanced', title: 'Multi-Step AI Research & Workflow Agent (LangGraph / n8n)',
    objective: 'Create an autonomous AI agent equipped with tool calling and memory that researches a topic, drafts a study guide, and logs it.',
    skills: ['AI Agents', 'Tool Calling', 'LangGraph', 'n8n', 'Structured JSON'],
    tools: ['Python', 'LangGraph', 'n8n'],
    steps: ['Define structured tool schemas for web search and note saving.', 'Implement stateful agent graph with critic review loop.', 'Connect webhook trigger in n8n to automate notifications.'],
    checklist: ['Structured JSON tool arguments validated', 'Max iteration safety limit configured', 'End-to-end automated workflow verified']
  },
  {
    id: 'proj-dm-1', pathId: 'marketing', difficulty: 'Beginner', title: 'Full-Funnel Digital Marketing & SEO Launch Plan',
    objective: 'Audit a live website for SEO, design a high-converting landing page wireframe, and plan a 30-day Google + Meta Ads funnel.',
    skills: ['On-Page SEO', 'Keyword Research', 'Google Ads SEM', 'Meta Ads', 'Analytics'],
    tools: ['Google Keyword Planner', 'Google Analytics 4', 'Meta Ads Manager'],
    steps: ['Identify 15 high-intent keywords with search volume & competition analysis.', 'Write optimized meta titles, H1s, and landing page copy.', 'Structure Search Campaign ad groups and retargeting funnel.'],
    checklist: ['Includes TOFU, MOFU, BOFU stages', 'Defines measurable KPIs (CTR, CPC, Conversion Rate)', 'Includes 30-day social content calendar']
  },
  {
    id: 'proj-design-1', pathId: 'logo-design', difficulty: 'Intermediate', title: 'Complete Brand Identity, Logo & Print Pamphlet Suite',
    objective: 'Design a vector logo in Illustrator, prepare a vinyl sticker cut file, and lay out a CMYK tri-fold pamphlet in InDesign.',
    skills: ['Adobe Illustrator', 'Adobe Photoshop', 'Cutter Machine Prep', 'Adobe InDesign'],
    tools: ['Illustrator', 'Photoshop', 'Cutter Software', 'InDesign'],
    steps: ['Construct scalable vector logo using Shape Builder & Pen Tool.', 'Prepare welded SVG cut path and run vinyl test cut calibration.', 'Create 300 DPI CMYK tri-fold pamphlet with 3mm bleed in InDesign.'],
    checklist: ['Vector logo tested in monochrome', 'Cutter file has zero overlapping paths', 'Print PDF exported with 3mm bleed & crop marks']
  }
];

const CAREER_ROADMAPS = [
  {
    id: 'frontend-dev', title: 'Frontend Web Developer', salaryRange: '₹5L – ₹16L / $70k – $125k',
    requiredTopics: ['html-html5', 'css3-css5', 'javascript-es6', 'apis', 'react-router', 'git-github', 'jsx', 'ui-ux'],
    interviewTopics: ['DOM & Event Loop', 'CSS Flexbox/Grid', 'React State & Router', 'REST API Integration']
  },
  {
    id: 'backend-dev', title: 'Backend Software Engineer', salaryRange: '₹6L – ₹18L / $80k – $140k',
    requiredTopics: ['python', 'database', 'sql-mysql', 'json', 'nodejs-express', 'apis', 'git-github'],
    interviewTopics: ['SQL Joins & Indexing', 'REST API Auth & Status Codes', 'Node/Python Async I/O', 'Database Normalization']
  },
  {
    id: 'fullstack-dev', title: 'Full-Stack Web Developer', salaryRange: '₹8L – ₹22L / $90k – $155k',
    requiredTopics: ['html-html5', 'css3-css5', 'javascript-es6', 'jsx', 'react-router', 'nodejs-express', 'database', 'sql-mysql', 'git-github'],
    interviewTopics: ['End-to-End Architecture', 'Authentication & CORS', 'Relational Schema Design', 'Frontend Performance']
  },
  {
    id: 'genai-dev', title: 'Generative AI & Agent Engineer', salaryRange: '₹10L – ₹28L / $110k – $180k',
    requiredTopics: ['python', 'apis', 'json', 'ai-ml-llm', 'prompt-engineering', 'rag', 'ai-agents', 'genai-frameworks'],
    interviewTopics: ['Chunking & Vector Search', 'Preventing Hallucinations', 'Agent Tool Calling & Memory', 'LangGraph & n8n Pipelines']
  },
  {
    id: 'ai-automation', title: 'AI Automation Specialist', salaryRange: '₹6L – ₹16L / $75k – $130k',
    requiredTopics: ['apis', 'json', 'prompt-engineering', 'ai-agents', 'genai-frameworks', 'digital-marketing'],
    interviewTopics: ['Webhook & API Chaining', 'n8n Workflow Design', 'Structured JSON Prompts', 'CRM & Marketing Automation']
  },
  {
    id: 'digital-marketer', title: 'Performance Digital Marketing Specialist', salaryRange: '₹4L – ₹12L / $55k – $105k',
    requiredTopics: ['digital-marketing', 'html-html5', 'ui-ux', 'photoshop'],
    interviewTopics: ['SEO Audit & Backlinks', 'Google Ads Quality Score & ROAS', 'Meta Ads Funnel & Retargeting', 'GA4 Conversion Tracking']
  },
  {
    id: 'graphic-print-designer', title: 'Brand, Motion & Print Production Designer', salaryRange: '₹4L – ₹11L / $50k – $95k',
    requiredTopics: ['ui-ux', 'photoshop', 'video-editing', 'illustrator', 'cutter-machine', 'indesign'],
    interviewTopics: ['Vector vs Raster Workflows', 'CMYK, Bleed & 300 DPI Preflight', 'Non-Destructive Masking', 'Cutter Calibration & Kiss-Cut']
  }
];
