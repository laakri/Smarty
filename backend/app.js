const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const ageGroupRoutes = require("./routes/ageGroup");
const categoryRoutes = require("./routes/category");
const questionRoutes = require("./routes/question");
const app = express();
mongoose.set("strictQuery", false);

//conection to data
mongoose
  .connect(
    "mongodb+srv://laakri:szjZQd33jfOV2lDM@cluster0.cp3gdjo.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/file-folder", express.static(path.join("backend/file-folder")));
app.use("/file-profile", express.static(path.join("backend/file-profile")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-requested-With, Content-Type, Accept,Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );

  next();
});

app.use("/api/users", userRoutes);
app.use("/api/group", ageGroupRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/question", questionRoutes);

module.exports = app;
