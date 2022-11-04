const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.example)
//Get all flights
router.get('/Getflights', controller.Getflights)
//create flight
router.post('/CreateFlight', controller.CreateFlight)
// Get a single flight
router.get('/Getflight/:id', controller.Getflight)
//Delete flight
router.delete('/Deleteflight/:id', controller.Deleteflight)
//Update a flight
router.patch('/Updateflight/:id', controller.Updateflight)
module.exports = router;

