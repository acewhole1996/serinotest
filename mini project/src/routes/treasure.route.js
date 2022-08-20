const express = require('express');
const router = express.Router();

const treasureController = require('../controllers/treasure.controller');

// get all treasures
router.get('/', treasureController.getTreasureList);

// get treasure by ID
router.get('/:id',treasureController.getTreasureByID);

// create new treasure
router.post('/', treasureController.createNewTreasure);

// update treasure
router.put('/:id', treasureController.updateTreasure);

// delete treasure
router.delete('/:id',treasureController.deleteTreasure);


module.exports = router;