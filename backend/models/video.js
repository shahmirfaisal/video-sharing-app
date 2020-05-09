const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const videoSchema = new Schema({
    video: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    comments: [{
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        comment: {
            type: String,
            required: true
        }
    }],
    likes: [Schema.Types.ObjectId],
    dislikes: [Schema.Types.ObjectId],
    favourites: [Schema.Types.ObjectId]
});

module.exports = mongoose.model("Video", videoSchema);