"use strict";

// models/Message.js
var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
  username: String,
  message: String,
  timestamp: {
    type: Date,
    "default": Date.now
  },
  mediaUrl: String
});
var Message = mongoose.model('Message', messageSchema);
module.exports = Message;
//# sourceMappingURL=Message.dev.js.map
