const bodyElement = document.querySelector('.body')
const popUpElement = document.querySelector('.pop-up')
const closeButtonElement = document.querySelector('.close-pop-up')

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


