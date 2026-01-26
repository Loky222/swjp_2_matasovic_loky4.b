function random(){
    return "#" + Math.floor(Math.random()*0xffffff).toString(16);
}

const button = document.getElementById("change-color-button");
button.addEventListener("click", function(){
    document.body.style.backgroundColor = random();
});
