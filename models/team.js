const mongoose = require('mongoose');


const teamSchema = new mongoose.Schema({
  name: String,
  city: String,
  players: [playerSchema]

});



module.exports = mongoose.model('Team', teamSchema);

