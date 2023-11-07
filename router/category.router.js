const express = require('express');
const router = express.Router();   
const adminToken = require('../middleware/admin.middleware')    
const controller = require('../controllers/index')

router.get('/getAll', controller.categoryController.getAll)
router.get('/getWithSeo', controller.categoryController.getWithSeo)
router.post('/add',adminToken, controller.categoryController.add)
router.post('/edit',adminToken, controller.categoryController.edit)
router.post('/delete',adminToken, controller.categoryController.delete)

module.exports ={
    category: router
}