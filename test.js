
import logger from "./packages/logger/logger.js";
import { NotFoundError } from "./packages/errors/index.js";
import response from "./packages/response/index.js";
import { ROLES, TOPICS, HTTP_STATUS, PRODUCT_STATUS, MESSAGE } from "./packages/constants/index.js";
import express from "express";
const app = express();

//logger
logger.info("Logger Working");
logger.error("Database Error");
logger.warn("Warning Message");

//error
// throw new NotFoundError("Product not found");



//response
app.get("/", (req, res) => {
    return response.success(res, {
        id: 1,
        name: "Laptop",
    });
});

app.post("/", (req, res) => {
    return response.created(res, {
        id: 2,
        name: "Phone",
    });
});

app.put("/", (req, res) => {
    return response.updated(res, {
        id: 1,
        name: "Updated Laptop",
    });
});

app.delete("/", (req, res) => {
    return response.deleted(res);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});