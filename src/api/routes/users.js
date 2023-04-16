var express = require("express");
var router = express.Router();
const User = require("../db/models/users.model");

/* GET users listing. */
router.get("/", function (req, res, next) {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.error(err));
});

// get details of a specific user
router.get("/:username", function (req, res, next) {
  res.send(`details of ${req.params.username}`);
});

// add a new user
router.post("/", function (req, res, next) {
  const { userName, gender, phone, email, password } = req.body;
  const newUser = new User({
    userName,
    gender,
    phone,
    email,
    password,
  });

  newUser
    .save()
    .then(() => res.send("User added!"))
    .catch((err) => res.status(422).json("Test " + err));
});

module.exports = router;
