const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth.middleware')    
const adminToken = require('../middleware/admin.middleware')    
const controller = require('../controllers/index')
const { upload } = require('../middleware/fileupload.middleware');

router.get('/getAll', controller.magazine.getAll)
router.post('/create',adminToken, upload.fields([{name: 'textImage', maxCount: 1}, {name: 'textFile', maxCount: 1}]), controller.magazine.create)
router.post('/delete',adminToken, controller.magazine.delete)
router.post('/update',verifyToken, upload.fields([{name: 'textImage', maxCount: 1}]), controller.actual.update)

module.exports ={
    magazine: router
}