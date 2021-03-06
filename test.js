var test = require('tape');

var startTime = Date.now();

require('./set-now');

test('set now', function (t) {
  Date.setNow('1999-03-17T12:00:00');
  var date = new Date();
  var now = Date.now();
  t.equal(date.toString().split(' ')[3], '1999', 'new Date');
  t.ok(now - 921672000000 <= 1, 'Date.now()');
  t.end()
});

test('set now again', function (t) {
  Date.setNow('2000-01-02T00:00:00');
  var date = new Date();
  var now = Date.now();
  t.equal(date.toString().split(' ')[3], '2000', 'new Date');
  t.ok(now - 946771200000 <= 1, 'Date.now()');
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

test('Date.UTC', function (t) {
  t.equal(Date.UTC(1995, 12, 31), 823046400000, 'Date.UTC');
  t.end();
});

test('Date.parse', function (t) {
  t.equal(Date.parse('1995-12-17T03:24:00'), 819170640000, 'Date.parse');
  t.end();
});

test('restore', function (t) {
  Date.setNow();
  t.ok(Date.now() > startTime, 'restored');
  t.end();
});

test('set now to future after restoring', function (t) {
  Date.setNow('2600-01-02T00:00:00');
  var date = new Date();
  var now = Date.now();
  t.equal(date.toString().split(' ')[3], '2600', 'new Date');
  t.ok(now - 19880985600000 <= 1, 'Date.now()');
  t.end();
});
