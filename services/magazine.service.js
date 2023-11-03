const {prisma} = require('../db/connectDb')
const utils = require('../utils/index')

exports.getAll= async (req)=>{
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