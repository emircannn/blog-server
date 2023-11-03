const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth.middleware')    
const adminToken = require('../middleware/admin.middleware')    
const controller = require('../controllers/index')
const { upload } = require('../middleware/fileupload.middleware');

router.get('/getAll', controller.articleController.getAll)
router.get('/getText', controller.articleController.getText)
router.get('/getTextWithSeo', controller.articleController.getTextWithSeo)
router.get('/getUserText', controller.articleController.getUserText)
router.post('/create',verifyToken, upload.fields([{name: 'textImage', maxCount: 1}]), controller.articleController.create)
router.post('/update',verifyToken, upload.fields([{name: 'textImage', maxCount: 1}]), controller.articleController.update)
router.post('/delete',verifyToken, controller.articleController.delete)

module.exports ={
    article: router
}