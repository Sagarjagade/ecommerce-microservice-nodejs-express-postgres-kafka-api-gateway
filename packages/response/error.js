const error = (
    res,
    message = "Internal Server Error",
    statusCode = 500,
    errors = null
) => {

    return res.status(statusCode).json({

        success: false,

        message,

        errors,

        timestamp: new Date().toISOString()

    });

};
export default error;