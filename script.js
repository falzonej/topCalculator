const operators = {

  add: (x, y) => {
  	let result = x + y;
    return result
  },
  subtract: (x, y) => {
    let result = x - y;
    return result;
  },
  //mind the 2 below funcs as they only take arrays
  sum: (array) => {
  	let result = 0;
    for (i = 0; i < array.length; i++){
      result += array[i];
    }
    return result;
  },
  multiply: (array) => {
  	let result = 1;
    for (i = 0; i < array.length; i++){
      result *= array[i];
    }
    return result;
  }
}
