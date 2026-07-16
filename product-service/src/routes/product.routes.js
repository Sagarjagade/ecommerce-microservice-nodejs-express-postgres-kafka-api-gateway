import express from "express";
const router = express.Router();
import controller from "../controllers/product.controller.js";
import validate from "../middleware/validate.middleware.js";
import validator from "../validators/product.validator.js";

router.post(
    "/",
    // authorize("ADMIN"),
    validate(validator.createProduct),
    controller.create
);

router.get("/",
    // authorize("ADMIN"),
    controller.getAll);

router.get("/:id", controller.getById);

router.put("/:id", controller.update);

router.delete("/:id",
    // authorize("ADMIN"),
    controller.delete);

export default router;