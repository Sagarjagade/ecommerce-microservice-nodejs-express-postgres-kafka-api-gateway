const globalValidate = (schema) => {
    return (req, res, next) => {

        const { error } = schema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        });

        if (error) {
            return res.status(400).json({
                success: false,
                message: "Validation Failed",
                errors: error.details.map(err => ({
                    field: err.path[0],
                    message: err.message
                }))
            });
        }

        next();
    };
};

export default globalValidate