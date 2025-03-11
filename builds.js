const preButtonElement = document.querySelector('.previous-button');
const nextButtonElement = document.querySelector('.next-button');
const lfxImagesElement = document.querySelector('#lfxImages');
const descriptionElement = document.querySelector('.photo-description p')

const lfxPhotos = ["images/lfx1.jpg", "images/lfx2.jpg","images/lfx3.jpg","images/lfx4.jpeg",
    "images/lfx5.jpg","images/lfx6.jpg","images/lfx7.jpg","images/lfx8.jpg","images/lfx9.jpg",]

const photoDescription = ['Total Wine & More: Miami Beach', 'Diplomatico Rum: Dallas TX', 'Diplomatico Rum: Dallas TX',
    'UNSHACKLED: Lollapalooza', 'IceLandic Water: LA', `Diplomatico Rum: Woody Nelson's LUCK festival`, 
    `Diplomatico Rum: Dallas TX`,`Icelandic Water: LA`, `Truly: Miami Beach`,]

let imgIndex = 0;

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

