const userRouter = require('./user.router')
const authRouter = require('./auth.router')
const adminRouter = require('./admin.router')
const categoryRouter = require('./category.router')
const articleRouter = require('./article.router')
const actualRouter = require('./actual.router')
const magazineRouter = require('./magazine.router')
const contributionRouter = require('./contribution.router')
const settingsRouter = require('./settings.router')
const homeRouter = require('./home.router')
const commentRouter = require('./comment.router')

module.exports = {
    userRouter,
    authRouter,
    adminRouter,
    categoryRouter,
    articleRouter,
    actualRouter,
    magazineRouter,
    contributionRouter,
    settingsRouter,
    homeRouter,
    commentRouter
}