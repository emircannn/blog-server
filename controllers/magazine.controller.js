const {StatusCodes} = require('http-status-codes')
const magazineService = require('../services/index').magazine

exports.getAll= async (req,res)=> {
    try {
        const json = await magazineService.getAll(req)
        res.status(StatusCodes.OK).json({error: false, data: json.json, totalPages: json.totalPages, timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.all= async (req,res)=> {
    try {
        const json = await magazineService.all(req)
        res.status(StatusCodes.OK).json({error: false, data: json.json, totalPages: json.totalPages, timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.create= async (req,res)=> {
    try {
        const json = await magazineService.create(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "Sayı oluşturuldu"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.delete= async (req,res)=> {
    try {
        const json = await magazineService.delete(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "Sayı silindi"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.update= async (req,res)=> {
    try {
        const json = await magazineService.update(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "Sayı güncellendi"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.getMagazine= async (req,res)=> {
    try {
        const json = await magazineService.getMagazine(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}