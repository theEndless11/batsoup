// models/Message.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    username: String,
    message: String,
    timestamp: { type: Date, default: Date.now },
    mediaUrl: String
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
