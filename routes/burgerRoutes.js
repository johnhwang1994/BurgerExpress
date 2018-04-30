const mongoose = require('mongoose');
const _ = require('lodash');

const keys = require('../config/keys');

// middleware
const requireLogin = require('../middlewares/requireLogin');

// mongoose schema
const IngredientPrice = mongoose.model('ingredientPrice');
const User = mongoose.model('users');

module.exports = app => {

  // get initial ingredients
  app.get('/api/burger/init', async (req, res) => {
    // Grab ingredients' price from mongoDB.
    const ingredientPrice = await IngredientPrice.findOne({ _id: keys.ingredientPriceId });
    // Send the price data to the front server.
    res.send(ingredientPrice);
  });

};
