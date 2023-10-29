const {StatusCodes} = require('http-status-codes')
const utils = require('../utils/index')
const authService = require('../services/index').auth

exports.userLogin= async (req,res)=> {
    try {
        const json = await authService.userLogin(req)
        const token = utils.helpers.createToken(json.id)
        res.status(StatusCodes.OK).json({error: false, data: json, token: token, timestamp: Date.now(), message: "Giriş İşlemi Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.adminLogin= async (req,res)=> {
    try {
        const json = await authService.adminLogin(req)
        const token = utils.helpers.createAdminToken(json.id, json.role)
        res.status(StatusCodes.OK).json({error: false, data: json, token: token, timestamp: Date.now(), message: "Giriş İşlemi Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}

exports.verifyUserToken= async (req,res)=> {
    try {
        const json = await authService.verifyUserToken(req)
        res.status(StatusCodes.OK).json({error: false, data: json,timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}

exports.adminSign= async (req,res)=> {
    try {
        const json = await authService.adminSign(req)
        res.status(StatusCodes.OK).json({error: false, data: json,timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
