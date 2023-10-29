const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth.middleware')    
const adminToken = require('../middleware/admin.middleware')    
const controller = require('../controllers/index')

router.get('/verifyUserToken', controller.authController.verifyUserToken)
router.post('/userLogin', controller.authController.userLogin)
router.post('/adminLogin', controller.authController.adminLogin)
router.post('/adminSignxteasd', controller.authController.adminSign)

module.exports ={
    auth: router
}