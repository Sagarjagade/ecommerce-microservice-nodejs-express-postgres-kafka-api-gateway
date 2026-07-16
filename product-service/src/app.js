const express = require("express");
import express from "express";
import helmet from "helmet";
import cors from "cors";
import routes from "./routes/index.js";
import errorMiddleware from "./middleware/error.middleware.js";
const app = express();

app.use(helmet());

app.use(cors());

app.use(express.json());

app.use("/api/product", routes);

app.use(errorMiddleware);

export default app;