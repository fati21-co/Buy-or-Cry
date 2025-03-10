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
        updateDisplay();
    } else {
        alert("Fonds insuffisants !");
    }
}

function sellStock(type) {
    if (stocks[type].owned > 0) {
        capital += stocks[type].price;
        stocks[type].owned -= 1;
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
}

setInterval(() => {
    stocks.tech.price += Math.floor(Math.random() * 10 - 5);
    stocks.energy.price += Math.floor(Math.random() * 8 - 4);
    stocks.finance.price += Math.floor(Math.random() * 12 - 6);
    updateDisplay();
}, 5000);

