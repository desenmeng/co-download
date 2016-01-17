const co = require('co');
const download = require('../');

const node_logo = 'https://nodejs.org/static/images/logo.svg';

co(function * () {
  const file = yield download(node_logo, 'node_log.svg');
  console.log(file);
});
