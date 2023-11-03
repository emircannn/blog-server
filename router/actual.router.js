const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth.middleware')    
const adminToken = require('../middleware/admin.middleware')    
const controller = require('../controllers/index')
const { upload } = require('../middleware/fileupload.middleware');

router.get('/getAll', controller.actual.getAll)
router.get('/getText', controller.actual.getText)
router.get('/getTextWithSeo', controller.actual.getTextWithSeo)
router.get('/getUserText', controller.actual.getUserText)
router.post('/create',verifyToken, upload.fields([{name: 'textImage', maxCount: 1}]), controller.actual.create)
router.post('/update',verifyToken, upload.fields([{name: 'textImage', maxCount: 1}]), controller.actual.update)
router.post('/delete',verifyToken, controller.actual.delete)

module.exports ={
    actual: router
}