var KTChart = require('../../charts/KTChart');
var find = require('lodash.find');
var interpolationCalc = require('../interpolationCalc');

var getKT = function(temperature) {

  if(temperature < 40 || temperature > 120) throw new Error('Average Electrolyte Temperature must be above 40' +
                                                            ' and below 120');

  //looks to see if temperature given's correction factor is on the chart.
  var searchKT = find(KTChart, tempToKT);

  function tempToKT(row) {
    return row.temperature === temperature;
  }

  //if correction factor was on the chart, return correction factor.
  if(searchKT) return searchKT.kt;

  //if not on chart, run this loop.
  for(i = 0; i < KTChart.length; i++) {
    var precedingRow = KTChart[i];
    var followingRow = KTChart[i+1];

    if(temperature > precedingRow.temperature
      &&
      temperature < followingRow.temperature) return interpolationCalc(temperature, precedingRow, followingRow);
  }

}

module.exports = getKT;
