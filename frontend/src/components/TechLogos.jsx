import React from "react";

export function TechIcon({ name, className = "w-5 h-5" }) {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  switch (normalized) {
    case "python":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.87 2c-4.4 0-4.13 1.9-4.13 1.9l.01 1.97h4.2v.6H6.03S3.7 6.22 3.7 10.6c0 4.38 2 4.24 2 4.24h1.19v-1.68s-.07-2 1.97-2h4.14v-.6H9.13v-.6h5.93c1.97 0 3.42-1.37 3.42-3.42 0-2.06-2.06-2.92-5.32-2.92zm-2.22 1.18a.69.69 0 1 1 0 1.38.69.69 0 0 1 0-1.38z" fill="#3776AB" />
          <path d="M12.13 22c4.4 0 4.13-1.9 4.13-1.9l-.01-1.97h-4.2v-.6h5.92s2.33.25 2.33-4.13c0-4.38-2-4.24-2-4.24h-1.19v1.68s.07 2-1.97 2h-4.14v.6h5.87v.6H11c-1.97 0-3.42 1.37-3.42 3.42 0 2.06 2.06 2.92 5.32 2.92zm2.22-1.18a.69.69 0 1 1 0-1.38.69.69 0 0 1 0 1.38z" fill="#FFE052" />
        </svg>
      );
    case "reactjs":
    case "react":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="12" rx="10" ry="4.2" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2.2" fill="#61DAFB" stroke="none" />
        </svg>
      );
    case "vite":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.5 3.5L12 21 2.5 3.5h19z" fill="url(#vite-grad1)" />
          <path d="M16 3.5L12 12 8 3.5h8z" fill="url(#vite-grad2)" />
          <defs>
            <linearGradient id="vite-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#41D1FF" />
              <stop offset="100%" stopColor="#BD34FE" />
            </linearGradient>
            <linearGradient id="vite-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFEA83" />
              <stop offset="100%" stopColor="#FFDD35" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "java":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 17.5s-1.2.7.8.9c2.5.3 4.6.3 7.5-.3 0 0 1 .1 1.8-.6 0 0-1 .4-2.6.6-3 .3-6 .2-7.5-.6z" fill="#ED8B00"/>
          <path d="M7.5 14.5s-1.3.9.7 1.2c2.4.3 5.5.4 8.6-.3 0 0 .8.2 1.4-.5 0 0-.9.3-2.3.5-3 .4-6.8.3-8.4-.9z" fill="#ED8B00"/>
          <path d="M12 9s1.6 1.7-1 4c-2.1 1.9-.9 2.9 0 4.1-1.6-1.5-1.4-2.7.1-4.1 2.2-2 1-4 1-4z" fill="#007396"/>
          <path d="M9.5 5s-2.4 2.5-.9 5c1.2 2 3.2 3 2.2 5.4 0 0 2.3-2 1.4-4.3-1-2.8-2.7-3.7-2.7-6.1z" fill="#007396"/>
        </svg>
      );
    case "c":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#00599C" />
          <text x="12" y="17" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontFamily="sans-serif" fontWeight="900">C</text>
        </svg>
      );
    case "nodejs":
    case "node":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L21.5 7.5v11L12 24 2.5 18.5v-11L12 2z" fill="#339933"/>
          <path d="M12 5L18.5 8.75v7.5L12 20 5.5 16.25v-7.5L12 5z" fill="#68A063"/>
        </svg>
      );
    case "express":
    case "expressjs":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#000000"/>
          <text x="12" y="16" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif" fontWeight="bold">ex</text>
        </svg>
      );
    case "fastapi":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#05998B" />
          <path d="M13 3.5L6.5 13.5h4.5L10 20.5l7-10h-4.5L13 3.5z" fill="#FFFFFF" />
        </svg>
      );
    case "opencv":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="6.5" r="4" fill="#EA4335" />
          <circle cx="12" cy="6.5" r="1.6" fill="#FFFFFF" />
          <circle cx="7" cy="15.5" r="4" fill="#34A853" />
          <circle cx="7" cy="15.5" r="1.6" fill="#FFFFFF" />
          <circle cx="17" cy="15.5" r="4" fill="#4285F4" />
          <circle cx="17" cy="15.5" r="1.6" fill="#FFFFFF" />
        </svg>
      );
    case "numpy":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 4l6 3.5L18 4l-6-3.5L6 4z" fill="#4DABCF"/>
          <path d="M6 4v7l6 3.5V7.5L6 4z" fill="#013243"/>
          <path d="M12 7.5v7l6-3.5V4l-6 3.5z" fill="#4D77CF"/>
          <path d="M6 11v7l6 3.5v-7L6 11z" fill="#013243"/>
          <path d="M12 14.5v7l6-3.5v-7l-6 3.5z" fill="#4D77CF"/>
        </svg>
      );
    case "mongodb":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2c-.6 0-1.1.8-1.3 1.2C9.3 5.4 6 11.2 6 15.8c0 3.8 2.6 6.8 5.8 6.8s5.8-3 5.8-6.8c0-4.6-3.3-10.4-4.5-12.6C12.9 2.6 12.4 2 12 2z" fill="#47A248"/>
          <path d="M12 2v20.6c3.2 0 5.8-3 5.8-6.8 0-4.6-3.3-10.4-4.5-12.6C13.1 2.8 12.6 2 12 2z" fill="#499D4A"/>
        </svg>
      );
    case "postgresql":
    case "postgres":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#336791" />
          <path d="M12 6a5.5 5.5 0 0 0-5.5 5.5c0 2.2 1.3 4.1 3.2 5l.3 1.5h4l.3-1.5c1.9-.9 3.2-2.8 3.2-5A5.5 5.5 0 0 0 12 6z" fill="#FFFFFF" />
        </svg>
      );
    case "sqlite":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#003B57"/>
          <ellipse cx="12" cy="12" rx="7" ry="3" fill="#003B57" stroke="#FFFFFF" strokeWidth="1.5"/>
          <path d="M5 12v4c0 1.7 3.1 3 7 3s7-1.3 7-3v-4" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
      );
    case "tailwindcss":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#06B6D4" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 8c1.3-3.6 4-5.6 8-4 5.3 2.1 6.7 6.4 4.7 11.5-1.3 3.6-4 5.6-8 4-5.3-2.1-6.7-6.4-4.7-11.5zm-5 7c1.3-3.6 4-5.6 8-4 5.3 2.1 6.7 6.4 4.7 11.5-1.3 3.6-4 5.6-8 4-5.3-2.1-6.7-6.4-4.7-11.5z"/>
        </svg>
      );
    case "bootstrap":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#7952B3"/>
          <text x="12" y="17" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontFamily="sans-serif" fontWeight="900">B</text>
        </svg>
      );
    case "javascript":
    case "javascriptes6":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
          <text x="17" y="19" textAnchor="end" fill="#000000" fontSize="11" fontFamily="sans-serif" fontWeight="bold">JS</text>
        </svg>
      );
    case "docker":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#2496ED" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 10.5h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm-3 0h2v2H4zm6-3h2v2h-2zm-3 0h2v2H7zm6 0h2v2h-2zm-3-3h2v2h-2zM1.2 14c-.1.7 0 1.5.3 2.2 1.3 3.1 4.5 4.8 7.9 4.8 6.5 0 12.3-3.6 14.1-8.5.5-1.3.1-2.5-.9-3-.7-.4-1.6-.3-2.3.2-1.7 1.2-3.8 1.8-5.9 1.8H1.2z"/>
        </svg>
      );
    case "git":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#F05032" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.7 10.7L13.3 2.3c-.6-.6-1.5-.6-2.1 0L8.5 5.1l2.7 2.7c.6-.2 1.3 0 1.8.5.5.5.7 1.2.4 1.8l2.6 2.6c.6-.3 1.3-.1 1.8.4.7.7.7 1.8 0 2.5s-1.8.7-2.5 0c-.5-.5-.7-1.2-.4-1.8L12.3 11v6.1c.2.1.4.2.6.4.7.7.7 1.8 0 2.5s-1.8.7-2.5 0c-.7-.7-.7-1.8 0-2.5.2-.2.4-.3.6-.4V10.8c-.2-.1-.4-.2-.6-.4-.5-.5-.7-1.2-.4-1.8L7.3 5.9 2.3 10.9c-.6.6-.6 1.5 0 2.1l8.4 8.4c.6.6 1.5.6 2.1 0l8.9-8.9c.6-.6.6-1.5 0-2.1z"/>
        </svg>
      );
    case "github":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      );
    case "canva":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="url(#canva-gradient)" />
          <path d="M11.8 7.5c-2.3 0-4 1.7-4 4.1 0 2.6 1.9 4.9 4.7 4.9 1.6 0 2.8-.7 3.5-1.7l-1.1-.9c-.5.7-1.3 1.2-2.3 1.2-1.7 0-3-1.4-3-3.3 0-1.7 1.1-2.9 2.7-2.9 1.1 0 1.9.5 2.4 1.3l1.1-.9c-.7-1.1-2.1-1.8-4-1.8z" fill="#FFFFFF" />
          <defs>
            <linearGradient id="canva-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00C4CC" />
              <stop offset="100%" stopColor="#7D2AE8" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "premierepro":
    case "premiere":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#00005B" stroke="#9999FF" strokeWidth="1.2" />
          <text x="6" y="16" fill="#9999FF" fontSize="11" fontFamily="sans-serif" fontWeight="extrabold">Pr</text>
        </svg>
      );
    case "chatgpt":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#10A37F" />
          <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill="#FFFFFF"/>
          <circle cx="12" cy="12" r="2" fill="#FFFFFF" />
        </svg>
      );
    case "claude":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#D97706" />
          <path d="M12 5l2 5h5l-4 3.5 1.5 5L12 15l-4.5 3.5 1.5-5L5 10h5z" fill="#FFFFFF" />
        </svg>
      );
    case "gemini":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="url(#gemini-bg)" />
          <path d="M12 4c.5 4 4 7.5 8 8-4 .5-7.5 4-8 8-.5-4-4-7.5-8-8 4-.5 7.5-4 8-8z" fill="#FFFFFF" />
          <defs>
            <linearGradient id="gemini-bg" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="50%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#DB2777" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "vscode":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5 3L22 5.5v13L17.5 21 10 14.5 4.5 19 2 17.5V6.5L4.5 5 10 9.5 17.5 3z" fill="#007ACC" />
        </svg>
      );
    case "vercel":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1L24 22H0L12 1z" />
        </svg>
      );
    case "perplexity":
    case "perplexityai":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#1FB8CD" />
          <path d="M12 4v16M4 12h16M6.3 6.3l11.4 11.4M6.3 17.7L17.7 6.3" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "cursor":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#000000" />
          <path d="M7 6l10 6-10 6V6z" fill="#00D8FF" />
          <path d="M12 9l5 3-5 3V9z" fill="#FFFFFF" />
        </svg>
      );
    case "affinity":
    case "affinitydesigner":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#1C1C1E" />
          <path d="M12 3.5L4 18.5h4.2l1.6-3.2h4.4l1.6 3.2H20L12 3.5zm0 5.2l1.4 2.8h-2.8L12 8.7z" fill="url(#affinity-gradient)" />
          <defs>
            <linearGradient id="affinity-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D2FF" />
              <stop offset="50%" stopColor="#0085FF" />
              <stop offset="100%" stopColor="#8A2BE2" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "githubcopilot":
    case "copilot":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#0284C7" />
          <path d="M8 10c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4z" fill="#FFFFFF" />
          <circle cx="10" cy="11.5" r="1" fill="#0284C7" />
          <circle cx="14" cy="11.5" r="1" fill="#0284C7" />
        </svg>
      );
    case "deepseek":
    case "deepseekai":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#4D6BFE" />
          <path d="M7 16V8c0-1.1.9-2 2-2h4c2.2 0 4 1.8 4 4s-1.8 4-4 4H9v2h8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "replit":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#F26207" />
          <path d="M7 6h5v5H7V6zm5 5h5v5h-5v-5zm-5 5h5v5H7v-5z" fill="#FFFFFF" />
        </svg>
      );
    case "bolt":
    case "boltnew":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#090D16" />
          <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" fill="#00E5FF" />
        </svg>
      );
    case "elevenlabs":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#000000" />
          <path d="M8 6v12M16 6v12" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case "runway":
    case "runwayml":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#E10098" />
          <path d="M7 6h6a4 4 0 014 4 4 4 0 01-4 4H7V6zm6 8l4 4" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case "huggingface":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#FFD21E" />
          <circle cx="8.5" cy="9.5" r="1.2" fill="#000000" />
          <circle cx="15.5" cy="9.5" r="1.2" fill="#000000" />
          <path d="M8 14.5c1.2 1.5 2.8 2 4 2s2.8-.5 4-2" stroke="#000000" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "antigravity":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="url(#ag-bg)" />
          <path d="M12 5L17.5 17.5L12 14.5L6.5 17.5L12 5Z" fill="#FFFFFF" />
          <defs>
            <linearGradient id="ag-bg" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "html5":
    case "html":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="#E34F26" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.4 11.2L28.8 116.8 64 126.5l35.2-9.7 9.4-105.6H19.4zm70.4 34.6H46.6l1.2 13.9h40.8l-3.3 36.6L64 102.2l-21.3-5.9-1.4-16h13.8l.7 7.8 8.2 2.2 8.2-2.2 1.1-12.7H34.4l-3.8-42.5h60.4l-1.2 12.7z"/>
        </svg>
      );
    case "css3":
    case "css":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="#1572B6" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.4 11.2L28.8 116.8 64 126.5l35.2-9.7 9.4-105.6H19.4zm60.7 34.6H46.6l1.2 13.9h31.1l-3.3 36.6L64 102.2l-21.3-5.9-1.4-16h13.8l.7 7.8 8.2 2.2 8.2-2.2 1.1-12.7H34.4l-3.8-42.5h50.7l-1.2 12.7z"/>
        </svg>
      );
    case "figma":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83"/>
          <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF"/>
          <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill="#F24E1E"/>
          <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262"/>
          <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1ABCFE"/>
        </svg>
      );
    case "postman":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#FF6C37"/>
          <path d="M17 9L7 12.5l4.5 1.1 1.1 4.5L17 9z" fill="#FFFFFF"/>
        </svg>
      );
    case "sql":
    case "sqlalchemy":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
        </svg>
      );
    case "restapis":
    case "restapi":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      );
    case "machinelearning":
    case "llmapplications":
    case "promptengineering":
    case "aitools":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
          <path d="M5 3v4"/>
          <path d="M19 17v4"/>
          <path d="M3 5h4"/>
          <path d="M17 19h4"/>
        </svg>
      );
    default:
      return (
        <div className={`rounded-md bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-[10px] ${className}`}>
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
}
