const mongoose = require("mongoose");
const logger = require("../scripts/logger/Users");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    surname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Email alanı zorunludur!"],
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    profile_image: {
      type: String,
      default: "default.png",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false }
);

UserSchema.post("save", (doc) => {
  logger.log({
    level: "info",
    message: doc,
  });
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
