const router = require("express").Router();
const videoController = require("../controllers/video");
const checkAuth = require("../middlewares/checkAuth");
const videoValidator = require("../validators/postVideo");


// GET - /videos/ ----- Getting all the videos
router.get("/", videoController.getVideos);


// POST - /videos/ ----- Storing the video
router.post("/", checkAuth, videoValidator, videoController.postVideo);


// GET - /videos/user/:id ----- Getting all the videos of a specific user
router.get("/user/:id", videoController.getUserVideos);


// GET - /videos/favourites/user/:id ----- Getting all the favourite videos of a specific user
router.get("/favourites/user/:id", videoController.getFavouriteVideos);


// GET - /videos/favourite/:id ----- Favourite a specific video
router.post("/favourite/:id", checkAuth, videoController.postFavourite);


// GET - /videos/unfavourite/:id ----- Unfavourite a specific video
router.post("/unfavourite/:id", checkAuth, videoController.postUnfavourite);


// GET - /videos/search?search=... ----- Searching the videos
router.get("/search", videoController.getSearchVideos);


// GET - /videos/:id ----- Getting a specific video
router.get("/:id", videoController.getVideo);

// POST - /videos/comment/:id ----- Posting a comment on a specific video
router.post("/comment/:id", checkAuth, videoController.postComment);


module.exports = router;