const {StatusCodes} = require('http-status-codes')
const contributionService = require('../services/index').contribution


exports.create= async (req,res)=> {
    try {
        const json = await contributionService.create(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "Sayı Yazısı oluşturuldu"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}

exports.all= async (req,res)=> {
    try {
        const json = await contributionService.all(req)
        res.status(StatusCodes.OK).json({error: false, data: json.json, totalPages: json.totalPages, timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}

exports.delete= async (req,res)=> {
    try {
        const json = await contributionService.delete(req)
        res.status(StatusCodes.OK).json({error: false, data: json.json, totalPages: json.totalPages, timestamp: Date.now(), message: "Yazı silindi"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.update= async (req,res)=> {
    try {
        const json = await contributionService.update(req)
        res.status(StatusCodes.OK).json({error: false, data: json.json, totalPages: json.totalPages, timestamp: Date.now(), message: "Yazı güncellendi"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}