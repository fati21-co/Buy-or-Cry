// Questions du quiz
const questions = [
    {
        question: "Qu'est-ce que la loi de l'offre et de la demande ?",
        options: [
            "Une loi qui régit les prix en fonction de la disponibilité et de la demande des produits",
            "Une loi qui fixe les prix des produits indépendamment du marché",
            "Une loi qui favorise uniquement les producteurs",
            "Une loi qui ignore les consommateurs"
        ],
        answer: "Une loi qui régit les prix en fonction de la disponibilité et de la demande des produits"
    },
    {
        question: "Que se passe-t-il si la demande dépasse l'offre ?",
        options: [
            "Les prix augmentent",
            "Les prix diminuent",
            "Les prix restent stables",
            "L'offre disparaît"
        ],
        answer: "Les prix augmentent"
    },
    {
        question: "Quel est l'effet d'une augmentation de l'offre sur les prix ?",
        options: [
            "Les prix baissent",
            "Les prix augmentent",
            "Les prix restent stables",
            "La demande diminue"
        ],
        answer: "Les prix baissent"
    },
    {
        question: "Qu'est-ce qu'un marché en équilibre ?",
        options: [
            "Un marché où l'offre égale la demande",
            "Un marché où l'offre dépasse la demande",
            "Un marché où la demande dépasse l'offre",
            "Un marché sans prix"
        ],
        answer: "Un marché où l'offre égale la demande"
    },
    {
        question: "Quel est le rôle des prix dans un marché ?",
        options: [
            "Ils servent de signal pour équilibrer l'offre et la demande",
            "Ils sont fixés par le gouvernement",
            "Ils n'ont aucun impact sur le marché",
            "Ils favorisent uniquement les consommateurs"
        ],
        answer: "Ils servent de signal pour équilibrer l'offre et la demande"
    },
    {
        question: "Qu'est-ce qu'une pénurie sur un marché ?",
        options: [
            "Une situation où la demande dépasse l'offre",
            "Une situation où l'offre dépasse la demande",
            "Une situation où les prix sont trop bas",
            "Une situation où les prix sont trop élevés"
        ],
        answer: "Une situation où la demande dépasse l'offre"
    },
    {
        question: "Qu'est-ce qu'un surplus sur un marché ?",
        options: [
            "Une situation où l'offre dépasse la demande",
            "Une situation où la demande dépasse l'offre",
            "Une situation où les prix sont trop bas",
            "Une situation où les prix sont trop élevés"
        ],
        answer: "Une situation où l'offre dépasse la demande"
    },
    {
        question: "Quel est l'effet d'une baisse de la demande sur les prix ?",
        options: [
            "Les prix baissent",
            "Les prix augmentent",
            "Les prix restent stables",
            "L'offre augmente"
        ],
        answer: "Les prix baissent"
    },
    {
        question: "Qu'est-ce que l'élasticité de la demande ?",
        options: [
            "La sensibilité de la demande aux variations de prix",
            "La sensibilité de l'offre aux variations de prix",
            "La stabilité des prix sur le marché",
            "La rigidité de l'offre"
        ],
        answer: "La sensibilité de la demande aux variations de prix"
    },
    {
        question: "Qu'est-ce qu'un bien de substitution ?",
        options: [
            "Un bien qui peut remplacer un autre bien",
            "Un bien qui ne peut pas être remplacé",
            "Un bien dont la demande est inélastique",
            "Un bien dont l'offre est illimitée"
        ],
        answer: "Un bien qui peut remplacer un autre bien"
    },
    {
        question: "Qu'est-ce qu'un bien complémentaire ?",
        options: [
            "Un bien utilisé conjointement avec un autre bien",
            "Un bien qui remplace un autre bien",
            "Un bien dont la demande est indépendante",
            "Un bien dont l'offre est excédentaire"
        ],
        answer: "Un bien utilisé conjointement avec un autre bien"
    },
    {
        question: "Quel est l'effet d'une augmentation des revenus sur la demande de biens normaux ?",
        options: [
            "La demande augmente",
            "La demande diminue",
            "La demande reste stable",
            "L'offre diminue"
        ],
        answer: "La demande augmente"
    },
    {
        question: "Qu'est-ce qu'un marché concurrentiel ?",
        options: [
            "Un marché avec de nombreux acheteurs et vendeurs",
            "Un marché contrôlé par un seul vendeur",
            "Un marché sans prix",
            "Un marché sans offre"
        ],
        answer: "Un marché avec de nombreux acheteurs et vendeurs"
    },
    {
        question: "Qu'est-ce qu'un monopole ?",
        options: [
            "Un marché contrôlé par un seul vendeur",
            "Un marché avec de nombreux vendeurs",
            "Un marché sans demande",
            "Un marché en équilibre"
        ],
        answer: "Un marché contrôlé par un seul vendeur"
    },
    {
        question: "Qu'est-ce que la demande agrégée ?",
        options: [
            "La demande totale de biens et services dans une économie",
            "La demande d'un seul produit",
            "La demande des entreprises uniquement",
            "La demande des consommateurs uniquement"
        ],
        answer: "La demande totale de biens et services dans une économie"
    },
    {
        question: "Qu'est-ce que l'offre agrégée ?",
        options: [
            "L'offre totale de biens et services dans une économie",
            "L'offre d'un seul produit",
            "L'offre des entreprises uniquement",
            "L'offre des consommateurs uniquement"
        ],
        answer: "L'offre totale de biens et services dans une économie"
    },
    {
        question: "Quel est l'effet d'une taxe sur un produit ?",
        options: [
            "Les prix augmentent",
            "Les prix diminuent",
            "Les prix restent stables",
            "La demande augmente"
        ],
        answer: "Les prix augmentent"
    },
    {
        question: "Qu'est-ce qu'un prix plafond ?",
        options: [
            "Un prix maximum imposé par le gouvernement",
            "Un prix minimum imposé par le gouvernement",
            "Un prix fixé par les producteurs",
            "Un prix fixé par les consommateurs"
        ],
        answer: "Un prix maximum imposé par le gouvernement"
    },
    {
        question: "Qu'est-ce qu'un prix plancher ?",
        options: [
            "Un prix minimum imposé par le gouvernement",
            "Un prix maximum imposé par le gouvernement",
            "Un prix fixé par les producteurs",
            "Un prix fixé par les consommateurs"
        ],
        answer: "Un prix minimum imposé par le gouvernement"
    },
    {
        question: "Quel est l'effet d'une subvention sur un produit ?",
        options: [
            "Les prix baissent",
            "Les prix augmentent",
            "Les prix restent stables",
            "La demande diminue"
        ],
        answer: "Les prix baissent"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Éléments du DOM
const questionElement = document.getElementById('question');
const optionButtons = document.querySelectorAll('.option');
const nextButton = document.getElementById('next-button');
const scoreElement = document.getElementById('score');

// Afficher une question
function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;

    optionButtons.forEach((button, index) => {
        button.textContent = question.options[index];
        button.classList.remove('correct', 'wrong');
        button.disabled = false;
    });

    nextButton.disabled = true;
}

// Vérifier la réponse
function checkAnswer(selectedButton) {
    const question = questions[currentQuestionIndex];
    if (selectedButton.textContent === question.answer) {
        selectedButton.classList.add('correct');
        score += 10;
    } else {
        selectedButton.classList.add('wrong');
    }

    optionButtons.forEach(button => {
        button.disabled = true;
    });

    nextButton.disabled = false;
    scoreElement.textContent = score;
}

// Passer à la question suivante
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert(`Quiz terminé ! Votre score est de ${score} points.`);
        currentQuestionIndex = 0;
        score = 0;
        showQuestion();
    }
}

// Événements
optionButtons.forEach(button => {
    button.addEventListener('click', () => checkAnswer(button));
});

nextButton.addEventListener('click', nextQuestion);

// Démarrer le quiz
showQuestion();
