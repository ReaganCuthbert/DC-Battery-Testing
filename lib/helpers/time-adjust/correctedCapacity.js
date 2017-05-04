
var correctedCapacity = function(actualTime, ratedTime, correctionFactor) {

  return ( actualTime / (ratedTime * correctionFactor) ) * 100;

}

module.exports = correctedCapacity;
