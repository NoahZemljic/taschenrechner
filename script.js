'use strict';

// Elements
const firstCalcEl = document.querySelector('.first-calc');
const currentCalcEl = document.querySelector('.current-calc');
const numberEls = document.querySelectorAll('.number');
const actionEls = document.querySelectorAll('.action');
const clearEl = document.querySelector('.clear');
const deleteEl = document.querySelector('.delete');
const equalEl = document.querySelector('.equal');

let action;

const numberInput = function (e) {
  const num = e.target.textContent;
  currentCalcEl.textContent += num;
};

const actionInput = function (e) {
  action = e.target.textContent;
  firstCalcEl.textContent = `${currentCalcEl.textContent} ${action}`;
  currentCalcEl.textContent = '';
};

const handleClear = function () {
  firstCalcEl.textContent = '';
  currentCalcEl.textContent = '';
};

const handleDelete = function () {
  currentCalcEl.textContent = currentCalcEl.textContent.slice(0, -1);
};

const handleEqual = function () {
  firstCalcEl.textContent += ` ${currentCalcEl.textContent}`;
  currentCalcEl.textContent = '';

  const [calc1, calc2] = firstCalcEl.textContent.split(` ${action} `);
  firstCalcEl.textContent = '';

  switch (action) {
    case '+':
      currentCalcEl.textContent = Number(calc1) + Number(calc2);
      break;
    case '-':
      currentCalcEl.textContent = Number(calc1) - Number(calc2);
      break;
    case 'X':
      currentCalcEl.textContent = Number(calc1) * Number(calc2);
      break;
    case '÷':
      currentCalcEl.textContent = Number(calc1) / Number(calc2);
      break;
    case '%':
      currentCalcEl.textContent = Number(calc1) % Number(calc2);
  }
};

// Add an event listener for each number element
numberEls.forEach(number => {
  number.addEventListener('click', numberInput);
});

actionEls.forEach(action => {
  action.addEventListener('click', actionInput);
});

clearEl.addEventListener('click', handleClear);

deleteEl.addEventListener('click', handleDelete);

equalEl.addEventListener('click', handleEqual);
