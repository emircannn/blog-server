const {StatusCodes} = require('http-status-codes')
const commentService = require('../services/index').comment


exports.add= async (req,res)=> {
    try {
        const json = await commentService.add(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "Yorum oluşturuldu"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.delete= async (req,res)=> {
    try {
        const json = await commentService.delete(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "Yorum silindi"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.all= async (req,res)=> {
    try {
        const json = await commentService.all(req)
        res.status(StatusCodes.OK).json({error: false, data: json.json,totalPages: json.totalPages, timestamp: Date.now(), message: "Yorum oluşturuldu"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}