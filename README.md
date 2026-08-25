# Suchit Vanapilli — Personal Developer Portfolio

A production-quality, full-stack personal portfolio application for **Suchit Vanapilli** (AI & ML Student | Full-Stack Developer | Prompt Engineer).

---

## 🚀 Positioning & Core Story
- **Role**: AI & ML Student • Full-Stack Developer • Prompt Engineer
- **Education**: B.Tech in Artificial Intelligence & Machine Learning at Sri Sivani College of Engineering, Srikakulam, Andhra Pradesh, India.
- **Focus**: Building responsive web applications, high-performance Node/FastAPI backends, practical computer vision pipelines (OpenCV), and intuitive user interfaces.
- **Design Philosophy**: High-contrast typography hierarchy, generous whitespace, interactive micro-animations, fast load performance, and 100% responsive cross-device layouts.

---

## 💻 Technology Stack

### Frontend
- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion 13 + Canvas-Confetti
- **Icons**: Lucide React + Vector Outline SVGs

### Backend API
- **Runtime**: Node.js
- **Server Framework**: Express 5
- **Middleware**: CORS, Express Rate Limit, Body Parser, Dotenv
- **Email Service**: Nodemailer (SMTP / Gmail App Password)

### Database
- **Database Engine**: MongoDB (v6.0+)
- **Database Name**: `suchit_portfolio`
- **ODM**: Mongoose 9
- **Fallback**: Local JSON file storage (`messages.json`) when database connection is unavailable.

---

## 📁 Project Structure

```text
portfolio/
├── database/                   # Database documentation & schemas
│   ├── README.md               # MongoDB connection & setup guide
│   └── schemas/
│       └── Message.json        # JSON Schema for contact & feedback records
├── frontend/                   # Frontend configuration guides
│   └── .env.example            # Environment template for frontend
├── backend/                    # Backend configuration guides
│   └── .env.example            # Environment template for backend
├── server/                     # Node.js Express backend source
│   ├── messages.json           # Local storage fallback file
│   └── src/
│       ├── index.js            # Express server entry point & static asset server
│       ├── models/
│       │   └── Message.js      # Mongoose Message schema definition
│       └── routes/
│           └── contact.js      # Contact submission & feedback API routes
├── src/                        # React frontend source
│   ├── App.css                 # Custom utility styles & font imports
│   ├── App.jsx                 # Root application layout & state
│   ├── index.css               # Tailwind CSS entry & keyframe animations
│   ├── main.jsx                # React DOM root render
│   ├── assets/                 # Profile images & project logos
│   ├── components/             # Reusable UI sections & components
│   │   ├── About.jsx           # Bio, story, focus areas & profile snapshot
│   │   ├── AnimatedSection.jsx # Framer Motion scroll animation wrapper
│   │   ├── Certifications.jsx  # Verified certifications grid
│   │   ├── Contact.jsx         # Direct contact form & feedback drawer
│   │   ├── Education.jsx       # Academic timeline & credentials
│   │   ├── FeaturedProject.jsx # Highlighted project deep-dive showcase
│   │   ├── FlowingLogos.jsx    # Marquee tech logo ticker
│   │   ├── Focus.jsx           # Specialization areas & engineering focus
│   │   ├── Footer.jsx          # Bottom bar, quick links & visitor feedback modal
│   │   ├── Hero.jsx            # Hero banner, status badge & social links
│   │   ├── Icons.jsx           # SVG vector icons (GitHub, LinkedIn, Credly, WhatsApp)
│   │   ├── LogoMark.jsx        # Personal brand logo mark
│   │   ├── Navbar.jsx          # Top navigation bar with smooth scroll
│   │   ├── ProfileSnapshot.jsx # Quick stats & profile card
│   │   ├── ProjectCard.jsx     # Individual project card with demo & GitHub links
│   │   ├── ProjectModal.jsx    # Project deep-dive modal
│   │   ├── Projects.jsx        # Filterable project portfolio grid
│   │   ├── Skills.jsx          # Skill categories & proficiency badges
│   │   ├── TechCube.jsx        # 3D interactive spinning tech cube
│   │   ├── TechGlobe.jsx       # Interactive technology globe visualization
│   │   ├── Toast.jsx           # Notification toast component
│   │   └── WelcomeSplash.jsx   # Initial load splash screen animation
│   ├── data/
│   │   ├── certifications.js   # Certifications data
│   │   ├── profile.js          # Profile metadata & social links
│   │   ├── projects.js         # Verified GitHub project repositories
│   │   └── skills.js           # Technical skills inventory
│   └── hooks/
│       └── useTheme.js         # Dark / Light theme custom hook
├── public/                     # Static public assets & resume PDFs
│   ├── resume.pdf
│   └── Suchit_Vanapilli_Resume.pdf
├── .env.example                # Environment variables reference template
├── .gitignore                  # Git ignore rules for secrets, builds & logs
├── .oxlintrc.json              # Oxlint static analysis configuration
├── index.html                  # HTML document template with meta tags
├── package.json                # Project dependencies & npm scripts
├── README.md                   # Complete project documentation
└── vite.config.js              # Vite build & API proxy configuration
```

---

## 🛠️ Environment Setup

Create a `.env` file in the project root based on `.env.example`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/suchit_portfolio
ALLOWED_ORIGIN=*
EMAIL_USER=suchitvanapilli25@gmail.com
EMAIL_PASS=usuweavhiwithhwe
```

---

## 🏃 Running the Application

### 1. Install Dependencies
```bash
npm install
```

### 2. Development Mode (Frontend + Backend)
Run both Express API server (Port 5000) and Vite frontend dev server (Port 3000) concurrently:
```bash
npm run dev:all
```

Or run services individually:
```bash
# Start frontend dev server on http://localhost:3000
npm run dev

# Start backend Express server on http://localhost:5000
npm run server
```

### 3. Production Build & Execution
```bash
# Build frontend static assets into dist/
npm run build

# Start Express production server (serves API + dist/ frontend)
npm start
```

---

## 🧪 Code Quality & Audit Commands

```bash
# Run Oxlint static analysis code audit (0 errors, 0 warnings)
npx oxlint

# Run production build test
npm run build
```

---

## 🚢 Deployment Guide

### Option 1: Full-Stack Node Server Deployment (Render / Railway / VPS)
1. Set Environment Variables on host platform (`PORT`, `MONGODB_URI`, `EMAIL_USER`, `EMAIL_PASS`).
2. Build command: `npm install && npm run build`
3. Start command: `npm start`

### Option 2: Standalone Static Frontend (Vercel / Netlify)
1. Build command: `npm run build`
2. Output directory: `dist`
3. Deploy backend separately on Render or Railway.

---

## 📬 Contact Information
- **Name**: Suchit Vanapilli
- **Email**: suchitvanapilli25@gmail.com
- **Phone**: +91-9494710751
- **Location**: Srikakulam, Andhra Pradesh, India
- **GitHub**: [github.com/suchitvanapilli](https://github.com/suchitvanapilli)
- **LinkedIn**: [linkedin.com/in/suchit-v-473164320](https://www.linkedin.com/in/suchit-v-473164320/)
- **Credly**: [credly.com/users/suchit-vanapilli](https://www.credly.com/users/suchit-vanapilli)
