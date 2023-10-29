const {StatusCodes} = require('http-status-codes')
const utils = require('../utils/index')
const userService = require('../services/index').user

exports.getAll= async (req,res)=> {
    try {
            const json = await userService.getAll(req)
            res.status(StatusCodes.OK).json({error: false, data: json,timestamp: Date.now(), message: "İşlem Başarılı"})
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}

exports.createUser= async (req,res)=> {
    try {
        const json = await userService.createUser(req)
        res.status(StatusCodes.OK).json({error: false, data: json,timestamp: Date.now(), message: "Editörlük isteği göderildi."})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}

exports.getUser= async (req,res)=> {
    try {
        const json = await userService.getUser(req)
        res.status(StatusCodes.OK).json({error: false, data: json,timestamp: Date.now(), message: "İşlem Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}

exports.updateImage= async (req,res)=> {
    try {
        const json = await userService.updateImage(req)
        res.status(StatusCodes.OK).json({error: false, data: json,timestamp: Date.now(), message: "Profil Resmi Güncellendi"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}

exports.updateCoverImage= async (req,res)=> {
    try {
        const json = await userService.updateCoverImage(req)
        res.status(StatusCodes.OK).json({error: false, data: json,timestamp: Date.now(), message: "Kapak Resmi Güncellendi"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.updateUser= async (req,res)=> {
    try {
        const json = await userService.updateUser(req)
        res.status(StatusCodes.OK).json({error: false, data: json,timestamp: Date.now(), message: "Güncelleme Başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}

exports.updatePassword= async (req,res)=> {
    try {
        const json = await userService.updatePassword(req)
        res.status(StatusCodes.OK).json({error: false, data: json,timestamp: Date.now(), message: "Şifreniz Güncellendi"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}