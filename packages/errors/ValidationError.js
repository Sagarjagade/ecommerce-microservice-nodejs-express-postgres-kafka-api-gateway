
import AppError from "./AppError.js";
class ValidationError extends AppError {

    constructor(message = "Validation Failed") {

        super(message, 422);

    }

}
export default ValidationError;