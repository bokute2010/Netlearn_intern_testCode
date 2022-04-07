const jokeController = require('../controllers/joke');
const express = require('express')
const router = express.Router();


router.get('/jokes', jokeController.getJoke);
router.post('/jokes', jokeController.addJoke);
router.put('/jokes', jokeController.putJoke);

module.exports = router;