const express = require('express');
const users = require('./users');
const orders = require('./orders);

let router = express.Router();
module.exports = () => {
router.use(‘/users’, users);
router.use(‘/orders’, orders);
return router;
