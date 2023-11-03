const userController = require('./user.controller')
const authController = require('./auth.controller')
const adminController = require('./admin.controller')
const categoryController = require('./category.controller')
const articleController = require('./article.controller')
const actual = require('./actual.controller')
const magazine = require('./magazine.controller')

module.exports={
    userController,
    authController,
    adminController,
    categoryController,
    articleController,
    actual,
    magazine
}