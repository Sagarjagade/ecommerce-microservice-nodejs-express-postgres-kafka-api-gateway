import express from 'express'
import logger from './config/logger.js';
import morgan from 'morgan';
import rateLimiter from './middleware/rateLimiter.middleware.js';
import helmet from 'helmet';
import cors from 'cors';

const app = express();

app.use(express.json());
/**
 * Security Headers
 */
app.use(helmet());
app.use(rateLimiter());

/**
 * CORS
 */
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "http://localhost:3000"
        ],

        credentials: true,
    })
);
/** morgan logger */
app.use(
    morgan(
        "[:date[iso]] :method :url :status :response-time ms",
        {
            stream: logger.stream,
        }
    )
)


app.get("/health", (req, res) => {
    logger.info("Server Started");
    return res.status(200).json({
        success: true,
        message: "API Gateway is running"
    });
});

export default app