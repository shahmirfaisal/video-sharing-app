const {
    body
} = require("express-validator");
const User = require("../models/user");


module.exports = [
    body("name", "Please enter the name!")
    .trim()
    .isLength({
        min: 1
    }),

    body("email", "Please enter a valid email!")
    .normalizeEmail()
    .isEmail()
    .custom(async email => {
        const user = await User.find({
            email
        }).cursor().next();
        if (user) return Promise.reject("This email is already in use!");
        return Promise.resolve();
    }),

    body("password", "The length of the password should be between 6 and 32!")
    .isLength({
        min: 6,
        max: 32
    })
];