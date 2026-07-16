
import services from "../config/services.js";
import logger from "../config/logger.js";
import { createProxyMiddleware, fixRequestBody } from "http-proxy-middleware";
import dotenv from "dotenv";
dotenv.config({ path: `${process.cwd()}/.env` });

const authProxy = createProxyMiddleware({
    target: services.auth.target,
    changeOrigin: true,

    pathRewrite: (path) => `/api/auth${path}`,

    on: {
        proxyReq: (proxyReq, req) => {
            // Forward Request ID to Auth Service
            proxyReq.setHeader("x-request-id", req.requestId);
            fixRequestBody(proxyReq, req);
        },
    },
});
export default authProxy;