const body = document.querySelector('body');
const startBtn = document.getElementById('srartBtn');
const stopBtn = document.getElementById('stopBtn');

let intervalId;

// Додамо функцію для генерування випадкового кольору

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

// Додамо слухача подій для кнопки "Start", зробимо активацію та дективацію кнопки "Start" та використаємо setInterval для зміни кольору раз на секунду

startBtn = addEventListener('click', () => {

    startBtn.disabled = true;
    stopBtn.disabled = false;

    intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    }, 1000);

});

// Додамо слухача подій для кнопки "Stop", зробимо активацію та дективацію кнопки "Stop" та зупинемо зміну кольору

stopBtn = addEventListener('click', () => {
    
    startBtn.disabled = false;
    stopBtn.disable = true;

    clearInterval(intervalId);

});





