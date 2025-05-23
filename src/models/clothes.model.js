const mongoose = require("mongoose");

const clothSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    stock: {
      type: Number,
      default: 0
    },
    thumbnail: String,
    cloudinary_id: String,
    status: {
      type: String,
      default: "active"
    },
    rating: {
      like: Number,
      dislike: Number
    },
    deleted: {
      type: Boolean,
      default: false
    },
    deletedAt: Date,
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }]
  },
  {
    timestamps: true
  }
);

const Cloth = mongoose.model("Cloth", clothSchema, "clothes");

module.exports = Cloth;
