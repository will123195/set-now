# set-now

Set back the clock for the global Date object to a time in the past (or the future). 

This is useful for making tests deterministic.

## Usage

```js
require('set-now')
Date.setNow('2016-03-17T12:00:00')
new Date() // Thu Mar 17 2016 08:00:00 GMT-0400 (EDT)
Date.now() // 1458216000000

setTimeout(function () {
  new Date() // Thu Mar 17 2016 08:00:01 GMT-0400 (EDT)
}, 1000)
```
