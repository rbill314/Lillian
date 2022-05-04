"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/public", express.static(process.cwd() + "/public"));

app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Shhhhh!!!! Spying on port " + process.env.PORT);
});
