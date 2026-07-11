import express from 'express'
import logger from './config/logger.js';
import morgan from 'morgan';
const app = express();

app.use(express.json());
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