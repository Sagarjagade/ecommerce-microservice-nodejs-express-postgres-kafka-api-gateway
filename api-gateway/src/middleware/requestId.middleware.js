
import { v4 as uuidv4 } from 'uuid';
const requestId = (req, res, next) => {

    const id = req.headers["x-request-id"] || uuidv4();

    req.requestId = id;

    res.setHeader("x-request-id", id);

    next();

};
export default requestId;