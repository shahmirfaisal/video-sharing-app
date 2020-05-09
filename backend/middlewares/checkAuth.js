const jwt = require("jsonwebtoken");
require("dotenv").config();
const errorHandler = require("../error-handler/error-handler");


module.exports = (req, res, next) => {
    const token = req.get("Authorization");

    // If the client doesn't attach the Authorization header with the request
    if (!token) {
        return errorHandler(next, "Not Authenticated!", 401);
    }

    let decodedToken;

    try {
        decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        // For technical errors
        return errorHandler(next, error.message);
    }

    if (!decodedToken) {
        // If the token is invalid
        return errorHandler(next, "Not Authenticated!", 401);
    }

    req.userId = decodedToken.userId;
    next();
}