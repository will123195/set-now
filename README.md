# set-now

Adds `Date.setNow()` to JavaScript's gobal `Date` object.

[![Build Status](https://travis-ci.org/will123195/set-now.svg?branch=master)](https://travis-ci.org/will123195/set-now)

Wind back the clock to a time in the past (or in the future). This is useful for making tests deterministic.

## Install

```
npm install set-now
```

## Usage

```js
require('set-now')

Date.setNow('2016-03-17T12:00:00')

new Date() // Thu Mar 17 2016 08:00:00 GMT-0400 (EDT)
Date.now() // 1458216000000

setTimeout(function () {
  new Date() // Thu Mar 17 2016 08:00:01 GMT-0400 (EDT)

  Date.setNow() // reset the time back to normal

  new Date() // today's actual date

}, 1000)
```

## Date.setNow( [time] )

Wind back the clock to the specified time (or wind forward).

* `time` {String} (optional) the time you want it to be. If `time` is not specified, the time will be reset to the actual time.
