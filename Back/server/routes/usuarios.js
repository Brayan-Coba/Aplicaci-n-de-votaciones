// Load the MySQL connection
const conexion = require('../data/config');

async function usuarioTieneRol(usuario,rol){
    return new Promise ((resolve,reject) =>{
        var consulta = 
        `
        Select  Roles_idRol 
        from    Usuarios join Roles_X_Usuario 
        on      idUsuario = Usuarios_idUsuario 
        where   idUsuario = ?
        and     Roles_idRol = ?
        `
        conexion.query(consulta, [usuario,rol], function(error,results) {
            if (error){
                reject(error)
            }
            else if (results.length == 0){
                resolve(false)
            }
            else {
                resolve(true)
            }
        })
    })
}


module.exports = {
    usuarioTieneRol : usuarioTieneRol
}