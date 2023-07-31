const { Router } = require('express');
const router = new Router();
const bcrypt = require('bcryptjs');
const saltRounds = 10;

router.get('/signup', (req, res) => res.render('auth/signup'));

router.post('/signup', (req, res, next) => {
    console.log('The form data: ', req.body);
    const { username, email, password } = req.body;
 
    bcrypt
      .genSalt(saltRounds)
      .then(salt => bcrypt.hash(password, salt))
      .then(hashedPassword => {
        console.log(`Password hash: ${hashedPassword}`);
      })
      .catch(error => next(error));
  });
 
module.exports = router;