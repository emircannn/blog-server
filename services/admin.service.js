const {prisma} = require('../db/connectDb')
const utils = require('../utils/index')

exports.getEditor= async (req)=>{
    try {
        const json = await prisma.user.findMany({where: {role: 'EDITOR', isConfirm: true}})
        return json
    } catch (error) {
        throw new Error(error)
    }
}
exports.getEditorRequest= async (req)=>{
    try {
        const json = await prisma.user.findMany({where: {role: 'EDITOR', isConfirm: false}})
        return json
    } catch (error) {
        throw new Error(error)
    }
}
exports.confirmUser= async (req)=>{
    try {
        const {username} = req.query
        const json = await prisma.user.update({where: {username}, data: {isConfirm: true}})
        return json
    } catch (error) {
        throw new Error(error)
    }
}
exports.deleteUser= async (req)=>{
    try {
        const {username} = req.query
        const findedUser = await prisma.user.findUnique({where: {username}, select: {coverImage: true, image: true}})
        utils.helpers.deleteFromDisk(findedUser.coverImage ? findedUser.coverImage.split('uploads/')[1] : '')
        utils.helpers.deleteFromDisk(findedUser.image ? findedUser.image.split('uploads/')[1] : '')
        const json = await prisma.user.delete({where: {username}})

        return json
    } catch (error) {
        throw new Error(error)
    }
}