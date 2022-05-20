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
  queuedNumbers.one = 1;})

button2.addEventListener('click', e =>{
  queuedNumbers.two = 2;})

button3.addEventListener('click', e =>{
  queuedNumbers.three = 3;})

button4.addEventListener('click', e =>{
  queuedNumbers.four = 4;})

button5.addEventListener('click', e =>{
  queuedNumbers.five = 5;})

button6.addEventListener('click', e =>{
  queuedNumbers.six = 6;})

button7.addEventListener('click', e =>{
  queuedNumbers.seven = 7;})

button8.addEventListener('click', e =>{
  queuedNumbers.eight = 8;})

button9.addEventListener('click', e =>{
  queuedNumbers.nine = 9;})

button0.addEventListener('click', e =>{
  queuedNumbers.zero = 0;})

addOperator.addEventListener('click', e =>{
  queuedOperators.addOperator = operators.add;})

subtractOperator.addEventListener('click', e =>{
  queuedOperators.subtractOperator = operators.subtract;})

multiplyOperator.addEventListener('click', e =>{
  queuedOperators.multiplyOperator = operators.multiply;})

divideOperator.addEventListener('click', e =>{
  queuedOperators.divideOperator = operators.divide;})

clearOperator.addEventListener('click', e =>{
  clear();})

equalsOperator.addEventListener('click', e =>{
  console.log('1');})

const operators = {
  add: (x, y) => {
  	return x + y;},
  subtract: (x, y) => {
    return x - y;},
  divide: (x, y) => {
  	return x / y;},
  multiply: (x, y) => {
    return x * y; }
}
// operate is run in this format || operate(operators.add(4,4)); ||
const operate = (operators) => {
  return calculatorDisplay.textContent = operators;
}

const clear = () => {
  for (const key in queuedNumbers) {
    delete queuedNumbers[key];
  }
  calculatorDisplay.textContent = '';
}

let queuedNumbers = {};

let queuedOperators = {};

const equals = (queuedNumbers) => {
  for (const key in queuedNumbers){
    if (queuedNumbers.hasOwnProperty(!NaN)){

    }
  }
}


