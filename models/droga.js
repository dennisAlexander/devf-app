const mongoose = require('mongoose');

 let droga = DrogaSchema;   

const DrogaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        
    },
    precio: {
        type: Number,
       
    },
    cantidad: {
        type: Number,
        default: 0,
    }
});

const Ticket = mongoose.model('Droga', DrogaSchema);

module.exports = Droga;