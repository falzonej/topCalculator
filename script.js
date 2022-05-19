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
  currentCalc.one = 1;})

button2.addEventListener('click', e =>{
  currentCalc.two = 2;})

button3.addEventListener('click', e =>{
  currentCalc.three = 3;})

button4.addEventListener('click', e =>{
  currentCalc.four = 4;})

button5.addEventListener('click', e =>{
  currentCalc.five = 5;})

button6.addEventListener('click', e =>{
  currentCalc.six = 6;})

button7.addEventListener('click', e =>{
  currentCalc.seven = 7;})

button8.addEventListener('click', e =>{
  currentCalc.eight = 8;})

button9.addEventListener('click', e =>{
  currentCalc.nine = 9;})

button0.addEventListener('click', e =>{
  currentCalc.zero = 0;})

addOperator.addEventListener('click', e =>{
  currentCalc.addOperator = operators.add;})

subtractOperator.addEventListener('click', e =>{
  currentCalc.subtractOperator = operators.subtract;})

multiplyOperator.addEventListener('click', e =>{
  currentCalc.multiplyOperator = operators.multiply;})

divideOperator.addEventListener('click', e =>{
  currentCalc.divideOperator = operators.divide;})

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
  for (const key in currentCalc) {
    delete currentCalc[key];
  }
  calculatorDisplay.textContent = '';
}

let currentCalc = {};


// look into how to make a text container that will hold the results and possibly show the calculations