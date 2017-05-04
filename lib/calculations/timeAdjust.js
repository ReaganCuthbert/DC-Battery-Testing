var dtCalc = require('../helpers/time-adjust/dtCalc');
var getKT = require('../helpers/time-adjust/getKT');
var correctedCapacity = require('../helpers/time-adjust/correctedCapacity');

var timeAdjust = function(adt,rdt,temperature) {
  var actualTime, ratedTime, correctionFactor;


//runs discharge time calculation if actual time argument is given. Defaults to 1 hour.
  actualTime = dtCalc(adt) || 1;

//runs discharge time calculation if rated time argument is given. Defaults to 1 hour.
  ratedTime = dtCalc(rdt) || 1;

//defaults to 77°F.
  temperature = temperature || 77;

//search for correction factor from temperature given;
  correctionFactor =  getKT(temperature);


//returns the corrected capacity(result).
  return correctedCapacity(actualTime, ratedTime, correctionFactor).toFixed(2);

}


module.exports = timeAdjust;
