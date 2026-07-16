
import express from "express";
const router = express.Router();
import controller from "../controllers/category.controller.js";
import validate from "../middleware/validate.middleware.js";
import validator from "../validators/category.validator.js";

router.post(
    "/",
    validate(validator.createCategory),
    controller.create
);

router.get("/", controller.getAll);

router.get("/:id", controller.getById);

router.put("/:id", controller.update);

router.delete("/:id", controller.delete);

export default router;