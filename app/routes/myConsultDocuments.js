const express = require('express');
const authToken = require('../middleware/auth-token');
const consultDocumentsController = require('../controllers/myconsultDocuments-controller.js');
const router = express.Router();

router.get('/',authToken.njwtAuth, consultDocumentsController.myConsultDocuments);

module.exports = router; 