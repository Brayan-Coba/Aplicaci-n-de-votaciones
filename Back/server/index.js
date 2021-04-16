const express = require("express");
const app = express();
const http = require('http');
const server = http.Server(app)

const morgan = require("morgan");
const cors = require("cors")
const socketIO = require('socket.io');
const io = socketIO(server);

const login = require("./routes/login");
const eventos = require("./routes/eventos");
const usuarios = require("./routes/usuarios");
const votar = require("./routes/votos")

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
  
//settings
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

//middlewares
app.use(cors())
app.use(morgan("dev"));
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(login.verificarLogin)


//routes
app.get("/eventos/:evento", eventos.getNominadosPorEvento)
app.get("/eventos", eventos.getEventos)
app.get("/votos", votar.getVotos)


app.post("/login", login.postLogin)
app.post ("/votar", votar.postVotar)

//starting the server
server.listen(app.get("port"), () => {
    console.log("Server on port "+app.get("port"))
});