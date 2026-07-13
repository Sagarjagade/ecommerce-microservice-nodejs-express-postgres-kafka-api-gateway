import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import logger from "../config/logger.js";

dotenv.config();

const publicRoutes = [
    "/api/auth/login",
    "/api/auth/register",
    "/api/auth/refresh-token",
    "/health"
];

const authenticate = (req, res, next) => {

    // Skip authentication for public routes
    if (publicRoutes.some(route => req.path.startsWith(route))) {
        return next();
    }

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "Authorization header is missing"
        });
    }

    if (!authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            success: false,
            message: "Invalid authorization format"
        });
    }

    const token = authHeader.split(" ")[1];

    try {

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = decoded;

        next();

    } catch (error) {

        logger.error(error);

        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });

    }

};
export default authenticate;