

let counter=0;

function broji(){
    for(let i=0;i>=0;i++){
        counter += 1;
        return counter;
    };
}
function brojinazad(){
    for(let i=0;i>=0;i++){
        counter -= 1;
        return counter;
    };

}

const button = document.getElementById("plus");
button.addEventListener("click", function(){
    document.getElementById("display").innerText = broji();
});
const button2 = document.getElementById("minus");   
button2.addEventListener("click", function(){
    document.getElementById("display").innerText = brojinazad();
});