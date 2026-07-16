
import Joi from "joi";

exports.createProduct = Joi.object({

    categoryId: Joi.string()
        .uuid()
        .required(),

    name: Joi.string()
        .trim()
        .min(3)
        .max(255)
        .required(),

    description: Joi.string()
        .allow("")
        .optional(),

    price: Joi.number()
        .positive()
        .required(),

    sku: Joi.string()
        .trim()
        .required(),

    status: Joi.string()
        .valid("1", "0")
        .optional()

});