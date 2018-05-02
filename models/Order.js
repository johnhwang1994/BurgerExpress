const mongoose = require('mongoose');
const { Schema } = mongoose;

const ingredientsSchema = require('./Ingredients');
const contactDataSchema = require('./ContactData');

const orderSchema = new Schema({
  ingredients: ingredientsSchema,
  contactData: contactDataSchema,
  price: Number,
  _user: { type: Schema.Types.ObjectId, ref: "User" },
});

mongoose.model('order', orderSchema);
