const bodyElement = document.querySelector('.body')
const popUpElement = document.querySelector('.pop-up')
const closeButtonElement = document.querySelector('.close-pop-up')
const dogsAgeInputElement = document.querySelector('#dog')

const dogsAgeButtonElement = document.querySelector('.dogs-button')

const primeInputElement = document.querySelector('#prime')
const primeButtonElement = document.querySelector('.prime-button')

const resultElement = document.querySelector('.buttons-result')
const allInputsElement = document.querySelector('.input')

let didItPopUP = false;

bodyElement.addEventListener('click', function(event) {
    if (didItPopUP === true) return;
    else {
        popUpElement.style.display = 'block'
        didItPopUP = true;
    } 
})
closeButtonElement.addEventListener('click', () => {
        popUpElement.style.display = 'none'
})

// dogsAgeInputElement.addEventListener('click', clearResult)


// primeInputElement.addEventListener('click', clearResult)

// dogsAgeButtonElement.addEventListener('click', () => {
//     dogsAge = dogsAgeInputElement.value;
//     if (dogsAge <= 0) {
//         resultElement.innerHTML = "Dog isn't alive";
//     } else if (dogsAge <= 2) {
//         resultElement.innerHTML = `${dogsAge * 12.5} in human years!`;
//     } else if (dogsAge > 2) {
//         resultElement.innerHTML = ((25 + (dogsAge - 2) * 4) + ' in human years!');
//     }
// })
// function clearResult (){
//     resultElement.innerHTML = '';
//     dogsAgeInputElement.value = '';
//     primeInputElement.value = '';

// }
// primeButtonElement.addEventListener('click', checkPrime);

// function isItPrime(digit) {
//     for (i = 2; i < digit; i++) {
//         if (digit % i === 0) {
//             return false;
//         }
//     } 
// return true;
// }
// function checkPrime() {
//     digit = primeInputElement.value;
//     if (isItPrime(digit)) {
//         resultElement.innerHTML = `${digit} is Prime!`
//     } else {
//         resultElement.innerHTML = `${digit} is not Prime`
//     }
// }
