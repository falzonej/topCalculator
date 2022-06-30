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



function add(x,y){
  return x+y;}

function subtract(x,y){
  return x-y;
}

function multiply(x,y){
  return x*y;
}

function divide(x,y){
  return x/y;
}

let queuedArrayNumbers = [];

let queuedNumbers = [];

let queuedOperators = [];

function convertArrayToInteger(arr) {
  stringNumbers = arr.join('');
  queuedArrayNumbers = []
  return parseInt(stringNumbers);
}

function updateQueuedNumbers() {
    queuedNumbers.push(convertArrayToInteger(queuedArrayNumbers));
    queuedArrayNumbers =[];
}

function getCurrentValue(queuedNumbers) {
  return queuedNumbers.shift();
}

function getCurrentOperator(queuedOperators) {
  return queuedOperators.shift();
}

//  operatorInOperation = operator;
//  result = operatorInOperation(x,y);

function operate(operator,x,y){
  let result = 0;
  switch(operator){
    case add:
      result = x+y;
      break;
    case subtract:
      result = x-y;
      break;
    case multiply:
      result = x*y;
      break;
    case divide:
      result = x/y;
  }
  return result;
}

//since this is a one line function that is only called once, look into removal
function updateCalcDisplay(input) {
  calculatorDisplay.textContent = input;
}

let equalsValue = []

function equals() {
  let previousValue = getCurrentValue(queuedNumbers);
  let currentValue = getCurrentValue(queuedNumbers);
  let currentOperator = getCurrentOperator(queuedOperators);
  let operation = currentOperator(previousValue,currentValue);
  queuedNumbers.unshift(operation);
  equalsValue.shift();
  equalsValue.push(operation);

}

function expressionCompletingEquals() {
  for(let i = 0; i < queuedNumbers.length; i++){
    equals();
  }
  return updateCalcDisplay(equalsValue);
}

const clear = () => {
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

addOperator.addEventListener('click', e =>{
  queuedOperators.push(add);
  updateQueuedNumbers();
})

subtractOperator.addEventListener('click', e =>{
  queuedOperators.push(subtract);
  updateQueuedNumbers();
})

multiplyOperator.addEventListener('click', e =>{
  queuedOperators.push(multiply);
  updateQueuedNumbers();
})

divideOperator.addEventListener('click', e =>{
  queuedOperators.push(divide);
  updateQueuedNumbers();
})

clearOperator.addEventListener('click', e =>{
  clear();})

equalsOperator.addEventListener('click', e =>{
  updateQueuedNumbers();
  expressionCompletingEquals();})

  //current build requiring an additional operator to be entered so operate
  //knows what to do with the final # this is bad UI find work around

  //what if we find a way so that when equals is run a 2 of the last entered operators
  // are added to the queued operators array