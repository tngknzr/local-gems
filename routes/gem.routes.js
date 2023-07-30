const Gem = require('../models/Gem.model');
const router = require('express').Router();

router.get('/create', (req, res) => {
  res.render('create-gem');
});

router.post('/create', (req, res) => {
  const { gemName, description, location, imgUrl, category } = req.body;
  Gem.create({ gemName, description, location, imgUrl, category })
    .then(() => {
      res.redirect('/main');
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/main', (req, res) => {
  Gem.find()
    .then((gems) => {
      console.log(gems);
      res.render('main', { gems });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
