const mongoose = require("mongoose");
const { Schema } = mongoose;

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
  },
  stars: [String],
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  showtimes: [String],
});

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;
