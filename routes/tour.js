const express = require('express');
const { createTour, getTours, getTour, updateTour, getCheapest, getTrending } = require('../controllers/tour');
const router = express.Router();
router.post("/tours", createTour)
router.get("/tours", getTours)
router.get("/tour/cheapest", getCheapest)
router.get("/tour/trending", getTrending)
router.get("/tours/:id", getTour)
router.patch("/tour/:id", updateTour)

module.exports = router;