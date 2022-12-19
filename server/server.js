const express = require("express");
const socket = require("socket.io");

const PORT = 3000;

const app = express();

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

const io = socket(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

let peers = [];
const boardCastEventTypes = {
  ACTIVE_USERS: "ACTIVE_USERS",
  GROUP_CALL_ROOMS: "GROUP_CALL_ROOMS",
};

io.on("connection", (socket) => {
  socket.emit("connection", null);
  console.log("new user connected");
  console.log(socket.id);

  socket.on("register-new-user", ({ userName, socketId }) => {
    peers.push({
      userName,
      socketId,
    });

    console.log("register-new-user");
    console.log(peers);

    io.sockets.emit("boardcast", {
      event: boardCastEventTypes.ACTIVE_USERS,
      activeUsers: peers,
    });
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
    peers = peers.filter(({ socketId }) => socketId !== socket.id);
    io.sockets.emit("boardcast", {
      event: boardCastEventTypes.ACTIVE_USERS,
      activeUsers: peers,
    });
  });

  //listener related with direct call
  socket.on("pre-offer", (data) => {
    console.log("pre-offer handler");
    io.to(data.callee.socketId).emit("pre-offer", {
      callerUserName: data.caller.userName,
      callerSocketId: socket.id,
    });
  });

  socket.on("pre-offer-answer", (data) => {
    console.log("pre-offer-answer handler");
    io.to(data.callerSocketId).emit("pre-offer-answer", {
      answer: data.answer,
    });
  });

  socket.on("webRTC-offer", (data) => {
    console.log("webRTC-offer handler");
    io.to(data.calleeSocketId).emit("webRTC-offer", {
      offer: data.offer,
    });
  });

  socket.on("webRTC-answer", (data) => {
    console.log("webRTC-answer handler");
    io.to(data.callerSocketId).emit("webRTC-answer", {
      answer: data.answer,
    });
  });

  socket.on("webRTC-candidate", (data) => {
    console.log("webRTC-candidate handler");
    io.to(data.connectedUserSocketId).emit("webRTC-candidate", {
      candidate: data.candidate,
    });
  })

  socket.on("user-hanged-up", (data) => {
    console.log("user-hanged-up handler");
    io.to(data.connectedUserSocketId).emit("user-hanged-up");
  });
});