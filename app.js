const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const robotjs = require("robotjs");
const PORT = 8080;

server.listen(PORT, (err) => {
  if (err) throw err;
  console.log("listening on", server.address());
});

app.use(require("express").static("static"));

io.on("connection", function (socket) {
  socket.on("type", (client) => {
    const { type } = client;
    switch (type) {
      case "first":
        robotjs.keyTap("home");
        break;
      case "last":
        robotjs.keyTap("end");
        break;
      case "prev":
        robotjs.keyTap("left");
        break;
      case "next":
        robotjs.keyTap("right");
        break;
    }
  });
});
