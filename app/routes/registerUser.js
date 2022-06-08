const express = require('express');
const registerUserValidator = require('../middleware/registerUser-validator');
const registerUserController = require('../controllers/registerUser-controller');
const router = express.Router();

router.post('/adm', registerUserValidator.validatorParams, registerUserValidator.validator, registerUserController.register);

module.exports = router; 