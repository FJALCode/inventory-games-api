"use strict";

const log4js = require('log4js');
const config = require('../config/app');

/**
 * Instancia de tipo log4js
 * @class log4jsInstance
 * @see https://www.npmjs.com/package/log4js
 */

module.exports = (function () {
	const log4jsInstance = log4js.configure({
		appenders: {
			debug: { type: 'console' },
			debugFile: { type: 'file', filename: './src/logs/debug.log' },
			error: { type: 'file', filename: './src/logs/error.log' }
		},
		categories: {
			default: { appenders: ['debug'], level: 'debug' },
			debugFile: { appenders: ['debugFile'], level: 'debug' },
			error: { appenders: ['error'], level: 'error' }
		}
	});

	const logger = log4jsInstance.getLogger(config.LOG_GET);
	return logger;
}());
