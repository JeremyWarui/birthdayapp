const router = require("express").Router();
const Message = require("../models/message");

router.get("/", async (req, res) => {
  try {
    const messages = await Message.find({});
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

router.post("/", async (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({
      error: "Name and message are required",
    });
  }

  try {
    const newMessage = new Message({ name, message });
    const savedMsg = await newMessage.save();
    res.status(201).send(savedMsg);
  } catch (error) {
    res.status(500).json({
      error: "Failed to save the message",
    });
  }
});

module.exports = router;
