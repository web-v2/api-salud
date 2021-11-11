const ErrorResponse = require('../helper/errorResponse');
const cie10 = require('../models/cie10');

exports.getCIE10 = async (req, res, next) => {
    try {
        const resp = await cie10.find();
        if (!resp || resp == '') {
            return next(new ErrorResponse('CIE10 No Existe en la BD con este Id: ' + mayus, 404));
        }
        res.status(200).json(resp)
    } catch (err) {
        next(new ErrorResponse('No se pudo procesar el request ' + req.params.id + err.message, 404));
    }
};

exports.getCIE10ById = async (req, res, next) => {
    try {
        const idCie10 = req.params.id;
        const mayus = idCie10.toUpperCase();
        const resp = await cie10.find({
            "codigo": mayus });
        if (!resp || resp == '') {
            return next(new ErrorResponse('CIE10 No Existe en la BD con este Id: ' + mayus, 404));
        }
        res.status(200).json(resp)
    } catch (err) {
        next(new ErrorResponse('No se pudo procesar el request ' + req.params.id + err.message, 404));
    }
};

exports.CIE10Search = async (req, res, next) => {
    try {
        /*
        const val = req.body.search;
        //const page = parseInt(req.body.page);
        const pageSize = parseInt(req.body.pageSize);
        const qr = '/.*'+val+'.*///i';
        //const resp = await cie10.find(`${"detalle" : 'aaa'}`).limit(pageSize);            
        ///console.log(qr);
        
        if (!resp) {
            return next(new ErrorResponse('CIE10 No Existe en la: ' + req.params.id, 404));
        }
        res.status(200).json({ status: 200, data: resp, pageSize });
    } catch (err) {
        next(new ErrorResponse('No se pudo procesar el request ' + req.params.id, 404));
    }
};