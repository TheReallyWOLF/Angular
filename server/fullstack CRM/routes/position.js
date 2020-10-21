// позиции
const express = require('express');
const controllers = require('../controllers/position');
const router = express.Router();
const passport = require('passport');

router.get('/:categoryId', passport.authenticate('jwt', {session: false}), controllers.getBuCategoryId);
router.post('/', passport.authenticate('jwt', {session: false}), controllers.create);
router.patch('/:id', passport.authenticate('jwt', {session: false}), controllers.update);
router.delete('/:id', passport.authenticate('jwt', {session: false}), controllers.remove);

module.exports = router;
