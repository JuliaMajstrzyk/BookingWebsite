const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Booking = mongoose.model("booking");

router.route("/")
  .get(async (req, res) => {
    try {
      const dataList = await Booking.find({}).exec();
      res.render('viewbooking', {
        dataList: dataList
      });
    } catch (error) {
      res.status(500).send("Error retrieving booking data");
    }
  })
  .post(async (req, res, next) => {
    Booking.findByIdAndDelete(req.body.id).then(() => res.redirect("/viewbooking"));
});
router.route('/edit')
.get((req, res, next) => {
    Booking.find()
    .then((bookingsfound) => {
        res.render('viewbooking.ejs', {'dataList': bookingsfound, title: 'All bookings'});
    })
})
.post((req, res, next) => {Booking.findById(req.body.id)
    .then((bookingsfound) => {console.log(bookingsfound);
    res.render('edit.ejs', {'dataList': bookingsfound})})})
    
    router.route('/update')
    .post((req, res, next) => {
        Booking.findByIdAndUpdate(req.body.id, req.body)
            .then(() => {
                // Wait for the main details update to finish before proceeding
                return Booking.findById(req.body.id); 
            })
            .then((updatedBooking) => {
                // Update the subdocument information
                if (updatedBooking) {
                    updatedBooking.cardDetails.cardHolderName = req.body.cardHolderName;
                    updatedBooking.cardDetails.cardNumber = req.body.cardNumber;
                    updatedBooking.cardDetails.expirationDate = req.body.expirationDate;
                    updatedBooking.cardDetails.cvv = req.body.cvv;
                    return updatedBooking.save();
                }
            })
            .then(() => {
                // Find all bookings after the update
                return Booking.find();
            })
            .then((bookingsfound) => {
                res.redirect("/viewbooking");
            })
            .catch((err) => next(err));
    });


module.exports = router;