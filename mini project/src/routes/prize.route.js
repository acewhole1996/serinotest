const express = require('express');
const router = express.Router();

const prizeController = require('../controllers/prize.controller');


// get prize by ID
router.get('/:latitude/:longitude',prizeController.getPrizeByID);



module.exports = router;