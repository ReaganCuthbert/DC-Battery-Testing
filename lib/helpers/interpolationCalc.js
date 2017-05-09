
var interpolationCalc = function(temperature, precedingRow, followingRow) {
  var precedingTemp = precedingRow.temperature,
      precedingKT = precedingRow.kt,
      followingTemp = followingRow.temperature,
      followingKT = followingRow.kt;

    var firstCalculation = ( (temperature - precedingTemp) * (followingKT - precedingKT) ) / (followingTemp - precedingTemp);

    return (firstCalculation + precedingKT).toFixed(3);
}



module.exports = interpolationCalc;
