var getKT = require('../helpers/load-correction/getKT');

var loadCorrection = function(standardTemperature, current, temperature) {
  var correctionFactor;

  //defaults to 77°F
  standardTemperature = standardTemperature || 77;

  //defaults to 250 amps DC.
  current = current || 250;

  //defaults to 77°F
  temperature = temperature || 77;

  //search for correction factor from temperature given.
  correctionFactor = getKT(standardTemperature, temperature);

  //returns temperature corrected load.
  return Math.round( current / correctionFactor );

}

module.exports = loadCorrection;
