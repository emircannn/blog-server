const {StatusCodes} = require('http-status-codes')
const homeService = require('../services/index').home


exports.getMostReaded= async (req,res)=> {
    try {
        const json = await homeService.getMostReaded(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.getLastLoaded= async (req,res)=> {
    try {
        const json = await homeService.getLastLoaded(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.getLastActual= async (req,res)=> {
    try {
        const json = await homeService.getLastActual(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.getMagazines= async (req,res)=> {
    try {
        const json = await homeService.getMagazines(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.getCategories= async (req,res)=> {
    try {
        const json = await homeService.getCategories(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.getEditors= async (req,res)=> {
    try {
        const json = await homeService.getEditors(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.getMagazineHeader= async (req,res)=> {
    try {
        const json = await homeService.getMagazineHeader(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.getCategoryHeader= async (req,res)=> {
    try {
        const json = await homeService.getCategoryHeader(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}