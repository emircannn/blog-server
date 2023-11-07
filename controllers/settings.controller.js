const {StatusCodes} = require('http-status-codes')
const settingsService = require('../services/index').settings


exports.create= async (req,res)=> {
    try {
        const json = await settingsService.create(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "Ayarlar oluşturuldu"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.update= async (req,res)=> {
    try {
        const json = await settingsService.update(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "Ayarlar güncellendi"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.settings= async (req,res)=> {
    try {
        const json = await settingsService.settings(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "İşlem başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.getSliderTexts= async (req,res)=> {
    try {
        const json = await settingsService.getSliderTexts(req)
        res.status(StatusCodes.OK).json({error: false, data: json.data, totalPages: json.totalPages, timestamp: Date.now(), message: "İşlem başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}

exports.getSlider= async (req,res)=> {
    try {
        const json = await settingsService.getSlider(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "İşlem başarılı"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
exports.slider= async (req,res)=> {
    try {
        const json = await settingsService.slider(req)
        res.status(StatusCodes.OK).json({error: false, data: json, timestamp: Date.now(), message: "Yazı Slider Ayarı Güncellendi"})

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({timestamp: Date.now(), message: error.message, data: null, error: true})
    }
}
