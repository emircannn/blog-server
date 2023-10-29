const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth.middleware')    
const adminToken = require('../middleware/admin.middleware')    
const controller = require('../controllers/index')

router.get('/getAll',controller.userController.getAll)
router.get('/getUser',controller.userController.getUser)

router.post('/create', controller.userController.createUser)
router.post('/updateImage', verifyToken, controller.userController.updateImage)
router.post('/updateCoverImage', verifyToken, controller.userController.updateCoverImage)
router.post('/update', verifyToken, controller.userController.updateUser)
router.post('/updatePassword', verifyToken, controller.userController.updatePassword)


module.exports ={
    user: router
}