const mongoose = require("mongoose");
const Message = require("./models/message");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log("Connected to MongoDB");

    const messages = [
      {
        name: "Alice Johnson",
        message:
          "Wishing you all the happiness in the world on your special day, Grace! 🎉",
      },
      {
        name: "Tom Richardson",
        message:
          "Happy Birthday, Grace! May your year be filled with laughter and love!",
      },
      {
        name: "Sophia Lee",
        message: "Grace, you are amazing! Have a fabulous birthday! 🎂",
      },
      {
        name: "James Carter",
        message: "Sending you lots of birthday wishes and warm hugs, Grace! 🥳",
      },
      {
        name: "Ella Martinez",
        message:
          "Happy Birthday to the kindest soul I know! Enjoy your day, Grace!",
      },
      {
        name: "David Kim",
        message:
          "Grace, may your birthday be as bright and beautiful as you are! 🌟",
      },
      {
        name: "Olivia Brown",
        message:
          "Another year wiser and stronger, Grace! Have a wonderful birthday!",
      },
      {
        name: "Liam Walker",
        message:
          "Grace, today is all about celebrating you! Have a fantastic birthday!",
      },
      {
        name: "Mia Nguyen",
        message:
          "Wishing you endless joy and surprises on your birthday, Grace! 🎁",
      },
      {
        name: "Ethan White",
        message:
          "To an amazing friend, Grace, happy birthday! Let's make it memorable!",
      },
    ];

    await Message.insertMany(messages);
    console.log("Messages seeded!");
    mongoose.connection.close();
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
