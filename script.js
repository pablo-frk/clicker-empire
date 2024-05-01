let coin = 3000;
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

// AUXILIADORES PARA CHECAR POSTERIORMENTE SE O USUARIO TEM AS CONSTRUÇÕES
let haveTabern = true;

// Valores
let housePrice = 30;
let tabernPrice = 125;
let towerPrice = 3000;

// MUDAR VALORES DOS ITEMS NO MENU DE COMPRAS
let buyHouseBtnDisplay = document.getElementById("buyHouseBtnDisplay");
let buyTabernBtnDisplay = document.getElementById("buyTavernBtnDisplay");
let buyTowerBtnDisplay = document.getElementById("buyTowerBtnDisplay")

// AUDIOS
let clickSound = new Audio("sfx/click.flac");

////////////////////////////////////////// FUNCIONALIDADES

document.body.addEventListener("click", function () {
    let clickSound = new Audio("sfx/click.flac");
    clickSound.play();
});

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
        housePrice = parseFloat((housePrice + housePrice * 0.05).toFixed(2));
        haveHouse = true;
        taxaDeClick = house;
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
        tabernPrice = parseFloat((tabernPrice + tabernPrice * 0.07).toFixed(2));
        autoCoin = true;
        taxaDeGeracao += 10;
        atualizarDisplay();
        haveTabern = true;
    } else {
        alert("Você não tem dinheiro suficiente");
    }
}

// Comprar Torrer
function buyTower() {
    if (coin >= towerPrice) {
        tower++;
        coin -= towerPrice;
        towerPrice = parseFloat(towerPrice + towerPrice * 0.05);
        haveTower = true;
        taxaDeClick += 40;
    } else {
        alert("Você não tem dinheiro suficiente");
    }
}

// Atualizar o display
function atualizarDisplay() {
    if (coin < 1000) {
        coinDisplay.innerHTML = `: ${coin.toFixed(0)}`;
    } else if (coin < 1000000) {
        coinDisplay.innerHTML = `: ${(coin / 1000).toFixed(1)}K`;
    } else if (coin < 1000000000) {
        coinDisplay.innerHTML = `: ${(coin / 1000000).toFixed(1)}M`;
    } else {
        coinDisplay.innerHTML = `: ${(coin / 1000000000).toFixed(1)}B`;
    }

    if (taxaDeGeracao < 1000) {
        autoCoinDisplay.innerHTML = `/Segundos: ${taxaDeGeracao.toString()}`;
    } else if (coin < 1000000) {
        autoCoinDisplay.innerHTML = `/Segundos: ${(
            taxaDeGeracao / 1000
        ).toFixed(1)}K`;
    } else if (coin < 1000000000) {
        autoCoinDisplay.innerHTML = `/Segundos: ${(
            taxaDeGeracao / 1000000
        ).toFixed(1)}M`;
    } else {
        autoCoinDisplay.innerHTML = `/Segundos: ${(
            taxaDeGeracao / 1000000000
        ).toFixed(1)}B`;
    }

    if (taxaDeClick < 1000) {
        taxaDeClickDisplay.innerHTML = `/Click: ${taxaDeClick.toString()}`;
    } else if (coin < 1000000) {
        taxaDeClickDisplay.innerHTML = `/Click: ${(taxaDeClick / 1000).toFixed(
            1
        )}K`;
    } else if (coin < 1000000000) {
        taxaDeClickDisplay.innerHTML = `/Click: ${(
            taxaDeClick / 1000000
        ).toFixed(1)}M`;
    } else {
        taxaDeClickDisplay.innerHTML = `/Click: ${(
            taxaDeClick / 1000000000
        ).toFixed(1)}B`;
    }

    houseDisplay.innerHTML = `: ${house}`;
    tabernDisplay.innerHTML = `: ${tabern}`;
    buyHouseBtnDisplay.innerHTML = `Comprar Casa - $${housePrice.toFixed(0)}`;
    buyTabernBtnDisplay.innerHTML = `Comprar Taberna - $${tabernPrice.toFixed(0)}`;
    buyTowerBtnDisplay.innerHTML = `Comprar Torre - $${towerPrice.toFixed(0)}`
}

// Comandos para auxiliar
const ganharMoedas = (a) => {
    coin += a;
    atualizarDisplay();
};

if (haveTabern) {
    taxaDeGeracao += tabern * 10;
}

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
