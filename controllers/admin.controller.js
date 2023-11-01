const {StatusCodes} = require('http-status-codes')
const utils = require('../utils/index')
const adminService = require('../services/index').admin

exports.getEditor= async (req,res)=> {
    try {
        const json = await adminService.getEditor()
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.getEditorRequest= async (req,res)=> {
    try {
        const json = await adminService.getEditorRequest()
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.confirmUser= async (req,res)=> {
    try {
        const json = await adminService.confirmUser(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "Editör onaylandı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.deleteUser= async (req,res)=> {
    try {
        const json = await adminService.deleteUser(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "Editör silindi"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}