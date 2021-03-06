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
const buttonDecimal = document.querySelector('#decimal')
const addOperator = document.querySelector('#addOperator');
const subtractOperator = document.querySelector('#subtractOperator');
const multiplyOperator = document.querySelector('#multiplyOperator');
const divideOperator = document.querySelector('#divideOperator');
const clearOperator = document.querySelector('#clear');
const equalsOperator = document.querySelector('#equalsOperator');

let queuedArrayNumbers = [];

let queuedNumbers = [];

let queuedOperators = [];

function convertArrayToInteger(arr) {
  let stringNumbers = arr.join('');
  queuedArrayNumbers = [];
  return parseFloat(stringNumbers);
}

function updateQueuedNumbers() {
  queuedNumbers.push(convertArrayToInteger(queuedArrayNumbers));
  queuedArrayNumbers =[];
}

function getCurrentValue(queuedNumbers) {
  let currentValue = queuedNumbers[0];
  queuedNumbers.splice(0,1);
  return currentValue;
}

function getCurrentOperator(queuedOperators) {
  return queuedOperators.shift();
}

function roundToThree(num) {
  return +(Math.round(num + "e+3")  + "e-3");
}

function operate(operator,x,y){
  let result = 0;
  switch(operator){
    case '+':
      return x+y;
    case '-':
      return x-y;
    case '*':
      return x*y;
    case '/':
      return x/y;
  }
}

function updateCalcDisplay(input) {
  calculatorDisplay.textContent = input;
}

let equalsValue = [];

function equals() {
  let previousValue = getCurrentValue(queuedNumbers);
  let currentValue = getCurrentValue(queuedNumbers);
  let currentOperator = getCurrentOperator(queuedOperators);
  let operation = operate(currentOperator,previousValue,currentValue);
  queuedNumbers.unshift(operation);
  equalsValue.shift();
  equalsValue.push(operation);
}

function expressionCompletingEquals() {
  let i = 1;
  while(i<queuedNumbers.length){
    equals();
  }
  let roundedEqualsValue = roundToThree(equalsValue);
  return updateCalcDisplay(roundedEqualsValue);
}

function clear() {
  queuedArrayNumbers = [];
  queuedNumbers = [];
  queuedOperators = [];
  calculatorDisplay.textContent = '';
}

button1.addEventListener('click', e =>{
  queuedArrayNumbers[queuedArrayNumbers.length] = '1';})

button2.addEventListener('click', e =>{
  queuedArrayNumbers[queuedArrayNumbers.length] = '2';})

button3.addEventListener('click', e =>{
  queuedArrayNumbers[queuedArrayNumbers.length] = '3';})

button4.addEventListener('click', e =>{
  queuedArrayNumbers[queuedArrayNumbers.length] = '4';})

button5.addEventListener('click', e =>{
  queuedArrayNumbers[queuedArrayNumbers.length] = '5';})

button6.addEventListener('click', e =>{
  queuedArrayNumbers[queuedArrayNumbers.length] = '6';})

button7.addEventListener('click', e =>{
  queuedArrayNumbers[queuedArrayNumbers.length] = '7';})

button8.addEventListener('click', e =>{
  queuedArrayNumbers[queuedArrayNumbers.length] = '8';})

button9.addEventListener('click', e =>{
  queuedArrayNumbers[queuedArrayNumbers.length] = '9';})

button0.addEventListener('click', e =>{
  queuedArrayNumbers[queuedArrayNumbers.length] = '0';})

buttonDecimal.addEventListener('click', e =>{
  queuedArrayNumbers[queuedArrayNumbers.length] = '.';})

addOperator.addEventListener('click', e =>{
  queuedOperators.push('+');
  updateQueuedNumbers();
})

subtractOperator.addEventListener('click', e =>{
  queuedOperators.push('-');
  updateQueuedNumbers();
})

multiplyOperator.addEventListener('click', e =>{
  queuedOperators.push('*');
  updateQueuedNumbers();
})

divideOperator.addEventListener('click', e =>{
  queuedOperators.push('/');
  updateQueuedNumbers();
})

clearOperator.addEventListener('click', e =>{
  clear();})

equalsOperator.addEventListener('click', e =>{
  updateQueuedNumbers();
  expressionCompletingEquals();})