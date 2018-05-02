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
  // if succeed user will be direct to "/".
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  })

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  })
};
