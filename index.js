const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 7000;

const io = require("socket.io")(PORT, {
  cors: {
    origin: process.env.CLIENT_URL,
  },
});

io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("sendComment", ({ sender, review, text }) => {
    io.emit("getComment", { sender, review, text });
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
