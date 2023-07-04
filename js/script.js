const firstNumber = Number(prompt("Enter the first number:"));
const secondNumber = Number(prompt("Enter the second number:"));
const thirdNumber = Number(prompt("Enter the third number:"));

const average = (firstNumber + secondNumber + thirdNumber) / 3;

alert(`The arithmetic mean of the numbers ${firstNumber}, ${secondNumber}, ${thirdNumber} is ${average.toFixed(2)}`);