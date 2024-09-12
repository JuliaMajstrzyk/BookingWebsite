const express = require("express"); // import express to create router
const router = express.Router(); 
const mongoose = require('mongoose'); // import mongoose library for mongoDB
const Booking = mongoose.model("booking"); // importing booking model from mongoose

// manages get request to root "/"
router.get("/", (req,res) => {
    res.render("booking");
});

// manages post request to root "/"
router.post("/", (req, res) => {
    // new booking model created, uses form and gathers info
    const newBooking = new Booking ({
        fname: req.body.fname,
        surname: req.body.surname,
        date: req.body.date,
        time: req.body.time,
        cardDetails: {
            cardNumber: req.body.cardNumber,
            cardHolderName: req.body.cardHolderName,
            expirationDate: req.body.expirationDate,
            cvv: req.body.cvv
        }
    });
    newBooking.save();
    res.redirect('/viewbooking');
});
module.exports = router;
