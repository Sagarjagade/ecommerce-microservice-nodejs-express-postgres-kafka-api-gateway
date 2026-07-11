import app from './src/app.js'
import logger from './src/config/logger.js';
import dotenv from 'dotenv'
dotenv.config({ path: `${process.cwd()}/.env` })

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
});