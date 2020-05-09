const {
    body
} = require("express-validator");
const User = require("../models/user");

module.exports = [
    body("email", "Please enter a valid email!")
    .normalizeEmail()
    .isEmail()
    .custom(async (email, {
        req
    }) => {
        const user = await User.find({
            email
        }).cursor().next();

        req.user = user;

        if (user) return Promise.resolve();
        return Promise.reject("This email doesn't exist!");
    }),

    body("password", "Please enter a valid password!")
    .isLength({
        min: 6,
        max: 32
    })
    .custom(async (password, {
        req
    }) => {
        const user = await User.find({
            email: req.body.email
        }).cursor().next();
        if (user.password === password) return Promise.resolve();
        return Promise.reject("You entered a wrong password!");
    })
];