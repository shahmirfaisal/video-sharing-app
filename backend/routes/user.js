const router = require("express").Router();
const userController = require("../controllers/user");
const signupValidator = require("../validators/signup");
const loginValidator = require("../validators/login");

// POST - /user/signup ----- Signup the user
router.post("/signup", signupValidator, userController.signup);

// POST - /user/login ----- Login the user
router.post("/login", loginValidator, userController.login);

// GET - /user/:id ----- Getting a specific user
router.get("/:id");

// PATCH - /user/:id ----- Updating a specific user
router.patch("/:id");

module.exports = router;