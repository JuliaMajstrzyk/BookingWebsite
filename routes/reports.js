const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Booking = mongoose.model("booking");

router.get("/", (req, res) => {
    res.render("reports");
});

router.post("/reportsfound", async (req, res) => {
    // extracts fname and surname from request body
    const { fname, surname } = req.body;

    try {
        // using mongoose to find fname and surname
        const dataList = await Booking.find({ fname, surname }).exec();
        // count the numer of booings that match fname and surname
        const bookingCount = await Booking.countDocuments({ fname, surname}).exec();
        console.table(dataList);

        // render reportsfound and pass data
        res.render("reportsfound", { dataList, bookingCount, fname, surname });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
