const express = require('express');
const router = new express.Router();
const ApiController = require('../controllers/api/api-controller.js');

router.get('/example', ApiController.example);

module.exports = router;