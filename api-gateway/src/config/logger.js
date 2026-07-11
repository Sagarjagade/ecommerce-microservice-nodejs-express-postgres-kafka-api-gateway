
import { createLogger, format, transports } from "winston";

const logger = createLogger({
    level: "info",

    format: format.combine(
        format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss",
        }),
        format.errors({ stack: true }),
        format.printf(({ timestamp, level, message, stack }) => {
            return `${timestamp} [${level.toUpperCase()}] : ${stack || message}`;
        })
    ),

    transports: [

        new transports.Console(),

        new transports.File({
            filename: "src/logs/error.log",
            level: "error",
        }),

        new transports.File({
            filename: "src/logs/combined.log",
        }),
    ],
});

/**
 * Morgan Stream
 */
logger.stream = {
    write: (message) => {
        logger.info(message.trim());
    },
};



export default logger