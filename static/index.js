var socket = io.connect();

document.getElementById("first").addEventListener("click", () => {
  socket.emit("type", {
    type: "first",
  });
});

document.getElementById("last").addEventListener("click", () => {
  socket.emit("type", {
    type: "last",
  });
});

document.getElementById("prev").addEventListener("click", () => {
  socket.emit("type", {
    type: "prev",
  });
});

document.getElementById("next").addEventListener("click", () => {
  socket.emit("type", {
    type: "next",
  });
});
