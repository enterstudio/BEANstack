const express = require('express'),
	path = require('path'),
	favicon = require('serve-favicon'),
	logger = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	main = require('../controllers/mainAPI'),
	fizzbuzz = require('../controllers/fizzbuzzAPI'),
	app = express(),
	config = require('../../config');

module.exports = {
	createServer: ()=> {
		app.set('views', path.join(__dirname, '../../public'))
			.engine('html', require('ejs').renderFile)
			.set('view engine', 'html')

			.use(express.static(path.join(__dirname, '../../public')))
			.use(favicon(path.join(__dirname, '../../public', 'favicon.ico')))
			.use(logger('dev'))
			.use(bodyParser.json())
			.use(bodyParser.urlencoded({ extended: true }))
			.use(cookieParser())

			.use('/api', fizzbuzz)

			.use('/', main)
			.use('/home', main);

		const listener = app.listen(config.server.port, (err) => {
			if (err) console.log(err);
			else console.log(`Express server listening on port ${listener.address().port}`);
		})
	}
};