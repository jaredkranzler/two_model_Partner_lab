const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
  name: String,
  city: String
});


module.exports = mongoose.model('Team', teamSchema);

