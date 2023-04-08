var express = require("express");
var router = express.Router();
const userRoute = require("./users");
const pjson = require("../package.json");

module.exports = () => {
  router.get("/", function (req, res, next) {
    res.send(`api-version: ${pjson.version}`);
  });

  router.use("/users", userRoute);

  return router;
};
