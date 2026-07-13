import express from "express";
import authProxy from "../proxy/auth.proxy.js";
const router = express.Router();

router.use("/api/auth", authProxy);
export default router;