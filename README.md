# DC-Battery-Testing

Calculations package for DC battery electricians.

# API

to place in code use the following require statement:
```javascript
  var DCTesting = require('dc-battery-testing');
```

for ES6 modules:
```javascript
  import DCTesting from 'dc-battery-testing';
```

## Time-Adjustment Method

```javascript
  import { timeAdjust } from 'dc-battery-testing';
```

### timeAdjust([actual discharge time],[rated disharge time],temperature)


#### actual discharge time:

Type: Array or Number. 

If Number, the value passed in will be the amount of hours. Minutes and seconds will default to 0.
```javascript
  timeAdjust(2); //results to 2 hours for actual discharge time.
```

If Array, three elements can be passed in (hours,minutes,seconds). Hour defaults to 1; Minutes and Seconds default to 0.
```javascript
  timeAdjust([1,15,30]) //results to 1 hours, 15 minutes, and 30 seconds.
```

#### rated discharge time:

Type: Array or Number

If Number, the value passed in will be the amount of hours. Minutes and seconds will default to 0.
```javascript
  timeAdjust(1,2); //results to 2 hours for rated discharge time.
```

If Array, three elements can be passed in (hours,minutes,seconds). Hour defaults to 1; Minutes and Seconds default to 0.
```javascript
  timeAdjust(1,[1,12,20]) //results to 1 hours, 12 minutes, and 20 seconds.
```

#### temperature:

Type: Number

Average Electrolyte Temperature. Defaults to 77.

```javascript
  timeAdjust(1,1,57) //results to 57°F.
```

