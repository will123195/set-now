var test = require('tape');

var now = Date.now();

require('./index');

test('set now', function (t) {
  Date.setNow('1999-03-17T12:00:00');
  var date = new Date();
  t.equal(date.toString().split(' ')[3], '1999', 'new Date');
  t.equal(Date.now(), 921672000000, 'Date.now()');
  t.end()
});

test('set now again', function (t) {
  Date.setNow('2000-01-02T00:00:00');
  var date = new Date();
  t.equal(date.toString().split(' ')[3], '2000', 'new Date');
  t.equal(Date.now(), 946771200000, 'Date.now()');
  t.end();
});

test('revert', function (t) {
  Date.revert();
  t.ok(Date.now() > now, 'reverted');
  t.end();
});
