import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  Briefcase,
  Layers,
  Coffee,
  ExternalLink,
  MessageSquare,
  Star
} from "lucide-react";
import { Linkedin, WhatsApp } from "./Icons";
import confetti from "canvas-confetti";

export default function Contact({ onShowToast }) {
  const [selectedIntent, setSelectedIntent] = useState("connect");
  const [isFeedbackMode, setIsFeedbackMode] = useState(false);
  const [rating, setRating] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    intent: "Casual Tech Talk",
    message: "Hey Suchit! Saw your work and wanted to connect for a casual chat about tech, cool project ideas, and what you're currently building."
  });

  const [loading, setLoading] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const emailAddress = "suchitvanapilli25@gmail.com";
  const phoneNumber = "+91-9494710751";
  const linkedinUrl = "https://www.linkedin.com/in/suchit-v-473164320/";

  // Intent templates: Casual, friendly, and authentic (3 Clean Pillars)
  const intentOptions = [
    {
      id: "connect",
      label: "Casual Tech Talk",
      icon: Coffee,
      subject: "Casual Tech Talk",
      template: "Hey Suchit! Saw your work and wanted to connect for a casual chat about tech, cool project ideas, and what you're currently building."
    },
    {
      id: "project",
      label: "Build a Project",
      icon: Layers,
      subject: "Full-Stack Project Collaboration",
      template: "Hey Suchit, love your projects! Would be excited to collaborate on building a cool full-stack web application together."
    },
    {
      id: "internship",
      label: "Internship / Role",
      icon: Briefcase,
      subject: "Internship & Career Opportunity",
      template: "Hey Suchit, I came across your portfolio and would love to chat about potential internship opportunities and engineering roles with our team."
    }
  ];

  const handleOpenFeedback = () => {
    setIsFeedbackMode(true);
    setRating(0);
    setFormData((prev) => ({
      ...prev,
      intent: "Portfolio Rating & Feedback",
      message: "Hey Suchit, I checked out your portfolio and wanted to share some feedback: "
    }));
  };

  const handleSelectIntent = (intent) => {
    setIsFeedbackMode(false);
    setSelectedIntent(intent.id);
    setFormData((prev) => ({
      ...prev,
      intent: intent.subject,
      message: intent.template
    }));
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    if (onShowToast) onShowToast(`Copied ${fieldName} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Dispatch via WhatsApp Direct Chat
  const handleSendViaWhatsApp = () => {
    window.open(
      "https://wa.me/919494710751?text=Hi%20Suchit%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!",
      "_blank",
      "noopener,noreferrer"
    );
  };


  // Main Form Submit handler (Dispatches email directly to suchitvanapilli25@gmail.com + saves to API)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim()) {
      if (onShowToast) onShowToast("Please enter your name.");
      return;
    }

    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      if (onShowToast) onShowToast("Please enter a valid email address.");
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      if (onShowToast) onShowToast("Please enter a message with at least 5 characters.");
      return;
    }

    setLoading(true);

    const userEmail = formData.email.trim();
    const payloadToSend = {
      name: formData.name,
      email: userEmail,
      intent: isFeedbackMode ? `Portfolio Rating (${rating}/5 Stars)` : formData.intent,
      message: isFeedbackMode ? `Rating: ${rating}/5 Stars\nFeedback: ${formData.message}` : formData.message
    };

    // Save to backend database API (tries relative proxy first, fallback to http://localhost:5000/api/contact)
    let apiSuccess = false;
    try {
      let response;
      try {
        response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payloadToSend)
        });
      } catch {
        // Fallback directly to backend port 5000 if proxy isn't active on local dev
        if (typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")) {
          response = await fetch("http://localhost:5000/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payloadToSend)
          });
        }
      }

      if (response && response.ok) {
        apiSuccess = true;
      }
    } catch (err) {
      console.warn("Backend server offline. Run 'npm run server' or 'npm run dev:all' to save directly to MongoDB.", err);
    }

    // Direct mailto dispatch to suchitvanapilli25@gmail.com
    const subject = encodeURIComponent(
      isFeedbackMode
        ? `[Portfolio Feedback] ${rating}/5 Stars rating from ${formData.name}`
        : `[Portfolio Direct Message] ${formData.intent} from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hello Suchit,\n\nName: ${formData.name}\nSender Email: ${userEmail}\nTopic: ${
        isFeedbackMode ? `Rating (${rating}/5 Stars)` : formData.intent
      }\n\nMessage:\n${formData.message}`
    );

    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.7 }
      });
    } catch {
      // ignore
    }

    if (isFeedbackMode) {
      try {
        const existing = JSON.parse(localStorage.getItem("portfolio_feedbacks") || "[]");
        existing.unshift({
          name: formData.name || "Anonymous Visitor",
          email: userEmail,
          intent: `Portfolio Rating (${rating}/5 Stars)`,
          message: formData.message,
          receivedAt: new Date().toISOString()
        });
        localStorage.setItem("portfolio_feedbacks", JSON.stringify(existing));
        window.dispatchEvent(new Event("portfolio_feedback_submitted"));
      } catch {
        // ignore
      }

      if (onShowToast) onShowToast(apiSuccess ? "Feedback saved to database & footer!" : "Feedback saved to footer!");
      setFormData({ name: "", email: "", intent: "Casual Tech Talk", message: "" });
      setRating(0);
    } else {
      // Save local backup copy of direct message
      try {
        const localMsgs = JSON.parse(localStorage.getItem("portfolio_messages") || "[]");
        localMsgs.unshift({
          name: formData.name,
          email: userEmail,
          intent: formData.intent,
          message: formData.message,
          receivedAt: new Date().toISOString()
        });
        localStorage.setItem("portfolio_messages", JSON.stringify(localMsgs));
      } catch {
        // ignore
      }

      if (apiSuccess) {
        if (onShowToast) onShowToast("Message saved to MongoDB database & email dispatched!");
        setFormData({ name: "", email: "", intent: "Casual Tech Talk", message: "" });
      } else {
        if (onShowToast) onShowToast("Dispatched via mail client & saved locally! (Run 'npm run dev:all' to sync live to MongoDB)");
        window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
      }
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50/60 dark:bg-black border-t border-slate-100 dark:border-slate-800/80 transition-colors duration-300 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-100/40 dark:bg-blue-950/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Connect & Build
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info Cards & Quick Multi-Channel Buttons */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with 1-Click Copy */}
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-xs transition-all flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Direct Email Inbox</p>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(emailAddress, "Email")}
                className="p-2.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer shrink-0"
                title="Copy Email"
                aria-label="Copy Email"
              >
                {copiedField === "Email" ? (
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* LinkedIn Card with Direct Message Link */}
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-xs transition-all flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">LinkedIn DM Inbox</p>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    suchit-v-473164320
                  </a>
                </div>
              </div>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-xl transition-colors shrink-0"
                title="Open LinkedIn"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Phone / WhatsApp Card */}
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-xs transition-all flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Phone / WhatsApp</p>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(phoneNumber, "Phone")}
                className="p-2.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer shrink-0"
                title="Copy Phone"
                aria-label="Copy Phone"
              >
                {copiedField === "Phone" ? (
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Base Location</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Srikakulam, Andhra Pradesh, India
                </p>
              </div>
            </div>

            {/* Instant Action Bar */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => window.open(linkedinUrl, "_blank", "noopener,noreferrer")}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
                <span>Message on LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </button>

              <button
                type="button"
                onClick={handleSendViaWhatsApp}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-black dark:hover:bg-slate-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                <WhatsApp className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>

            {/* Portfolio Feedback Quick Trigger */}
            <button
              type="button"
              onClick={handleOpenFeedback}
              className="w-full inline-flex items-center justify-between p-4 rounded-2xl bg-purple-50/60 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 border border-purple-200/80 dark:border-purple-800 text-xs font-bold hover:bg-purple-100/80 dark:hover:bg-purple-900/40 transition-colors cursor-pointer text-left"
            >
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Share Portfolio Feedback or Suggestions</span>
              </div>
              <span className="text-[11px] font-bold text-purple-600 dark:text-purple-400 underline">Give Feedback &rarr;</span>
            </button>

          </div>

          {/* Right Column: Direct Message / Feedback Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-5"
            >
              {isFeedbackMode ? (
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <span>Share Portfolio Feedback</span>
                  </h3>
                  <button
                    type="button"
                    onClick={() => setIsFeedbackMode(false)}
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                  >
                    &larr; Back to Direct Message
                  </button>
                </div>
              ) : (
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Send a Direct Message
                  </h3>
                </div>
              )}

              {/* Intent Topic Quick Selector (3 Clean Pillars - Hidden in Feedback Mode) */}
              {!isFeedbackMode && (
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Select Topic:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {intentOptions.map((opt) => {
                      const Icon = opt.icon;
                      const isSelected = selectedIntent === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => handleSelectIntent(opt)}
                          className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer text-center ${
                            isSelected
                              ? "bg-blue-50 dark:bg-blue-950/60 border-blue-400 dark:border-blue-600 text-blue-700 dark:text-blue-300 shadow-2xs font-bold ring-1 ring-blue-400/30"
                              : "bg-slate-50 dark:bg-black border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 hover:text-slate-900 dark:hover:text-white"
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${isSelected ? "text-blue-600 dark:text-blue-400" : "text-slate-400"}`} />
                          <span className="text-[11px] font-bold leading-tight">{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-400 bg-slate-50/50 dark:bg-black focus:bg-white dark:focus:bg-slate-950"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-400 bg-slate-50/50 dark:bg-black focus:bg-white dark:focus:bg-slate-950"
                  />
                </div>
              </div>

              {isFeedbackMode && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Rating
                  </label>
                  <div className="flex items-center justify-between px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-black">
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="p-1 hover:scale-115 transition-transform cursor-pointer focus:outline-none"
                          title={`${star} Star${star > 1 ? "s" : ""}`}
                        >
                          <Star
                            className={`w-5 h-5 transition-colors ${
                              star <= rating
                                ? "text-amber-400 fill-amber-400 drop-shadow-xs"
                                : "text-slate-300 dark:text-slate-700"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-amber-500">
                      {rating} / 5 Stars
                    </span>
                  </div>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <span className="text-[11px] text-slate-400">
                    {formData.message.length} characters
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={
                    isFeedbackMode
                      ? "Write your feedback or suggestions here..."
                      : "Type your message here... let's talk tech, projects, or grab a virtual coffee!"
                  }
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-400 bg-slate-50/50 dark:bg-black focus:bg-white dark:focus:bg-slate-950 resize-none"
                />
              </div>

              {/* Primary Multi-Action Submit Button */}
              <div className="space-y-2.5">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-60 transition-all shadow-xs cursor-pointer"
                >
                  {loading ? (
                    <span>Dispatching...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{isFeedbackMode ? "Submit" : "Send to Mail"}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
