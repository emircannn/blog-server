const {StatusCodes} = require('http-status-codes')
const actualService = require('../services/index').actual

exports.getAll= async (req,res)=> {
    try {
        const json = await actualService.getAll(req)
        res.status(StatusCodes.OK).json({error: false, data: json.json, totalPages: json.totalPages, timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.getOtherTexts= async (req,res)=> {
    try {
        const json = await actualService.getOtherTexts(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.getText= async (req,res)=> {
    try {
        const json = await actualService.getText(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.getTextWithSeo= async (req,res)=> {
    try {
        const json = await actualService.getTextWithSeo(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.getUserText= async (req,res)=> {
    try {
        const json = await actualService.getUserText(req)
        res.status(StatusCodes.OK).json({error: false, data: json.json, totalPages: json.totalPages, timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.create= async (req,res)=> {
    try {
        const json = await actualService.create(req, res)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "Yazı oluşturuldu"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.delete= async (req,res)=> {
    try {
        const json = await actualService.delete(req, res)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "Yazı silindi"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.update= async (req,res)=> {
    try {
        const json = await actualService.update(req, res)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "Yazı güncellendi"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}