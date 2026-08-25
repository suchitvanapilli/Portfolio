import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  intent: { type: String, default: "General Contact" },
  message: { type: String, required: true },
  receivedAt: { type: Date, default: Date.now },
  ip: { type: String, default: "unknown" }
});

const Message = mongoose.models.Message || mongoose.model("Message", messageSchema);
export default Message;
