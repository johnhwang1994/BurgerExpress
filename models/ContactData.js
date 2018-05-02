const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactDataSchema = new Schema({
  name: {type: String, default: "Not Available"},
  street: {type: String, default: "Not Available"},
  zipCode: {type: String, default: "Not Available"},
  country: {type: String, default: "Not Available"},
  email: {type: String, default: "Not Available"}
})