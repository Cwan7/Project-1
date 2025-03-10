const dogsAgeInputElement = document.querySelector('#dog')
const dogsAgeButtonElement = document.querySelector('.dogs-button')

const primeInputElement = document.querySelector('#prime')
const primeButtonElement = document.querySelector('.prime-button')

const resultElement = document.querySelector('.buttons-result')
const allInputsElement = document.querySelector('.input')

dogsAgeInputElement.addEventListener('click', clearResult)

dogsAgeButtonElement.addEventListener('click', () => {
    dogsAge = dogsAgeInputElement.value;
    if (dogsAge <= 0) {
        resultElement.innerHTML = "Dog isn't alive";
    } else if (dogsAge <= 2) {
        resultElement.innerHTML = `${dogsAge * 12.5} in human years!`;
    } else if (dogsAge > 2) {
        resultElement.innerHTML = ((25 + (dogsAge - 2) * 4) + ' in human years!');
    }
})
function clearResult (){
    resultElement.innerHTML = '';
    dogsAgeInputElement.value = '';
}
primeButtonElement.addEventListener('click', checkPrime);

function isItPrime(digit) {
    for (i = 2; i < digit; i++) {
        if (digit % i === 0) {
            return false;
        }
    } 
return true;
}
function checkPrime() {
    digit = primeInputElement.value;
    if (isItPrime(digit)) {
        resultElement.innerHTML = `${digit} is Prime!`
    } else {
        resultElement.innerHTML = `${digit} is not Prime`
    }
}

