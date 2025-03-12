const dogsAgeInputElement = document.querySelector('#dog')
const dogsAgeButtonElement = document.querySelector('.dogs-button')

const primeInputElement = document.querySelector('#prime')
const primeButtonElement = document.querySelector('.prime-button')

const zodiacInputElement = document.querySelector('#zodiac')
const zodiacButtonElement = document.querySelector('.zodiac-button')

const resultElement = document.querySelector('.buttons-result')
const allInputsElement = document.querySelector('.input')

const colorButtonElement = document.querySelector('.color-button');
const colorDropElement = document.querySelector('#colorDropdown')

const randomButtonElement = document.querySelector('.random-button')
const randomDropElement = document.querySelector('#randomDropdown')
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
        colorButtonElement.style.backgroundColor = 'rgb(66, 110, 144)';
        randomButtonElement.style.backgroundColor = 'rgb(66, 110, 144)';
        toggled = true;
    } else {
        navbarElement.style.backgroundColor ='rgb(255, 255, 255)';
        toggleElement.style.color = 'black'
        bodyElement.style.backgroundImage = "url('images/wood-dock.jpg')";
        dogsAgeButtonElement.style.backgroundColor = 'rgb(125, 180, 125)';
        primeButtonElement.style.backgroundColor = 'rgb(125, 180, 125)';
        zodiacButtonElement.style.backgroundColor = 'rgb(125, 180, 125)';
        colorButtonElement.style.backgroundColor = 'rgb(125, 180, 125)';
        randomButtonElement.style.backgroundColor = 'rgb(125, 180, 125)';
        toggled = false;
    }
    
})
dogsAgeButtonElement.addEventListener('click', () => {
    dogsAge = dogsAgeInputElement.value;
    if (dogsAge <= 0) {
        resultElement.style.backgroundColor = 'rgba(255, 255, 255, 0.217)';
        resultElement.innerHTML = "Dog isn't alive";
    } else if (dogsAge <= 2) {
        resultElement.style.backgroundColor = 'rgba(255, 255, 255, 0.217)';
        resultElement.innerHTML = `${dogsAge * 12.5} in human years!`;
    } else if (dogsAge > 2) {
        resultElement.style.backgroundColor = 'rgba(255, 255, 255, 0.217)';
        resultElement.innerHTML = ((25 + (dogsAge - 2) * 4) + ' in human years!');
    }
})
function clearResult (){
    resultElement.innerHTML = '';
    dogsAgeInputElement.value = '';
    primeInputElement.value = '';
    zodiacInputElement.value = '';
    colorDropElement.value = '';

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
        resultElement.style.backgroundColor = 'rgba(255, 255, 255, 0.217)';
        resultElement.innerHTML = `${digit} is Prime!`
    } else {
        resultElement.style.backgroundColor = 'rgba(255, 255, 255, 0.217)';
        resultElement.innerHTML = `${digit} is not Prime`
    }
}
zodiacButtonElement.addEventListener('click', () => {
    let birthYear = zodiacInputElement.value;
    if (birthYear === '1912' || birthYear === '1924' || birthYear === '1936' || birthYear === '1948' 
    || birthYear === '1960' || birthYear === '1972' || birthYear === '1984' || birthYear === '1996'
    || birthYear === '2008' || birthYear === '2020') {
        resultElement.style.backgroundColor = 'rgba(255, 255, 255, 0.217)';
        resultElement.innerHTML = 'Year of the Rat' 
    }
    if (birthYear === '1913' || birthYear === '1925' || birthYear === '1937' || birthYear === '1949' 
    || birthYear === '1961' || birthYear === '1973' || birthYear === '1985' || birthYear === '1997'
    || birthYear === '2009' || birthYear === '2021') {
        resultElement.style.backgroundColor = 'rgba(255, 255, 255, 0.217)';
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
        resultElement.style.backgroundColor = 'rgba(255, 255, 255, 0.217)';
        resultElement.innerHTML ='Year of the Rabbit' 
    }
    if (birthYear === '1916' || birthYear === '1928' || birthYear === '1940' || birthYear === '1952' 
    || birthYear === '1964' || birthYear === '1976' || birthYear === '1988' || birthYear === '2000'
    || birthYear === '2012' || birthYear === '2024') {
        resultElement.style.backgroundColor = 'rgba(255, 255, 255, 0.217)';
        resultElement.innerHTML ='Year of the Dragon' 
    }
    if (birthYear === '1917' || birthYear === '1929' || birthYear === '1941' || birthYear === '1953' 
    || birthYear === '1965' || birthYear === '1977' || birthYear === '1989' || birthYear === '2001'
    || birthYear === '2013' || birthYear === '2025') {
        resultElement.style.backgroundColor = 'rgba(255, 255, 255, 0.217)';
        resultElement.innerHTML ='Year of the Snake' 
    }
    if (birthYear === '1918' || birthYear === '1930' || birthYear === '1942' || birthYear === '1954' 
    || birthYear === '1966' || birthYear === '1978' || birthYear === '1990' || birthYear === '2002'
    || birthYear === '2014' || birthYear === '2026') {
        resultElement.style.backgroundColor = 'rgba(255, 255, 255, 0.217)';
        resultElement.innerHTML ='Year of the Horse' 
    }
    if (birthYear === '1919' || birthYear === '1931' || birthYear === '1943' || birthYear === '1955' 
    || birthYear === '1967' || birthYear === '1979' || birthYear === '1991' || birthYear === '2003'
    || birthYear === '2015' || birthYear === '2027') {
        resultElement.style.backgroundColor = 'rgba(255, 255, 255, 0.217)';
        resultElement.innerHTML ='Year of the Sheep' 
    }
    if (birthYear === '1920' || birthYear === '1932' || birthYear === '1944' || birthYear === '1956' 
    || birthYear === '1968' || birthYear === '1980' || birthYear === '1992' || birthYear === '2004'
    || birthYear === '2016' || birthYear === '2028') {
        resultElement.style.backgroundColor = 'rgba(255, 255, 255, 0.217)';
        resultElement.innerHTML ='Year of the Monkey'
    }
    if (birthYear === '1921' || birthYear === '1933' || birthYear === '1945' || birthYear === '1957' 
    || birthYear === '1969' || birthYear === '1981' || birthYear === '1993' || birthYear === '2005'
    || birthYear === '2017' || birthYear === '2029') {
        resultElement.style.backgroundColor = 'rgba(255, 255, 255, 0.217)';
        resultElement.innerHTML ='Year of the Rooster' 
    }
    if (birthYear === '1922' || birthYear === '1934' || birthYear === '1946' || birthYear === '1958' 
    || birthYear === '1970' || birthYear === '1982' || birthYear === '1994' || birthYear === '2006'
    || birthYear === '2018' || birthYear === '2030') {
        resultElement.style.backgroundColor = 'rgba(255, 255, 255, 0.217)';
        resultElement.innerHTML ='Year of the Dog'
    }
    if (birthYear === '1923' || birthYear === '1935' || birthYear === '1947' || birthYear === '1959' 
    || birthYear === '1971' || birthYear === '1983' || birthYear === '1995' || birthYear === '2007'
    || birthYear === '2019' || birthYear === '2031') {
        resultElement.style.backgroundColor = 'rgba(255, 255, 255, 0.217)';
        resultElement.innerHTML ='Year of the Pig'
    }
})
colorButtonElement.addEventListener('click', () => {
    let color = colorDropElement.value;
    if (color === 'Red') {
        resultElement.style.backgroundColor = 'rgba(255, 255, 255, 0.217)';
        resultElement.innerHTML = `You're the human equivalent of a fire alarm, impossible to ignore and always ready to make a scene!`;
    }
    if(color === 'Violet') {
        resultElement.style.backgroundColor = 'rgba(255, 255, 255, 0.217)';
        resultElement.innerHTML = `You secretly believe you're a wizard because you're always dreaming up magical solutions to everyday problems.`;
    }
    if (color === 'Blue') {
        resultElement.style.backgroundColor = 'rgba(255, 255, 255, 0.217)';
        resultElement.innerHTML = `You're the friend who'd rather nap than argue—peaceful to a fault, even if it means sleeping through chaos!`;
    }
    if (color === 'Green') {
        resultElement.style.backgroundColor = 'rgba(255, 255, 255, 0.217)';
        resultElement.innerHTML = `You're convinced you could talk to plants if they'd just listen harder—and you've named every leaf in your house.`;
    }
    if (color === 'Yellow') {
        resultElement.innerHTML = `You're the human sunshine who accidentally cheers people up by tripping over your own optimism.`;
    }
    if (color === 'Orange') {
        resultElement.style.backgroundColor = 'rgba(255, 255, 255, 0.217)';
        resultElement.innerHTML = `You're the one who'd wear flip-flops in a snowstorm because 'comfort is king, and you'd make it look cool.`;
    }
})
colorDropElement.addEventListener('click', clearResult)

