const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});


io.on("connection", (socket) => {
  console.log(`connected ${socket.id}`);

  socket.on("join", (roomId, username) => {
    socket.join(roomId);
    console.log(`${socket.id} joined ${roomId}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log(`disconected ${socket.id}`);
  });
});

server.listen(8000, () => console.log("running on port 8000"));
