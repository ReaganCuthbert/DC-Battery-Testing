var forEach = require('lodash.forEach');

var dtArrayCalc = function(dischargeTime) {

  forEach(dischargeTime, timeCheck);

  function timeCheck(time, key) {

    //if string in array, throw error.
    if(typeof time !== 'number') throw new Error('Discharge Time does not accept strings.');

    //if Hours element is greater than 24, throw error.
    if(!key) {
      if(time > 24) throw new Error('Hours element can only be 0-24');
    }

    //if Minutes and Seconds element is greater than 60, throw error.
    else if (time > 60) throw new Error('Minutes and Seconds elements can only be 0-60');
  }


  //if empty array is passed, throw error.
  if(!dischargeTime.length) throw new Error('Discharge Time array must have at least 1 element(hours)');

  //if 1 element in array, element is returned.
  if(dischargeTime.length === 1) return dischargeTime[0];

  //if 2 elements in array, minutes is added to hour and returned.
  if(dischargeTime.length === 2) return dischargeTime[0] + (dischargeTime[1] / 60);

  //if 3 elements in array, seconds is added to minutes; minutes is added to hour and returned.
  if(dischargeTime.length === 3) return dischargeTime[0] + ( (dischargeTime[1] / 60) + (dischargeTime[2] / 60) );

  //if 4 or more elements in array, throw error.
  if(dischargeTime.length >= 4) throw new Error('Discharge Time array has a max of 3 elements(hours, minutes and seconds)');
}

module.exports = dtArrayCalc;
