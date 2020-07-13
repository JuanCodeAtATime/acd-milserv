const mongoose = require("mongoose");

const veteranSchema = new mongoose.Schema({
  lastName: {
    type: String,
    trim: true,
    required: true,
    max: 32,
  },
  firstName: {
    type: String,
    trim: true,
    required: true,
    max: 32,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowercase: true,
  },
  year: {
    type: Number,
    default: 0,
  },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Veteran", veteranSchema);
