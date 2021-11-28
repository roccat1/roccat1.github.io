const box11 = document.getElementById("box-11");
const box12 = document.getElementById("box-12");
const box13 = document.getElementById("box-13");
const box21 = document.getElementById("box-21");
const box22 = document.getElementById("box-22");
const box23 = document.getElementById("box-23");
const box31 = document.getElementById("box-31");
const box32 = document.getElementById("box-32");
const box33 = document.getElementById("box-33");

var turn = 0;

function clicked(who){
    console.log(who.target.src);
    if(turn == 0){
        console.log("b");
        who.target.src = "O.png"
        console.log(who.clicked)
    } else if(turn == 1){
        console.log("c");
    } else{
        console.error("Error 001");
    }
}

box11.onclick = clicked;
box12.onclick = clicked;
box13.onclick = clicked;
box21.onclick = clicked;
box22.onclick = clicked;
box23.onclick = clicked;
box31.onclick = clicked;
box32.onclick = clicked;
box33.onclick = clicked;