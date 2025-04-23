const mongoose = require('mongoose');
const {database} = require('../config');

// Replace with your MongoDB connection string
const mongoURI = database;

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

module.exports = mongoose;