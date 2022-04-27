const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = express.Router();

mongoose.connect("mongodb://localhost:27017/artikuno", {
  useNewUrlParser: true,
});
const db = mongoose.connection;

db.on("error", (err) => {
  console.error(err);
});

db.once("open", (err) => {
  console.log("Connected successfully");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

router.get("/", (req, res) => {
  res.send("hello");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
