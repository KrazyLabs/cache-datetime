# cache-datetime
A datetime factory that works well with cached API and Web requests, by rounding to a minutes value.

## Install
`npm install --save cache-datetime`

or 

`yarn add cache-datetime`

## Example

```
const cacheDatetime = require('cache-datetime');

// current epoch rounded down to the last five minutes (default)
const myDatetime5 = cacheDatetime();

// specified epoch rounded down to the last ten minutes
const myDatetime10 = cacheDatetime({ minutes: 10, date: 1496754264 });

// current epoch rounded up to the nearest 10 minutes
const myDatetimeUp10 = cacheDatetime({ minutes: 10, round: Math.ceil });

// current Date object rounded down to the nearest 5 minutes 
const myDateObject = cacheDatetime({ epoch: false });
```

### Constructor

```
const cacheDatetime = require('cache-datetime');

// defaults shown
new cacheDatetime({
  minutes: 5, // number of minutes rounded
  round: Math.floor, // function to round epoch 
  epoch: true, // return as epoch value or Date object (false)
  date: Date.now() // the date to round
})
```
