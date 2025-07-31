const mongoose = require("mongoose");


const connectDb = async () => {
  try {
    const con = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      "MongoDb Connected:",
      con.connection.host,
      con.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
