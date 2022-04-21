
let monedas_mina = 0;
let brazalete_nordico = "0";
let collar_diente_tiburon = "0";
let pendiente_zafiro = "0";
let lujo_del_rey = "0";

let ruidoDeMinar = new Audio("soundtracks/minar.mp3");

let ruidoDeTesoro = new Audio("soundtracks/encontrarTesoro.mp3");

let ruidoDeTap = new Audio ("soundtracks/tap_fx.mp3");

/* Mina */

let mineral_paraminar = document.getElementById("mineral");

mineral_paraminar.addEventListener("click",minando);

function minando(){

    ruidoDeMinar.play();


let numeroRandom_deMinado = Math.random()*1000;
     numeroRandom_deMinado  = Math.floor(numeroRandom_deMinado);
     numeroRandom_deMinado  = numeroRandom_deMinado + 1;

     if(numeroRandom_deMinado <= 50){
        monedas_mina = monedas_mina + 11;
         alert("Haz encontrado 5 Infinite Coins!");


     } else if(numeroRandom_deMinado == 51){
        ruidoDeTesoro.play();
        monedas_mina = monedas_mina + 450;
         alert("Haz encontrado un yasimiento de 450 Infinite Coins!");


     } else if(numeroRandom_deMinado == 91 && brazalete_nordico == false){
        ruidoDeTesoro.play();
         brazalete_nordico = "1";
         localStorage.setItem("item_brazalete",brazalete_nordico);
         alert("Haz encontrado un tesoro con una probabilidad del 0,1%");


     } else if(numeroRandom_deMinado == 92 || numeroRandom_deMinado == 93 && collar_diente_tiburon == false){
        ruidoDeTesoro.play();
         collar_diente_tiburon = "1";
         localStorage.setItem("item_collar_tiburon",collar_diente_tiburon);
         alert("Haz encontrado un tesoro con una probabilidad del 0,2%");


     } else if(numeroRandom_deMinado >= 94 && numeroRandom_deMinado <= 104 && pendiente_zafiro == false){
        ruidoDeTesoro.play();
         pendiente_zafiro = "1";
         localStorage.setItem("item_pendiente",pendiente_zafiro);
         alert("Haz encontrado un tesoro con una probabilidad del 1%");


     } else if(numeroRandom_deMinado >= 105 && numeroRandom_deMinado <= 110 && lujo_del_rey == false){
        ruidoDeTesoro.play();
        lujo_del_rey = "1";
        alert("Haz encontrado un tesoro con una probabilidad del 0.5%");
        localStorage.setItem("item_lujo_rey",lujo_del_rey);


     } else {}
}


/* Local Storage*/

let guardarPartida = document.querySelector(".divDeVolver");
guardarPartida.addEventListener("click",guardar_la_partida);

function guardar_la_partida(){

    ruidoDeTap.play();

    localStorage.setItem("dineroDeLaMina",monedas_mina);

}
