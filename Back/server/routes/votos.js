// Load the MySQL connection
const conexion = require('../data/config');

const usuarios = require("./usuarios")


async function opcionValidaParaVotar(voto){
    return new Promise ((resolve,reject) => {
        var consulta = 
        `
        select count("") as existe from nominados_x_evento where idNominado_X_Evento = ?;
        `
        conexion.query(consulta,voto, function(error,results) {
            if (error){
                reject(error)
            }
            else if (results[0].existe == 0){
                resolve(false)
            }
            else {
                resolve(true)
            }
        })
    })
}

async function usuarioYaVotoEnEvento(usuario,voto){
    return new Promise ((resolve,reject) => {
        var consulta = 
        `
        with 
            evento           as (select Eventos_idEvento as id from Nominados_X_Evento where idNominado_X_Evento = ?),
            nominados_evento as (select * from Nominados_X_Evento, evento where Eventos_idEvento = evento.id)
        select	count("") as votos
        from 	nominados_evento join votos
        on 		nominados_evento.idNominado_X_Evento = Nominado_X_Evento_idNominado_X_Evento 
        where 	votos.Usuarios_idUsuario = ?;
        `
        conexion.query(consulta,[voto,usuario], function(error,results) {
            if (error){
                reject(error)
            }
            else if (results[0].votos == 0){
                resolve(false)
            }
            else {
                resolve(true)
            }
        })
    })
}

async function postVotar(req,res){
    var rolParticipante = 2
    var usuario = req.query.user
    var voto = req.body.code

    try {
        var tieneRol = await usuarios.usuarioTieneRol(usuario,rolParticipante)
        
        if (!tieneRol) {
            return res.status(401).send("Usuario no tiene rol de Participante")
        }

        var opcionValida = await opcionValidaParaVotar(voto)

        if (!opcionValida) {
            return res.status(404).send("No existe la opcion votada")
        }

        var yaVotoEnEvento = await usuarioYaVotoEnEvento(usuario,voto)

        if (yaVotoEnEvento) {
            return res.status(401).send("Usuario ya voto en este evento")
        }

        conexion.query("insert into Votos values (null,?,?)",[usuario,voto],function (error, result){
            if (error) {
                res.status(500).send()
            }
            else {
                res.send(result)
            }
        })
    }
    catch (error) {
       res.status(500).send()
    }
}

async function getVotos (req,res){
    var rol = 1
    var usuario = req.query.user

    try{
        var tieneRol = await usuarios.usuarioTieneRol(usuario,rol)
    
        if (!tieneRol) {
            return res.status(401).send("Usuario no tiene rol de Auditor")
        }
    
        var consulta = 
        `
        select count("") as Votos, Nominado, idNominado_X_Evento as Opcion, Evento , Eventos_idEvento as id_Evento
        from votos join Nominados_X_Evento 
        on Nominado_X_Evento_idNominado_X_Evento = idNominado_X_Evento
        join Nominados on Nominados_idNominado = idNominado
        join Eventos on Eventos_idEvento = idEvento
        group by Nominado_X_Evento_idNominado_X_Evento;
        `
        conexion.query(consulta,(error,result) => {
            if (error) {
                res.status(500).send()
            }

            else {
                res.send(result)
            }
        })
    }
   catch (error) {
    res.status(500).send()
   }
}

module.exports = {
    postVotar : postVotar,
    getVotos : getVotos
}