const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const router = express.Router();
const multer = require("multer");
const checkauth = require("../middleware/check-user");

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(error, "backend/file-profile");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + "-" + Date.now() + "." + ext);
  },
});

/*************-Admin Add User-********** */

/*************-Signup-********** */

router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      name: req.body.name,
      phonenum: req.body.phonenum,
      password: hash,
    });
    user
      .save()
      .then((result) => {
        res.status(201).json({
          message: "user created!",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
          message: "This user already exited !",
        });
      });
  });
});
/*************-Login-********** */

router.post("/login", (req, res, next) => {
  let fetchedUser;
  User.findOne({ phonenum: req.body.phonenum })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "Incorrect Phone number !",
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((result) => {
      if (!result) {
        return res.status(401).json({
          message: "Incorrecst password !",
        });
      }
      const token = jwt.sign(
        { phonenum: fetchedUser.phonenum, userId: fetchedUser._id },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser._id,
        userName: fetchedUser.name,
        userPicture: fetchedUser.imgPath,
        userRole: fetchedUser.roles[0],
      });
    })
    .catch((err) => {
      return res.status(401).json({
        message: "Authentication failed !",
      });
    });
});

module.exports = router;
