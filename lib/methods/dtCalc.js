
var dtCalc = function(dischargeTime) {
  //returns nothing if no Discharge Time was passed
  if(!dischargeTime) return;



  if(typeof dischargeTime === 'number') {

    //returns number if just an integer.
    if(Number.isInteger(dischargeTime)) return dischargeTime;

    //throws error if a float number.
    else throw new Error('Hour must be a whole number');

  }

  //if discharge Time is an array, it will run array calculation.
  if(Array.isArray(dischargeTime)) return 'an array';

  // throws error is not array or number.
  else throw new Error('Discharge Time must be an array or whole number.');

}

module.exports = dtCalc;
