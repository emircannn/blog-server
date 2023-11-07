const userController = require('./user.controller')
const authController = require('./auth.controller')
const adminController = require('./admin.controller')
const categoryController = require('./category.controller')
const articleController = require('./article.controller')
const actual = require('./actual.controller')
const magazine = require('./magazine.controller')
const contribution = require('./contribution.controller')
const settings = require('./settings.controller')
const home = require('./home.controller')
const comment = require('./comment.controller')

module.exports={
    userController,
    authController,
    adminController,
    categoryController,
    articleController,
    actual,
    magazine,
    contribution,
    settings,
    home,
    comment
}