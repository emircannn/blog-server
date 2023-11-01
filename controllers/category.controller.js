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
exports.add= async (req,res)=> {
    try {
        const json = await categoryService.add(req, res)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "Kategori oluşturuldu"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}