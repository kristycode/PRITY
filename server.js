const express = require("express");

// const mongoose = require("mongoose");
const routes = require("./routes/user-route");
const routes2 = require("./routes/look-route");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use('/api', routes);
app.use('/api', routes2);

const db = require('./client/src/db');

// Connect to the Mongo DB
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/makeuplist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
