const {StatusCodes} = require('http-status-codes')
const articleService = require('../services/index').article

exports.getAll= async (req,res)=> {
    try {
        const json = await articleService.getAll(req)
        res.status(StatusCodes.OK).json({error: false, data: json.json, totalPages: json.totalPages, timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.getText= async (req,res)=> {
    try {
        const json = await articleService.getText(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.getTextWithSeo= async (req,res)=> {
    try {
        const json = await articleService.getTextWithSeo(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.getUserText= async (req,res)=> {
    try {
        const json = await articleService.getUserText(req)
        res.status(StatusCodes.OK).json({error: false, data: json.json, totalPages: json.totalPages, timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.create= async (req,res)=> {
    try {
        const json = await articleService.create(req, res)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "Yazı oluşturuldu"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.delete= async (req,res)=> {
    try {
        const json = await articleService.delete(req, res)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "Yazı silindi"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.update= async (req,res)=> {
    try {
        const json = await articleService.update(req, res)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "Yazı güncellendi"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}