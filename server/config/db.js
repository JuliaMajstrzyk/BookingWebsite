const mongoose = require('mongoose'); //import mongoose library for mongoDB
const connectDB = async () => { // asynchronous function defined to connect to database
    try {
        mongoose.set('strictQuery', false); // allows more flexible queries
        const conn = await mongoose.connect(process.env.MONGODB_URI); // connect to mongoDB database
        console.log(`Database Connected: ${conn.connection.host}`); // log a message when connected
    } catch (error){ //handle any errors that occur
        console.log(error);

    }
}
module.exports = connectDB; // export the connectDB to make available for use in other places