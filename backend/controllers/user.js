const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();
const {
    validationResult
} = require("express-validator");
const errorHandler = require("../error-handler/error-handler");
const Video = require("../models/video");


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
            expiresIn: "1d"
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
        expiresIn: "1d"
    });

    res.status(200).json({
        token,
        user: req.user
    });
}


exports.getUser = async (req, res, next) => {
    const {
        id
    } = req.params;

    try {
        const user = await User.findById(id);
        const videos = await Video.find({
            user: id
        }).populate("user").populate("comments.user");

        res.status(200).json({
            user,
            videos
        });
    } catch (error) {
        errorHandler(next, error.message);
    }
}


exports.patchUser = async (req, res, next) => {
    const id = req.userId;
    const name = req.body.name.trim();
    const img = req.files.image;

    try {
        const user = await User.findById(id);
        if (name.length > 0) user.name = name;
        if (img) user.image = img[0].path;

        const result = await user.save();
        res.status(200).json(result);

    } catch (error) {
        errorHandler(next, error.message);
    }
}


exports.isLogin = async (req, res, next) => {
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

    console.log(decodedToken)
    try {
        const user = await User.findById(decodedToken.userId);
        res.status(200).json(user);
    } catch (error) {
        return errorHandler(next, error.message);
    }
}