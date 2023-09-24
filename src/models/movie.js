const mongoose = require("mongoose"); // importando el componente mogoose

const movieSchema = mongoose.Schema({
  pelicula: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  año: {
    type: Number,
    requiered: true,
  }
});
module.exports = mongoose.model("Movie", movieSchema);
