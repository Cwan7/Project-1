const scrambleButtonElement = document.querySelector('.scramble-button button')

const oneElement = document.querySelector('#one')
const twoElement = document.querySelector('#two')
const threeElement = document.querySelector('#three')
const fourElement = document.querySelector('#four')
const fiveElement = document.querySelector('#five')
const sixElement = document.querySelector('#six')
const sevenElement = document.querySelector('#seven')
const eightElement = document.querySelector('#eight')
const nineElement = document.querySelector('#nine')


const colors = ["Red", "Orange", "Yellow", "Green", "Blue",
"Indigo", "Violet", "Pink", "Purple", "Brown",
"Gray", "Black", "White", "Cream", "Beige",
"Tan", "Silver", "Gold", "Copper", "Bronze",
"Turquoise", "Teal", "Aqua", "Navy", "Royal",
"Emerald", "Sage", "Mint", "Lavender", "Peach",
"Coral", "Salmon", "Magenta", "Fuchsia", "Chartreuse",
"Lime", "Olive", "Khaki", "Mocha", "Caramel",
"Sienna", "Umber", "Terracotta", "Clay", "Rust",
"Burgundy", "Garnet", "Amethyst", "Periwinkle", "Cerulean"
];
const emojies = ["😊", "👍", "🤩", "🎉", "👀",
"🤔", "😎", "👫", "🤝", "🎊",
"👻", "🕷️", "🐶", "🐱", "🐔",
"🐷", "🐸", "🐹", "🐺", "🐻",
"🐼", "🐽", "🐾", "🐿", "🏠",
"🏡", "🏢", "🏣", "🏥", "🏦",
"🏧", "🏨", "🏩", "🏪", "🏫",
"🏬", "🏭", "🏮", "🏯", "🏰",
"🧟‍♀️", "🧞‍♀️", "🏳", "🏴", "🏵",
"👹", "🫦", "🏸", "🏹", "🏺"];

let colorIndex = 0
const squares = [oneElement, twoElement, threeElement, fourElement, fiveElement,
    sixElement, sevenElement, eightElement, nineElement]

scrambleButtonElement.addEventListener('click', () => {
    let size = randomNumber()
    console.log(size)
    squares.forEach(index => index.style.backgroundColor = randomIndex(colors));
    squares.forEach(index => index.innerHTML = randomIndex(emojies));
    squares.forEach(index => index.style.outline = `7px solid ${randomIndex(colors)}`)
    squares.forEach(index => index.style.width = `${size}px`);
    squares.forEach(index => index.style.height = `${size}px`); 
    squares.forEach(index => index.style.fontSize = `${size * .85}px`);
})

function randomIndex(array) { 
    return array[Math.floor(Math.random() * array.length)];
}
function randomNumber () {
return Math.floor(Math.random() * 100) + 100;
}


// scrambleButtonElement.addEventListener('click', () => {
//     oneElement.style.backgroundColor = randomIndex(colors);
//     twoElement.style.backgroundColor = randomIndex(colors)
//     threeElement.style.backgroundColor = randomIndex(colors)
//     fourElement.style.backgroundColor = randomIndex(colors)
//     fiveElement.style.backgroundColor = randomIndex(colors)
//     sixElement.style.backgroundColor = randomIndex(colors)
//     sevenElement.style.backgroundColor = randomIndex(colors)
//     eightElement.style.backgroundColor = randomIndex(colors)
//     nineElement.style.backgroundColor = randomIndex(colors)
    //-----------------------
    // oneElement.style.outline = `7px solid ${randomIndex(colors)}`;
    // twoElement.style.outline = `7px solid ${randomIndex(colors)}`;
    // threeElement.style.outline = `7px solid ${randomIndex(colors)}`;
    // fourElement.style.outline = `7px solid ${randomIndex(colors)}`;
    // fiveElement.style.outline = `7px solid ${randomIndex(colors)}`;
    // sixElement.style.outline = `7px solid ${randomIndex(colors)}`;
    // sevenElement.style.outline = `7px solid ${randomIndex(colors)}`;
    // eightElement.style.outline = `7px solid ${randomIndex(colors)}`;
    // nineElement.style.outline = `7px solid ${randomIndex(colors)}`;
    // //------------------------
    // oneElement.textContent = randomIndex(emojies);
    // twoElement.textContent = randomIndex(emojies)
    // threeElement.textContent = randomIndex(emojies)
    // fourElement.textContent = randomIndex(emojies)
    // fiveElement.textContent = randomIndex(emojies)
    // sixElement.textContent = randomIndex(emojies)
    // sevenElement.textContent = randomIndex(emojies)
    // eightElement.textContent = randomIndex(emojies)
    // nineElement.textContent = randomIndex(emojies)

   


