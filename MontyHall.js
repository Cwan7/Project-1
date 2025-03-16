const door1Element = document.querySelector('#door1');
const door2Element = document.querySelector('#door2');
const door3Element = document.querySelector('#door3');
const switchElement = document.querySelector('.switch');
const yesButtonElement = document.querySelector('.yesButton');
const noButtonElement = document.querySelector('.noButton');
const winnerLoserElement = document.querySelector('.winner-loser h1');
const playAgainElement = document.querySelector('.button-container button');

const images = ["Car.jpeg", "Goat.jpeg", "Goat.jpeg"];
const doors = [door1Element, door2Element, door3Element];
let chosenDoor = null;
let wasDoorClicked = false;

door1Element.addEventListener('click', () => {
    doorClicked(door1Element, door2Element, door3Element);
});
door2Element.addEventListener('click', () => {
    doorClicked(door2Element, door3Element, door1Element);
});
door3Element.addEventListener('click', () => {
    doorClicked(door3Element, door1Element, door2Element);
});

function doorClicked(theDoor, secondDoor, thirdDoor) {
    if (wasDoorClicked === true) return;
    chosenDoor = theDoor;
    wasDoorClicked = true;
    theDoor.classList.add('selected');
    if (secondDoor.classList.contains('goat')) {
        const emoji = secondDoor.querySelector('.door-emoji');
        if (emoji) { // Check if emoji exists
            emoji.style.opacity = '0';
            setTimeout(() => {
                emoji.textContent = ''; // Clear only span content
                emoji.style.opacity = '1'; // Reset opacity
                secondDoor.classList.add('selected');
                switchElement.style.display = 'block';
            }, 500);
        }
    } else {
        const emoji = thirdDoor.querySelector('.door-emoji');
        if (emoji) { // Check if emoji exists
            emoji.style.opacity = '0';
            setTimeout(() => {
                emoji.textContent = ''; // Clear only span content
                emoji.style.opacity = '1';
                thirdDoor.classList.add('selected');
                switchElement.style.display = 'block';
            }, 500);
        }
    }
}

yesButtonElement.addEventListener('click', () => {
    doors.forEach(element => {
        if (!element.classList.contains('selected')) {
            chosenDoor = element;
            const emoji = chosenDoor.querySelector('.door-emoji');
            if (emoji) {
                emoji.style.opacity = '0';
                setTimeout(() => {
                    emoji.textContent = '';
                    emoji.style.opacity = '1';
                    if (chosenDoor.classList.contains('car')) {
                        winnerResult();
                    } else {
                        loserResult();
                    }
                    switchElement.style.display = 'none';
                }, 500);
            }
        }
    });
});

noButtonElement.addEventListener('click', () => {
    const emoji = chosenDoor.querySelector('.door-emoji');
    if (emoji) {
        emoji.style.opacity = '0';
        setTimeout(() => {
            emoji.textContent = '';
            emoji.style.opacity = '1';
            if (chosenDoor.classList.contains('car')) {
                winnerResult();
            } else {
                loserResult();
            }
            switchElement.style.display = 'none';
        }, 500);
    }
});

function winnerResult() {
    winnerLoserElement.innerHTML = 'WINNER!';
}

function loserResult() {
    winnerLoserElement.innerHTML = 'LOSER';
}

function randomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function shuffleImages() {
    const availableImages = [...images];
    doors.forEach(door => {
        let index = randomIndex(availableImages);
        const image = availableImages.splice(index, 1)[0];
        door.style.backgroundImage = `url('${image}')`;
        door.classList.remove('goat', 'car');
        if (image === "Car.jpeg") {
            door.classList.add('car');
        } else {
            door.classList.add('goat');
        }
        door.innerHTML = '<span class="door-emoji">🚪</span>'; // Reset span
    });
}

playAgainElement.addEventListener('click', () => {
    shuffleImages();
    wasDoorClicked = false;
    chosenDoor = null;
    switchElement.style.display = 'none';
    winnerLoserElement.innerHTML = '';
    doors.forEach(door => {
        door.classList.remove('selected');
    });
});