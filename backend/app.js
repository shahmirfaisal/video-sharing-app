const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const userRoutes = require("./routes/user");
const videoRoutes = require("./routes/video");

const app = express();

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
});

// Parsing JSON
app.use(bodyParser.json());

// Configuring Multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./assets");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
app.use(
  multer({
    storage,
  }).fields([{
      name: "image",
    },
    {
      name: "video",
    },
  ])
);

// Serving the assets folder statically
app.use("/assets", express.static(path.join(__dirname, "assets")));

// Using User related routes
app.use("/user", userRoutes);

// Using Video related routes
app.use("/videos", videoRoutes);

// Error Handling Middleware
app.use((error, req, res, next) => {
  console.log(error);
  res.status(error.statusCode).json({
    message: error.message,
  });
});


mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => app.listen(5000))
  .catch((err) => console.log(err));