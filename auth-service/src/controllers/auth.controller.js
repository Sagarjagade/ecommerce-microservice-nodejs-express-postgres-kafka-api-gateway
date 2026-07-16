
import * as authService from '../services/auth.service.js'

const register = async (req, res) => {
    try {
        const user = await authService.register(req.body)

        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const login = async (req, res) => {

    try {
        const token = await authService.login(req.body)

        res.status(200).json(token)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const refresh_token = async (req, res) => {
    try {
        let token = req.headers.authorization.split(" ")[1];

        let access_token = await authService.refresh_token(token)

        res.status(200).json({
            message: access_token.message,
            data: [access_token]
        })
    } catch (err) {
        res.status(500).json({
            message: err, message
        })
    }
}

const logout = async (req, res) => {
    try {
        const body = req.headers.authorization.split(" ")[1]

        const logoutInfo = await authService.logout(body)

        res.status(200).json(logoutInfo)
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

const profile = async (req, res) => {
    try {

        const user_id = req.user.id

        const getProfile = await authService.fetchProfile(user_id)

        res.status(200).json(getProfile)
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
    profile
}