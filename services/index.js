const userService = require('./user.service')
const authService = require('./auth.service')
const adminService = require('./admin.service')
const categoryService = require('./category.service')
const article = require('./article.service')
const actual = require('./actual.service')
const magazine = require('./magazine.service')

module.exports = {
    user: userService,
    auth: authService,
    admin: adminService,
    category: categoryService,
    article,
    actual,
    magazine
}