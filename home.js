const bodyElement1 = document.querySelector('.body')
const popUpElement = document.querySelector('.pop-up')
const closeButtonElement = document.querySelector('.close-pop-up')
const punchLineElement = document.querySelector('.pop-up-body')
const toggleElement = document.querySelector('.toggle');
const navbarElement = document.querySelector('.navbar');
const bodyElement = document.querySelector('body');

let bodyClicked = 0;
let toggled = false;

bodyElement1.addEventListener('click', function(event) {
    if (bodyClicked === 2) return;
    if (bodyClicked === 0) {
        popUpElement.style.display = 'block'
        bodyClicked = 1;
        return;
    }
    if (bodyClicked === 1 ){
        punchLineElement.innerHTML = "Why did David Hasselhoff change his name to “The Hoff? Its less Hassel!";
        bodyClicked = 2;
        return;
    }
})
closeButtonElement.addEventListener('click', () => {
    if(bodyClicked === 2) {
        popUpElement.style.display = 'none'
    }
})
toggleElement.addEventListener('click', () => {
    if(toggled === false) {
        navbarElement.style.backgroundColor = 'rgb(125, 167, 193)';
        toggleElement.style.color = 'green'
        bodyElement.style.backgroundImage = "url('images/cleanBackground.jpg')";
        toggled = true;
    } else {
        navbarElement.style.backgroundColor ='rgb(255, 255, 255)';
        toggleElement.style.color = 'black'
        bodyElement.style.backgroundImage = "url('images/wood-dock.jpg')";
        toggled = false;
    }
    
})

