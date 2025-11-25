function randomnumber(){
    return Math.floor(Math.random()*100)+1;
}


let input=document.getElementById("guess");
let msg=document.getElementById("msg");
let attempt=document.getElementById("attempts");

let number=randomnumber();
console.log(number);
let pokusaji=0;

function updateattempts(){
    attempt.innerHTML="Pokušaji: " + pokusaji;

}

function checknumber(event){
    event.preventDefault(); // ne osvježava stranicu
    let value=parseInt(input.value);
    console.log(value);

    if(isNaN(value) || value<1 || value>100){
        msg.innerHTML="Unesite broj između 1 i 100!";
        msg.style.color="crimson";
        return;

    }

    if(value === number){
        msg.innerHTML="Pogodatk broj je " + number;
        msg.style.color="blue";
    }
    else if(value < number){
        msg.innerHTML="Premalo";
        msg.style.color="orange";

    }
    else{
        msg.innerHTML="Preveliko";
        msg.style.color="purple";
    }

    pokusaji++;
    updateattempts();

}

function newgame(){
    number=randomnumber();
    pokusaji=0;
    updateattempts();
    msg.innerHTML="Nova igra";
    msg.style.color="black";
    input.value="";

}