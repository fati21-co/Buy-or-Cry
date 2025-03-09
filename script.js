document.addEventListener("DOMContentLoaded", () => {
    let players = [];
    let stocks = [
        { name: "TechCorp", price: 100 },
        { name: "PharmaPlus", price: 80 },
        { name: "GreenEnergy", price: 120 }
    ];
    let username = "";
    let balance = 1000;
    let portfolio = {};

    function startGame() {
        username = document.getElementById("username").value.trim();
        if (username === "") {
            alert("Veuillez entrer un nom d'utilisateur");
            return;
        }
        document.getElementById("home").classList.add("hidden");
        document.getElementById("game").classList.remove("hidden");
        document.getElementById("market").classList.remove("hidden");
        updateMarket();
    }

    function updateMarket() {
        let stocksContainer = document.getElementById("stocks");
        stocksContainer.innerHTML = "";
        stocks.forEach(stock => {
            stock.price += (Math.random() * 20 - 10); // Variation de prix aléatoire
            stock.price = Math.max(10, Math.round(stock.price));
            let stockElement = document.createElement("div");
            stockElement.innerHTML = `
                <p>${stock.name} - Prix : ${stock.price} $</p>
                <button onclick="buyStock('${stock.name}', ${stock.price})">Acheter</button>
                <button onclick="sellStock('${stock.name}', ${stock.price})">Vendre</button>
            `;
            stocksContainer.appendChild(stockElement);
        });
    }

    function buyStock(stockName, price) {
        if (balance >= price) {
            balance -= price;
            portfolio[stockName] = (portfolio[stockName] || 0) + 1;
            alert(`Vous avez acheté une action de ${stockName}`);
        } else {
            alert("Fonds insuffisants !");
        }
    }

    function sellStock(stockName, price) {
        if (portfolio[stockName] && portfolio[stockName] > 0) {
            balance += price;
            portfolio[stockName] -= 1;
            alert(`Vous avez vendu une action de ${stockName}`);
        } else {
            alert("Vous ne possédez pas cette action !");
        }
    }

    function endGame() {
        let profit = balance - 1000;
        players.push({ username, profit });
        players.sort((a, b) => b.profit - a.profit);

        document.getElementById("game").classList.add("hidden");
        document.getElementById("results").classList.remove("hidden");
        let leaderboard = document.getElementById("leaderboard");
        leaderboard.innerHTML = "";

        players.slice(0, 3).forEach((player, index) => {
            let li = document.createElement("li");
            li.textContent = `${index + 1}. ${player.username} - Profit : ${player.profit} $`;
            leaderboard.appendChild(li);
        });
    }

    window.startGame = startGame;
    window.buyStock = buyStock;
    window.sellStock = sellStock;
    window.endGame = endGame;
    setInterval(updateMarket, 5000); // Mise à jour du marché toutes les 5 secondes
});
