import socketClient from "socket.io-client";
import { setActiveUsers } from "../../features/dashboardSlice";
import * as webRTC from "../webRTC";
import store from "../../features/store";

const SERVER = "http://localhost:3000";

const boardCastEventTypes = {
  ACTIVE_USERS: "ACTIVE_USERS",
  GROUP_CALL_ROOMS: "GROUP_CALL_ROOMS",
};

let socket;

export const connectWithWebsocket = () => {
  socket = socketClient(SERVER);

  socket.on("connection", () => {
    console.log("Connected to websocket successfully");
    console.log(socket.id);
  });

  socket.on("boardcast", (data) => {
    console.log("boardcast", data);
    handleBoardCastEvents(data);
  });

  // listener related with direct call
  socket.on("pre-offer", (data) => {
    console.log("pre-offer handler");
    webRTC.handlePreOffer(data);
  });

  socket.on("pre-offer-answer", (data) => {
    webRTC.handlePreOfferAnswer(data);
  });

  socket.on("webRTC-offer", (data) => {
    webRTC.handleOffer(data);
  });

  socket.on("webRTC-answer", (data) => {
    webRTC.handleAnswer(data);
  });

  socket.on("webRTC-candidate", (data) => {
    webRTC.handleCandidate(data);
  });

  socket.on("user-hanged-up", () => {
    webRTC.handleUserHangedUp();
  });

};

export const registerNewUser = (userName) => {
  socket.emit("register-new-user", {
    socketId: socket.id,
    userName,
  });
};



const handleBoardCastEvents = (data) => {
  switch (data.event) {
    case boardCastEventTypes.ACTIVE_USERS:
      const filterActiveUser = data.activeUsers.filter(
        ({ socketId }) => socketId !== socket.id
      );
      store.dispatch(setActiveUsers(filterActiveUser));
      break;
    case boardCastEventTypes.GROUP_CALL_ROOMS:
      console.log("Group call rooms");
      console.log(data.groupCallRooms);
      break;
    default:
      break;
  }
};

export const sendPreOffer = (data) => {
  socket.emit("pre-offer", data);
};

export const sendPreOfferAnswer = (data) => {
  socket.emit("pre-offer-answer", data);
}

export const sendWebRTCOffer = (data) => {
  socket.emit("webRTC-offer", data);
};

export const sendWebRTCAnswer = (data) => {
  socket.emit("webRTC-answer", data);
};

export const sendWebRTCCandidate = (data) => {
  socket.emit("webRTC-candidate", data);
};

export const sendUserHangedUp = (data) => {
  socket.emit("user-hanged-up", data);
};