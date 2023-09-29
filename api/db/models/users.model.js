const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 6,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 8,
    },
    gender: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 1,
      maxlength: 1,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
      minlength: 8,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
