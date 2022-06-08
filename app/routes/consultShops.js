const express = require('express');
const authToken = require('../middleware/auth-token');
const consultShopsController = require('../controllers/consultShops-controller');
const router = express.Router();

router.get('/',authToken.njwtAuth, consultShopsController.consultShops);

module.exports = router; 