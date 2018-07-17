const express = require('express');

const router = express.Router();

const Player = require('../models/player');
const Team = require('../models/team')



// INDEX
router.get('/', (req, res) => {
  Player.find({}, (err, foundPlayers) => {
    
    res.render('players/index.ejs', {
      players: foundPlayers
    });
  });
});


// NEW
router.get('/new', (req, res) => {
  res.render('players/new.ejs');
});

// SHOW
router.get('/:id', (req, res) => {
  Player.findById(req.params.id, (err, foundPlayer) => {
    res.render('players/show.ejs', {
      player: foundPlayer
    });
  });
});


// EDIT
router.get('/:id/edit', (req, res) => {
  
  Player.findById(req.params.id, (err, foundPlayer) => {
    res.render('players/edit.ejs', {
      player: foundPlayer
    });
  });
});

// UPDATE
router.put('/:id', (req, res) => {
  Player.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, updatePlayer) => {
        console.log(updatePlayer, ' this is updatePlayer')
        res.redirect('/players')
    })
})



// CREATE
router.post('/', (req, res) => {
  console.log(req.body)
  Player.create(req.body, (err, createdPlayer) => {
    console.log(createdPlayer, ' this is the created player');
    res.redirect('/players')
  });
});



// DELETE
router.delete('/:id', (req, res) => {
  
  Player.findByIdAndRemove(req.params.id, (err, deletedPlayer) => {
    console.log(deletedPlayer, ' this is deletedPlayer')
    res.redirect('/players')
  })
});



module.exports = router;































