const {prisma} = require('../db/connectDb')
const utils = require('../utils/index')
const fileService = require('./file.service')

exports.getAll= async ()=>{
    try {
        const json = await prisma.category.findMany({
            select: {
                name: true,
                id: true,
                seo: true,
                image: true,
                createdAt: true,
                updatedAt: true,
                articles: {
                    select: {
                        _count: true,
                    }
                }
            }
        })
        return json
    } catch (error) {
        throw new Error(error)
    }
}
exports.add= async (req, res)=>{
    try {
        const {name} = req.query
        const findedCategory = await prisma.category.findUnique({where: {name}})

        if(findedCategory) {
            throw new Error('Bu kategori halihazırda mevcut')
        }

        const seo = utils.helpers.convertToSEOText(name)
        const str = await fileService.uploadFile(req, res)
            const json = await prisma.category.create({
                data: {
                    name,
                    seo,
                    image: str
                }
            })
            return json
    } catch (error) {
        throw new Error(error)
    }
}
exports.edit= async (req, res)=>{
    try {
        const {seo,name} = req.query
        const findedCategory = await prisma.category.findUnique({where: {seo}})
        const str = await fileService.uploadFile(req, res)
        const _seo = utils.helpers.convertToSEOText(name)
    
        if(str) {
            const isDeleted = utils.helpers.deleteFromDisk(findedCategory.image ? findedCategory.image.split('uploads/')[1] : '')
            if(isDeleted) {
                    const json = await prisma.category.update({
                        where: {seo},
                        data: {
                            name,
                            seo: _seo,
                            image: str
                        }
                    })
                    return json
            } else {throw new Error('Hata')}
        } else {
            const json = await prisma.category.update({
                where: {seo},
                data: {
                    name,
                    seo: _seo
                }
            })
            return json
        }
    } catch (error) {
        throw new Error(error)
    }
}

exports.delete = async (req, res) => {
    try {
        const {seo} = req.query
        const findedCategory = await prisma.category.findUnique({where: {seo}})
        const isDeleted = utils.helpers.deleteFromDisk(findedCategory.image ? findedCategory.image.split('uploads/')[1] : '')

        if(isDeleted) {
            return await prisma.category.delete({where: {seo}})
        }
        throw new Error('Hata')
    } catch (error) {
        throw new Error(error)
    }
}