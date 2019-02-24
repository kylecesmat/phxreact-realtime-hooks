import express from "express";
import http from "http";
import WebSocket from "ws";

const PORT = 3001;
const app = express();
const server = http.createServer(app);

const UPDATE_MS = 100;

const price = new WebSocket.Server({ server, path: "/price" });

price.on("connection", ws => {
  ws.on("message", message => {
    console.log("received: %s", message);
    ws.send(`Hello, you sent -> ${message}`);
  });

  setInterval(() => {
    const currencyPrice = Math.floor(Math.random() * 10000);

    try {
      if (ws.readyState !== WebSocket.CLOSED) {
        ws.send(currencyPrice);
      }
    } catch (e) {
      console.log(e);
    }
  }, UPDATE_MS);
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
