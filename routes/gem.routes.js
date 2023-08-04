const Gem = require('../models/Gem.model');
const router = require('express').Router();

router.get('/create', (req, res) => {
  res.render('create-gem', { userInSession: req.session.currentUser });
});

// added createdBy variable for rendering on userProfile functionality
router.post('/create', (req, res) => {
  const { gemName, description, location, imgUrl, category } = req.body;
  const createdBy = req.session.currentUser._id;
  Gem.create({ gemName, description, location, imgUrl, category, createdBy })
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
      res.render('main', { gems, userInSession: req.session.currentUser });
    })
    .catch((err) => {
      console.log(err);
    });
});

// the main search queries for gem and location
router.get('/search', (req, res) => {
  const { localGem, location } = req.query;
  Gem.find({ gemName: { $regex: localGem }, location: location })
    .then((gems) => {
      console.log(gems);
      if (gems.length === 0) {
        res.render('main', { errorMsg: 'Sorry no local gem within that category try another search' });
      } else {
        res.render('gems', { gems: gems, userInSession: req.session.currentUser });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
