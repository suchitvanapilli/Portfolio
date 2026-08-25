import React, { useState, useEffect } from "react";
import { ArrowUp, Mail, MessageSquare, Star, X } from "lucide-react";
import { Github, Linkedin, Credly, WhatsApp } from "./Icons";
import LogoMark from "./LogoMark";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchAll = async () => {
      try {
        let remote = [];
        try {
          const res = await fetch("/api/contact/feedbacks");
          const json = await res.json();
          if (json.success && json.feedbacks) {
            remote = json.feedbacks;
          }
        } catch {
          // fallback
        }
        const local = JSON.parse(localStorage.getItem("portfolio_feedbacks") || "[]");
        const combined = [...remote, ...local];
        const unique = Array.from(new Map(combined.map((item) => [item._id || item.receivedAt || item.message, item])).values());
        if (isMounted) setFeedbacks(unique);
      } catch {
        // ignore
      }
    };

    fetchAll();
    const handleFeedbackEvent = () => fetchAll();
    window.addEventListener("portfolio_feedback_submitted", handleFeedbackEvent);
    return () => {
      isMounted = false;
      window.removeEventListener("portfolio_feedback_submitted", handleFeedbackEvent);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Focus", href: "#focus" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-950/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-18">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/90 items-start">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3.5">
            <a
              href="#home"
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-2xl font-extrabold tracking-tight text-white hover:text-blue-400 transition-colors inline-flex cursor-pointer"
            >
              <LogoMark className="w-8 h-8 group-hover:scale-110 transition-transform" />
              <span>
                SUCHIT VANAPILLI<span className="text-blue-500">.</span>
              </span>
            </a>

            <p className="text-sm text-slate-400 font-medium max-w-sm leading-relaxed">
              AI & ML Student • Full-Stack Developer • Prompt Engineer building practical systems, computer vision pipelines and responsive web apps.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <span>📍 Srikakulam, Andhra Pradesh, India</span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4 font-mono">
              // Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-slate-400 hover:text-white transition-colors py-1 hover:translate-x-0.5 transform duration-150 inline-block"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Social Icons */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-5">
            <div>
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4 md:text-right font-mono">
                // Connect
              </h4>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://github.com/suchitvanapilli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 hover:bg-slate-800 text-slate-300 hover:text-white transition-all shadow-2xs"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/suchit-v-473164320/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 hover:bg-blue-600 text-slate-300 hover:text-white transition-all shadow-2xs"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href="https://www.credly.com/users/suchit-vanapilli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500 hover:bg-amber-600 text-slate-300 hover:text-white transition-all shadow-2xs"
                  aria-label="Credly Profile"
                >
                  <Credly className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/919494710751?text=Hi%20Suchit,%20I%20came%20across%20your%20portfolio!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:bg-emerald-600 text-slate-300 hover:text-white transition-all shadow-2xs"
                  aria-label="WhatsApp Chat"
                >
                  <WhatsApp className="w-4 h-4" />
                </a>

                <a
                  href="mailto:suchitvanapilli25@gmail.com"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 hover:bg-blue-600 text-slate-300 hover:text-white transition-all shadow-2xs"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all cursor-pointer shadow-2xs"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Suchit Vanapilli. All rights reserved.</p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-purple-950/60 hover:bg-purple-900/90 text-purple-300 border border-purple-800/80 text-xs font-bold transition-all cursor-pointer shadow-2xs"
            >
              <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
              <span>Visitor Feedbacks</span>
              <span className="px-1.5 py-0.5 rounded-full bg-purple-900 text-purple-200 text-[10px] font-mono">
                {feedbacks.length}
              </span>
            </button>

            <span className="text-slate-700 hidden sm:inline">•</span>

            <p className="flex items-center gap-1.5 text-slate-400">
              <span>Engineered with React 19, Tailwind CSS & Express</span>
            </p>
          </div>
        </div>

      </div>

      {/* Visitor Feedbacks Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-purple-950 text-purple-400 border border-purple-800">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Visitor Feedbacks & Ratings</h3>
                  <p className="text-xs text-slate-400">Saved in database & synced</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4 flex-1">
              {feedbacks.length === 0 ? (
                <div className="text-center py-12 space-y-3">
                  <MessageSquare className="w-10 h-10 text-slate-600 mx-auto" />
                  <p className="text-sm font-medium text-slate-400">No visitor feedback submitted yet.</p>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      setShowModal(false);
                      handleLinkClick(e, "#contact");
                    }}
                    className="inline-block px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-colors"
                  >
                    Be the first to give feedback &rarr;
                  </a>
                </div>
              ) : (
                feedbacks.map((fb, idx) => {
                  const match = fb.intent && fb.intent.match(/(\d)\/5/);
                  const stars = match ? parseInt(match[1], 10) : 5;
                  return (
                    <div
                      key={fb._id || idx}
                      className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white">{fb.name || "Anonymous Visitor"}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                            {fb.intent || "Feedback"}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star
                              key={s}
                              className={`w-3.5 h-3.5 ${
                                s <= stars ? "text-amber-400 fill-amber-400" : "text-slate-700"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-line">
                        {fb.message ? fb.message.replace(/^Rating:.*?\n/, "") : ""}
                      </p>

                      <p className="text-[10px] text-slate-500 font-mono">
                        {fb.receivedAt ? new Date(fb.receivedAt).toLocaleString() : "Recently submitted"}
                      </p>
                    </div>
                  );
                })
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/50 flex justify-end">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
