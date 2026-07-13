import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import logger from "../config/logger.js";

dotenv.config({ path: `${process.cwd()}/.env` });

export default {
    AUTH_SERVICE: process.env.AUTH_SERVICE,
    PRODUCT_SERVICE: process.env.PRODUCT_SERVICE,
    ORDER_SERVICE: process.env.ORDER_SERVICE,
    PAYMENT_SERVICE: process.env.PAYMENT_SERVICE,
    NOTIFICATION_SERVICE: process.env.NOTIFICATION_SERVICE,
};