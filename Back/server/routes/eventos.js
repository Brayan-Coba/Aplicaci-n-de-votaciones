// Load the MySQL connection
const conexion = require('../data/config');

async function obtenerEventos(){
    return new Promise ((resolve,reject) => {
        conexion.query("select * from Eventos", function(error,results) {
            if (error){
                reject(error)
            }
            else {
                resolve(results)
            }
        })
    })
}

async function getEventos(req,res) {

    try {
        var eventos = await obtenerEventos()
        res.send(eventos)
    }
    catch(error) {
        res.status(500).send(error);
    }
}

async function obtenerNominadosPorEvento(evento){
    return new Promise ((resolve,reject) => {
        var consulta = 
        `
        select 	idNominado,
		        Nominado 
        from 	Nominados join Nominados_X_Evento 
        on 		Nominados.idNominado = Nominados_X_Evento.Nominados_idNominado
        where 	Eventos_idEvento = ?
        `
        conexion.query(consulta, evento, function(error,results) {
            if (error){
                reject(error)
            }
            else {
                resolve(results)
            }
        })
    })
}

async function getNominadosPorEvento(req,res){
    try{
        var evento = req.params.evento
        if (!evento) {
            return res.status(400).send("El evento es requerido")
        }

        var nominados = await obtenerNominadosPorEvento(evento)

        if (nominados.length == 0){
            res.status(404).send(`El evento ${evento} no se encuentra`)
        }
        else{
            res.send(nominados)
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    getEventos : getEventos,
    getNominadosPorEvento : getNominadosPorEvento
}