const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

const connectToDb = async() => {
    try {
        await prisma.$connect()
        console.log('DB Connection')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    connectToDb,
    prisma
}