const express = require('express');
const router = express.Router();  
const adminToken = require('../middleware/admin.middleware')    
const controller = require('../controllers/index')

router.post('/xsafwtyq',adminToken, controller.settings.create)
router.post('/update',adminToken, controller.settings.update)
router.post('/slider',adminToken, controller.settings.slider)
router.get('/settings', controller.settings.settings)
router.get('/getSliderTexts', controller.settings.getSliderTexts)
router.get('/getSlider', controller.settings.getSlider)

module.exports = {
    settings: router
}