const express = require('express'),
	mainAPI = express.Router();

mainAPI
	.get('/', (req, res) => res.render('demo'));

console.log("Main endpoint at \\");

module.exports = mainAPI;