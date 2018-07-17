const mongoose = require('mongoose');
const Player = require('../models/player');
// console.log("----------------------------------")
// console.log(Player)
// console.log("----------------------------------")
// console.log("----------------------------------")
// console.log("----------------------------------")
// console.log("----------------------------------")
const teamSchema = new mongoose.Schema({
  name: String,
  city: String,
  players: [Player.schema]

});



module.exports = mongoose.model('Team', teamSchema);

