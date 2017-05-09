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

Returns the Corrected Capacity as a percentage.

### timeAdjust([actual discharge time],[rated disharge time],temperature)


#### actual discharge time:

Type: Array or Number. 

If Number, the value passed in will be the amount of hours. Minutes and seconds will default to 0.
```javascript
  timeAdjust(2); //2 hours for actual discharge time
```

If Array, three elements can be passed in (hours,minutes,seconds). Hour defaults to 1; Minutes and Seconds default to 0.
```javascript
  timeAdjust([1,15,30]) //1 hours, 15 minutes, and 30 seconds
```

#### rated discharge time:

Type: Array or Number

If Number, the value passed in will be the amount of hours. Minutes and seconds will default to 0.
```javascript
  timeAdjust(1,2); //2 hours for rated discharge time
```

If Array, three elements can be passed in (hours,minutes,seconds). Hour defaults to 1; Minutes and Seconds default to 0.
```javascript
  timeAdjust(1,[1,12,20]) //1 hours, 12 minutes, and 20 seconds
```

#### temperature:

Type: Number

Average Electrolyte Temperature. Defaults to 77.

```javascript
  timeAdjust(1,1,57) //57°F
```

## Load Correction

```javascript
  import { loadCorrection } from 'dc-battery-testing';
```

Returns the Corrected Load Capacity in Amps DC.


### loadCorrection([standard temperature],[published discharge current],temperature)

#### standard temperature:

Type: Number

Selects correction factor chart based off battery manufacturer. Only takes 68 and 77 as viable arguments. Defaults to 77.

```javascript
  loadCorrection(68); //uses the 68 KT(correction factor) chart
```

#### published discharge current:

Type: Number

Current published by manufacturer in amperes. Defaults to 250.

```javascript
  loadCorrection(77,255); //255 amps
```

#### temperature:

Type: Number

Average Electrolyte Temperature. Defaults to 77.

```javascript
  loadCorrection(77,255,96); //96°F
```

## Float Voltage

```javascript
  import { floatVoltage } from 'dc-battery-testing';
```

Returns the Temperature Corrected Float Voltage in Volts DC(VDC).

### floatVoltage([recommended cell voltage],cells,temperature)

#### recommended cell voltage:

Type: Number

Recommended Cell Voltage published by battery manufacturer at 77°F. Required.

```javascript
  floatVoltage(2.25,/*cells*/,/*temperature*/); //2.25 volts per cell
```

#### cells:

Type: Number

number of cells in series. Required.

```javascript
  floatVoltage(/*rec cell voltage*/,230,/*temperature*/); //230 cells
```

#### temperature: 

Type: Number

Average observed electrolyte or negative post temperature. Required.

```javascript
  floatVoltage(/*rec cell voltage*/,/*cells*/,70); //70°F
```




  



