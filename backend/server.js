const express = require("express");
const socket = require("socket.io");
const cors = require('cors');
// App setup
const PORT = 5000;
const app = express();
app.use(cors());
const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

// Static files
app.use(express.static("public"));
app.use('/api', (req, res) => {
  res.status(200).send('<h1>Working...</h1>')
})
// Socket setup
const io = socket(server, {
  cors: {
    origin: '*',
  }
});

io.on("connection", function (socket) {
  console.log("Made socket connection");
  socket.on('test', () => {
    console.log('test received');
    socket.emit('test-received', "received");
  })
});
