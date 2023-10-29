const {prisma} = require('../db/connectDb')
const utils = require('../utils/index')
const jwt = require('jsonwebtoken')

exports.userLogin= async (req)=>{
    try {
        const {email, password} = req.body
        const existUser = await prisma.user.findUnique({where: {email, role: 'EDITOR'}})

        if(!existUser) {
            throw new Error('Böyle bir kullanıcı bulunamadı.')
        }

        const matchPassword = await utils.helpers.comparePassword(password, existUser.password)

        if(!matchPassword) {
            throw new Error('Hatalı Şifre.')
        }

        if(existUser.isConfirm === false) {
            throw new Error('Admin tarafından onaylanmadan erişim sağlayamazsınız!')
        }

        return existUser
    } catch (error) {
        throw new Error(error)
    }
}

exports.adminLogin= async (req)=>{
    try {
        const {email, password} = req.body
        const existUser = await prisma.user.findUnique({where: {email, role: 'ADMIN'}})

        if(!existUser) {
            throw new Error('Böyle bir kullanıcı bulunamadı.')
        }

        const matchPassword = await utils.helpers.comparePassword(password, existUser.password)

        if(!matchPassword) {
            throw new Error('Hatalı Şifre.')
        }

        return existUser
    } catch (error) {
        throw new Error(error)
    }
}

exports.verifyUserToken= async (req)=>{
    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token.split(" ")[1], process.env.SECRET_KEY );
        
        if(!decoded) {
            return null
        }

        const user = await prisma.user.findUnique({where: {id: decoded.id}, 
            select: {name: true, username: true, email: true, id: true, role: true, image: true, coverImage: true, isConfirm: true}},)
        if(!user) {
            return null
        }
        return user;

    } catch (error) {
        throw new Error(error)
    }
}

exports.adminSign= async(req)=>{
    try {
        const {name,username, email, password} = req.body
        const hashedPassword = await utils.helpers.hashPassword(password)
        return await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                username,
                role: "ADMIN",
                isConfirm: true
            }
        })
    } catch (error) {
        throw new Error(error)
    }
}