// Load the MySQL connection
const conexion = require('../data/config');

async function comprobarUsuario(user) {
  return new Promise ((resolve,reject) => {
    conexion.query("select * from Usuarios where usuario = ?", user , function(error,results) {
        if(error) {
           reject(error)
        }
        else {
           resolve(results)
        }
    })
  }) 
}

async function postLogin(req,res){
    var user = req.body.user
    try {
        var db_user = await comprobarUsuario(user)
    
        if (db_user.length == 0){
            res.status(401).send()
        }
        else {
            res.send(db_user[0].Usuario)
        }
    }
    catch(error) {
        res.status(500).send(error)
    }
}

async function verificarLogin(req,res,next){
    if (req.path == "/login"){
        next()
    }
    else {
        
        var user = req.query.user

        if (!user) {
            res.status(401).send()
        }
        else {
            try {
                var db_user = await comprobarUsuario(user)
            
                if (db_user.length == 0){
                    res.status(401).send()
                }
                else {
                next()
                }
            }
            catch(error) {
                res.status(500).send(error)
            }
        }
    }
}
   


module.exports = {
    postLogin : postLogin,
    verificarLogin : verificarLogin
}