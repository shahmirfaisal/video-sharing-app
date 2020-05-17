const router = require("express").Router();
const userController = require("../controllers/user");
const signupValidator = require("../validators/signup");
const loginValidator = require("../validators/login");
const checkAuth = require("../middlewares/checkAuth");

// POST - /user/signup ----- Signup the user
router.post("/signup", signupValidator, userController.signup);

// POST - /user/login ----- Login the user
router.post("/login", loginValidator, userController.login);

// PATCH - /user/ ----- Updating the current user
router.patch("/", checkAuth, userController.patchUser);

// GET - /user/isLogin ----- Checking whether the user is logged in or not
router.get("/isLogin", userController.isLogin);

// GET - /user/:id ----- Getting a specific user
router.get("/:id", userController.getUser);

module.exports = router;