# set-now

Adds `Date.setNow()` to JavaScript's global `Date` object.

[![Build Status](https://travis-ci.org/will123195/set-now.svg?branch=master)](https://travis-ci.org/will123195/set-now)

This is useful for making tests deterministic. Wind back the clock to a time in the past (or in the future).

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

// wait 1 second
setTimeout(function () {
  new Date() // Thu Mar 17 2016 08:00:01 GMT-0400 (EDT)
  Date.setNow() // reset the time back to normal
  new Date() // today's actual date
}, 1000)
```

## Date.setNow( [time] )

Set the clock to the specified time.

* `time` {String} (optional) The time you want it to be. If `time` is not specified, the clock will be reset to the actual time.
