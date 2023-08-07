const router = require('express').Router();
const Gem = require('../models/Gem.model');
const { isLoggedIn } = require('../middleware/route-guard');
const fileUploader = require('../config/cloudinary.config');

router.get('/create', (req, res) => {
  res.render('create-gem', { userInSession: req.session.currentUser });
});

router.get('/', isLoggedIn, (req, res) => {
  if (req.session.currentuser) {
    res.render('create-gem');
  }
});

// added createdBy variable for rendering on userProfile functionality
router.post('/create', fileUploader.single('imgUrl'), (req, res) => {
  console.log(req.file);
  const { gemName, description, location, venueName, category } = req.body;
  const createdBy = req.session.currentUser._id;
  let imgUrl = req.file ? req.file.path : undefined;
  Gem.create({ gemName, description, location, venueName, imgUrl, category, createdBy })
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
  console.log('localGem', localGem);
  console.log('location', location);
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

// Delete Gem Route

module.exports = router;
