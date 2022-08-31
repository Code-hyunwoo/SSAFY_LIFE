const wordleCtrl = require("../controllers/wordleCtrl");
const router = require("express").Router();


router.route('/')
    .get(wordleCtrl.getAnswer)
    .post(wordleCtrl.insertRoyal)

router.route('/royal')
    .get(wordleCtrl.getRoyal)
// api/movie/makeMovie
// router.route('/makemovie')

module.exports = router;