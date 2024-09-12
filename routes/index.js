var express = require('express'); // importing express to create router
var router = express.Router();
const booking = require('../models/booking'); // importing booking from file

/* GET home page. */
router.get('/', function(req, res, next) {
  const locals = {
    title: 'Home Page',
    descripton: 'Welcoming page for the user.'
  }
  res.render('index', {locals});
});

/* GET about page*/
router.get('/about', function(req, res, next) {
  res.render('about');
});
/* GET help page*/
router.get('/help', function(req, res, next) {
  res.render('help');
});

// function insertBookingData (){
//   booking.insertMany([
//     {
//       fname: "test",
//       surname: "test",
//       phone: 00000,
//       email: "yourmom@gmail.com",
//       date: "12/12/2023"

//     }
//   ])
// }
// insertBookingData();

module.exports = router;
