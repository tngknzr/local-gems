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
      res.render('main', { gems });
    })
    .catch((err) => {
      console.log(err);
    });
});

// the main search query
router.get('/search', (req, res) => {
  const { localGem, location } = req.query;
  Gem.find({ gemName: { $regex: localGem }, location: location })
    .then((gems) => {
      console.log(gems);
      if (gems.length === 0) {
        res.render('main', { errorMsg: 'Sorry no local gem within that category try another search' });
      } else {
        res.render('gems', { gems: gems });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
