let score = 0;
let gameInterval;
let balloonTimeout;

const balloon = document.getElementById('balloon');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-btn');

startButton.addEventListener('click', startGame);

balloon.addEventListener('click', () => {
    score++;
    scoreDisplay.innerText = `Poäng: ${score}`;
    balloon.style.display = 'none';
    clearTimeout(balloonTimeout);
    showBalloon();
});

function startGame() {
    score = 0;
    scoreDisplay.innerText = 'Poäng: 0';
    startButton.style.display = 'none';
    showBalloon();
    gameInterval = setInterval(() => {
        clearTimeout(balloonTimeout);
        showBalloon();
    }, 2000); // Ballongen visas varje 2 sekund
}

function showBalloon() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 150);

    balloon.style.left = `${x}px`;
    balloon.style.top = `${y}px`;
    balloon.style.display = 'block';

    balloonTimeout = setTimeout(() => {
        balloon.style.display = 'none';
    }, 1500); // Ballongen försvinner efter 1.5 sekunder
}
