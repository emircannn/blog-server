const {prisma} = require('../db/connectDb')
const utils = require('../utils/index')

exports.create= async (req)=>{
    try {
        const {endPage, startPage, title, magazineId, userId } = req.body

        const file = await utils.helpers.filenameConverter(req.files.filePdf[0].filename)

        const json = await prisma.contribution.create({
            data: {
                endPage,
                file,
                startPage,
                title,
                magazineId,
                userId
            }
        })
        return json
    } catch (error) {
        throw new Error(error)
    }
}

exports.all= async (req)=>{
    try {
        const page = req.query.page || 1
        const perPage = req.query.perPage || 10
        const username = req.query.username
        const skip = (page - 1) * perPage;
        const json = await prisma.contribution.findMany({
            where: {
                user: {
                    username
                }
            },
            select: {
                magazine: {
                    select: {
                        image: true,
                        title: true,
                        seo: true,
                        file: true,
                    }
                },
                endPage: true,
                startPage: true,
                file: true,
                createdAt: true,
                id: true,
                title:true

            },
            skip: skip,
            take: perPage,
            orderBy: {
                createdAt: 'desc'
            }
        })
        const totalTexts = await prisma.contribution.count({where: {user : {username}}})
        const totalPages = Math.ceil(totalTexts / perPage);
        return {json, totalPages}
    } catch (error) {
        throw new Error(error)
    }
}

exports.delete = async (req) => {
    try {
        const {id} = req.query
        const findedText = await prisma.contribution.findUnique({where: {id}})
        const isDeleteFile = utils.helpers.deleteFromDisk(findedText.file ? findedText.file.split('uploads/')[1] : '')

        if(isDeleteFile) {
            return await prisma.contribution.delete({where: {id}})
        }
        throw new Error('Hata')
    } catch (error) {
        throw new Error(error)
    }
}

exports.update= async (req)=>{
    try {
        const {id} = req.query
        const {endPage, startPage, title, magazineId} = req.body

        const file = req.files.filePdf && await utils.helpers.filenameConverter(req.files.filePdf[0].filename)

        const _findedText = await prisma.contribution.findUnique({where: {id}})

        const isDeletedFile = file ? utils.helpers.deleteFromDisk(_findedText?.file ? _findedText?.file?.split('uploads/')[1] : '') : true
        if (isDeletedFile) {
            const json = await prisma.contribution.update({
                where: {
                    id
                },
                data: {
                    file,
                    endPage,
                    startPage,
                    title,
                    magazineId
                }
            })
            return json
        }
        throw new Error('Hata')
    } catch (error) {
        throw new Error(error)
    }
}
