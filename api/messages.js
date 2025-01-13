const connectToDatabase = require('../db'); // Correct path to db.js
const Message = require('../models/Message'); // Correct path to Message.js

module.exports = async (req, res) => {
  // Ensure the database connection is established
  await connectToDatabase();

  if (req.method === 'GET') {
    try {
      const messages = await Message.find().sort({ timestamp: 1 });
      res.status(200).json(messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
      res.status(500).json({ error: 'Error fetching messages', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
