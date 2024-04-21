const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const campsiteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, default: 0 },
  addedBy: { type: ObjectId, ref: "User" },
  createdAt: { type: Date, default: new Date() },
});
module.exports = mongoose.model("Campsite", campsiteSchema);
