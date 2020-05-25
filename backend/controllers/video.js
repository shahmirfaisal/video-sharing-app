const Video = require("../models/video");
const errorHandler = require("../error-handler/error-handler");
const {
  validationResult
} = require("express-validator");

exports.getVideos = async (req, res, next) => {
  try {
    const videos = await Video.find().populate("user").populate("comments.user");
    res.status(200).json(videos);
  } catch (error) {
    error.statusCode = error.statusCode || 500;
    next(error);
  }
};

exports.postVideo = async (req, res, next) => {
  const {
    title,
    description
  } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return errorHandler(next, errors.array()[0].msg, 422);
  }

  let video = req.files.video;
  let img = req.files.image;

  if (!video) return errorHandler(next, "Please upload a video", 422);

  video = video[0].path;
  img = img ? img[0].path : "";

  const newVideo = new Video({
    video,
    thumbnail: img,
    title,
    description,
    user: req.userId,
    comments: [],
    favourites: [],
  });

  try {
    await newVideo.save();
    await newVideo.populate("user").execPopulate();
    res.status(201).json(newVideo);
  } catch (error) {
    errorHandler(next, error.message);
  }
};


exports.getUserVideos = async (req, res, next) => {
  const {
    id
  } = req.params;

  try {
    const videos = await Video.find({
      user: id,
    }).populate("user").populate("comments.user");
    res.status(200).json(videos);

  } catch (error) {
    errorHandler(next, error.message);
  }
};


exports.getVideo = async (req, res, next) => {
  const {
    id
  } = req.params;

  try {
    const video = await Video.findById(id).populate("user").populate("comments.user");
    res.status(200).json(video);

  } catch (error) {
    errorHandler(next, error.message);
  }
};


exports.postFavourite = async (req, res, next) => {
  const {
    id: videoId
  } = req.params;
  const userId = req.userId;

  try {
    const video = await Video.findById(videoId);
    if (!video.favourites.includes(userId)) video.favourites.push(userId);

    const result = await video.save();
    await result.populate("user").populate("comments.user").execPopulate();
    res.status(200).json(result);

  } catch (error) {
    errorHandler(next, error.message);
  }
};


exports.postUnfavourite = async (req, res, next) => {
  const {
    id: videoId
  } = req.params;
  const userId = req.userId;

  try {
    const video = await Video.findById(videoId);
    video.favourites = video.favourites.filter((v) => v != userId);

    const result = await video.save();
    await result.populate("user").populate("comments.user").execPopulate();
    res.status(200).json(result);

  } catch (error) {
    errorHandler(next, error.message);
  }
};

exports.getFavouriteVideos = async (req, res, next) => {
  const {
    id
  } = req.params;

  try {
    const videos = await Video.find({
      favourites: id,
    }).populate("user").populate("comments.user");
    res.status(200).json(videos);

  } catch (error) {
    errorHandler(next, error.message);
  }
};

exports.getSearchVideos = async (req, res, next) => {
  const {
    search
  } = req.query;

  // Creating a regular expression for quering videos from the MongoDB
  const arr = [];
  let word = "";
  for (let char of search + " ") {
    if (char === " ") {
      if (word !== "") arr.push(word);
      word = "";
    } else {
      word += char;
    }
  }
  const regex = "(" + arr.join("|") + ")";

  try {
    const videos = await Video.find({
      title: {
        $regex: new RegExp(regex, "gi"),
      },
    }).populate("user").populate("comments.user");
    res.status(200).json(videos);

  } catch (error) {
    errorHandler(next, error.message);
  }
};

exports.postComment = async (req, res, next) => {
  const {
    id: videoId
  } = req.params;
  const userId = req.userId;
  let {
    comment
  } = req.body;
  comment = comment.trim();

  if (comment.length === 0) return errorHandler(next, "Please enter a comment!", 422);

  try {
    const video = await Video.findById(videoId);
    video.comments.push({
      user: userId,
      comment
    });
    const result = await video.save();
    await result.populate("user").populate("comments.user").execPopulate();

    res.status(201).json(result);

  } catch (error) {
    errorHandler(next, error.message);
  }
};