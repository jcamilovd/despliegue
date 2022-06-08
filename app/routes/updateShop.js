const express = require('express');
const authToken = require('../middleware/auth-token');
const updateDataValidator = require('../middleware/updateShop-validator');
const updateShopController = require('../controllers/updateShop-controller');
const router = express.Router();

router.put('/shop',authToken.njwtAuth,updateDataValidator.validatorParams,updateDataValidator.validator,updateShopController.updateShop);

module.exports = router; 