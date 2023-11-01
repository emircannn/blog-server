const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth.middleware')    
const adminToken = require('../middleware/admin.middleware')    
const controller = require('../controllers/index')

router.get('/getAll', controller.categoryController.getAll)
router.post('/add',adminToken, controller.categoryController.add)

module.exports ={
    category: router
}