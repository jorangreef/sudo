var sudo = require('./');
var test = require('tape');

test('a simple call works', function (t) {
  sudo.exec('echo \'name\'', function (err) {
    t.error(err, 'no error');
    t.end();
  });
});

test('try setting a name', function (t) {
  sudo.setName('this is a test');
  sudo.exec('echo \'name\'', function (err) {
    t.error(err, 'no error');
    t.end();
  })
})
