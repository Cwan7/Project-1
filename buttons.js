const dogsAgeInputElement = document.querySelector('#dog')
const dogsAgeButtonElement = document.querySelector('.dogs-button')

const primeInputElement = document.querySelector('#prime')
const primeButtonElement = document.querySelector('.prime-button')

const zodiacInputElement = document.querySelector('#zodiac')
const zodiacButtonElement = document.querySelector('.zodiac-button')

const resultElement = document.querySelector('.buttons-result')
const allInputsElement = document.querySelector('.input')

const toggleElement = document.querySelector('.toggle');
const navbarElement = document.querySelector('.navbar');
const bodyElement = document.querySelector('body');



dogsAgeInputElement.addEventListener('click', clearResult)
primeInputElement.addEventListener('click', clearResult)
zodiacInputElement.addEventListener('click', clearResult)

let toggled = false;
toggleElement.addEventListener('click', () => {
    if(toggled === false) {
        navbarElement.style.backgroundColor = 'rgb(125, 167, 193)';
        toggleElement.style.color = 'green'
        bodyElement.style.backgroundImage = "url('images/cleanBackground.jpg')";
        dogsAgeButtonElement.style.backgroundColor = 'rgb(66, 110, 144)';
        primeButtonElement.style.backgroundColor = 'rgb(66, 110, 144)';
        zodiacButtonElement.style.backgroundColor = 'rgb(66, 110, 144)';
        toggled = true;
    } else {
        navbarElement.style.backgroundColor ='rgb(255, 255, 255)';
        toggleElement.style.color = 'black'
        bodyElement.style.backgroundImage = "url('images/wood-dock.jpg')";
        dogsAgeButtonElement.style.backgroundColor = 'rgb(255, 137, 137)';
        primeButtonElement.style.backgroundColor = 'rgb(255, 137, 137)';
        zodiacButtonElement.style.backgroundColor = 'rgb(255, 137, 137)';
        toggled = false;
    }
    
})
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
    primeInputElement.value = '';
    zodiacInputElement.value = '';

}
primeButtonElement.addEventListener('click', checkPrime);

function isItPrime(digit) {
    for (i = 2; i < digit; i++) {
        if (digit % i === 0) {
            return false;
        }
    } return true;

}
function checkPrime() {
    digit = primeInputElement.value;
    if (isItPrime(digit)) {
        resultElement.innerHTML = `${digit} is Prime!`
    } else {
        resultElement.innerHTML = `${digit} is not Prime`
    }
}
zodiacButtonElement.addEventListener('click', () => {
    let birthYear = zodiacInputElement.value;
    if (birthYear === '1912' || birthYear === '1924' || birthYear === '1936' || birthYear === '1948' 
    || birthYear === '1960' || birthYear === '1972' || birthYear === '1984' || birthYear === '1996'
    || birthYear === '2008' || birthYear === '2020') {
        resultElement.innerHTML = 'Year of the Rat' 
    }
    if (birthYear === '1913' || birthYear === '1925' || birthYear === '1937' || birthYear === '1949' 
    || birthYear === '1961' || birthYear === '1973' || birthYear === '1985' || birthYear === '1997'
    || birthYear === '2009' || birthYear === '2021') {
        resultElement.innerHTML = 'Year of the Ox' 
    }
    if (birthYear === '1914' || birthYear === '1926' || birthYear === '1938' || birthYear === '1950' 
    || birthYear === '1962' || birthYear === '1974' || birthYear === '1986' || birthYear === '1998'
    || birthYear === '2010' || birthYear === '2022') {
        resultElement.innerHTML = 'Year of the Tiger'
    }
    if (birthYear === '1915' || birthYear === '1927' || birthYear === '1939' || birthYear === '1951' 
    || birthYear === '1963' || birthYear === '1975' || birthYear === '1987' || birthYear === '1999'
    || birthYear === '2011' || birthYear === '2023') {
        resultElement.innerHTML ='Year of the Rabbit' 
    }
    if (birthYear === '1916' || birthYear === '1928' || birthYear === '1940' || birthYear === '1952' 
    || birthYear === '1964' || birthYear === '1976' || birthYear === '1988' || birthYear === '2000'
    || birthYear === '2012' || birthYear === '2024') {
        resultElement.innerHTML ='Year of the Dragon' 
    }
    if (birthYear === '1917' || birthYear === '1929' || birthYear === '1941' || birthYear === '1953' 
    || birthYear === '1965' || birthYear === '1977' || birthYear === '1989' || birthYear === '2001'
    || birthYear === '2013' || birthYear === '2025') {
        resultElement.innerHTML ='Year of the Snake' 
    }
    if (birthYear === '1918' || birthYear === '1930' || birthYear === '1942' || birthYear === '1954' 
    || birthYear === '1966' || birthYear === '1978' || birthYear === '1990' || birthYear === '2002'
    || birthYear === '2014' || birthYear === '2026') {
        resultElement.innerHTML ='Year of the Horse' 
    }
    if (birthYear === '1919' || birthYear === '1931' || birthYear === '1943' || birthYear === '1955' 
    || birthYear === '1967' || birthYear === '1979' || birthYear === '1991' || birthYear === '2003'
    || birthYear === '2015' || birthYear === '2027') {
        resultElement.innerHTML ='Year of the Sheep' 
    }
    if (birthYear === '1920' || birthYear === '1932' || birthYear === '1944' || birthYear === '1956' 
    || birthYear === '1968' || birthYear === '1980' || birthYear === '1992' || birthYear === '2004'
    || birthYear === '2016' || birthYear === '2028') {
        resultElement.innerHTML ='Year of the Monkey'
    }
    if (birthYear === '1921' || birthYear === '1933' || birthYear === '1945' || birthYear === '1957' 
    || birthYear === '1969' || birthYear === '1981' || birthYear === '1993' || birthYear === '2005'
    || birthYear === '2017' || birthYear === '2029') {
        resultElement.innerHTML ='Year of the Rooster' 
    }
    if (birthYear === '1922' || birthYear === '1934' || birthYear === '1946' || birthYear === '1958' 
    || birthYear === '1970' || birthYear === '1982' || birthYear === '1994' || birthYear === '2006'
    || birthYear === '2018' || birthYear === '2030') {
        resultElement.innerHTML ='Year of the Dog'
    }
    if (birthYear === '1923' || birthYear === '1935' || birthYear === '1947' || birthYear === '1959' 
    || birthYear === '1971' || birthYear === '1983' || birthYear === '1995' || birthYear === '2007'
    || birthYear === '2019' || birthYear === '2031') {
        resultElement.innerHTML ='Year of the Pig'
    }
})


