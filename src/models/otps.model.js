const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    },
    otp: {
      type: String,
      required: true
    },
    expiresAt: { type: Date, required: true, index: { expires: 0 } }
  },
  {
    timestamps: true
  }
);

const Otp = mongoose.model("Otp", otpSchema, "otps");

module.exports = Otp;
