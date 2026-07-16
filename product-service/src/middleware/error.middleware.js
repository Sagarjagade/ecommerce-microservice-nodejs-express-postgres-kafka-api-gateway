
import logger from "../config/logger";
export default (err, req, res, next) => {

    logger.error(err.stack);

    return res.status(err.statusCode || 500).json({

        success: false,

        status: err.status || "error",

        message: err.message || "Internal Server Error"

    });

};