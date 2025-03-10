// Générer le QR code
const gameUrl = "https://fati21-co.github.io/buy-or-cry/"; // Remplacez par votre URL GitHub Pages
const qrCodeContainer = document.getElementById('qr-code');
new QRCode(qrCodeContainer, {
    text: gameUrl,
    width: 150,
    height: 150,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

// Gestion du jeu
document.getElementById('start-game').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    if (username) {
        document.getElementById('display-username').textContent = username;
        document.getElementById('login-section').classList.add('hidden');
        document.getElementById('game-section').classList.remove('hidden');
        startGame();
    } else {
        alert('Veuillez entrer un nom d\'utilisateur');
    }
});

function startGame() {
    const questions = [
        { question: "Si l'offre augmente et la demande reste constante, que se passe-t-il avec le prix?", answer: "baisse" },
        { question: "Si la demande augmente et l'offre reste constante, que se passe-t-il avec le prix?", answer: "augmente" },
        { question: "Qu'est-ce qui peut causer une augmentation de la demande?", answer: "publicité" }
    ];

    let score = 0;
    let currentQuestionIndex = 0;

    function displayQuestion() {
        const question = questions[currentQuestionIndex];
        document.getElementById('game-questions').innerHTML = `
            <p>${question.question}</p>
            <input type="text" id="answer" placeholder="Votre réponse">
            <button id="submit-answer">Soumettre</button>
        `;

        document.getElementById('submit-answer').addEventListener('click', function() {
            const userAnswer = document.getElementById('answer').value.toLowerCase();
            if (userAnswer === question.answer) {
                score += 10;
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion();
            } else {
                endGame(score);
            }
        });
    }

    displayQuestion();
}

function endGame(score) {
    document.getElementById('game-section').classList.add('hidden');
    document.getElementById('score-section').classList.remove('hidden');

    const username = document.getElementById('username').value;
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    scores.push({ username, score });
    localStorage.setItem('scores', JSON.stringify(scores));

    displayScores();
}

function displayScores() {
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    scores.sort((a, b) => b.score - a.score);

    const scoreboard = document.getElementById('scoreboard');
    scoreboard.innerHTML = scores.slice(0, 3).map((user, index) => `
        <li>${index + 1}. ${user.username} - ${user.score} points</li>
    `).join('');
}
