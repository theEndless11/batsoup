"use strict";

var connectToDatabase = require('../db'); // Correct path to db.js


var Message = require('../models/Message'); // Correct path to Message.js


module.exports = function _callee(req, res) {
  var messages;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(connectToDatabase());

        case 2:
          if (!(req.method === 'GET')) {
            _context.next = 16;
            break;
          }

          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(Message.find().sort({
            timestamp: 1
          }));

        case 6:
          messages = _context.sent;
          res.status(200).json(messages);
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](3);
          console.error('Error fetching messages:', _context.t0);
          res.status(500).json({
            error: 'Error fetching messages',
            details: _context.t0.message
          });

        case 14:
          _context.next = 17;
          break;

        case 16:
          res.status(405).json({
            error: 'Method Not Allowed'
          });

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 10]]);
};
//# sourceMappingURL=messages.dev.js.map
