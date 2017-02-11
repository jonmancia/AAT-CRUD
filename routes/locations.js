var express = require('express');
var router = express.Router();
var Location = require('../models/locations')


/* GET home page. */
router.get('/', function(req, res, next) {
    Location.find( function(err, locations){
    res.render('locations', { locations: locations, head: 'AAT Locations', title: 'Armando Automative Transport' });
    });
});

router.post('/', function(req, res){
  new Location({
    name: req.body.name,
    type: req.body.type,
    phone_number: req.body.phone_number
    }).save( function(err, location){
    res.redirect('/');
    });
  });

router.put('/:id', function(req, res){
  Location.findByIdAndUpdate(req.params.id,
  { $set: { name: req.body.name, type: req.body.type, phone_number: req.body.phone_number }
  }, function(err, location){
      res.redirect('/');
  });
});

router.delete('/:id', function(req, res){
  Location.findById(req.params.id, function(err, location){
    location.remove( function(err, location){
      res.redirect('/');
    })
  })
})
module.exports = router;
