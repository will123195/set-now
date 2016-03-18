# set-now

Set back the clock for the global Date object to a time in the past (or the future). 

This is useful for making tests deterministic.

[![Build Status](https://travis-ci.org/will123195/set-now.svg?branch=master)](https://travis-ci.org/will123195/set-now)

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

  // rever the time back to normal
  Date.revert()

}, 1000)
```

## Date.setNow( time )

Roll back (or forward) the clock to the specified time

* time {String} the time you want it to be

## Date.revert()

Revert to the actual time and clear the internal interval

Note: This module starts an interval behind the scenes to track what fake time it is. Your script may not end gracefully until you call `Date.revert()`.
