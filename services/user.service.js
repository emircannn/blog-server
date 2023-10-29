const {prisma} = require('../db/connectDb')
const utils = require('../utils/index')
const fileService = require('./file.service')

exports.getAll= async ()=>{
    try {
        return await prisma.user.findMany()
    } catch (error) {
        throw new Error(error)
    }
}

exports.createUser= async(req)=>{
    try {
        const {name,username, email, password} = req.body
        const hashedPassword = await utils.helpers.hashPassword(password)
        return await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                username
            }
        })
    } catch (error) {
        throw new Error(error)
    }
}

exports.getUser= async(req)=>{
    try {
        const {username} = req.query
        return await prisma.user.findUnique({
            where: {
                username
            }
        })
    } catch (error) {
        throw new Error(error)
    }
}

exports.updateImage= async (req, res)=>{
    try {
        const {username} = req.query

        const str = await fileService.uploadFile(req, res)
        const findedUser = await prisma.user.findUnique({where: {username}, select: {image: true}})
        const isDeleted = utils.helpers.deleteFromDisk(findedUser.image ? findedUser.image.split('uploads/')[1] : '')

        if(isDeleted) {
            await prisma.user.update({
                where: {username},
                data: {image: str}
            })
            return
        }
        throw new Error('Hata')

    } catch (error) {
        throw new Error(error)
    }
}

exports.updateCoverImage= async (req, res)=>{
    try {
        const {username} = req.query

        const str = await fileService.uploadFile(req, res)
        const findedUser = await prisma.user.findUnique({where: {username}, select: {coverImage: true}})
        const isDeleted = utils.helpers.deleteFromDisk(findedUser.coverImage ? findedUser.coverImage.split('uploads/')[1] : '')

        if(isDeleted) {
            await prisma.user.update({
                where: {username},
                data: {coverImage: str}
            })
            return
        }
        throw new Error('Hata')

    } catch (error) {
        throw new Error(error)
    }
}

exports.updateUser= async (req)=>{
    try {
        const {userName} = req.query
        const {name, username, email, about, twitter, twitterLink, instagramLink, instagram, facebook, facebookLink, youtube, youtubeLink} = req.body

        const hasEmail = email && await prisma.user.findUnique({where: {email: email}})
        const hasUsername =username && await prisma.user.findUnique({where: {username: username}})
        const isUsername = await prisma.user.findUnique({where: {username: userName}})

        if(hasEmail) {
            throw new Error('Bu email halihazırda kullanımda')
        }
        if(hasUsername) {
            throw new Error('Bu kullanıcı adı halihazırda kullanımda')
        }
        if(!isUsername) {
            throw new Error('Böyle bir kullanıcı mevcut değil')
        }

        const json = await prisma.user.update({where: {username: userName}, 
            data: {name, username, email, about, twitter, twitterLink, instagramLink, instagram, facebook, facebookLink, youtube, youtubeLink}})
        return json

    } catch (error) {
        throw new Error(error)
    }
}
