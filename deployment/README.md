# Deployment Documentation & Configuration Guide

This directory contains deployment specifications for production hosting on **Render**, **Vercel**, **Railway**, and self-hosted Node servers.

---

## 🚀 1. Vercel Deployment (All-in-One Frontend + Serverless API)

### Step-by-Step Instructions
1. Push code to GitHub repository.
2. Sign in to [Vercel.com](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Set Environment Variables:
   - `PORT`: `5000`
   - `MONGODB_URI`: `mongodb+srv://<user>:<pass>@cluster0.mongodb.net/suchit_portfolio?retryWrites=true&w=majority`
   - `EMAIL_USER`: `suchitvanapilli25@gmail.com`
   - `EMAIL_PASS`: `usuweavhiwithhwe`
   - `ALLOWED_ORIGIN`: `*`
5. Click **Deploy**. Vercel uses `vercel.json` to build the React frontend into `frontend/dist` and mount `backend/src/server.js` serverlessly.

---

## 🚀 2. Render.com Deployment (All-in-One Node Server)

### Step-by-Step Instructions
1. Go to [Render.com](https://render.com) $\rightarrow$ **New Web Service**.
2. Connect your GitHub repository.
3. Configure:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
4. Set Environment Variables (`MONGODB_URI`, `EMAIL_USER`, `EMAIL_PASS`).
5. Click **Create Web Service**. Render serves both the Express API and built React frontend together.
