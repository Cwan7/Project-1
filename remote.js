const numberPadElement = document.querySelector('.number-pad');
const channelUpElement = document.querySelector('#ch-up');
const channelDownElement = document.querySelector('#ch-down');
const volumeUpElement = document.querySelector('#vol-up');
const volumeDownElement = document.querySelector('#vol-down');
const powerElement = document.querySelector('#power');
const channelDisplayElement = document.querySelector('.channel');
const volumeDisplayElement = document.querySelector('.volume');
const tvElement = document.querySelector('.tv');
const tvOffElement = document.querySelector('.tvOff')
const muteElement = document.querySelector('#mute')
const emojiElement = document.querySelector('.emoji');


const emojis = ['🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐻‍❄️','🐨','🐯',
    '🦁','🐮','🐷','🐽','🐸','🐵','🙈','🐒','🐔','🐧','🐦','🐤','🐣',
    '🦅','🦉','🦇','🐴','🐺','🦄','🐝','🪱','🐛','🪼','🦐','🐳','🐶',
    '🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐻‍❄️','🐨','🐯',
    '🦁','🐮','🐷','🐽','🐸','🐵','🙈','🐒','🐔','🐧','🐦','🐤','🐣',
    '🦅','🦉','🦇','🐴','🐺','🦄','🐝','🪱','🐛','🪼','🦐','🐳','🐶',
    '🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐻‍❄️','🐨','🐯',
    '🦁','🐮','🐷','🐽','🐸','🐵','🙈','🐒','🐔','🐧','🐦','🐤','🐣',
    '🦅','🦉','🦇','🐴','🐺','🦄','🐝','🪱','🐛','🪼','🦐','🐳']

let currentChannel = 0
let currentVolume = 25
let isTvOn = false
let channelTimeout;
let mute = false
let index = 0;


powerElement.addEventListener('click', () => {
    if (isTvOn === false) {
        powerOn ()
        tvOffElement.innerHTML = ''
    } else {
        powerOff () 
    }   
})
numberPadElement.addEventListener('click', (event) => {
    let numberPressed = event.target.innerHTML; 
    if (currentChannel.length < 2 && isTvOn === true) {
    currentChannel = currentChannel + numberPressed;
    channelDisplayElement.innerHTML = `Channel <span class="number">${currentChannel}</span>`;
    clearTimeout(channelTimeout);
    channelTimeout = setTimeout(clearChannel, 3000);
    emojiNumberPad()
    }
    
})
channelUpElement.addEventListener('click', () => {
    if (!isTvOn) return; 
    let currentChannelNum = Number(currentChannel) // Convert to number so I can increment it,
    currentChannelNum += 1; 
    currentChannel = currentChannelNum.toString(); // Convert back to string for buttons
    if (currentChannel > 99){currentChannel = 1}
    channelDisplayElement.innerHTML = `Channel <span class="number">${currentChannel}</span>`;
    clearTimeout(channelTimeout);
    channelTimeout = setTimeout(clearChannel, 3000); 
    emojiChannelUp()   
});
channelDownElement.addEventListener('click', () => {
    if (!isTvOn) return; 
    let currentChannelNum = Number(currentChannel);
    currentChannelNum -= 1;
    currentChannel = currentChannelNum.toString();
    if (currentChannel <= 0){currentChannel = 99}
    channelDisplayElement.innerHTML = `Channel <span class="number">${currentChannel}</span>`;
    clearTimeout(channelTimeout);
    channelTimeout = setTimeout(clearChannel, 3000);
    emojiChannelDown();
});

volumeUpElement.addEventListener('click', () => {
    if(isTvOn === false) return;
    currentVolume += 1;
    volumeDisplayElement.innerHTML = `Volume <span class="number"> ${currentVolume}</span>`;
    clearTimeout(channelTimeout);
    channelTimeout = setTimeout(clearVolume, 3000);
})
volumeDownElement.addEventListener('click', () => {
    if(isTvOn === false) return;
    currentVolume -= 1;
    volumeDisplayElement.innerHTML = `Volume <span class="number"> ${currentVolume}</span>`;
    clearTimeout(channelTimeout);
    channelTimeout = setTimeout(clearVolume, 3000);
})
muteElement.addEventListener('click', () => {
    if(isTvOn === false) return;
        muteOnOff ();
        setTimeout(clearVolume, 3000);
})


function powerOn () {
    isTvOn = true;
    tvElement.style.backgroundColor ='rgb(108, 106, 106)';
    emojiElement.textContent = '🐿️'
}
function powerOff () {
    isTvOn = false
    tvElement.style.backgroundColor = 'rgb(43, 43, 43)';
    tvOffElement.innerHTML = 'Tv Is Off'
    channelDisplayElement.innerHTML = ''
    volumeDisplayElement.innerHTML = ''
    currentChannel = ''
    emojiElement.textContent = ''

}
function clearChannel () {
    channelDisplayElement.innerHTML = ''
    currentChannel = ''
}
function clearVolume () {
    volumeDisplayElement.innerHTML = ''
}
function muteOnOff (){
    if(mute === true ) {
        mute = false
        currentVolume = 25;
        volumeDisplayElement.innerHTML = `Volume <span class="number"> ${currentVolume}</span>`;
    } else {
        mute = true
        currentVolume = 0;
        volumeDisplayElement.innerHTML = `Volume <span class="number"> ${currentVolume}</span>`;
    }
}
function emojiChannelUp() {
    index = (index + 1) % emojis.length;
    emojiElement.textContent = emojis[index];
}
function emojiChannelDown() {
    index = (index - 1 + emojis.length) % emojis.length;
    emojiElement.textContent = emojis[index];
}
function emojiNumberPad () {
    emojiElement.textContent = emojis[currentChannel];
}