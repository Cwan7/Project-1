const door1Element = document.querySelector('#door1');
const door2Element = document.querySelector('#door2')
const door3Element = document.querySelector('#door3')
const switchElement = document.querySelector('.switch')
const yesButtonElement = document.querySelector('.yesButton')
const noButtonElement = document.querySelector('.noButton')
const winnerLoserElement = document.querySelector('.winner-loser h1')

const images = ["Car.jpeg", "Goat.jpeg", "Goat.jpeg"]


door1Element.addEventListener('click', () => {
    if (door2Element.classList.contains('goat')) {
        setTimeout(() => {
            door2Element.textContent = '';
            switchElement.style.display = 'block'
        },500);
        yesButtonElement.addEventListener('click', () => {
            setTimeout(() => {
                door3Element.textContent = ''
            }, 500)
            if (door3Element.classList.contains('car')) {
                setTimeout(winnerResult, 1000)
            }else{
                setTimeout(loserResult, 1000)
            }
        })
        noButtonElement.addEventListener('click', () => {
            setTimeout(() => {
                door1Element.textContent = ''
            }, 500)
            if (door1Element.classList.contains('car')) {
                setTimeout(winnerResult, 1000)
            }else{
                setTimeout(loserResult, 1000)
            }
        })  
    }
    if (door2Element.classList.contains('car')) {
        setTimeout(() => {
            door3Element.textContent = '';
            switchElement.style.display = 'block'
        },500); //----------------------------
        yesButtonElement.addEventListener('click', () => {
            setTimeout(() => {
                door2Element.textContent = ''
            }, 500)
            if (door2Element.classList.contains('car')) {
                setTimeout(winnerResult, 1000)
            }else{
                setTimeout(loserResult, 1000)
            }
        })
        noButtonElement.addEventListener('click', () => {
            setTimeout(() => {
                door1Element.textContent = ''
            }, 500)
            if (door1Element.classList.contains('car')) {
                setTimeout(winnerResult, 1000)
            }else{
                setTimeout(loserResult, 1000)
            }
        })  
    }
})
door2Element.addEventListener('click', () => {
    if (door3Element.classList.contains('goat')) {
        setTimeout(() => {
            door3Element.textContent = '';
            switchElement.style.display = 'block'
        },500);
        yesButtonElement.addEventListener('click', () => {
            setTimeout(() => {
                door1Element.textContent = ''
            }, 500)
            if (door1Element.classList.contains('car')) {
                setTimeout(winnerResult, 1000)
            }else{
                setTimeout(loserResult, 1000)
            }
        })
        noButtonElement.addEventListener('click', () => {
            setTimeout(() => {
                door2Element.textContent = ''
            }, 500)
            if (door2Element.classList.contains('car')) {
                setTimeout(winnerResult, 1000)
            }else{
                setTimeout(loserResult, 1000)
            }
        })  
    }
    if (door3Element.classList.contains('car')) {
        setTimeout(() => {
            door1Element.textContent = '';
            switchElement.style.display = 'block'
        },500); 
        yesButtonElement.addEventListener('click', () => {
            setTimeout(() => {
                door3Element.textContent = ''
            }, 500)
            if (door3Element.classList.contains('car')) {
                setTimeout(winnerResult, 1000)
            }else{
                setTimeout(loserResult, 1000)
            }
        })
        noButtonElement.addEventListener('click', () => {
            setTimeout(() => {
                door2Element.textContent = ''
            }, 500)
            if (door2Element.classList.contains('car')) {
                setTimeout(winnerResult, 1000)
            }else{
                setTimeout(loserResult, 1000)
            }
        })  
    }
})
door3Element.addEventListener('click', () => {
    if (door1Element.classList.contains('goat')) {
        setTimeout(() => {
            door1Element.textContent = '';
            switchElement.style.display = 'block'
        },500);
        yesButtonElement.addEventListener('click', () => {
            setTimeout(() => {
                door2Element.textContent = ''
            }, 500)
            if (door2Element.classList.contains('car')) {
                setTimeout(winnerResult, 1000)
            }else{
                setTimeout(loserResult, 1000)
            }
        })
        noButtonElement.addEventListener('click', () => {
            setTimeout(() => {
                door3Element.textContent = ''
            }, 500)
            if (door3Element.classList.contains('car')) {
                setTimeout(winnerResult, 1000)
            }else{
                setTimeout(loserResult, 1000)
            }
        })  
    }
    if (door1Element.classList.contains('car')) {
        setTimeout(() => {
            door2Element.textContent = '';
            switchElement.style.display = 'block'
        },500); 
        yesButtonElement.addEventListener('click', () => {
            setTimeout(() => {
                door1Element.textContent = ''
            }, 500)
            if (door1Element.classList.contains('car')) {
                setTimeout(winnerResult, 1000)
            }else{
                setTimeout(loserResult, 1000)
            }
        })
        noButtonElement.addEventListener('click', () => {
            setTimeout(() => {
                door3Element.textContent = ''
            }, 500)
            if (door3Element.classList.contains('car')) {
                setTimeout(winnerResult, 1000)
            }else{
                setTimeout(loserResult, 1000)
            }
        })  
    }
})
function winnerResult () {
    winnerLoserElement.innerHTML = 'WINNER!'
}
function loserResult () {
    winnerLoserElement.innerHTML = 'LOSER'
}