const express = require("express");
const app = express();
const morgan = require("morgan");

const login = require("./routes/login");
const eventos = require("./routes/eventos");
const usuarios = require("./routes/usuarios");
const votar = require("./routes/votos")

//settings
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

//middlewares
app.use(morgan("combined"));
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
app.listen(app.get("port"), () => {
    console.log("Server on port "+app.get("port"))
})