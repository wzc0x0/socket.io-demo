const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

io.sockets.on("connection", sockets => {
    sockets.on("chat-client", data => {
        sockets.emit("chat-server", data);
        sockets.broadcast.emit("chat-server", data);
    });
});

server.listen(3000, () => {
    console.log("sockets listening on port 3000!");
});