const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const socketIO = require("socket.io");
const cors = require("cors");
const {
  getOrCreateDocument,
  updateDocument,
  getAllDocuments,
} = require("./controllers/documentController");



const app = express();



app.use(
  cors({
    origin: "http://localhost:3000",
  })
);


//Route to get all documents
app.get("/documents", (req, res) => {
  getAllDocuments(req, res);
});



mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {

    const server = app.listen(5000, () => {
      console.log("server is running");
    });


    const io = socketIO(server, {
      cors: {
        origin: "http://localhost:3000",
      },
    });

    io.on("connection", (socket) => {
      console.log("hello, i'm here");
      //SocketIo events for communicating with the client
      socket.on("get-document", async (id) => {
        console.log(id);
        const document = await getOrCreateDocument(id);
        console.log(document);
        
        socket.emit("load-document", document.data);

        socket.on("save-document", async (data) => {
          await updateDocument(id, data);
          socket.emit("saved", "saved");
        });
      });
    });
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log(error);
  });
