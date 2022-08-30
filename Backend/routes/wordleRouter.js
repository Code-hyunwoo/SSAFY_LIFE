const wordleCtrl = require("../controllers/wordleCtrl");
const router = require("express").Router();


router.route('/')
    .get(wordleCtrl.getAnswer)
    // .post(guestCtrl.insertGuest)

// api/movie/makeMovie
// router.route('/makemovie')

module.exports = router;