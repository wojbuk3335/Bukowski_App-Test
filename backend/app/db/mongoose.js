const mongoose = require('mongoose');

// MongoDB connection URI
const uri = "mongodb://wojbuk3335:Bukowski1234@mongodb.server100705.nazwa.pl:4034/server100705_Bukowski"; 
// const uri = "mongodb://wojbuk3335:Bukowski1234@mongodb.server100705.nazwa.pl:4034/server100705_Bukowski";
// const uri = "mongodb+srv://wojbuk3335:Bukowski1234@cluster0.tgprkjd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Connect to MongoDB

mongoose.connect(uri)
  .then(() => {
    console.log("Successfully connected to MongoDB!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Export the mongoose connection
module.exports = mongoose;

