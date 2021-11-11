const express = require('express');
const ruta = express.Router();
const { getCIE10, CIE10Search, getCIE10ById } = require('../controllers/cie10');

ruta.route('/').get(getCIE10).post(CIE10Search);
ruta.route('/:id').get(getCIE10ById);

module.exports = ruta;