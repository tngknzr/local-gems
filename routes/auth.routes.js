const { Router } = require('express');
const router = new Router();
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const User = require('../models/User.model');
const mongoose = require('mongoose');
const { isLoggedIn, isLoggedOut } = require('../middleware/route-guard.js');
const Gem = require('../models/Gem.model');

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
    res.status(500).render('auth/signup', { errorMessage: 'Password needs to have at least 6 chars and must contain at least one number.' });
    return;
  }

  bcrypt
    .genSalt(saltRounds)
    .then((salt) => bcrypt.hash(password, salt))
    .then((hashedPassword) => {
      console.log(`Password hash: ${hashedPassword}`);
      return User.create({
        username,
        email,

        passwordHash: hashedPassword,
      });
    })
    .then((userFromDB) => {
      req.session.currentUser = userFromDB;
      res.redirect('/userProfile');
    })
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(500).render('auth/signup', { errorMessage: error.message });
      } else if (error.code === 11000) {
        res.status(500).render('auth/signup', {
          errorMessage: 'Username and email need to be unique. Either username or email is already used.',
        });
      } else {
        next(error);
      }
    });
});
//LOGIN DOWN
router.get('/login', (req, res) => res.render('auth/login'));
router.post('/login', (req, res, next) => {
  const { email, password } = req.body;

  if (email === '' || password === '') {
    res.render('auth/login', {
      errorMessage: 'Please enter both, email and password to login.',
    });
    return;
  }

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        res.render('auth/login', { errorMessage: 'Email is not registered. Try with other email.' });
        return;
      } else if (bcrypt.compareSync(password, user.passwordHash)) {
        req.session.currentUser = user;
        res.redirect('/userProfile');
      } else {
        res.render('auth/login', { errorMessage: 'Incorrect password.' });
      }
    })
    .catch((error) => next(error));
});
router.post('/logout', (req, res, next) => {
  req.session
    .destroy((err) => {
      if (err) next(err);
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/userProfile', (req, res) => {
  const currentUser = req.session.currentUser;
  Gem.find({ createdBy: currentUser._id })
    .then((gems) => {
      res.render('user/user-profile', { userInSession: currentUser, gems });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
