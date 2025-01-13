"use strict";

// api/send-message.js
var connectToDatabase = require('../db'); // Make sure this path is correct


var Message = require('../models/Message'); // Make sure this path is correct


module.exports = function _callee(req, res) {
  var _req$body, username, message, mediaUrl, newMessage;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(connectToDatabase());

        case 2:
          if (!(req.method === 'POST')) {
            _context.next = 17;
            break;
          }

          _req$body = req.body, username = _req$body.username, message = _req$body.message, mediaUrl = _req$body.mediaUrl;
          _context.prev = 4;
          newMessage = new Message({
            username: username,
            message: message,
            mediaUrl: mediaUrl
          });
          _context.next = 8;
          return regeneratorRuntime.awrap(newMessage.save());

        case 8:
          res.status(201).json({
            message: 'Message sent successfully'
          });
          _context.next = 15;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](4);
          console.error('Error sending message:', _context.t0);
          res.status(500).json({
            error: 'Error sending message',
            details: _context.t0.message
          });

        case 15:
          _context.next = 18;
          break;

        case 17:
          res.status(405).json({
            error: 'Method Not Allowed'
          });

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 11]]);
};
//# sourceMappingURL=send-message.dev.js.map
