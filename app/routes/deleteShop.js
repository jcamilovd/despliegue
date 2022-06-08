const express = require('express');
const authToken = require('../middleware/auth-token');
const deleteDocumentController = require('../controllers/deleteShop-controller');
const router = express.Router();

router.delete('/',authToken.njwtAuth, deleteDocumentController.deleteShop);

module.exports = router; 