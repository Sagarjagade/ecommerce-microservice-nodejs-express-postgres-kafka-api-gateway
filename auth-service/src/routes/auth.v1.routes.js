import express from 'express'
const router = express.Router()
import * as authController from '../controllers/auth.controller.js'
import { registerSchema, loginSchema } from '../validators/auth.validation.js'
import validate from '../middleware/auth.middleware.js'
import { verifyJWTToken } from '../utils/jwt.js'

router.post('/login', validate(loginSchema), authController.login)

router.post('/register', validate(registerSchema), authController.register)

router.post('/refresh_token', authController.refresh_token)

router.post('/logout', authController.logout)

router.post('/profile', verifyJWTToken, authController.profile)

router.get('/verify', verifyJWTToken)

export default router