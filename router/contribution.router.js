const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth.middleware')    
const adminToken = require('../middleware/admin.middleware')    
const controller = require('../controllers/index')
const { upload } = require('../middleware/fileupload.middleware');

router.get('/all',verifyToken, controller.contribution.all)
router.post('/create',verifyToken, upload.fields([{name: 'filePdf', maxCount: 1}]), controller.contribution.create)
router.post('/delete',verifyToken, controller.contribution.delete)
router.post('/update',verifyToken, upload.fields([{name: 'filePdf', maxCount: 1}]), controller.contribution.update)

module.exports ={
    contribution: router
}