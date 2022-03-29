const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index)
router.get('/productsAdmin', mainController.show)

module.exports = router;
