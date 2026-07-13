
import services from "../config/services.js";
import logger from "../config/logger.js";
import { createProxyMiddleware, fixRequestBody } from "http-proxy-middleware";
import dotenv from "dotenv";
dotenv.config({ path: `${process.cwd()}/.env` });

// const authProxy = createProxyMiddleware({
//     target: services.AUTH_SERVICE,

//     changeOrigin: true,

//     logLevel: "silent",

//     onProxyReq: (proxyReq, req) => {
//         logger.log("Authenticated user:", req);
//         logger.info(
//             `[Gateway] ${req.method} ${req.originalUrl} -> ${services.AUTH_SERVICE}`
//         );

//         // Forward authenticated user to downstream service

//         if (req.user) {
//             proxyReq.setHeader(
//                 "x-user",
//                 JSON.stringify(req.user)
//             );
//         }
//     },
//     onProxyRes: (proxyRes, req, res) => {
//         console.log("Proxy Response:", proxyRes.statusCode);
//     },

//     onError: (err, req, res) => {

//         logger.error(err);

//         res.status(503).json({
//             success: false,
//             message: "Auth Service Unavailable",
//         });
//     },
// });

const authProxy = createProxyMiddleware({
    target: services.AUTH_SERVICE,
    changeOrigin: true,

    pathRewrite: (path) => `/api/auth${path}`,

    on: {
        proxyReq: (proxyReq, req) => {
            fixRequestBody(proxyReq, req);
        },
    },
});
export default authProxy;