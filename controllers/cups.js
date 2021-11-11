const ErrorResponse = require('../helper/errorResponse');
const cups = require('../models/cups');

exports.getCUPS = async (req, res, next) => {
    try {
        const resp = await cups.find();
        if (!resp || resp == '') {
            return next(new ErrorResponse('CUPS No Existe en la BD con este Id: ' + mayus, 404));
        }
        res.status(200).json(resp)
    } catch (err) {
        next(new ErrorResponse('No se pudo procesar el request ' + req.params.id + err.message, 404));
    }
};

exports.getCUPSById = async (req, res, next) => {
    try {
        const idCups = req.params.id;
        const mayus = idCups.toUpperCase();
        const resp = await cups.find({
            "Codigo": mayus });
        if (!resp || resp == '') {
            return next(new ErrorResponse('CUPS No Existe en la BD con este Id: ' + mayus, 404));
        }
        res.status(200).json(resp)
    } catch (err) {
        next(new ErrorResponse('No se pudo procesar el request ' + req.params.id + err.message, 404));
    }
};

exports.CUPSSearch = async (req, res, next) => {
    try {
        const val = req.body.search;
        const page = parseInt(req.body.page);
        const pageSize = parseInt(req.body.pageSize);

        //const busq = "/" + `${val}` +"$/i";
        const resp = await cups.find({Nombre: 'renal' }).limit(pageSize);            

        if (!resp) {
            return next(new ErrorResponse('CIE10 No Existe en la: ' + val, 404));
        }
        res.status(200).json({ status: 200, data: resp, pageSize });
    } catch (err) {
        next(new ErrorResponse('No se pudo procesar el request ' + val, 404));
    }
};