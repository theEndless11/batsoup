// api/send-message.js
const connectToDatabase = require('../db'); // Make sure this path is correct
const Message = require('../models/Message'); // Make sure this path is correct

module.exports = async (req, res) => {
  await connectToDatabase(); // Ensure you're connecting to the DB

  if (req.method === 'POST') {
    const { username, message, mediaUrl } = req.body;

    try {
      const newMessage = new Message({ username, message, mediaUrl });
      await newMessage.save();

      res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending message:', error);
      res.status(500).json({ error: 'Error sending message', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
