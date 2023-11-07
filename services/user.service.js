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
        const findedUsername = await prisma.user.findUnique({where: {username}})
        const findedEmail = await prisma.user.findUnique({where: {email}})

        if (findedEmail) {
            throw new Error('Bu email halihazırda kullanımda')
        }

        if (findedUsername) {
            throw new Error('Bu kullanıcı adı halihazırda kullanımda')
        }

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
            },
            select: {
                about:true,
                coverImage:true,
                image:true,
                email:true,
                username: true,
                name:true,
                twitter:true,
                twitterLink:true,
                instagram:true,
                instagramLink:true,
                youtube:true,
                youtubeLink:true,
                createdAt:true,
                facebook:true,
                facebookLink:true,
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

exports.updatePassword= async (req)=>{
    try {
        const {username} = req.query
        const {currentPassword, password} = req.body

        const user = await prisma.user.findUnique({where: {username}, select: {password: true}})
        const comparePassword = await utils.helpers.comparePassword(currentPassword, user.password)

        if(comparePassword) {
            const hashedPassword = await utils.helpers.hashPassword(password)
            const json = await prisma.user.update({where: {username}, 
                data: {password: hashedPassword}})
                return json
            }
        else {
            throw new Error('Mevcut Şifreniz Hatalı')
        }
    } catch (error) {
        throw new Error(error)
    }
}

exports.getUserTexts= async(req)=>{
    try {
        const {username} = req.query
        const page = req.query.page || 1
        const perPage = 6
        const skip = (page - 1) * perPage;
        const json = await prisma.text.findMany({
            where: {
                user: {
                    username
                }
            },
            select: {
                category: {
                    select: {
                        image: true,
                        name: true,
                        id: true,
                        seo: true,
                    },
                },
                createdAt: true,
                image: true,
                id: true,
                readCount: true,
                seo: true,
                title: true,
                user: {
                    select: {
                        image: true,
                        id: true,
                        name: true,
                        username: true,
                        twitterLink: true,
                        facebookLink: true,
                        instagramLink: true,
                        youtubeLink: true,
                        about: true,
                    }
                }
            },
            skip: skip,
            take: perPage,
            orderBy: {
                createdAt: 'desc'
            }
        })
        const totalTexts = await prisma.text.count({where: {user: {username}}})
        const totalPages = Math.ceil(totalTexts / perPage);
        return {json, totalPages}
    } catch (error) {
        throw new Error(error)
    }
}

exports.getUserActual= async(req)=>{
    try {
        const {username} = req.query
        const page = req.query.page || 1
        const perPage = 6
        const skip = (page - 1) * perPage;
        const json = await prisma.actual.findMany({
            where: {
                user: {
                    username
                }
            },
            select: {
                createdAt: true,
                image: true,
                id: true,
                readCount: true,
                seo: true,
                title: true,
                user: {
                    select: {
                        image: true,
                        id: true,
                        name: true,
                        username: true,
                        twitterLink: true,
                        facebookLink: true,
                        instagramLink: true,
                        youtubeLink: true,
                        about: true,
                    }
                }
            },
            skip: skip,
            take: perPage,
            orderBy: {
                createdAt: 'desc'
            }
        })
        const totalTexts = await prisma.actual.count({where: {user: {username}}})
        const totalPages = Math.ceil(totalTexts / perPage);
        return {json, totalPages}
    } catch (error) {
        throw new Error(error)
    }
}

exports.getUserContribution= async(req)=>{
    try {
        const {username} = req.query
        const page = req.query.page || 1
        const perPage = 6
        const skip = (page - 1) * perPage;
        const json = await prisma.contribution.findMany({
            where: {
                user: {
                    username
                }
            },
            select: {
                title: true,
                endPage: true,
                startPage: true,
                file: true,
                createdAt: true,
                magazine: {
                    select: {
                        file: true,
                        seo: true,
                        title: true,
                        readCount:true,
                        image: true,
                    }
                }
            },
            skip: skip,
            take: perPage,
            orderBy: {
                createdAt: 'desc'
            }
        })
        const totalTexts = await prisma.contribution.count({where: {user: {username}}})
        const totalPages = Math.ceil(totalTexts / perPage);
        return {json, totalPages}
    } catch (error) {
        throw new Error(error)
    }
}