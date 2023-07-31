const { Router } = require('express');
const router = new Router();
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const User = require('../models/User.model');
router.get('/signup', (req, res) => res.render('auth/signup'));

router.post('/signup', (req, res, next) => {
    console.log('The form data: ', req.body);
    const { username, email, password } = req.body;
 
    bcrypt
      .genSalt(saltRounds)
      .then(salt => bcrypt.hash(password, salt))
      .then(hashedPassword => {
        console.log(`Password hash: ${hashedPassword}`);
        return User.create({
           
            username,
            email,
            
            passwordHash: hashedPassword
          });
      })
      .then(userFromDB => {
        res.redirect('/user-profile');
      })
      .catch(error => next(error));
  });
  router.get('/user-profile', (req, res) => res.render('user/user-profile'));
 
module.exports = router;