const express = require("express");
const app = express();

var cors = require('cors');
app.use(cors());

const routes = require("./routes/user-route");
const routes2 = require("./routes/look-route");
const routes3 = require("./routes/avatar-route");
const routes4 = require("./routes/beautyBag-routes");
const makeuproute = require("./routes/makeup-route");

const PORT = process.env.PORT || 3001;

const passport = require("passport");

const bodyParser = require("body-parser");
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Add routes, both API and view
app.use('/api', routes);
app.use('/api', routes2);
app.use('/api', routes3);
app.use('/api', routes4);
app.use('/api', makeuproute);

const db = require('./client/src/db');

// Connect to the Mongo DB
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/makeuplist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});