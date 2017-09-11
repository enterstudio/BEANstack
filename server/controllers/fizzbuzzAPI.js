const express = require('express'),
    fizzbuzzAPI = express.Router(),
    fizzbuzzService = require('../services/fizzbuzzService');

fizzbuzzAPI
    .get('/', (req, res) => fizzbuzzService.fizzbuzz(req, res));

console.log("Fizzbuzz endpoint at \\api");

module.exports = fizzbuzzAPI;