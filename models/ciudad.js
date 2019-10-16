const mongoose = require('mongoose');

/*
    1) Crear una base de datos para un supermercado que pueda 
    almacenar lo siguiente:
    
    - Artículo
        -Nombre (string)
        -Precio (number)
        -Existencias (number)

*/

const CiudadSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    mensajes: {
        type: String,   // al azar cada 3 o 4 turno
    }
});

const Ciuadad = mongoose.model('Ciuadad', CiuadadSchema);

module.exports = Ciuadad;



function mostrarDrogas {
// something something list
    for(i = 0; i < droga.length; i++){
        document.write(droga.nombre);
    }
};

function randomMessage {
window.alert()
    // mostrar mensaje, que conecta con un evento a veces (polis -> luchar , robo -> baja dinero/drogas)
}

let turnos = 0;

function turnos {
    if(turnos < 30)   // continuar
    else // terminar juego mostrar puntaje

    // salvar turnos de alguna manera ?????
}