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
  app.get('/api/burger/init', (req, res) => {
    // Grab ingredients' price from mongoDB.
    // const initialData = await IngredientPrice.findOne({ _id: keys.ingredientPriceId });
    const initialData = {
      salad: 0.5,
      bacon: 0.7,
      meat: 1.3,
      cheese: 0.4,
      totalPrice: 4
    };
    // Send the price data to the front server.
    res.send(initialData);
  });

};
