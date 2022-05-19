const calculatorDisplay = document.querySelector('#calculatorDisplay');
const button1 = document.querySelector('#one');
const button2 = document.querySelector('#two');
const button3 = document.querySelector('#three');
const button4 = document.querySelector('#four');
const button5 = document.querySelector('#five');
const button6 = document.querySelector('#six');
const button7 = document.querySelector('#seven');
const button8 = document.querySelector('#eight');
const button9 = document.querySelector('#nine');
const button0 = document.querySelector('#zero');
const addOperator = document.querySelector('#addOperator');
const subtractOperator = document.querySelector('#subtractOperator');
const multiplyOperator = document.querySelector('#multiplyOperator');
const divideOperator = document.querySelector('#divideOperator');
const clearOperator = document.querySelector('#clear');
const equalsOperator = document.querySelector('#equalsOperator');

button1.addEventListener('click', e =>{
  console.log('1');
})

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