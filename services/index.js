const userService = require('./user.service')
const authService = require('./auth.service')
const adminService = require('./admin.service')
const categoryService = require('./category.service')

module.exports = {
    user: userService,
    auth: authService,
    admin: adminService,
    category: categoryService,
}