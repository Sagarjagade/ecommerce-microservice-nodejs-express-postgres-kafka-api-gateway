const success = (
    res,
    data = null,
    message = "Success",
    statusCode = 200
) => {

    return res.status(statusCode).json({

        success: true,

        message,

        data,

        timestamp: new Date().toISOString()

    });

};
export default success;