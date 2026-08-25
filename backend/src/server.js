import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import dotenv from "dotenv";
import contactRouter from "./routes/contact.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio";

// MongoDB Connection Handler
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("✅ Successfully connected to MongoDB database.");
  })
  .catch((err) => {
    console.warn("⚠️ MongoDB connection notice: Local file fallback active until MongoDB URI is provided.", err.message);
  });

// Security & Parsing Middlewares
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN || "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
  })
);
app.use(express.json({ limit: "50kb" }));

// Rate limiting for contact API to prevent spam
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // max 10 requests per IP per 15 minutes
  message: {
    error: "Too many requests from this IP. Please try again after 15 minutes."
  },
  standardHeaders: true,
  legacyHeaders: false
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "Suchit Vanapilli Portfolio API",
    database: mongoose.connection.readyState === 1 ? "connected" : "disconnected/fallback",
    timestamp: new Date().toISOString()
  });
});

// Contact Route
app.use("/api/contact", contactLimiter, contactRouter);

// Serve frontend in production build & public static assets
const distPath = path.join(__dirname, "../../frontend/dist");
const publicPath = path.join(__dirname, "../../frontend/public");
const rootPublicPath = path.join(__dirname, "../../public");
app.use(express.static(distPath));
app.use(express.static(publicPath));
app.use(express.static(rootPublicPath));

// Fallback for SPA routing in Express 5
app.use((req, res) => {
  res.sendFile(path.join(distPath, "index.html"), (err) => {
    if (err) {
      res.status(200).send("Suchit Vanapilli Portfolio API is running.");
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio backend server running on http://localhost:${PORT}`);
});

export default app;
