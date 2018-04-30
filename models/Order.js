const mongoose = require('mongoose');
const { Schema } = mongoose;

const ingredientsSchema = require('./Ingredients');

const orderSchema = new Schema({
  ingredients: ingredientsSchema,
  price: Number,
  _user: { type: Schema.Types.ObjectId, ref: "User" },
});

mongoose.model('order', orderSchema);
