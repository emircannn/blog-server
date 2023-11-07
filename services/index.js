const userService = require('./user.service')
const authService = require('./auth.service')
const adminService = require('./admin.service')
const categoryService = require('./category.service')
const article = require('./article.service')
const actual = require('./actual.service')
const magazine = require('./magazine.service')
const contribution = require('./contribution.service')
const settings = require('./settings.service')
const home = require('./home.service')
const comment = require('./comment.service')

module.exports = {
    user: userService,
    auth: authService,
    admin: adminService,
    category: categoryService,
    article,
    actual,
    magazine,
    contribution,
    settings,
    home,
    comment
}