const mongoose = require("mongoose");

const connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (conn) console.log(`Connected to MongoDB`);
    if (!conn) console.log(`MongoDB Disconnected`);
  } catch (err) {
    console.log(err.toString());
  }
};

module.exports = connection;
