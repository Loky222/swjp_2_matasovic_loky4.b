
   
document.getElementById("calculate-bmi").addEventListener("click", function(){
 let bmi = document.getElementById("weight").value / (document.getElementById("height").value/100 * document.getElementById("height").value/100);
    document.getElementById("bmi-result").innerHTML = "BMI" + bmi.toFixed(2);
});