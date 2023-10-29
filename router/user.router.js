const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth.middleware')    
const adminToken = require('../middleware/admin.middleware')    
const controller = require('../controllers/index')

router.get('/getAll',controller.userController.getAll)
router.get('/getUser',controller.userController.getUser)

router.post('/create', controller.userController.createUser)
router.post('/updateImage', controller.userController.updateImage)
router.post('/updateCoverImage', controller.userController.updateCoverImage)
router.post('/update', controller.userController.updateUser)


module.exports ={
    user: router
}