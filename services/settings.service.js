const {prisma} = require('../db/connectDb')
const utils = require('../utils/index')

exports.create= async (req)=>{
    try {
        const {about, email, phone, twitter, twitterLink, instagram, instagramLink, patreon} = req.body
        return await prisma.settings.create({
            data: {
                about_us: about,
                email,
                phone,
                twitter,
                twitterLink,
                instagram,
                instagramLink,
                patreon
            }
        })
    } catch (error) {
        throw new Error(error)
    }
}

exports.update= async (req)=>{
    try {
        const {id} = req.query
        const {about, email, phone, twitter, twitterLink, showReadCount, instagram, instagramLink, patreon} = req.body
        return await prisma.settings.update({
            where: {
                id
            },
            data: {
                about_us: about,
                email,
                phone,
                twitter,
                twitterLink,
                showReadCount,
                instagram,
                instagramLink,
                patreon
            }
        })
    } catch (error) {
        throw new Error(error)
    }
}

exports.settings = async () => {
    try {
        const data = await prisma.settings.findMany()
        return data[0]
    } catch (error) {
        throw new Error(error)
    }
}

exports.getSliderTexts = async (req) => {
    try {
        const page = req.query.page || 1
        const perPage = 6
        const skip = (page - 1) * perPage;
        const data = await prisma.text.findMany({
            select: {
                title: true,
                image: true,
                seo: true,
                id: true,
                isSlider: true,
                category: {
                    select: {
                        name: true,
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
        return {data, totalPages}
    } catch (error) {
        throw new Error(error)
    }
}

exports.getSlider = async () => {
    try {
        const data = await prisma.text.findMany({
            where: {
                isSlider: true
            },
            select: {
                title: true,
                image: true,
                seo: true,
                id: true,
                text: true,
                readCount: true,
                createdAt: true,
                user: {
                    select: {
                        username: true,
                        name: true,
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
        return data
    } catch (error) {
        throw new Error(error)
    }
}

exports.slider = async (req) => {
    try {
        const {seo} = req.query
        const {isSlider} = req.body
        const data = await prisma.text.update({
            where: {
                seo
            },
            data: {
                isSlider
            }
        })
        return data
    } catch (error) {
        throw new Error(error)
    }
}


