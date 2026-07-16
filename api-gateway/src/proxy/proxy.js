import { createProxyMiddleware, fixRequestBody } from "http-proxy-middleware";
import services from "../config/services.js";
import dotenv from "dotenv";
dotenv.config({ path: `${process.cwd()}/.env` });

const proxy = (serviceName) => {
    const service = services[serviceName];
    return createProxyMiddleware({
        target: service.target,
        changeOrigin: true,

        pathRewrite: (path) => `/api/${serviceName}${path}`,

        on: {
            proxyReq: (proxyReq, req) => {
                proxyReq.setHeader("x-request-id", req.requestId);
                fixRequestBody(proxyReq, req);
            },
        },
    });
};

export default proxy;