const mongoose = require("mongoose");

const contactScema = mongoose.Schema(
   {
    user_id: {
      type: mongoose.mongo.ObjectId,
      required: true,
      ref: "User",
    }
  },
  {
    name: {
      type: String,
      required: [true, "Please add the contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add a email address"],
    },
    telepon: {
      type: String,
      required: [true, "Please add a number phone"],
    },
  },

  {
    Timestamp: true,
  }
);

module.exports = mongoose.model("Contacvt", contactScema);
