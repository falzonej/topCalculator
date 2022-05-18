const add = function(x, y) {
	let result = x + y;
  return result
};

const subtract = function(x, y) {
  let result = x - y;
  return result;
};

const sum = function(array) {
	let result = 0;
  for (i = 0; i < array.length; i++){
    result += array[i];
  }
  return result;
};

const multiply = function(array) {
	let result = 1;
  for (i = 0; i < array.length; i++){
    result *= array[i];
  }
  return result;
};