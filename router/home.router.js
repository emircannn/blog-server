const express = require('express');
const router = express.Router();   
const controller = require('../controllers/index')


router.get('/getMostReaded', controller.home.getMostReaded)
router.get('/getLastLoaded', controller.home.getLastLoaded)
router.get('/getLastActual', controller.home.getLastActual)
router.get('/getMagazines', controller.home.getMagazines)
router.get('/getCategories', controller.home.getCategories)
router.get('/getEditors', controller.home.getEditors)
router.get('/getMagazineHeader', controller.home.getMagazineHeader)
router.get('/getCategoryHeader', controller.home.getCategoryHeader)

module.exports = {
    home: router
}