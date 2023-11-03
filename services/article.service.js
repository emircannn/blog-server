const {prisma} = require('../db/connectDb')
const utils = require('../utils/index')
const fileService = require('./file.service')

exports.getAll= async (req)=>{
    try {
        const {page} = req.query || 1
        const perPage = 6
        const skip = (page - 1) * perPage;
        const json = await prisma.text.findMany({
            select: {
                category: {
                    select: {
                        image: true,
                        name: true,
                        id: true,
                        seo: true,
                    }
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
        const totalTexts = await prisma.text.count()
        const totalPages = Math.ceil(totalTexts / perPage);
        return {json, totalPages}
    } catch (error) {
        throw new Error(error)
    }
}

exports.getUserText= async (req)=>{
    try {
        const {username} = req.query || 1
        const page = req.query.page || 1
        const perPage = req.query.perPage || 6
        const skip = (page - 1) * perPage;
        const json = await prisma.text.findMany({
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
            },
            where: {
                user : {
                    username
                }
            }
        })
        const totalTexts = await prisma.text.count({
            where: {
                user: {
                    username
                }
            }
        })
        const totalPages = Math.ceil(totalTexts / perPage);
        return {json, totalPages}
    } catch (error) {
        throw new Error(error)
    }
}

exports.create= async (req, res)=>{
    try {
        const {name, category, text, note, user} = req.body
        const seo = utils.helpers.convertToSEOText(name)

        const findedText = await prisma.text.findUnique({where: {title: name}})
        if(findedText) {
            utils.helpers.deleteFromDisk(req.files.textImage[0].filename)
            throw new Error('Bu isim halihazırda kullanımda')
        }
        const textImage = await utils.helpers.filenameConverter(req.files.textImage[0].filename)

        const json = await prisma.text.create({
            data: {
                image: textImage,
                seo,
                text,
                title: name,
                categoryId: category,
                userId: user,
                note
            }
        })
        return json
    } catch (error) {
        throw new Error(error)
    }
}

exports.delete = async (req, res) => {
    try {
        const {seo} = req.query
        const findedText = await prisma.text.findUnique({where: {seo}})
        const isDeleted = utils.helpers.deleteFromDisk(findedText.image ? findedText.image.split('uploads/')[1] : '')

        if(isDeleted) {
            return await prisma.text.delete({where: {seo}})
        }
        throw new Error('Hata')
    } catch (error) {
        throw new Error(error)
    }
}

exports.update= async (req, res)=>{
    try {
        const {seo} = req.query
        const {name, category, text, note} = req.body
        const _seo = name && utils.helpers.convertToSEOText(name)

        const findedText = name ? await prisma.text.findUnique({where: {title: name}}) : undefined
        const _findedText = await prisma.text.findUnique({where: {seo}})
        if(findedText) {
            if (req?.files?.textImage) {
                utils.helpers.deleteFromDisk(req?.files?.textImage[0]?.filename)
            }
            throw new Error('Bu isim halihazırda kullanımda')
        }
        const textImage = req?.files?.textImage ?  await utils.helpers.filenameConverter(req?.files?.textImage[0]?.filename) : undefined
        const isDeleted = textImage ? utils.helpers.deleteFromDisk(_findedText?.image ? _findedText?.image?.split('uploads/')[1] : '') : true
        if (isDeleted) {
            const json = await prisma.text.update({
                where: {
                    seo
                },
                data: {
                    image: textImage,
                    seo: _seo,
                    text,
                    title: name,
                    categoryId: category,
                    note
                }
            })
            return json
        }
        throw new Error('Hata')
    } catch (error) {
        throw new Error(error)
    }
}

exports.getText = async (req, res) => {
    try {
        const {seo} = req.query
        const findedText = await prisma.text.findUnique({where: {seo}, select: {
            categoryId: true,
            id: true,
            userId: true,
            image: true,
            note: true,
            seo: true,
            text: true,
            title: true,
            readCount: true,
        }})
        return findedText
    } catch (error) {
        throw new Error(error)
    }
}

exports.getTextWithSeo = async (req, res) => {
    try {
        const {seo} = req.query
        return await prisma.text.update({where: {seo}, data: { readCount: { increment: 1 } },
        select: {
            category: true,
            categoryId: true,
            comments: true,
            createdAt: true,
            image: true,
            note: true,
            readCount: true,
            seo: true,
            text: true,
            id: true,
            title: true,
            user: {
                select: {
                    name: true,
                    username: true,
                    image: true,
                    facebookLink: true,
                    twitterLink: true,
                    youtubeLink: true,
                    instagramLink: true,
                    about: true,
                    twitter: true,
                }
            }
        }
    })
    } catch (error) {
        throw new Error(error)
    }
}
