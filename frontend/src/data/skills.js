export const skillCategories = [
  {
    category: "PROGRAMMING",
    description: "Core programming and query languages",
    skills: [
      { name: "Python", level: "Primary", highlight: true, role: "Core language for FastAPI APIs, computer vision, data manipulation, and automation." },
      { name: "JavaScript", level: "Web Core", highlight: true, role: "Client-side interactivity, asynchronous request handling, and React application logic." },
      { name: "Java", level: "OOP & DSA", highlight: false, role: "Object-oriented software principles and foundational data structures." },
      { name: "SQL", level: "Queries", highlight: true, role: "Relational queries, schema design, joins, and database operations." }
    ]
  },
  {
    category: "FRONTEND",
    description: "Modern responsive web user interfaces",
    skills: [
      { name: "React.js", level: "Modern UI", highlight: true, role: "Component architecture, reactive state hooks, and single-page web applications." },
      { name: "Tailwind CSS", level: "Utility CSS", highlight: true, role: "Responsive mobile-first styling systems, custom tokens, and modern layouts." },
      { name: "Vite", level: "Build Tool", highlight: false, role: "Ultra-fast frontend build tooling, HMR, and production bundling." },
      { name: "HTML", level: "Markup Standard", highlight: false, role: "Semantic HTML5 layout structure, accessibility attributes, and web forms." },
      { name: "CSS", level: "Styling System", highlight: false, role: "Custom animations, Flexbox/Grid layouts, and responsive styling rules." }
    ]
  },
  {
    category: "BACKEND",
    description: "Server architecture, microservices, and APIs",
    skills: [
      { name: "FastAPI", level: "Async APIs", highlight: true, role: "High-speed asynchronous Python REST endpoints with Pydantic schema validation." },
      { name: "Node.js", level: "JS Runtime", highlight: true, role: "Event-driven server-side JavaScript execution environment." },
      { name: "Express.js", level: "Web Framework", highlight: true, role: "Server routing, API middleware, and JSON payload handling." },
      { name: "REST APIs", level: "Architecture", highlight: true, role: "Standard HTTP request routing, JSON data contracts, and status code handling." }
    ]
  },
  {
    category: "DATABASE",
    description: "Data storage, persistence, and ORMs",
    skills: [
      { name: "MongoDB", level: "NoSQL DB", highlight: true, role: "Document-oriented cloud database storage for contact messages and web analytics." },
      { name: "PostgreSQL", level: "Relational DB", highlight: true, role: "Advanced relational database schemas, transactions, and index optimization." },
      { name: "SQLite", level: "Embedded DB", highlight: true, role: "Lightweight local embedded database used in biometric attendance portal." }
    ]
  },
  {
    category: "AI / ML",
    description: "Machine learning concepts, vision pipelines & prompt engineering",
    skills: [
      { name: "OpenCV", level: "Computer Vision", highlight: true, role: "Real-time webcam frame processing, face detection, and image preprocessing." },
      { name: "NumPy", level: "Array Computing", highlight: true, role: "High-performance vector matrices, embedding calculations, and numerical processing." },
      { name: "Hugging Face", level: "Model Hub", highlight: true, role: "Transformer model pipelines, open-weight LLMs, and NLP integrations." },
      { name: "Prompt Engineering", level: "Optimization", highlight: true, role: "Structured system prompts, few-shot techniques, and GenAI pipeline optimization." }
    ]
  },
  {
    category: "AI TOOLS",
    description: "Generative AI assistants, coding agents & AI productivity platforms",
    skills: [
      { name: "ChatGPT", level: "GenAI Assistant", highlight: true, role: "Generative AI coding assistant, reasoning workflows, and prompt engineering." },
      { name: "Antigravity", level: "Agentic AI", highlight: true, role: "Advanced agentic coding, automated project refactoring, and AI pairing." },
      { name: "Claude", level: "LLM Reasoning", highlight: true, role: "Complex code analysis, deep architecture reasoning, and document synthesis." },
      { name: "DeepSeek", level: "Reasoning LLM", highlight: true, role: "High-level algorithmic reasoning, math logic, and open AI model pipelines." },
      { name: "Gemini", level: "Multimodal AI", highlight: true, role: "Multimodal AI vision & text processing, API integrations, and code assistance." },
      { name: "GitHub Copilot", level: "AI Pair Programmer", highlight: true, role: "Real-time inline code completion and developer productivity." },
      { name: "Perplexity", level: "AI Search & Research", highlight: true, role: "Real-time AI technical research, code snippet verification, and paper search." },
      { name: "Cursor", level: "AI Code Editor", highlight: true, role: "AI-native code editing, intelligent inline autocomplete, and workspace agent." },
      { name: "Replit", level: "Cloud AI IDE", highlight: true, role: "Cloud environment deployment, instant AI coding sandbox, and backend hosting." },
      { name: "Bolt", level: "Web AI Sandbox", highlight: true, role: "In-browser WebContainer dev environments and AI web app generation." },
      { name: "ElevenLabs", level: "AI Voice Gen", highlight: false, role: "High-fidelity synthetic voice generation and audio AI cloning." },
      { name: "Runway", level: "AI Video Gen", highlight: false, role: "Generative video synthesis, motion tracking, and AI visual production." }
    ]
  },
  {
    category: "DEVELOPER & DESIGN TOOLS",
    description: "Code editors, cloud platforms, version control & UI design suites",
    skills: [
      { name: "VS Code", level: "Primary IDE", highlight: true, role: "Main code editor environment, extension workflows, and terminal debugging." },
      { name: "Vercel", level: "Cloud Platform", highlight: true, role: "Automated continuous deployment, edge network hosting, and domain management." },
      { name: "Git", level: "Version Control", highlight: true, role: "Local code versioning, commit tracking, and branch management." },
      { name: "GitHub", level: "Code Hosting", highlight: true, role: "Remote repository hosting, open-source collaboration, and issue tracking." },
      { name: "Docker", level: "Containerization", highlight: false, role: "Multi-stage container packaging for backend deployment isolation." },
      { name: "Postman", level: "API Testing", highlight: false, role: "Endpoint debugging, HTTP request payload validation, and API testing." },
      { name: "Figma", level: "UI/UX Design", highlight: true, role: "Mobile app wireframing, high-fidelity prototypes, and UI design systems." },
      { name: "Affinity", level: "Vector & UI Design", highlight: true, role: "Professional vector graphic design, illustration, and digital asset creation." },
      { name: "Canva", level: "Graphic Design", highlight: true, role: "Visual branding, social media assets, and graphic poster composition." },
      { name: "Premiere Pro", level: "Video Editing", highlight: true, role: "Video post-production, timeline cuts, motion graphics, and content editing." }
    ]
  }
];

export const tickerTechnologies = [
  "Python",
  "React.js",
  "FastAPI",
  "OpenCV",
  "NumPy",
  "Tailwind CSS",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "ChatGPT",
  "Antigravity",
  "Claude",
  "Gemini",
  "GitHub Copilot",
  "VS Code",
  "Vercel",
  "PostgreSQL",
  "SQLite",
  "Figma",
  "Canva",
  "Premiere Pro",
  "Prompt Engineering"
];
