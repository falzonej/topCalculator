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
  queuedOperators[queuedOperators.length] = add();})

subtractOperator.addEventListener('click', e =>{
  queuedOperators[queuedOperators.length] = subtract();})

multiplyOperator.addEventListener('click', e =>{
  queuedOperators[queuedOperators.length] = multiply();})

divideOperator.addEventListener('click', e =>{
  queuedOperators[queuedOperators.length] = divide();})

clearOperator.addEventListener('click', e =>{
  clear();})

equalsOperator.addEventListener('click', e =>{
  console.log('1');})


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



function operate(x,y,operator){
  result = operator(x,y)
  return result;
}

const clear = () => {
  for (const key in queuedArrayNumbers) {
    delete queuedArrayNumbers[key];
  }
  calculatorDisplay.textContent = '';
}

let queuedArrayNumbers = [];

let queuedOperators = {};

let getNumbers = () => {
  return queuedArrayNumbers.join('');
}


// This func needs to be reworked
const equals = (queuedArrayNumbers) => {
  for (const key in queuedArrayNumbers){
    if (queuedArrayNumbers.hasOwnProperty(!NaN)){

    }
  }
}


