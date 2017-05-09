  var seventySevenKTChart = require('../../charts/seventySevenKTChart');
  var sixtyEightKTChart = require('../../charts/sixtyEightKTChart');
  var find = require('lodash.find');
  var interpolationCalc = require('../interpolationCalc');

var getKT = function(standardTemperature, temperature) {
  var searchKT, mainKTChart;

  //if Standard Temperature is not 68 or 77, throw error.
  if(standardTemperature !== 68 && standardTemperature !== 77)
    throw new Error('Standard Temperature must be 68 or 77.');

  //if Standard Temperature is below 40 or above 120, throw error.
  if(temperature < 40 || temperature > 120)
    throw new Error('Average Electrolyte Temperature must be above 40 and below 120');


    function tempToKT(row) {
      return row.temperature === temperature
    }


  if(standardTemperature === 68) {

    //finds kt on chart if standard Temperature is 68.
    searchKT = find(sixtyEightKTChart, tempToKT);

    mainKTChart = sixtyEightKTChart;

  }



  if(standardTemperature === 77) {

    //finds kt on chart if standard Temperature is 77.
    searchKT = find(seventySevenKTChart, tempToKT);

    mainKTChart = seventySevenKTChart;

  }


  //if correction factor was on the chart, return correction factor.
  if(searchKT) return searchKT.kt;

  //if not on chart, run this loop.
  for(i = 0; i < mainKTChart.length; i++) {
    var precedingRow = mainKTChart[i];
    var followingRow = mainKTChart[i+1];

    if(temperature > precedingRow.temperature
      &&
      temperature < followingRow.temperature) return interpolationCalc(temperature, precedingRow, followingRow);
  }


}

module.exports = getKT;
