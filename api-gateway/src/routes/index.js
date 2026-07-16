import express from "express";
import proxy from "../proxy/proxy.js";
const router = express.Router();

router.use("/api/auth", proxy("auth"));

export default router;