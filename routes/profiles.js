var express = require('express');
var router = express.Router();
var mongoose = require ('mongoose');
var Profile = require('../models/movie');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Profile.find( function(err, movies) {
    res.send('profiles', {movies: movies});
  });
});

router.post('/', function (req, res, next) {
  new Profile({
    title: req.body.title,
    description: req.body.description,
    updatedAt: Date.now()
  }).save( function(err, movie) {
    res.redirect('/movies');
  });
});

router.post('/:id', function (req, res) {
  Profile.finById(req.params.id, function(err, profile) {
    profile.remove( function() {
      res.redirect('/movies');
    });
  });
});

router.post('/edit/:id', function (req, res) {
  Profile.findById ( req.params.id, function(err, movie) {
    profile.title = req.body.title;
    profile.description = req.body.description;
    profile.updatedAt = Date.now();
    profile.save( function() {
      res.redirect('/profiles');
    });
  });
});


module.exports = router;
