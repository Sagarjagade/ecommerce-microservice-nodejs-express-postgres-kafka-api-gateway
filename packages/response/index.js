
import success from "./success.js";
import error from "./error.js";
export default {

    success,

    error,

    created: (res, data, message = "Created Successfully") =>
        success(res, data, message, 201),

    updated: (res, data, message = "Updated Successfully") =>
        success(res, data, message, 200),

    deleted: (res, message = "Deleted Successfully") =>
        success(res, null, message, 200),

    noContent: (res) =>
        res.status(204).send()

};