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

//make some var
var states = [0,0,0,0,0,0,0,0,0]
var turn = 0;

//function when you win as argument the state that won
function win(who){
    if(who == 10){
        console.log("O won");
    } else{
        console.log("X won");
    }
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
            who.target.src = "O.png";
            states[who.target.id[4]] = 10;
            turn = 1;
        } else{
            console.log("alrady picked")
        }
    } else if(turn == 1){
        if(states[who.target.id[4]] == 0){
            who.target.src = "X.png";
            states[who.target.id[4]] = 1;
            turn = 0;
        } else{
            console.log("alrady picked")
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