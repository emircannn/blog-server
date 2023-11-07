const {prisma} = require('../db/connectDb')

exports.add= async (req)=>{
    try {
        const {comment, email,name,actualId,magazineId,textId } = req.body
        const json = await prisma.comment.create({
            data: {
                comment,
                email,
                name,
                actualId,
                magazineId,
                textId
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
        const perPage = 6
        const skip = (page - 1) * perPage;
        const json = await prisma.comment.findMany({
            select: {
                email: true,
                comment:true,
                name: true,
                id: true,
                createdAt: true,
                updatedAt: true,
                text: {
                    select: {
                        title: true,
                    }
                },
                magazine: {
                    select: {
                        title: true,
                    }
                },
                actual: {
                    select: {
                        title: true,
                    }
                }
            },
            skip: skip,
            take: perPage,
            orderBy: {
                createdAt: 'desc'
            }
        })
        const totalTexts = await prisma.comment.count()
        const totalPages = Math.ceil(totalTexts / perPage);
        return {json, totalPages}
    } catch (error) {
        throw new Error(error)
    }
}

exports.delete= async (req)=>{
    try {
        const {id } = req.query
        const json = await prisma.comment.delete({
            where: {
                id
            }
        })
        return json
    } catch (error) {
        throw new Error(error)
    }
}