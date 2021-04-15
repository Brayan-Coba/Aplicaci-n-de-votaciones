// Load the MySQL connection
const conexion = require('../data/config');

function getUsuarios(req,res){
    conexion.query("select * from Usuarios", function(error,results) {
        if(error) {
            res.status(500).send(error);
        }
        else{
            res.send(results)
        }
    })
}

module.exports = {
    getUsuarios : getUsuarios
}