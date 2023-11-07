const {prisma} = require('../db/connectDb')

exports.getMostReaded = async (req) => {
    try {
        const data = await prisma.text.findMany({
            select: {
                title: true,
                image: true,
                seo: true,
                id: true,
                createdAt: true,
                readCount: true,
                category: {
                    select: {
                        name: true,
                    }
                },
                user: {
                    select: {
                        image: true,
                        username: true,
                        name: true,
                        about: true,
                        twitterLink: true,
                        facebookLink: true,
                        youtubeLink: true,
                        instagramLink: true,
                    }
                }
            },
            orderBy: {
                readCount: 'desc'
            },
            take: 3
        })
    
        return data
    } catch (error) {
        throw new Error(error)
    }
}

exports.getLastLoaded = async (req) => {
    try {
        const data = await prisma.text.findMany({
            select: {
                title: true,
                image: true,
                seo: true,
                id: true,
                createdAt: true,
                readCount: true,
                category: {
                    select: {
                        name: true,
                    }
                },
                user: {
                    select: {
                        image: true,
                        username: true,
                        name: true,
                        about: true,
                        twitterLink: true,
                        facebookLink: true,
                        youtubeLink: true,
                        instagramLink: true,
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            },
            take: 4
        })
    
        return data
    } catch (error) {
        throw new Error(error)
    }
}

exports.getLastActual = async (req) => {
    try {
        const data = await prisma.actual.findMany({
            select: {
                title: true,
                image: true,
                seo: true,
                id: true,
                createdAt: true,
                readCount: true,
                user: {
                    select: {
                        image: true,
                        username: true,
                        name: true,
                        about: true,
                        twitterLink: true,
                        facebookLink: true,
                        youtubeLink: true,
                        instagramLink: true,
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            },
            take: 4
        })
    
        return data
    } catch (error) {
        throw new Error(error)
    }
}

exports.getMagazines = async (req) => {
    try {
        const data = await prisma.magazine.findMany({
            select: {
                title: true,
                image: true,
                createdAt: true,
                desc: true,
                seo: true,
                contributions: {
                    select: {
                        id: true,
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            },
            take: 3
        })
    
        return data
    } catch (error) {
        throw new Error(error)
    }
}

exports.getCategories = async (req) => {
    try {
        const data = await prisma.category.findMany({
            select: {
                image: true,
                name: true,
                seo: true,
                articles: {
                    select: {
                        id: true,
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            },
            take: 4
        })
    
        return data
    } catch (error) {
        throw new Error(error)
    }
}

exports.getEditors = async (req) => {
    try {
        const data = await prisma.user.findMany({
            select: {
                name: true,
                username: true,
                coverImage: true,
                image: true
            }
        })
    
        return data
    } catch (error) {
        throw new Error(error)
    }
}

exports.getMagazineHeader = async (req) => {
    try {
        const data = await prisma.magazine.findMany({
            select: {
                title: true,
                seo: true,
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
exports.getCategoryHeader = async (req) => {
    try {
        const data = await prisma.category.findMany({
            select: {
                name: true,
                seo: true,
            }
        })
    
        return data
    } catch (error) {
        throw new Error(error)
    }
}