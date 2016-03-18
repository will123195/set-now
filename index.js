var _Date = Date;

var intervalMs = 1;

var timestamp = new _Date().getTime();

var interval = setInterval(function () {
  timestamp += intervalMs;
}, intervalMs);

Date = function Date () {
  if (arguments.length === 0) {
    return new _Date(timestamp);
  }
  // Unfortunately, Date.apply doesn't work
  // return _Date.apply(this, arguments);
  switch (arguments.length) {
    case 1: return new _Date(arguments[0]);
    case 2: return new _Date(arguments[0], arguments[1]);
    case 3: return new _Date(arguments[0], arguments[1], arguments[2]);
    case 4: return new _Date(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5: return new _Date(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6: return new _Date(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7: return new _Date(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
  }
};

Date.prototype = _Date.prototype;

Date.now = function () {
  return new _Date(timestamp).getTime();
};

Date.setNow = function (now) {
  timestamp = new _Date(now).getTime();
};

Date.revert = function () {
  clearInterval(interval);
  Date = _Date;
}

module.exports = {
  interval: interval
};


