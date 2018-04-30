const mongoose = require('mongoose');

// middleware
const requireLogin = require('../middlewares/requireLogin');

// mongoose schema
const Order = mongoose.model('order');

module.exports = app => {

  //Grab all the orders if the user logged in.
  app.get('/api/orders', requireLogin, (req, res) => {
    Order.find({ _user: req.user.id }, (err, orders) => {
      if (err) {
        console.log(err);
      } else {
        res.send(orders);
      }
    });
  });
};
