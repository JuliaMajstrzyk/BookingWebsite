const dotenv = require("dotenv");
dotenv.config(); //loading environment variables from .env file

var createError = require('http-errors'); // create http error objects
var express = require('express'); // express used for building web applications
var path = require('path'); // used for working with files and directory apths
var cookieParser = require('cookie-parser'); // parses cookies
var logger = require('morgan'); // http request logging
var mongoose = require('mongoose'); // mongoose for mongoDB

// imported routes
var indexRouter = require('./routes/index');
var bookingRouter = require('./routes/booking');
var viewBookingRouter = require('./routes/viewbooking');
var reportsRouter = require('./routes/reports');

const connectDB = require('./server/config/db');
// Connect to DB
connectDB();

// create express application
const app = express();
// mongoose.connect('mongodb://127.0.0.1:27017/sswd'); switched connection to db.js

// view engine setup
app.set('views', path.join(__dirname, 'views')); // set directpry for view
app.set('view engine', 'ejs'); // set view engine to EJS
app.use(logger('dev'));
app.use(express.json()); // parse json requests
app.use(express.urlencoded({ extended: false })); // parse url-encoded requests
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // serve static files from public directory

// routes for the app
app.use('/', indexRouter);
app.use('/booking', bookingRouter);
app.use('/viewbooking', viewBookingRouter);
app.use('/reports', reportsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {
              code:err.status, // added this line of code to produce an error message
              message:err.message,
            });
});

module.exports = app;