const mongoose = require('mongoose');
const cie10Schema = new mongoose.Schema({
    codigo: {
        required: [true, 'Ingrese código CIE-10'],
        type: String
    },
    detalle: { 
        required: [true, 'Ingrese detalles CIE-10'], 
        type: String
    }
});

module.exports = mongoose.model('cie10', cie10Schema);