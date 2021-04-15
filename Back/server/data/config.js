const mysql = require("mysql");

// Set database connection credentials
const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "svc3gHlUuZyAqsi",
    database: "aplicacion_de_votaciones",
});

conexion.connect(function(error){
    if(error){
        throw error;
    }
    else{
        console.log("Conexion exitosa")
    }
})


module.exports = conexion;