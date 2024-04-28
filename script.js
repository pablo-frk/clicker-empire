let coin = 30;
let house = 0;
let tabern = 0;
let tower = 0;

let coinDisplay = document.getElementById("coinDisplay");
let autoCoinDisplay = document.getElementById("autoCoinDisplay");
let taxaDeClickDisplay = document.getElementById("taxaDeCliqueDisplay");
let houseDisplay = document.getElementById("houseDisplay");
let tabernDisplay = document.getElementById("tabernDisplay");
let towerDisplay = document.getElementById("towerDisplay");

// TAXA DE GERAÇÃO DE COINS POR SEGUNDO e CLICKS
let taxaDeGeracao = 0;
let taxaDeClick = 0;

// Valores
let housePrice = 30;
let tabernPrice = 125;
let towerPrice = 3000;

// MUDAR VALORES DOS ITEMS NO MENU DE COMPRAS
let buyHouseBtnDisplay = document.getElementById("buyHouseBtnDisplay");

////////////////////////////////////////// FUNCIONALIDADES

// Clicar
function clicou() {
    if (taxaDeClick > 0) {
        coin += taxaDeClick;
    } else {
        window.alert("Você precisa ter uma casa primeiro");
    }

    console.log(coin);
    atualizarDisplay();
}

// Comprar Casa
function buyHouse() {
    if (coin >= housePrice) {
        house++;
        coin -= housePrice;
        housePrice = parseFloat((housePrice + housePrice * 0.1).toFixed(2));
        haveHouse = true;
        taxaDeClick++;
        atualizarDisplay();
    } else {
        alert(`Você precisa ter ${housePrice} coins para comprar uma casa`);
    }
}

// Comprar Taberna
function buyTabern() {
    if (coin >= tabernPrice) {
        tabern++;
        coin -= tabernPrice;
        haveTabern = true;
        autoCoin = true;
        taxaDeGeracao += 10;
        atualizarDisplay();
    }
}

// Comprar Torrer
function buyTower() {
    if (coin >= towerPrice) {
        tower++;
        coin -= towerPrice;
        haveTower = true;
        taxaDeClick;
    }
}

// Atualizar o display
function atualizarDisplay() {
    if (coin < 1000) {
        coinDisplay.innerHTML = `Dinheiro: ${coin.toFixed(1)}`;
    } else if (coin < 1000000) {
        coinDisplay.innerHTML = `Dinheiro: ${(coin / 1000).toFixed(1)}K`;
    } else if (coin < 1000000000) {
        coinDisplay.innerHTML = `Dinheiro: ${(coin / 1000000).toFixed(1)}M`;
    } else {
        coinDisplay.innerHTML = `Dinheiro: ${(coin / 1000000000).toFixed(1)}B`;
    }

    if (taxaDeGeracao < 1000) {
        autoCoinDisplay.innerHTML = `Coin/Segundos: ${taxaDeGeracao.toString()}`;
    } else if (coin < 1000000) {
        autoCoinDisplay.innerHTML = `Coin/Segundos: ${(
            taxaDeGeracao / 1000
        ).toFixed(1)}K`;
    } else if (coin < 1000000000) {
        autoCoinDisplay.innerHTML = `Coin/Segundos: ${(
            taxaDeGeracao / 1000000
        ).toFixed(1)}M`;
    } else {
        autoCoinDisplay.innerHTML = `Coin/Segundos: ${(
            taxaDeGeracao / 1000000000
        ).toFixed(1)}B`;
    }

    if (taxaDeClick < 1000) {
        taxaDeClickDisplay.innerHTML = `Coin/Click: ${taxaDeClick.toString()}`;
    } else if (coin < 1000000) {
        taxaDeClickDisplay.innerHTML = `Coin/Click: ${(
            taxaDeClick / 1000
        ).toFixed(1)}K`;
    } else if (coin < 1000000000) {
        taxaDeClickDisplay.innerHTML = `Coin/Click: ${(
            taxaDeClick / 1000000
        ).toFixed(1)}M`;
    } else {
        taxaDeClickDisplay.innerHTML = `Coin/Click: ${(
            taxaDeClick / 1000000000
        ).toFixed(1)}B`;
    }

    houseDisplay.innerHTML = `Casas: ${house}`;
    tabernDisplay.innerHTML = `Tabernas: ${tabern}`;
    buyHouseBtnDisplay.innerHTML = `Comprar Casa - $${housePrice}`;
}

// Comandos para auxiliar
const ganharMoedas = (a) => {
    coin += a;
    atualizarDisplay();
};

// Atualizador de moedas
function gerarCoins() {
    coin += taxaDeGeracao;
    atualizarDisplay();
}

function iniciar() {
    setInterval(gerarCoins, 1000);
    atualizarDisplay();
}

window.onload = iniciar;
window.onload = formatCoins(coin);
