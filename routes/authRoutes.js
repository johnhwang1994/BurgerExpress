const passport = require('passport');

module.exports = app => {

  // redirect user to google.com, after authentication, 
  // user will be redirect to .../auth/google/callback.
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // if failed user will be direct to lgoin page
  // if succeed user will be direct to /surveys.
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      // res.redirect('/surveys');
    }
  );
};
