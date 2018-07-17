const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  playerInfo: String
});


module.exports = mongoose.model('Player', playerSchema);

