const { Schema, model } = require("mongoose");
const { generate } = require("shortid");

const schema = new Schema({ 
  uid: {
    type: String,
    unique: true,
    default: generate,
    index: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    index: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    // contentType: String,
  },
});

const users = model("users", schema);

module.exports = { users };
