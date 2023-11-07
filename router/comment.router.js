const express = require('express');
const router = express.Router();   
const adminToken = require('../middleware/admin.middleware')    
const controller = require('../controllers/index')

router.get('/all',adminToken, controller.comment.all)
router.post('/add', controller.comment.add)
router.post('/delete', controller.comment.delete)

module.exports ={
    comment: router
}