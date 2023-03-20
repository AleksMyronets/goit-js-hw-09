// Зробимо посилання на кнопки "Start" та "Stop"

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId;

// Функція для генеруванн випадкового кольору

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

// Додаємо слухачів подій на кнопки "Start" та "Stop"

startButton.addEventListener('click', startColorChange);
stopButton.addEventListener('click', stopColorChange);

// Встановлюємо інтервал для зміни кольору та робимо кнопку "Start" неактивною після натискання

function startColorChange() {
  startButton.disabled = true;
  stopButton.disabled = false;
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

// Зупиняємо зміну кольору фону за допомогою кнопки "Stop" та очищуємо інтервал 

function stopColorChange() {
  startButton.disabled = false;
  stopButton.disabled = true;
  clearInterval(intervalId);
}