/*TODO: optimize code*/

//first, we identify the boxes
const box0 = document.getElementById("box-0");
const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");
const box3 = document.getElementById("box-3");
const box4 = document.getElementById("box-4");
const box5 = document.getElementById("box-5");
const box6 = document.getElementById("box-6");
const box7 = document.getElementById("box-7");
const box8 = document.getElementById("box-8");
const boxes = [box0,box1,box2,box3,box4,box5,box6,box7,box8];
const repeatButton = document.querySelector(".repeat-button");
const repeatButtonAd = document.querySelector(".advertisment__repeat-button");
const advert = document.querySelector(".advertisment");
const singButton = document.querySelector(".sing-button");
const multButton = document.querySelector(".mult-button");

var states,turn, mode;
mode = "1";
var finished = false;
let ia =()=>{
    checkWin();
    for (let i = 0; i < 8; i++) {
        if(states[i] == 0 && finished == false){
            boxes[i].src = "img/X.png"
            states[i] = 1;
            turn=0;
            break;
        }
    }
    checkWin();
}


let singButtPressed = () =>{
    multButton.style.backgroundColor = "rgb(88, 215, 224)";
    singButton.style.backgroundColor = "rgb(51, 111, 116)";
    mode = "1";
    if(turn==1){
        ia();
    }
}

let multButtPressed = () =>{
    singButton.style.backgroundColor = "rgb(88, 215, 224)";
    multButton.style.backgroundColor = "rgb(51, 111, 116)";
    mode ="2";
}

let clear = () =>{
    finished = false;
    states = [0,0,0,0,0,0,0,0,0];
    turn = 0;
    box0.src = "img/none.png"
    box1.src = "img/none.png"
    box2.src = "img/none.png"
    box3.src = "img/none.png"
    box4.src = "img/none.png"
    box5.src = "img/none.png"
    box6.src = "img/none.png"
    box7.src = "img/none.png"
    box8.src = "img/none.png"
    console.log("cleared");
    advert.style.display = "none";
    repeatButton.style.display = "inline";
    repeatButtonAd.style.display = "none";
}

//function when you win as argument the state that won
function win(who){
    if(who == 10){
        console.log("O won");
        advert.innerHTML = "O won";
    } else{
        console.log("X won");
        advert.innerHTML = "X won";
    }
    advert.style.display = "inline";
    repeatButton.style.display = "none";
    repeatButtonAd.style.display = "inline";
    finished = true;
}

//function to check if you are wining
function checkWin(){
    //check if the states are in line and they are diferent of 0
    if(states[0] == states[1] && states[1] == states[2] && states[2] != 0){
        win(states[0]);
    } else if(states[3] == states[4] && states[4] == states[5] && states[5] != 0){
        win(states[3]);
    } else if(states[6] == states[7] && states[7] == states[8] && states[8] != 0){
        win(states[6]);
    } else if(states[0] == states[3] && states[3] == states[6] && states[6] != 0){
        win(states[0]);
    } else if(states[1] == states[4] && states[4] == states[7] && states[7] != 0){
        win(states[1]);
    } else if(states[2] == states[5] && states[5] == states[8] && states[8] != 0){
        win(states[2]);
    } else if(states[0] == states[4] && states[4] == states[8] && states[8] != 0){
        win(states[0]);
    } else if(states[2] == states[4] && states[4] == states[6] && states[6] != 0){
        win(states[2]);
    }
    //you're not wining :(
    else{
        console.log("not wining")
    }
}

//someone clicked, argument of who clicked
function clicked(who){
    //who.target.id[4] -- num picked
    if(turn == 0){
        if(states[who.target.id[4]] == 0){
            who.target.src = "img/O.png";
            states[who.target.id[4]] = 10;
            turn = 1;
            if(mode=="1"){
                if(states.includes(0)){
                    ia();
                }
            }
        }
    } else if(turn == 1){
        if(mode=="2"){
            if(states[who.target.id[4]] == 0){
                who.target.src = "img/X.png";
                states[who.target.id[4]] = 1;
                turn = 0;
            }
        }
    } else{
        console.error("Error 001");
    }
    checkWin();
}

//eventListeners preparation
box1.onclick = clicked;
box2.onclick = clicked;
box3.onclick = clicked;
box4.onclick = clicked;
box5.onclick = clicked;
box6.onclick = clicked;
box7.onclick = clicked;
box8.onclick = clicked;
box0.onclick = clicked;
repeatButton.onclick = clear;
repeatButtonAd.onclick = clear;
singButton.onclick = singButtPressed;
multButton.onclick = multButtPressed;

clear();