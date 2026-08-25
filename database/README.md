# Database Documentation — MongoDB (`suchit_portfolio`)

This directory documents the database technology, schema definitions, and connection configuration used by Suchit Vanapilli's Portfolio application.

## 🗄️ Database Technology
- **Database Engine**: MongoDB (v6.0+)
- **Database Name**: `suchit_portfolio`
- **ORM / ODM**: Mongoose (`mongoose`)
- **Primary Collection**: `messages`

---

## 📋 Collection Schemas

### 1. `messages` Collection
Stores contact messages and visitor feedback submissions.

```json
{
  "name": "String (Required)",
  "email": "String (Required)",
  "intent": "String (Default: 'General Contact')",
  "message": "String (Required)",
  "receivedAt": "Date (Default: Date.now)",
  "ip": "String (Default: 'unknown')"
}
```

---

## 🛠️ Connection Instructions

### Local MongoDB Compass Connection
1. Ensure MongoDB Community Server service is running locally (`mongod`).
2. Open **MongoDB Compass**.
3. Connect using URI: `mongodb://localhost:27017/suchit_portfolio`.
4. Navigate to the `suchit_portfolio` database → `messages` collection to inspect stored records.

### MongoDB Atlas (Cloud Production Connection)
1. Create a cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a database user and whitelist your server IP.
3. Update `.env`:
   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/suchit_portfolio?retryWrites=true&w=majority
   ```
