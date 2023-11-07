const {prisma} = require('../db/connectDb')
const utils = require('../utils/index')

exports.getAll= async (req)=>{
    try {
        const page = req.query.page || 1
        const perPage = req.query.perPage || 8
        const skip = (page - 1) * perPage;
        const json = await prisma.magazine.findMany({
            select: {
                id: true,
                image: true,
                title: true,
                seo: true,
                createdAt: true,
            },
            skip: skip,
            take: perPage,
            orderBy: {
                createdAt: 'desc'
            }
        })
        const totalTexts = await prisma.magazine.count()
        const totalPages = Math.ceil(totalTexts / perPage);
        return {json, totalPages}
    } catch (error) {
        throw new Error(error)
    }
}
exports.all= async (req)=>{
    try {
        const page = req.query.page || 1
        const perPage = req.query.perPage || 6
        const skip = (page - 1) * perPage;
        const json = await prisma.magazine.findMany({
            select: {
                createdAt: true,
                id: true,
                image: true,
                readCount: true,
                title: true,
                seo: true,
                file: true,
                desc: true,
                contributions: {
                    select: {
                        createdAt: true,
                        endPage: true,
                        file: true,
                        startPage: true,
                        title: true,
                        id: true,
                        user: {
                            select: {
                                name: true,
                                username: true,
                                image: true,
                            }
                        }
                    }
                }
            },
            skip: skip,
            take: perPage,
            orderBy: {
                createdAt: 'desc'
            }
        })
        const totalTexts = await prisma.magazine.count()
        const totalPages = Math.ceil(totalTexts / perPage);
        return {json, totalPages}
    } catch (error) {
        throw new Error(error)
    }
}

exports.create= async (req)=>{
    try {
        const {title, desc} = req.body
        const seo = utils.helpers.convertToSEOText(title)

        const findedText = await prisma.magazine.findUnique({where: {title}})
        if(findedText) {
            utils.helpers.deleteFromDisk(req.files.textImage[0].filename)
            utils.helpers.deleteFromDisk(req.files.textFile[0].filename)
            throw new Error('Bu isim halihazırda kullanımda')
        }
        const textImage = await utils.helpers.filenameConverter(req.files.textImage[0].filename)
        const _file = await utils.helpers.filenameConverter(req.files.textFile[0].filename)

        const json = await prisma.magazine.create({
            data: {
                image: textImage,
                file:_file,
                seo,
                title,
                desc,
            }
        })
        return json
    } catch (error) {
        throw new Error(error)
    }
}

exports.delete = async (req) => {
    try {
        const {seo} = req.query
        const findedText = await prisma.magazine.findUnique({where: {seo}})
        const isDeletedImage = utils.helpers.deleteFromDisk(findedText.image ? findedText.image.split('uploads/')[1] : '')
        const isDeleteFile = utils.helpers.deleteFromDisk(findedText.file ? findedText.file.split('uploads/')[1] : '')

        if(isDeleteFile && isDeletedImage) {
            return await prisma.magazine.delete({where: {seo}})
        }
        throw new Error('Hata')
    } catch (error) {
        throw new Error(error)
    }
}

exports.update= async (req)=>{
    try {
        const {seo} = req.query
        const {title, desc} = req.body
        const _seo = title && utils.helpers.convertToSEOText(title)

        const findedText = title && await prisma.magazine.findUnique({where: {title}})
        if(findedText) {
            if (req?.files?.textImage || req?.files?.textFile) {
                req?.files?.textImage  && utils.helpers.deleteFromDisk(req?.files?.textImage[0]?.filename)
                req?.files?.textFile  && utils.helpers.deleteFromDisk(req?.files?.textFile[0]?.filename)
            }
            throw new Error('Bu isim halihazırda kullanımda')
        }
        const _findedText = await prisma.magazine.findUnique({where: {seo}})
        const textImage = req?.files?.textImage ?  await utils.helpers.filenameConverter(req?.files?.textImage[0]?.filename) : undefined
        const textFile = req?.files?.textFile ?  await utils.helpers.filenameConverter(req?.files?.textFile[0]?.filename) : undefined
        const isDeleted = textImage ? utils.helpers.deleteFromDisk(_findedText?.image ? _findedText?.image?.split('uploads/')[1] : '') : true
        const isDeletedFile = textFile ? utils.helpers.deleteFromDisk(_findedText?.file ? _findedText?.file?.split('uploads/')[1] : '') : true
        if (isDeleted && isDeletedFile) {
            const json = await prisma.magazine.update({
                where: {
                    seo
                },
                data: {
                    title,
                    desc,
                    seo: _seo,
                    file: textFile,
                    image: textImage
                }
            })
            return json
        }
        throw new Error('Hata')
    } catch (error) {
        throw new Error(error)
    }
}

exports.getMagazine = async (req) => {
    try {
        const {seo} = req.query
        return await prisma.magazine.update({
            where: {seo},
            data: {
                readCount: {increment: 1}
            },
            select: {
                createdAt: true,
                id: true,
                image: true,
                readCount: true,
                title: true,
                seo: true,
                file: true,
                comments: {
                    select: {
                        comment: true,
                        id: true,
                        name: true,
                        createdAt: true,
                    }
                },
                contributions: {
                    select: {
                        createdAt: true,
                        endPage: true,
                        file: true,
                        id: true,
                        startPage: true,
                        title: true,
                        user: {
                            select: {
                                name: true,
                                username: true,
                                about: true,
                                facebookLink: true,
                                twitterLink: true,
                                instagramLink: true,
                                youtubeLink: true,
                                image: true,
                            }
                        }
                    }
                }
            }
        })
    } catch (error) {
        throw new Error(error)
    }
}