export const projects = [
  {
    id: "face-recognition-system",
    title: "Face Recognition System & Employee Attendance Portal",
    shortTitle: "Face Recognition Attendance Portal",
    featured: true,
    tagline: "Biometric Attendance & Enterprise Employee Portal",
    description:
      "A full-stack biometric attendance and employee portal combining a React interface with a FastAPI backend, authentication, database management and computer-vision-based facial verification.",
    github: "https://github.com/suchitvanapilli/FRS-face-recognition-system-",
    demo: "https://frs-attendance.vercel.app/",
    technologies: [
      "React",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "OpenCV",
      "NumPy",
      "SQLAlchemy",
      "JWT",
      "Docker"
    ],
    capabilities: [
      "Biometric Face Verification (OpenCV + NumPy)",
      "Automated Attendance Tracking & Logging",
      "Role-based JWT Authentication & bcrypt Security",
      "Employee Leave Management Workflow",
      "Performance & Attendance Analytics",
      "Excel Audit Log Generation & Export"
    ],
    problem:
      "Traditional attendance systems rely on manual logging, swipe cards, or biometric fingerprint scanners that suffer from hardware wear, proxy check-ins, and slow throughput during peak hours.",
    solution:
      "Engineered an automated face verification workflow integrated with a reactive frontend and high-performance FastAPI asynchronous backend, processing real-time camera captures against stored face embeddings with sub-second verification.",
    architectureSteps: [
      { step: "01", name: "Frontend Interface", desc: "React + Tailwind webcam capture & employee portal dashboard" },
      { step: "02", name: "FastAPI REST Server", desc: "Asynchronous API layer handling requests, validation & routing" },
      { step: "03", name: "Security & Auth", desc: "JWT session tokens & bcrypt password hashing" },
      { step: "04", name: "Biometric Verification", desc: "OpenCV face detection & NumPy vector embedding matching" },
      { step: "05", name: "Data Persistence", desc: "SQLAlchemy ORM managing records, leaves & Excel audit logs" }
    ],
    highlights: [
      "Containerized with Docker for consistent multi-environment deployment",
      "Configured for Render backend hosting, Vercel frontend, and Cloudflare Tunnels",
      "Structured ORM models for employees, logs, leaves, and roles"
    ]
  },
  {
    id: "smart-health-monitoring",
    title: "Smart Health Monitoring System",
    shortTitle: "Smart Health Monitoring",
    featured: false,
    tagline: "Community Water Quality & Disease Surveillance Platform",
    description:
      "A responsive community health monitoring platform focused on water-quality monitoring, disease surveillance, alerts and interactive health analytics.",
    github: "https://github.com/suchitvanapilli/Health-Monitoring",
    technologies: [
      "HTML5",
      "Tailwind CSS",
      "JavaScript",
      "Chart.js",
      "Data Visualization"
    ],
    capabilities: [
      "Real-time Water Quality Parameter Tracking (pH, Turbidity, TDS)",
      "Disease Trend Surveillance & Outbreak Warning Alerts",
      "Citizen Incident Reporting & Community Feedback Intake",
      "Interactive Chart.js Analytical Dashboards",
      "Role-based Dashboard Views for Citizens & Health Officials"
    ],
    problem:
      "Rural and semi-urban communities often lack centralized visibility into water safety metrics and early indicators of waterborne disease outbreaks, leading to delayed medical interventions.",
    solution:
      "Developed a clean, accessible health dashboard that aggregates water testing data and symptom reports into visual trend charts with instant alert thresholds for public health action.",
    architectureSteps: [
      { step: "01", name: "Responsive UI", desc: "Mobile-first HTML5 & Tailwind interface for citizens & admins" },
      { step: "02", name: "Application Logic", desc: "Modular vanilla JavaScript controllers & event handlers" },
      { step: "03", name: "Visualization Engine", desc: "Chart.js rendering real-time metrics & historical trends" },
      { step: "04", name: "Alert & Surveillance", desc: "Threshold-based warning system for anomalies & outbreak risks" }
    ],
    highlights: [
      "Zero-bloat architecture ensuring fast load times even on low-bandwidth networks",
      "Clear visual status cards for instant regional water potability comprehension",
      "Citizen reporting forms with client-side validation"
    ]
  },
  {
    id: "railway-reservation-system",
    title: "Railway Reservation System",
    shortTitle: "Railway Reservation System",
    featured: false,
    tagline: "Full-Workflow Train Booking & PNR Management",
    description:
      "A responsive railway reservation web application with train search, booking workflows, passenger management, berth allocation, PNR tracking and ticket management.",
    github: "https://github.com/suchitvanapilli/Railway-reservation-system",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Responsive UI"
    ],
    capabilities: [
      "Interactive Train Route & Schedule Search",
      "Multi-Passenger Booking Workflow & Quota Selection",
      "Automated Berth Allocation Algorithm",
      "PNR Status Tracking & Ticket History",
      "Ticket Cancellation with Simulated Railway Wallet Refunds",
      "Client-side State Persistence via localStorage"
    ],
    problem:
      "Complex multi-step booking flows can overwhelm users if the interface lacks clear state feedback, structured forms, and intuitive berth selection feedback.",
    solution:
      "Created a modern, clean railway booking web application replicating end-to-end ticketing logic including PNR generation, wallet balance management, and dynamic search filters.",
    architectureSteps: [
      { step: "01", name: "Search & UI Layer", desc: "Structured route finder with class & date filters" },
      { step: "02", name: "Workflow Controller", desc: "Multi-step form coordinator managing passenger details" },
      { step: "03", name: "State & Storage", desc: "localStorage state management for PNRs, tickets & wallet" },
      { step: "04", name: "Berth Allocation", desc: "Rule-based seat assignment and ticket status computation" }
    ],
    highlights: [
      "Comprehensive client-side validation for passenger details and travel dates",
      "Clean printable e-ticket modal and PNR search lookup",
      "Responsive navigation adapting smoothly across mobile and desktop devices"
    ]
  },
  {
    id: "food-sea-uiux",
    title: "Food Sea – Food Delivery App UI/UX",
    shortTitle: "Food Sea UI/UX Design",
    featured: false,
    tagline: "End-to-End Food Delivery Mobile Application Interface",
    description:
      "Designed a complete food-delivery app interface in Figma, including restaurant discovery, category filtering, search, cart, checkout, OTP verification, and order tracking.",
    figma: "https://www.figma.com/proto/SqQLnc9N5G2ZYnqpDapOb1/Untitled?node-id=0-1&t=OmOHViRRC0rTCvuU-1",
    technologies: [
      "Figma",
      "UI/UX Design",
      "User Flows",
      "Prototyping",
      "Design Systems"
    ],
    capabilities: [
      "Complete Restaurant Discovery & Search User Flows",
      "Intuitive Category Filtering & Dynamic Cart System",
      "Location Management & OTP Verification Workflow",
      "Personalized Offers, Order Tracking & Support Screens",
      "Consistent Visual Design System & Interactive Prototypes"
    ],
    problem:
      "Mobile food ordering applications often struggle with cluttered layouts, unintuitive cart navigation, and broken user journeys during payment and order tracking.",
    solution:
      "Created a user-centered design system in Figma with seamless screen transitions, clear visual hierarchy, intuitive cart management, and real-time order tracking user flows.",
    architectureSteps: [
      { step: "01", name: "User Research & Flows", desc: "Mapping customer journey from restaurant discovery to checkout" },
      { step: "02", name: "Wireframing", desc: "Designing low-fidelity structural layouts for core application screens" },
      { step: "03", name: "Design System", desc: "Defining cohesive color palettes, typography rules & UI components" },
      { step: "04", name: "Interactive Prototype", desc: "Building high-fidelity interactive prototypes for usability testing" }
    ],
    highlights: [
      "Streamlined 4-step ordering process reducing cognitive load",
      "Custom UI components for food cards, ratings, and promo banners",
      "Full prototype link available on Figma"
    ]
  },
  {
    id: "helping-hands-platform",
    title: "Helping Hands – Community & Social Service Platform",
    shortTitle: "Helping Hands Platform",
    featured: false,
    tagline: "AI-Assisted Volunteer & Community Support Concept",
    description:
      "An AI-assisted social impact web platform designed to seamlessly connect volunteers, donors, and community initiatives with non-profit causes.",
    github: "https://github.com/suchitvanapilli/CWW-AI-STU-DATA",
    technologies: [
      "Python",
      "JavaScript",
      "HTML5",
      "Tailwind CSS"
    ],
    capabilities: [
      "Community Cause Discovery & Volunteer Matching",
      "Transparent Resource & Donation Request Tracking",
      "Real-Time Incident Reporting & Volunteer Dispatch",
      "Responsive Mobilization Portal & Dashboard",
      "AI-Assisted Campaign Summary Generator"
    ],
    problem:
      "Community organizations and individual volunteers often struggle to coordinate aid efficiently due to fragmented channels and lack of centralized initiative visibility.",
    solution:
      "Engineered an accessible web platform concept that streamlines cause creation, volunteer signups, and transparent resource distribution for community welfare.",
    architectureSteps: [
      { step: "01", name: "Cause Portal", desc: "Responsive portal for discovering & registering social initiatives" },
      { step: "02", name: "Volunteer Match", desc: "Category-based skill and location matching algorithm" },
      { step: "03", name: "Resource Tracking", desc: "Transparent allocation tracking for supplies and donations" },
      { step: "04", name: "AI Summarizer", desc: "AI-generated progress briefs & impact campaign reports" }
    ],
    highlights: [
      "Intuitive workflow empowering fast cause creation and volunteer onboarding",
      "Clean visual cards displaying active community drives and urgency levels",
      "Open-source repository available on GitHub"
    ]
  }
];

export const experimentProjects = [
  {
    id: "helping-hands-platform",
    title: "Helping Hands Platform",
    type: "Community & Social Impact",
    description:
      "An AI-assisted social impact web platform designed to seamlessly connect volunteers, donors, and community initiatives with non-profit causes.",
    github: "https://github.com/suchitvanapilli/CWW-AI-STU-DATA",
    tags: ["Python", "JavaScript", "HTML5", "Tailwind CSS"]
  },
  {
    id: "python-practice",
    title: "Python Problem Solving & Data Structures",
    type: "Learning & Practice",
    description:
      "Regular Python practice covering programming fundamentals, data structures, algorithms and problem solving (heaps, palindromes, Fibonacci, search/sort algorithms).",
    github: "https://github.com/suchitvanapilli/python",
    tags: ["Python", "DSA", "Algorithms", "Problem Solving"]
  }
];
