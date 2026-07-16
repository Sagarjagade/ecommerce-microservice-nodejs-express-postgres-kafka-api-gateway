
import Joi from "joi";
exports.createCategory = Joi.object({

    name: Joi.string()
        .trim()
        .min(3)
        .max(100)
        .required(),

    description: Joi.string()
        .allow("")
        .optional()

});