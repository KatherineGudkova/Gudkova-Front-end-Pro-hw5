const firstNumber = Number(prompt("Enter the first number:"));
if (isNaN(firstNumber)) {
    alert(`The entered data is not a number.`)
}
else {
    const secondNumber = Number(prompt("Enter the second number:"));
    if (isNaN(secondNumber)) {
        alert(`The entered data is not a number.`)
    }
    else {
        const thirdNumber = Number(prompt("Enter the third number:"));
        if (isNaN(thirdNumber)) {
            alert(`The entered data is not a number.`)
        }
        else {
            const average = (firstNumber + secondNumber + thirdNumber) / 3;

            alert(`The arithmetic mean of the numbers ${firstNumber}, ${secondNumber}, ${thirdNumber} is ${average.toFixed(2)}`);
        }
    }
}
