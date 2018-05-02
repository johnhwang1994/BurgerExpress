const mongoose = require('mongoose');

// middleware
const requireLogin = require('../middlewares/requireLogin');

// mongoose schema
const Order = mongoose.model('order');

module.exports = app => {
  //Grab all the orders if the user logged in.
  app.get('/api/orders', requireLogin, async (req, res) => {
    Order.find({ _user: req.user.id }, (err, orders) => {
      if (err) {
        res.status(422).send(err);
      } else {
        // console.log(orders);
        res.send(orders);
      }
    });
  });

  app.post('/api/orders', requireLogin, async (req, res) => {
    const { ingredients, price, contactData } = req.body;
    // console.log(ingredients);
    // console.log(price);
    // console.log(contactData);
    const order = new Order({
      ingredients: ingredients,
      contactData: contactData,
      price: price,
      _user: req.user.id
    });
    try {
      await order.save();
      const user = req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
