const express = require('express');
const Compute = require('../../compute');
const validateRequest = require('../auth');

var computeResource = new Compute();

// This router exposes any end points that are to be useable for customers
var router = express.Router();
router.use(validateRequest);

router.get('/', function (req, res) {
    let computeValue = computeResource.getSampleMessage();
    res.end('User router reached. ' + computeValue);
});

module.exports = router;