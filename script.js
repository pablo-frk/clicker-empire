let coin = 30;
let house = 0;
let tabern = 0

let coinDisplay = document.getElementById("coinDisplay");
let autoCoinDisplay = document.getElementById("autoCoinDisplay")
let houseDisplay = document.getElementById("houseDisplay")
let tabernDisplay = document.getElementById("tabernDisplay")


let haveHouse = false
let haveTabern = false


// TAXA DE GERAÇÃO DE COINS POR SEGUNDO
let taxaDeGeracao = 0


const housePrice = 30;
const tabernPrice = 125

// Clicar
function clicou() {
    if(haveHouse == true) {
        coin += (house * 1)
    }else {
        window.alert("Você precisa ter uma casa primeiro")
    }
    
    console.log(coin);
    atualizarDisplay();
}

// Comprar Casa
function buyHouse() {
    if (coin >= 30) {
        house++
        coin -= housePrice;
        haveHouse = true
        atualizarDisplay();
    }
}

// Comprar Taberna
function buyTabern() {
    if (coin >= tabernPrice) {
        tabern++
        coin -= tabernPrice
        haveTabern = true
        autoCoin = true
        taxaDeGeracao += 10
        atualizarDisplay();
    }
}


// Atualizar o display
function atualizarDisplay() {

    
    if (coin < 1000) {
        coinDisplay.innerHTML = `Dinheiro: ${coin.toString()}`;
    } else if (coin < 1000000) {
        coinDisplay.innerHTML = `Dinheiro: ${(coin / 1000).toFixed(1)}K`;
    }else if (coin < 1000000000) {
        coinDisplay.innerHTML = `Dinheiro: ${(coin / 1000000).toFixed(1)}M`
    }else {
        coinDisplay.innerHTML = `Dinheiro: ${(coin / 1000000000).toFixed(1)}B`
    }

    if (taxaDeGeracao < 1000) {
        autoCoinDisplay.innerHTML = `Coin/Segundos: ${taxaDeGeracao.toString()}`
    } else if (coin < 1000000) {
        autoCoinDisplay.innerHTML = `Coin/Segundos: ${(taxaDeGeracao / 1000).toFixed(1)}K`;
    }else if (coin < 1000000000) {
        autoCoinDisplay.innerHTML = `Coin/Segundos: ${(taxaDeGeracao / 1000000).toFixed(1)}M`
    }else {
        autoCoinDisplay.innerHTML = `Coin/Segundos: ${(taxaDeGeracao / 1000000000).toFixed(1)}B`
    }
    
    houseDisplay.innerHTML = `Casas: ${house}`
    tabernDisplay.innerHTML = `Tabernas: ${tabern}`
}


// Comandos para auxiliar
const ganharMoedas = (a) => {
    coin+=a
    atualizarDisplay()
}


// Atualizador de moedas
function gerarCoins() {
    coin += taxaDeGeracao
    atualizarDisplay()
}

function iniciar() {
    setInterval(gerarCoins, 1000)
    atualizarDisplay()
}

// FORMATAR MOEDAS



window.onload = iniciar
window.onload = formatCoins(coin)