const tetrisCtrl = require("../controllers/tetrisCtrl");
const router = require("express").Router();


router.route('/')
    .get(tetrisCtrl.getRank)
    .post(tetrisCtrl.insertRank)

// router.route('/royal')
//     .get(wordleCtrl.getRoyal)
// api/movie/makeMovie
// router.route('/makemovie')

module.exports = router;