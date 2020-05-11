const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const d = new Date();
const date = d.getDate();
const year = d.getFullYear();
const month = months[d.getMonth()];

const videoSchema = new Schema({
    video: {
        type: String,
        required: true
    },

    thumbnail: {
        type: String,
        default: ""
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },

    createdAt: {
        type: String,
        default: `${date} ${month}, ${year}`
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

    favourites: [Schema.Types.ObjectId]
});

module.exports = mongoose.model("Video", videoSchema);