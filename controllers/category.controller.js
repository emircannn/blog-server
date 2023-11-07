const {StatusCodes} = require('http-status-codes')
const categoryService = require('../services/index').category

exports.getAll= async (req,res)=> {
    try {
        const json = await categoryService.getAll()
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.getWithSeo= async (req,res)=> {
    try {
        const json = await categoryService.getWithSeo(req)
        res.status(StatusCodes.OK).json({error: false, data: json.json, totalPages:json.totalPages,otherCategory:json.otherCategory, texts: json.texts,
            timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.add= async (req,res)=> {
    try {
        const json = await categoryService.add(req, res)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "Kategori oluşturuldu"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.edit= async (req,res)=> {
    try {
        const json = await categoryService.edit(req, res)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "Kategori güncelledi"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.delete= async (req,res)=> {
    try {
        const json = await categoryService.delete(req, res)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "Kategori silindi"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}