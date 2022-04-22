const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
  let result = 0;
	array.forEach(e => {result += e;});

  return result;
};

const multiply = function(array) {
  let result = 1;
  
  array.forEach(e => result *= e);

  return result;
};

const power = function(x, y) {
  return Math.pow(x, y);
};

const factorial = function(int) {
  let result = 1;

  for(i=1; i <= int; i++){
    result *= i;
  }
	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
