const router = require('express').Router();
const Gem = require('../models/Gem.model');
const { isLoggedIn } = require('../middleware/route-guard');
const fileUploader = require('../config/cloudinary.config');
const User = require('../models/User.model');

router.get('/create', (req, res) => {
  res.render('create-gem', { userInSession: req.session.currentUser });
});

router.get('/', isLoggedIn, (req, res) => {
  if (req.session.currentUser) {
    res.render('create-gem');
  }
});

// added createdBy variable for rendering on userProfile functionality
router.post('/create', fileUploader.single('imgUrl'), (req, res) => {
  console.log(req.file);
  const { gemName, description, location, venueName, category } = req.body;
  console.log('req.session:', req.session);
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
  Gem.find({ gemName: { $regex: localGem }, location: location })
    .then((gems) => {
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
router.post('/gems/:id/delete', (req, res, next) => {
  const gemId = req.params.id;

  Gem.findByIdAndDelete(gemId)
    .then(() => {
      res.redirect('/userProfile');
    })
    .catch((error) => {
      console.error(`Error deleting gem: ${error}`);
      next(error);
    });
});

router.get('/userInSession', (req, res) => {
  let userInSession;
  if (req.session.currentUser) {
    userInSession = {
      _id: req.session.currentUser._id,
      username: req.session.currentUser.username,
    };
  } else {
    userInSession = false;
  }
  res.json({ userInSession: userInSession });
});

module.exports = router;
