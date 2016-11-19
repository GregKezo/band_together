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
    name: req.body.name,
    age: req.body.age,
    area: req.body.area,
    instruments: req.body.instruments,
    experience: req.body.experience,
    style: req.body.style,
    needs: req.body.needs,
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
    profile.name: req.body.name,
    profile.age: req.body.age,
    profile.area: req.body.area,
    profile.instruments: req.body.instruments
    profile.experience: req.body.experience
    profile.style: req.body.style,
    profile.needs: req.body.needs,
    profile.updatedAt: Date.now()
    profile.save( function() {
      res.redirect('/profiles');
    });
  });
});


module.exports = router;
