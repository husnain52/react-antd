var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/:username", function (req, res, next) {
  res.send(`details of ${req.params.username}`);
});

router.post("/", function (req, res, next) {
  res.send("respond posted");
});

module.exports = router;
