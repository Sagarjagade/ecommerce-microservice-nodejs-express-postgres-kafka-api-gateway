import express from 'express'
import logger from './config/logger.js';
import morgan from 'morgan';
import rateLimiter from './middleware/rateLimiter.middleware.js';
import authenticate from './middleware/auth.middleware.js';
import helmet from 'helmet';
import cors from 'cors';
import routes from './routes/index.js';
const app = express();
import requestId from './middleware/requestId.middleware.js';
import errorMiddleware from './middleware/error.middleware.js';

app.use((req, res, next) => {
    console.log(req.method, req.originalUrl);
    next();
});
app.use(express.json());
/**
 * Security Headers
 */
app.use(helmet());


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
app.use(rateLimiter);
app.use(requestId);

/** morgan logger */
app.use(
    morgan(
        "[:date[iso]] :method :url :status :response-time ms",
        {
            stream: logger.stream,
        }
    )
)

app.use(authenticate);
app.use(routes);


app.get("/health", (req, res) => {
    logger.info("Server Started");
    return res.status(200).json({
        success: true,
        message: "API Gateway is running"
    });
});
app.use(errorMiddleware);

export default app