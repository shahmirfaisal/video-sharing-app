const router = require("express").Router();
const videoController = require("../controllers/video")


// GET - /videos/ ----- Getting all the videos
router.get("/", videoController.getVideo);


// POST - /videos/ ----- Storing the video
router.post("/", videoController.postVideo);


// GET - /videos/user/:id ----- Getting all the videos of a specific user
router.get("/user/:id");


// GET - /videos/favourites/user/:id ----- Getting all the favourite videos of a specific user
router.get("/favourites/user/:id");


// GET - /videos/:id ----- Getting a specific video
router.get("/:id");


// GET - /videos/search?search=... ----- Searching the videos
router.get("/search");


module.exports = router;