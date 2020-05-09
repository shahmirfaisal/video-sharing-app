const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();
const {
    validationResult
} = require("express-validator");
const errorHandler = require("../error-handler/error-handler");


exports.signup = async (req, res, next) => {
    const {
        name,
        email,
        password
    } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return errorHandler(next, errors.array()[0].msg, 422);
    }

    try {
        const user = new User({
            name,
            email,
            password
        });
        await user.save();

        const token = jwt.sign({
            userId: user._id
        }, process.env.SECRET_KEY, {
            expiresIn: "1h"
        });

        res.status(201).json({
            token,
            user
        });
    } catch (error) {
        errorHandler(next, error.message);
    }
};


exports.login = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return errorHandler(next, errors.array()[0].msg, 422)
    }

    const token = jwt.sign({
        userId: req.user._id
    }, process.env.SECRET_KEY, {
        expiresIn: "1h"
    });

    res.status(200).json({
        token,
        user: req.user
    });
}