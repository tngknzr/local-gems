const { Router } = require('express');
const router = new Router();
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const User = require('../models/User.model');
const mongoose = require('mongoose');
router.get('/signup', (req, res) => res.render('auth/signup'));

router.post('/signup', (req, res, next) => {
    console.log('The form data: ', req.body);
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.render('auth/signup', { errorMessage: 'Provide your username, email and password.' });
      return;
    }
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(password)) {
    res
      .status(500)
      .render('auth/signup', { errorMessage: 'Password needs to have at least 6 chars and must contain at least one number.' });
    return;
  }
 
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
      .catch(error => {

        
  
        if (error instanceof mongoose.Error.ValidationError) {
  
            res.status(500).render('auth/signup', { errorMessage: error.message });
  
        }else if (error.code === 11000) {res.status(500).render('auth/signup', {
          errorMessage: 'Username and email need to be unique. Either username or email is already used.'
       });
      } else {
  
            next(error);
  
        }
  
      })
  });
  router.get('/user-profile', (req, res) => res.render('user/user-profile'));
 
module.exports = router;