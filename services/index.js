const userService = require('./user.service')
const authService = require('./auth.service')

module.exports = {
    user: userService,
    auth: authService
}