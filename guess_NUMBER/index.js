function randomnumber(){
    Math.floor(Math.random()*100+1)
}


let input=document.getElementById("guess");
let msg=document.getElementById("msg");
let attempt=document.getElementById("attempts");

let number=randomnumber();
let pokusaji=0;
function updateattempts(){
    attempt.innerHTML="Pokušaji: " + pokusaji;

}

function checknumber(event){
    event.preventDefault(); // ne osvježava stranicu

}

function newgame(){

}