import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User_model.js'
import { generateJWTToken, verifyJWTToken, generateNewRefreshToken } from '../utils/jwt.js'
import RefreshTokens from '../models/refersh_token_model.js'

const register = async (body) => {
    const { name, password, email } = body

    const exist = await User.findOne({
        where: { email }
    })

    if (exist) {
        throw new Error("Email Already exist")
    }

    const hash = await bcrypt.hash(password, 10)
    const user = await User.create({
        name,
        email,
        password: hash,
    })

    const { access_token, refresh_Token } = await generateJWTToken(user.id)

    const storeRefershToken = await RefreshTokens.create({
        user_id: user.id,
        token: refresh_Token,
        expires_at: new Date()
    })

    return {
        message: "User registered successfully",
        data: [{
            id: user.id,
            email: user.email,
            name: user.name,
            access_token: access_token,
            refresh_Token: refresh_Token
        }]
    }
}

const login = async (body) => {
    const { email, password } = body

    const user = await User.findOne({
        where: { email }
    })

    if (!user) {
        throw new Error("Email id Doesn't exist")
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw new Error("Password Doesn't matched")
    }

    const token = await generateJWTToken(user.id)

    const storeRefershToken = await RefreshTokens.create({
        user_id: user.id,
        token: token.refresh_Token,
        expires_at: new Date()
    })

    return {
        message: "Login successfully",
        data: [{
            id: user.id,
            token: token
        }]
    }
}

const refresh_token = async (refresh_Token) => {

    if (!refresh_Token) {
        return res.status(401).json({
            message: "Refresh Token is required"
        })
    }

    try {

        const generateNewAccessToken = await generateNewRefreshToken(refresh_Token);

        return {
            message: "Generate access Token successfully",
            access_token: generateNewAccessToken.accessToken
        }
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

const logout = async (refresh_Token) => {
    let deleteTokenDB = await RefreshTokens.destroy({
        where: { token: refresh_Token }
    })

    return {
        message: "Logged out successfully"
    }
}

const fetchProfile = async (user_id) => {
    try {
        let getUserInfo = await User.findOne({
            where: { id: user_id }
        })

        if (!getUserInfo) {
            throw new Error("No Details Found")
        }

        return {
            "message": "Fetch Profile Successfully",
            data: [
                {
                    name: getUserInfo.name,
                    email: getUserInfo.email
                }
            ]

        }
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

export {
    register,
    login,
    refresh_token,
    logout,
    fetchProfile
}