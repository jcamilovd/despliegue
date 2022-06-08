const express = require('express');
const loginShopValidator = require('../middleware/loginShop-validator');
const loginShopController = require('../controllers/loginShop-controller');
const router = express.Router();

router.post('/', loginShopValidator.validatorParams, loginShopValidator.validator, loginShopController.login);

module.exports = router; 