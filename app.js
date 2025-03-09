const popUpElement = document.querySelector('.pop-up')
const closeButtonElement = document.querySelector('.close-pop-up')


let didItPopUP = false;

//---------------------------------HomeScreen---------------------------
document.body.addEventListener('click', function(event) {
    if (didItPopUP === true) return;
    else {
        popUpElement.style.display = 'block'
        didItPopUP = true;
    } 
})
closeButtonElement.addEventListener('click', () => {
        popUpElement.style.display = 'none'
})
//---------------------------------HomeScreen---------------------------
