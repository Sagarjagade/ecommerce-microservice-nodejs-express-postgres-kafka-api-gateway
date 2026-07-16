import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import logger from "../config/logger.js";

dotenv.config({ path: `${process.cwd()}/.env` });



export default {
    auth: {
        target: process.env.AUTH_SERVICE,
        authRequired: false,
    },
    product: {
        target: process.env.PRODUCT_SERVICE,
        authRequired: true,
    },
    order: {
        target: process.env.ORDER_SERVICE,
        authRequired: true,
    },
};