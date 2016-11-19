var express = require('express');
var router = express.Router();
var mongoose = require ('mongoose');
var Profile = require('../models/profile');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Profile.find( function(err, profiles) {
    res.send('profiles', {profiles: profiles});
  });
});

router.post('/', function (req, res, next) {
  new Profile({
    title: req.body.title,
    description: req.body.description,
    updatedAt: Date.now()
  }).save( function(err, profile) {
    res.redirect('/profiles');
  });
});

router.post('/:id', function (req, res) {
  Profile.finById(req.params.id, function(err, profile) {
    profile.remove( function() {
      res.redirect('/profiles');
    });
  });
});

router.post('/edit/:id', function (req, res) {
  Profile.findById ( req.params.id, function(err, profile) {
    profile.title = req.body.title;
    profile.description = req.body.description;
    profile.updatedAt = Date.now();
    profile.save( function() {
      res.redirect('/profiles');
    });
  });
});


module.exports = router;
