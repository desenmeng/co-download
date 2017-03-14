const request = require('request');
const fs = require('fs');
const thenify = require('thenify').withCallback;

const download = (url, file, callback) => {
  const stream = fs.createWriteStream(file);
  stream.on('finish', () => {
    callback(null, file);
  });
  stream.on('error', error => {
    callback(error);
  });
  request
  .get(url)
  .on('error', error => {
    callback(error);
  })
  .pipe(stream);
};

module.exports = thenify(download);
