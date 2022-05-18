const calculatorDisplay = document.querySelector('#calculatorDisplay');


const operators = {
  add: (x, y) => {
  	return x + y;
  },
  subtract: (x, y) => {
    return x - y;
  },
  divide: (x, y) => {
  	return x / y;
  },
  multiply: (x, y) => {
    return x * y; 
  }
}

const operate = (operators) => {
  return calculatorDisplay.textContent = operators;
}

const clear = () => {
  return calculatorDisplay.textContent = '';
}

// look into how to make a text container that will hold the results and possibly show the calculations