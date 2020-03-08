import app from './app'
import logger from './utils/log4jsInstance'

const config = require('./config/app')
async function main() {
    await app.listen(config.API_PORT)
    logger.info('Server on port',config.API_PORT);
//     log.trace('Entering cheese testing');
// log.debug('Got cheese.');
// log.info('Cheese is Comté.');
// log.warn('Cheese is quite smelly.');
// log.error('Cheese is too ripe!');
// log.fatal('Cheese was breeding ground for listeria.');  
};

main();

