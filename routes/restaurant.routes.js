const express = require('express');
const router = express.Router();
const restaurantController = require('../controllerrs/restaurant.controller');

router.get('/:id', restaurantController.getById);
router.get('/', restaurantController.getBestRest);
router.get('/category/:category', restaurantController.getByCategory);
router.get('/:id/platos', restaurantController.getPlatos);
router.post('/:id/rating', restaurantController.addRating);
router.get('/:id/ratings', restaurantController.getRating);

module.exports = router;