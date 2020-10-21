//
const express = require('express');
const controllers = require('../controllers/order');
const passport = require('passport');
const router = express.Router();

router.get('/', passport.authenticate('jwt', {session: false}), controllers.getAll);
router.post('/', passport.authenticate('jwt', {session: false}), controllers.create);

module.exports = router;
