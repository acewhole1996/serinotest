const express = require('express');
const router = express.Router();

const moneyvalController = require('../controllers/moneyval.controller');

// get all moneyval
router.get('/', moneyvalController.getMoneyvalList);

// get moneyval by ID
router.get('/:id',moneyvalController.getMoneyvalByID);

// create new moneyval
router.post('/', moneyvalController.createNewMoneyval);

// update moneyval
router.put('/:id', moneyvalController.updateMoneyval);

// delete moneyval
router.delete('/:id',moneyvalController.deleteMoneyval);

module.exports = router;