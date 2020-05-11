const {
    body
} = require("express-validator");

module.exports = [
    body("title", "Please enter a title!")
    .trim()
    .isLength({
        min: 1
    }),

    body("description", "Please enter a description!")
    .trim()
    .isLength({
        min: 1
    })
];