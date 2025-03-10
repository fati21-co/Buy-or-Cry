let capital = 1000;
let stocks = {
    tech: { price: 100, owned: 0 },
    energy: { price: 80, owned: 0 },
    finance: { price: 120, owned: 0 }
};

document.getElementById("player-name").innerText = "Joueur : " + localStorage.getItem("username");

function buyStock(type) {
    if (capital >= stocks[type].price) {
        stocks[type].owned += 1;
        capital -= stocks[type].price;
        animateStock(type);
        updateDisplay();
    } else {
        alert("Fonds insuffisants !");
    }
}

function sellStock(type) {
    if (stocks[type].owned > 0) {
        capital += stocks[type].price;
        stocks[type].owned -= 1;
        animateStock(type);
        updateDisplay();
    } else {
        alert("Vous ne possédez pas cette action !");
    }
}

function updateDisplay() {
    document.getElementById("capital").innerText = capital;
    document.getElementById("tech-price").innerText = stocks.tech.price;
    document.getElementById("energy-price").innerText = stocks.energy.price;
    document.getElementById("finance-price").innerText = stocks.finance.price;

    // Mise à jour du message du marché
    let messages = [
        "📉 Attention, le marché est en baisse !",
        "📈 Les valeurs montent, c'est le moment d'investir !",
        "⚡ Une volatilité inhabituelle est détectée...",
        "🔄 Le marché fluctue, surveillez vos actions !"
    ];
    document.getElementById("market-news").innerText = messages[Math.floor(Math.random() * messages.length)];
}

// Fonction d'animation des prix des actions
function animateStock(type) {
    let priceElement = document.getElementById(type + "-price");
    priceElement.style.transform = "scale(1.2)";
    setTimeout(() => {
        priceElement.style.transform = "scale(1)";
    }, 300);
}

// Mise à jour automatique des prix toutes les 5 secondes
setInterval(() => {
    stocks.tech.price += Math.floor(Math.random() * 10 - 5);
    stocks.energy.price += Math.floor(Math.random() * 8 - 4);
    stocks.finance.price += Math.floor(Math.random() * 12 - 6);
    updateDisplay();
}, 5000);
