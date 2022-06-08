const express = require('express');
const authToken = require('../middleware/auth-token');
const consultShopsController = require('../controllers/consultAdmins-controller');
const router = express.Router();

router.get('/',authToken.njwtAuth, consultShopsController.consultAdmins);

module.exports = router; 