
var floatVoltage = function(rcv, temperature, cells) {
  var temperatureChange, voltageChange;


  for(i = 0; i < floatVoltage.length; i++) {

    //checks see if a parameters were passed in.
    if(!arguments[i])
      throw new Error('must have recommended cell voltage, average temperature,' +
       'and number of cells passed to floatVoltage.');

    //checks to see if passed in arguments are numbers.
    if(typeof arguments[i] !== 'number' )
      throw new Error('Float Voltage only accepts numbers as arguments.');

  }

  //finds temperature change based of average temperature of 77.
  temperatureChange = 77 - temperature;

  //change of volts from the recommended amount.
  voltageChange = temperatureChange * .003;

  //returns Float Voltage.
  return (rcv + voltageChange) * cells;
}


module.exports = floatVoltage;
