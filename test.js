var sudo = require('./');
var test = require('tape');

test('a simple call works', function (t) {
  sudo.exec('echo \'name\'', function (err) {
    t.end(err);
  });
});
