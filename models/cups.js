const mongoose = require('mongoose');
const cupsSchema = new mongoose.Schema({
    Codigo: {
        required: [true, 'Ingrese código CUPS'],
        type: String
    },
    Nombre: { 
        required: [true, 'Ingrese detalles CUPS'], 
        type: String
    },
    RIPS: {
        required: [true, 'Ingrese Tabla de referencia en RIPS'],
        type: String
    },
    Area: {
        required: [true, 'Ingrese el Area del cuerpo a la que esta asociada el CUPS'],
        type: String
    }
});

module.exports = mongoose.model('cups', cupsSchema);