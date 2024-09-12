const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// definign schema for booking
const bookingSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    // embedded sub-doc
    cardDetails: {
        cardNumber: {
            type: String,
            required: true
        },
        cardHolderName: {
            type: String,
            required: true
        },
        expirationDate: {
            type: Date,
            required: true
        },
        cvv: {
            type: String,
            required: true
        }
    }
});

// exporting mongoose model ie making available for other parts of code
module.exports = mongoose.model('booking', bookingSchema);