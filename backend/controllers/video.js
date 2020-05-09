const Video = require("../models/video");


exports.getVideo = async (req, res, next) => {
    try {
        const videos = await Video.find();
        res.status(200).json(videos);

    } catch (error) {
        error.statusCode = error.statusCode || 500;
        next(error);
    }
}


exports.postVideo = (req, res, next) => {
    const {
        title,
        description
    } = req.body;

    const video = new Video({
        video: req.files.video[0].path,
    });
}