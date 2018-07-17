const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('./db/db');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

const teamController = require('./controllers/teamController.js');
const playerController = require('./controllers/playerController.js');
app.use('/teams', teamController)
app.use('/players', playerController)

app.get('/', (req, res) => {
  res.render('index.ejs');
})



app.listen(3000, () => {
  console.log('app is listening on port 3000')
})