const movieQuotes = [`"I'll be back." - The Terminator (1984)`,`"May the Force be with you." - Star Wars: Episode IV - A New Hope (1977)`,
    `"Here's looking at you, kid." - Casablanca (1942)`, `"We're gonna need a bigger boat." - Jaws (1975)`,
    `"I see dead people." - The Sixth Sense (1999)`,`"You had me at 'hello'." - Jerry Maguire (1996)`,
    `"Show me the money!" - Jerry Maguire (1996)`, `"You talkin' to me?" - Taxi Driver (1976)`,
    `"Fasten your seatbelts. It's going to be a bumpy night." - All About Eve (1950)`,
    `"It's not the years, honey. It's the mileage." - Raiders of the Lost Ark (1981)`]

const worldRecords = [`Longest Fingernails: 30 Feet long`,`Most hamburgers eaten in one sitting: 120 in 8 minutes`,
    `Longest duration without sleep: 11 days`, `Most t-shirts worn at once: 257`,
    `Longest duration balancing a pool cue on the chin: 30 minutes 15 seconds`,
    `Most hula hoops spun at once: 200 hula hoops`, `Most people simultaneously popping bubble wrap: 1,144 people.`,
    `Longest duration standing on one leg: 65 minutes`, `Most balloons blown up in one hour: 1,178 balloons`, 
    `Most tater tots eaten in one minute: 120 tater tots.`, `Most tater tots eaten in one minute: 1,144 People`]

