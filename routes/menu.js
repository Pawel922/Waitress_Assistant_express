var express = require('express');
var router = express.Router();

var dishController = require('../controllers/dishController');

router.get('/', dishController.dish_list);

module.exports = router;

