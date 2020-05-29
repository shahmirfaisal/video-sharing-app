const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "https://res.cloudinary.com/dw3ap99ie/image/upload/v1590679237/1589133680691-profile-img_bgii9i.jpg"
    },
    subscribers: [Schema.Types.ObjectId],
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("User", userSchema);