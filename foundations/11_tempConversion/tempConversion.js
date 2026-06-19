const convertToCelsius = function(temperatures) {
  let celsius =  ((temperatures - 32)*(5/9));
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(temperatures) {
  let fahrenheit = ((temperatures *(9/5))+32);
  return Math.round(fahrenheit * 10) / 10;

};

convertToCelsius(32) // fahrenheit to celsius, should return 0
convertToFahrenheit(0) // celsius to fahrenheit, should return 32

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
