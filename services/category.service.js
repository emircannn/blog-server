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