const holidays = [`April Fool's Day (April 1st): A day where people play pranks on each other.`,
    `National Pizza Party Day (May 15th): Because who doesn't love pizza?`,
    `International Talk Like a Pirate Day (September 19th): Arrr, matey! A day to channel your inner pirate!`,
    `National Donut Day (First Friday in June): A day to indulge in sweet, fluffy donuts!`,
    `Star Wars Day (May 4th): May the farce be with you!`,
    `National Hug a Tree Day (March 20th): A day to give a big hug to your favorite tree!`,
    `International Day of Friendship (July 30th): A day to celebrate your BFFs!`,
    `National High Five Day (Third Thursday in April): A day to give high-fives to everyone you meet!`,
    `National Wear Your Pajamas to Work Day (April 16th): A day to ditch the formal attire!`,
    `National Chicken Nugget Day (July 3rd): A day to celebrate the crispy nugget!`]

randomButtonElement.addEventListener('click', () => {
    let random = randomDropElement.value;
    if (random === 'Holiday') {
        let index = Math.floor(Math.random() * holidays.length);
        resultElement.style.backgroundColor = 'rgba(255, 255, 255, 0.217)';
        resultElement.innerHTML = holidays[index];
    }
    if (random === 'Records') {
        let index = Math.floor(Math.random() * worldRecords.length);
        resultElement.style.backgroundColor = 'rgba(255, 255, 255, 0.217)';
        resultElement.innerHTML = worldRecords[index];
    }
    if (random === 'Movie') {
        let index = Math.floor(Math.random() * movieQuotes.length);
        resultElement.style.backgroundColor = 'rgba(255, 255, 255, 0.217)';
        resultElement.innerHTML = movieQuotes[index];
    }

})
randomDropElement.addEventListener('click', clearResult)