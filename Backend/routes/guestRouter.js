const guestCtrl = require("../controllers/guestCtrl");
const router = require("express").Router();


router.route('/')
    .get(guestCtrl.getGuest)
    .post(guestCtrl.insertGuest)

// api/movie/makeMovie
// router.route('/makemovie')

module.exports = router;