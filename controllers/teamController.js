const express = require('express');
const router = express.Router();
const Team = require('../models/team')

// INDEX
router.get('/', (req, res) => {
  console.log('got to here')
  Team.find({}, (err, foundTeam) => {
    
    res.render('teams/index.ejs', {
      teams: foundTeam
    });
  });
});

// NEW
router.get('/new', (req, res) => {
  res.render('teams/new.ejs');
});

// SHOW
router.get('/:id', (req, res) => {
  Team.findById(req.params.id, (err, foundTeam) => {
    res.render('teams/show.ejs', {
      team: foundTeam
    });
  });
});


// EDIT
router.get('/:id/edit', (req, res) => {
  
  Team.findById(req.params.id, (err, foundTeam) => {
    res.render('teams/edit.ejs', {
      team: foundTeam
    });
  });
});

// UPDATE
router.put('/:id', (req, res) => {
  Team.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, updateTeam) => {
      console.log(updateTeam, ' this is updateTeam')
      res.redirect('/teams')
    })
})

// POST
router.post('/', (req, res) => {
  console.log(req.body)
  Team.create(req.body, (err, createdTeam) => {
    console.log(createdTeam, ' this is the created team');
    res.redirect('/teams')
  });
});


// DELETE
router.delete('/:id', (req, res) => {
  
  Team.findByIdAndRemove(req.params.id, (err, deletedTeam) => {
    console.log(deletedTeam, ' this is deletedTeam')
      res.redirect('/teams')
  })
});

module.exports = router;







