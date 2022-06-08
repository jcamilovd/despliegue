const express = require('express');
const registerShopValidator = require('../middleware/registerShop-validator');
const registerShopController = require('../controllers/registerShop-controller');
const router = express.Router();

router.post('/shop', registerShopValidator.validatorParams, registerShopValidator.validator, registerShopController.register);

module.exports = router;