const router = require("express").Router();
const userController = require("../controllers/user");
const signupValidator = require("../validators/signup");
const loginValidator = require("../validators/login");
const checkAuth = require("../middlewares/checkAuth");

// POST - /user/signup ----- Signup the user
router.post("/signup", signupValidator, userController.signup);

// POST - /user/login ----- Login the user
router.post("/login", loginValidator, userController.login);

// GET - /user/:id ----- Getting a specific user
router.get("/:id", userController.getUser);

// PATCH - /user/ ----- Updating the current user
router.patch("/", checkAuth, userController.patchUser);

module.exports = router;