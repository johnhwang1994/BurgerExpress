const mongoose = require('mongoose');
const { Schema } = mongoose;

const ingredientsSchema = new Schema({
  salad: {type: Number, default: 0},
  bacon: {type: Number, default: 0},
  meat: {type: Number, default: 0},
  cheese: {type: Number, default: 0},
});

//mongoose.model('ingredients', ingredientsSchema);
module.exports = ingredientsSchema;