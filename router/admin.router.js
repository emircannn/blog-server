const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth.middleware')    
const adminToken = require('../middleware/admin.middleware')    
const controller = require('../controllers/index')

router.get('/getEditors',adminToken, controller.adminController.getEditor)
router.get('/getEditorRequests',adminToken, controller.adminController.getEditorRequest)
router.post('/confirmUser',adminToken, controller.adminController.confirmUser)
router.post('/deleteUser',adminToken, controller.adminController.deleteUser)

module.exports ={
    admin: router
}