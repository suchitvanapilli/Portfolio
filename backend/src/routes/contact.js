import express from "express";
import validator from "validator";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Message from "../models/Message.js";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const messagesFilePath = path.join(__dirname, "../../messages.json");

// Local file fallback helper
function saveMessageLocal(messageObj) {
  try {
    let messages = [];
    if (fs.existsSync(messagesFilePath)) {
      const data = fs.readFileSync(messagesFilePath, "utf8");
      messages = JSON.parse(data || "[]");
    }
    messages.push(messageObj);
    fs.writeFileSync(messagesFilePath, JSON.stringify(messages, null, 2), "utf8");
  } catch (err) {
    console.error("Error saving message to local file:", err);
  }
}

// Nodemailer helper
async function sendEmailNotification(payload) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return;
  }
  if (payload.intent && /feedback|rating/i.test(payload.intent)) {
    console.log("[Contact Form - Email] Feedback submission detected - skipping email dispatch.");
    return;
  }
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: payload.email,
      subject: `[Portfolio Contact] New message from ${payload.name}`,
      headers: {
        "X-Portfolio-Notification": "true",
        "X-Priority": "1"
      },
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #2563eb;">New Portfolio Contact Message</h2>
          <p><strong>Name:</strong> ${payload.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${payload.email}">${payload.email}</a></p>
          <p><strong>Intent/Subject:</strong> ${payload.intent}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #f3f4f6; padding: 15px; border-left: 4px solid #2563eb; margin: 0;">
            ${payload.message}
          </blockquote>
        </div>
      `
    });
    console.log(`[Contact Form - Email] Sent notification email to ${process.env.EMAIL_USER}`);
  } catch (err) {
    console.error("Nodemailer email dispatch error:", err.message);
  }
}

router.post("/", async (req, res) => {
  try {
    const { name, email, intent, message } = req.body;

    // Validate presence
    if (!name || typeof name !== "string" || !name.trim()) {
      return res.status(400).json({ error: "Please provide a valid name." });
    }

    if (!email || typeof email !== "string" || !validator.isEmail(email.trim())) {
      return res.status(400).json({ error: "Please provide a valid email address." });
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return res.status(400).json({
        error: "Message must be at least 5 characters long."
      });
    }

    const userEmail = validator.normalizeEmail(email.trim()) || email.trim().toLowerCase();

    const payload = {
      name: name.trim(),
      email: userEmail,
      intent: intent && typeof intent === "string" ? intent.trim() : "General Contact",
      message: message.trim(),
      ip: req.ip || req.headers["x-forwarded-for"] || "unknown",
      receivedAt: new Date()
    };

    // Save to MongoDB if connected, otherwise fallback to local JSON storage
    if (mongoose.connection.readyState === 1) {
      const newDoc = new Message(payload);
      await newDoc.save();
      console.log(`[Contact Form - MongoDB] Saved message from ${payload.name} (${payload.email})`);
    } else {
      saveMessageLocal({ id: Date.now().toString(), ...payload, receivedAt: new Date().toISOString() });
      console.log(`[Contact Form - Local Fallback] Saved message from ${payload.name} (${payload.email})`);
    }

    // Send email notification in background
    sendEmailNotification(payload).catch((err) => console.error("Email notification background error:", err));

    return res.status(200).json({
      success: true,
      message: "Message received successfully. Suchit will get back to you soon!"
    });
  } catch (error) {
    console.error("Contact route error:", error);
    return res.status(500).json({
      error: "An error occurred while processing your message. Please try again later."
    });
  }
});

// GET /api/contact/feedbacks - Fetch public feedback submissions
router.get("/feedbacks", async (req, res) => {
  try {
    let feedbacks = [];
    if (mongoose.connection.readyState === 1) {
      feedbacks = await Message.find({
        $or: [
          { intent: { $regex: /feedback/i } },
          { intent: { $regex: /rating/i } }
        ]
      }).sort({ receivedAt: -1 }).limit(30);
    } else if (fs.existsSync(messagesFilePath)) {
      const data = fs.readFileSync(messagesFilePath, "utf8");
      const all = JSON.parse(data || "[]");
      feedbacks = all.filter(
        (m) =>
          (m.intent && m.intent.toLowerCase().includes("feedback")) ||
          (m.intent && m.intent.toLowerCase().includes("rating"))
      );
    }
    return res.status(200).json({ success: true, feedbacks });
  } catch (err) {
    console.error("GET feedbacks error:", err);
    return res.status(500).json({ error: "Failed to load feedbacks." });
  }
});

export default router;
