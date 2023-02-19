const convertToCelsius = function(far) {
  var cel = (far - 32) * (5 / 9);
  var celRounded = Math.round(cel * 10) / 10;
  return celRounded;
};

const convertToFahrenheit = function(cel) {
  var far = (cel * (9 / 5)) + 32;
  var farRounded = Math.round(far * 10) / 10;
  return farRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
