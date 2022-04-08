"use strict"

let monedas = 0;

let mineral_paraminar = document.getElementById("mineral");

mineral_paraminar.addEventListener("click",minando);

function minando(){
let numeroRandom_deMinado = Math.random()*100;
     numeroRandom_deMinado  = Math.floor(numeroRandom_deMinado);
     numeroRandom_deMinado  = numeroRandom_deMinado + 1;
     if(numeroRandom_deMinado <= 10){
         monedas = monedas + 2;
         alert("Haz encontrado 2 Infinite Coins!");
     } else if(numeroRandom_deMinado == 50){
         monedas = monedas + 10;
         alert("Haz encontrado 10 Infinite Coins!");
     } else{}
}