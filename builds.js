const preButtonElement = document.querySelector('.previous-button');
const nextButtonElement = document.querySelector('.next-button');
const lfxImagesElement = document.querySelector('#lfxImages');
const descriptionElement = document.querySelector('.photo-description p')
const toggleElement = document.querySelector('.toggle');
const navbarElement = document.querySelector('.navbar');
const bodyElement = document.querySelector('body');

const lfxPhotos = ["images/lfx1.jpg", "images/lfx2.jpg","images/lfx3.jpg","images/lfx4.jpeg",
    "images/lfx5.jpg","images/lfx6.jpg","images/lfx7.jpg","images/lfx8.jpg","images/lfx9.jpg",]

const photoDescription = ['Total Wine & More: Miami Beach', 'Diplomatico Rum: Dallas TX', 'Diplomatico Rum: Dallas TX',
    'UNSHACKLED: Lollapalooza', 'IceLandic Water: LA', `Diplomatico Rum: Woody Nelson's LUCK festival`, 
    `Diplomatico Rum: Dallas TX`,`Icelandic Water: LA`, `Truly: Miami Beach`,]

let imgIndex = 0;

let toggled = false;
toggleElement.addEventListener('click', () => {
    if(toggled === false) {
        navbarElement.style.backgroundColor = 'rgb(125, 167, 193)';
        toggleElement.style.color = 'green'
        bodyElement.style.backgroundImage = "url('images/cleanBackground.jpg')";
        preButtonElement.style.backgroundColor = 'rgb(66, 110, 144)';
        nextButtonElement.style.backgroundColor = 'rgb(66, 110, 144)'
        toggled = true;
    } else {
        navbarElement.style.backgroundColor ='rgb(255, 255, 255)';
        toggleElement.style.color = 'black'
        bodyElement.style.backgroundImage = "url('images/wood-dock.jpg')";
        preButtonElement.style.backgroundColor = 'rgb(255, 137, 137)';
        nextButtonElement.style.backgroundColor = 'rgb(255, 137, 137)'
        toggled = false;
    }
    
})

nextButtonElement.addEventListener('click', () => {
    imgIndex = (imgIndex + 1) % lfxPhotos.length;
    lfxImagesElement.src = lfxPhotos[imgIndex]
    descriptionElement.innerHTML = photoDescription[imgIndex];
}) 
preButtonElement.addEventListener('click', () => {
    imgIndex = (imgIndex - 1 + lfxPhotos.length) % lfxPhotos.length;
    lfxImagesElement.src = lfxPhotos[imgIndex];
    descriptionElement.innerHTML = photoDescription[imgIndex];
})

