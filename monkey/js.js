const banana = document.querySelector(".banana");
const bananaCounter = document.querySelector(".bananaCounter");
const upgradeButton = document.querySelector(".upgradeButton");
const upgradeText = document.querySelector(".upgradeText");
var bananas = 0;
var price = 10;
var mult = 1;
var upmult = 2;

banana.addEventListener("click", click);
upgradeButton.addEventListener("click", upgrade);

function click(){
    bananas += mult;
    updateCounter();
}

function upgrade(){
    if(bananas>=price){
        bananas -= price;
        mult = upmult;
        upmult = upmult*2;
        price = Math.round(price*2);
    }
    updateCounter();
    upgradeText.innerHTML = upmult.toString() + "per click. " + price.toString() + "$";
}

function updateCounter(){
    bananaCounter.innerHTML = "bananas: " + bananas.toString();
}