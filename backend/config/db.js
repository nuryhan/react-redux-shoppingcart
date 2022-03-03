require("dotenv").config();
const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("Connect Mongodb failed");
    console.log(error);
  }
};

module.exports = connectDB;
