const express = require('express');
const ruta = express.Router();
const { getCUPS, CUPSSearch, getCUPSById } = require('../controllers/cups');

ruta.route('/').get(getCUPS).post(CUPSSearch);
ruta.route('/:id').get(getCUPSById);

module.exports = ruta;