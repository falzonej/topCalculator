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

queuedArrayNumbers = [];

function updateQueuedNumbers() {
  queuedNumbers.push(convertArrayToInteger(queuedArrayNumbers));
}

function getCurrentValue(queuedNumbers) {
  for (let i = 1; i < queuedNumbers.length; i++){
  currentValue = queuedNumbers[i];
  return currentValue
  }
}

function getCurrentOperator(queuedOperators) {
  for(let i = 0; i < queuedOperators.length; i++){
    currentOperator = queuedOperators[i];
    return currentOperator
  }
}

//when making the loop function leave operator variable in a way
//so it can hold the stored operator value until it is given a 
//new value
function operate(operator,x,y){
  operatorInOperation = operator
  result = operatorInOperation(x,y)
  return result;
}

function equals() {
  previousValue = queuedNumbers[0];
  for(let i = 0; i < queuedNumbers.length; i++){
    getCurrentValue(queuedNumbers);
    getCurrentOperator(queuedOperators);
  }
  console.log(operate(currentOperator,previousValue,currentValue));
}

const clear = () => {
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
  queuedOperators[queuedOperators.length] = add;
  updateQueuedNumbers();
})

subtractOperator.addEventListener('click', e =>{
  queuedOperators[queuedOperators.length] = subtract;
  updateQueuedNumbers();
})

multiplyOperator.addEventListener('click', e =>{
  queuedOperators[queuedOperators.length] = multiply;
  updateQueuedNumbers();
})

divideOperator.addEventListener('click', e =>{
  queuedOperators[queuedOperators.length] = divide;
  updateQueuedNumbers();
})

clearOperator.addEventListener('click', e =>{
  clear();})

equalsOperator.addEventListener('click', e =>{
  console.log('1');})