const convertToCelsius = function(tempInF) {
  let celsius = ((5/9) * (tempInF - 32));
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(tempInC) {
  let fahrenheit = ((9 / 5) * tempInC) + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
