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

test('instance of Date', function (t) {
  Date.setNow('2000-01-02T00:00:00');
  var date = new Date();
  t.ok(date instanceof Date, 'Date');
  t.end();
});

test('new Date(time) is normal', function (t) {
  Date.setNow('2000-01-02T00:00:00');
  var date = new Date('1995-12-17T03:24:00');
  t.equal(date.getTime(), 819170640000, 'normal date');
  t.end();
});

test('revert', function (t) {
  Date.revert();
  t.ok(Date.now() > now, 'reverted');
  t.end();
});
