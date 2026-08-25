# Backend Documentation — Suchit Vanapilli Portfolio API

Node.js Express 5 server providing contact form processing, Nodemailer automated email notifications, and MongoDB message persistence.

## 📁 Source Structure
- `src/server.js`: Server entry point & static file hosting integration.
- `src/routes/contact.js`: Contact submission (`POST /api/contact`) and feedback fetching (`GET /api/contact/feedbacks`).
- `src/models/Message.js`: Mongoose data model for message documents.
- `messages.json`: Fallback local JSON file storage when disconnected from MongoDB.

## 🏃 Local Commands
```bash
# Start backend Express server
npm start
```
