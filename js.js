"use strict"

/*Inventario*/


let plumaNegra = false;
let arco1 = false;
let llave1 = false;
let pico_primitivo = false;
let espada_daily = false;
let guantelete = false;

let bayas = 0;

let correo = false;

let player = false;


/* Sonidos fx */

let ruidoDeComer_bayas = new Audio("soundtracks/come_fx.mp3");
let ruidoDeTap = new Audio ("soundtracks/tap_fx.mp3");
let ruidoDeComprar = new Audio ("soundtracks/comprar.mp3");
let ruidoDeGolpear = new Audio ("soundtracks/golpe.mp3");
let ruidoDeEsquivar = new Audio ("soundtracks/esquivar.mp3");
let ruidoDeGanarMonedas = new Audio ("soundtracks/ganarMonedas.mp3");
let ruidoDeCarta = new Audio ("soundtracks/Carta.mp3");
let ruidoDeRopa = new Audio ("soundtracks/ropa.mp3");
let ruidoDeAbrirMochila = new Audio ("soundtracks/AbrirMochila.mp3")

/* Puntos de habilidades */



let nivel = 1;
let nivel_inner = document.querySelector(".nivelDelPlayer");
nivel_inner.innerHTML = nivel;


let agilidad = 1;
let agilidad_inner = document.querySelector(".agilidadDelPlayer");
agilidad_inner.innerHTML = agilidad;


let intelecto = 1;
let intelecto_inner = document.querySelector(".intelectoDelPlayer");
intelecto_inner.innerHTML = intelecto;



let fuerza1 = 1;
let fuerza_inner = document.querySelector(".fuerzaDelPlayer");
fuerza_inner.innerHTML = fuerza1;

/* Habilidades */

let puede_minar = false;

/*Economia*/

let monedas = 0;

let llaveDelCofre = 0;

/* Mostrar las monedas */

let moneda = document.getElementById("infiniteCoin"); 
moneda.innerHTML = monedas;



/* Creacion del "nombre" del ecosistema */

let nombreDeTuMundo0 = localStorage.getItem("nombre_del_mundo");

for (let index = 0; nombreDeTuMundo0 == null || nombreDeTuMundo0 == "" || nombreDeTuMundo0.length < 3 || nombreDeTuMundo0.length > 20 ;) {

        nombreDeTuMundo0 = prompt("Como se llamará tu mundo?");
      
}

let nombreDeTuMundo = document.getElementById("nombreDeTuMundo1");

localStorage.setItem("nombre_del_mundo",nombreDeTuMundo0);

nombreDeTuMundo1.innerHTML = nombreDeTuMundo0;

if (nombreDeTuMundo0 == "Tatitos Gorditos"){
    monedas = monedas + 1000;
    moneda.innerHTML = monedas;
    llaveDelCofre = llaveDelCofre + 10;
} else{
    alert(`Felicitaciones! tu pequeño ecosistema "${nombreDeTuMundo0}" se a creado con exito! Toma las mejores deciciones posibles para no destruirlo, mucha suerte!`)
    monedas = monedas + 0;
}


/* La funcion de los eventos */
// COMBATE!

let boton_negar = document.querySelector(".boton_negar");
let boton_aceptar = document.querySelector(".boton_aceptar");
let salud_del_enemigo = document.querySelector(".salud_del_enemigo");


let aldeano = true;

// LLAVES PARA LOS EVENTOS: (Sirven para que no se bugeen las decisiones).

let llave_aldeano = undefined;
let llave_carta = undefined;
let llave_mapache = undefined;
let llave_norte = undefined;


let puedes_avanzar_de_escenario = false;


let escenario = 1;

let tocarParaComenzar = document.getElementById("vidaIc");
tocarParaComenzar.addEventListener("click", salta_de_evento);

function salta_de_evento(){
         setTimeout(()=>{
        let ultimoEvento = document.getElementById("ultimoEvento");



/* Escenacrios */
        
        escenario = escenario +1;

        if (escenario == 2) {

            document.getElementById("vidaIc").src=`iconos/lineaTemporal/icono2.png`;

            ultimoEvento.innerHTML = "En este icono podras guardar y cargar la partida, asi como tambien cambiar algunos de los ajustes del juego!";
            
            monedas = monedas +0;
            moneda.innerHTML = monedas;

        } else if(escenario == 3){

            document.getElementById("vidaIc").src=`iconos/lineaTemporal/icono3.png`;

            ultimoEvento.innerHTML = "Las monedas se ganan de muchas maneras! Con ellas puedes comprar en la tienda!";

        } else if(escenario == 4){
            
            document.getElementById("vidaIc").src=`iconos/lineaTemporal/icono4.png`;

            ultimoEvento.innerHTML = "Esta es la tienda, en ella podras comprar cofres de diferentes valores!";


        } else if(escenario == 5){
            
            document.getElementById("vidaIc").src=`iconos/lineaTemporal/icono5.png`;

            ultimoEvento.innerHTML = "Esta es tu mochila, aqui se guardaran tus objetos y tu comida!";

        } else if(escenario == 6){
            
            document.getElementById("vidaIc").src=`iconos/lineaTemporal/icono6.png`;

            ultimoEvento.innerHTML = "La comida saciara tu hambre! Es muy importante, ya que de comer depende tu supervivencia!";

        } else if(escenario == 7){
            
            document.getElementById("vidaIc").src=`iconos/lineaTemporal/icono7.png`;

            ultimoEvento.innerHTML = "La medicina te sanara la salud, puedes perderla mediante enfrentamientos o bien si tu hambre llega a 0";

        } else if(escenario == 8){
            
            document.getElementById("vidaIc").src=`iconos/lineaTemporal/icono11.png`;

            ultimoEvento.innerHTML = "Algunos items como el pico, te serviran para poder realizar acciones o trabajos nuevos!";

        } else if(escenario == 9){
            
            document.getElementById("vidaIc").src=`iconos/lineaTemporal/icono12.png`;

            ultimoEvento.innerHTML = "Este es el cofre diario! Cada cierto tiempo podras obtener una recompenza aleatoria!";

        } else if(escenario == 10){
            
            document.getElementById("vidaIc").src=`iconos/lineaTemporal/iconoFinalDelTutorial.png`;

            ultimoEvento.innerHTML = "Y recuerda! Esta es una version experimental! Muchas cosas pueden fallar, espero que disfrutes del juego!";


            /* Comienza el juego */

        } else if(escenario == 11){
            
            document.getElementById("vidaIc").src=`iconos/lineaTemporal/icono8.png`;

            ultimoEvento.innerHTML = "Pulsa en este icono, se encuentra arriba a la derecha, alli crearas a tu personaje, y tendras acceso a todas sus estadisticas";
        }
            
        if (player == true && escenario == 12) {

            document.getElementById("vidaIc").src=`iconos/lineaTemporal/bayas.png`;
            ultimoEvento.innerHTML = "Te encuentras un pequeño arbusto de bayas por el camino!"
            bayas = bayas + 1;
            itemDebayas.classList.add("itemDelInventario_mostrar");

                
        } else if(player == true && escenario == 13){
            
            document.getElementById("vidaIc").src=`iconos/lineaTemporal/icono1.png`;

            ultimoEvento.innerHTML = "Luego de caminar varios cientos de metros siguiendo tu brujula, te topas con un hombre que sale de los altos arbustos..";

        } else if(player == true && escenario == 14){
            llave_aldeano = true;
            
            document.querySelector(".boton_negar").src=`iconos/lineaTemporal/esquivar.png`;
            document.querySelector(".boton_aceptar").src=`iconos/lineaTemporal/atacar.png`;

            document.getElementById("vidaIc").src=`iconos/lineaTemporal/primerNPC.png`;

            ultimoEvento.innerHTML = "- Que haces en mis tierras!? Maldito ladron voy a asesinarte!";

            salud_del_enemigo.classList.add("salud_del_enemigo_mostrar");
            boton_negar.classList.add("boton_mostrar");
            boton_aceptar.classList.add("boton_mostrar");

            boton_aceptar.addEventListener("click",golpear);
            boton_negar.addEventListener("click",bloquear);

            
            let fuerzaDelAldeano = 5;

            let podes_atacar = true;

            function golpear(){
                if (llave_aldeano == true) {

                    ruidoDeGolpear.play();

                if (podes_atacar == true) {
                    salud_del_enemigo.value = salud_del_enemigo.value - fuerza1;
                    podes_atacar = false;
                    boton_aceptar.classList.add("boton_culdown");
                    boton_negar.classList.remove("boton_culdown");
                }else{
                    return("No podes atacar");
                }

                if (salud_del_enemigo.value <= 0) {
                    aldeano = false;
                    escenario = 14;
                    fuerzaDelAldeano = 0;

                    ruidoDeGanarMonedas.play();
                    monedas = monedas + 10;
                    moneda.innerHTML = monedas;//Agregar notificacion

                    boton_aceptar.classList.add("boton_culdown");
                    boton_negar.classList.add("boton_culdown");
                }


            }
                }
                

            function bloquear(){
               if (llave_aldeano == true) {
                    ruidoDeEsquivar.play();

                    let daño_recibido = fuerzaDelAldeano - agilidad;
                    podes_atacar = true;
                    boton_aceptar.classList.remove("boton_culdown");
                    boton_negar.classList.add("boton_culdown");

                    if (daño_recibido > 0) {
                        salud_barra.value = salud_barra.value - daño_recibido;
                    }

            }
                }
                



        } else if(player == true && escenario == 15 && aldeano == false){
            llave_aldeano = false;
            llave_norte = true;
            salud_del_enemigo.classList.remove("salud_del_enemigo_mostrar");
            boton_aceptar.classList.remove("boton_culdown");
            boton_negar.classList.remove("boton_culdown");
            
            document.getElementById("vidaIc").src=`iconos/lineaTemporal/icono1.png`;

            ultimoEvento.innerHTML = "Intentas utilizar nuevamente tu brujula pero no funciona, debio de haberse roto en el combate, debes elegir por donde avanzar";
            

            document.querySelector(".boton_negar").src=`iconos/lineaTemporal/izquierda.png`;
            document.querySelector(".boton_aceptar").src=`iconos/lineaTemporal/derecha.png`;

            boton_aceptar.addEventListener("click",norte);
            boton_negar.addEventListener("click",sur);

            function norte(){
            if(puedes_avanzar_de_escenario == false && llave_norte == true){
                ruidoDeGanarMonedas.play();
                monedas = monedas + 10;
                moneda.innerHTML = monedas;//Agregar notificacion
                puedes_avanzar_de_escenario = true;

                boton_aceptar.classList.add("boton_culdown");
                boton_negar.classList.add("boton_culdown");

            }}
            function sur(){
                if (puedes_avanzar_de_escenario == false && llave_norte == true){
                ruidoDeEsquivar.play();
                agilidad = agilidad + 1;
                agilidad_inner.innerHTML = agilidad;//Agregar notificacion
                puedes_avanzar_de_escenario = true;

                boton_aceptar.classList.add("boton_culdown");
                boton_negar.classList.add("boton_culdown");
                }
                
            }
            
        

        } else if(player == true && escenario == 16 && aldeano == false && puedes_avanzar_de_escenario == true){
            llave_norte = false;
            llave_carta = true;
            boton_aceptar.classList.remove("boton_culdown");
            boton_negar.classList.remove("boton_culdown");

            

            document.getElementById("vidaIc").src=`iconos/lineaTemporal/correo.png`;

            ultimoEvento.innerHTML = "Hay mucho viento, y notas que una carta de papel te sobre vuela las rodillas pero sigue de largo, al mismo tiempo vez el reflejo de unas monedas a lo lejos..";
        

            document.querySelector(".boton_negar").src=`iconos/lineaTemporal/elegir_correo.png`;
            document.querySelector(".boton_aceptar").src=`iconos/lineaTemporal/icono3.png`;

            boton_negar.addEventListener("click",elegir_correo);
            boton_aceptar.addEventListener("click",elegir_monedas);

            function elegir_correo(){
                if (puedes_avanzar_de_escenario == true && llave_carta == true){
                    ruidoDeCarta.play();
                    correo = true; //Poner notificacion
                    puedes_avanzar_de_escenario = false;

                    boton_aceptar.classList.add("boton_culdown");
                    boton_negar.classList.add("boton_culdown");
                }
            }

            function elegir_monedas(){
                if (puedes_avanzar_de_escenario == true && llave_carta == true){
                    ruidoDeGanarMonedas.play();
                    monedas = monedas + 10;
                    moneda.innerHTML = monedas;//Agregar notificacion
                    puedes_avanzar_de_escenario = false;

                    boton_aceptar.classList.add("boton_culdown");
                    boton_negar.classList.add("boton_culdown");
                }
            }
            

        } else if(player == true && escenario == 17 && aldeano == false && puedes_avanzar_de_escenario == false){
            llave_carta = false;
            llave_mapache = true;
            
            document.querySelector(".boton_negar").src=`iconos/lineaTemporal/esquivar.png`;
            document.querySelector(".boton_aceptar").src=`iconos/lineaTemporal/atacar.png`;

            boton_aceptar.classList.remove("boton_culdown");
            boton_negar.classList.remove("boton_culdown");


            document.getElementById("vidaIc").src=`iconos/lineaTemporal/mapache.png`;

            ultimoEvento.innerHTML = "Un mapache se avalanza hacia tu cara!";


            salud_del_enemigo.classList.add("salud_del_enemigo_mostrar");
            boton_negar.classList.add("boton_mostrar");
            boton_aceptar.classList.add("boton_mostrar");

            boton_aceptar.addEventListener("click",golpear_mapache);
            boton_negar.addEventListener("click",bloquear_mapache);

            
            let fuerzaDelAldeano = 5;

            salud_del_enemigo.value = 10;
            salud_del_enemigo.max = 10;

            aldeano = true;

            let podes_atacar = true;

            function golpear_mapache(){
                ruidoDeGolpear.play();
                if (podes_atacar == true && llave_mapache == true) {
                    salud_del_enemigo.value = salud_del_enemigo.value - fuerza1;
                    podes_atacar = false;
                    boton_aceptar.classList.add("boton_culdown");
                    boton_negar.classList.remove("boton_culdown");
                }else{
                    return("No podes atacar");
                }

                if (salud_del_enemigo.value <= 0) {
                    aldeano = false;
                    escenario = 17;
                    fuerzaDelAldeano = 0;

                    nivel = nivel + 1;
                    nivel_inner.innerHTML = nivel;

                    ruidoDeGanarMonedas.play();
                    monedas = monedas + 10;
                    moneda.innerHTML = monedas;//Agregar notificacion

                    boton_aceptar.classList.add("boton_culdown");
                    boton_negar.classList.add("boton_culdown");
                    
                }


            }

            function bloquear_mapache(){

                ruidoDeEsquivar.play();
                let daño_recibido = fuerzaDelAldeano - agilidad;
                podes_atacar = true;
                boton_aceptar.classList.remove("boton_culdown");
                boton_negar.classList.add("boton_culdown");

                if (daño_recibido > 0) {
                    salud_barra.value = salud_barra.value - daño_recibido;
                }

            }


        } else if(player == true && escenario == 18 && aldeano == false){

            llave_mapache = false;

            salud_del_enemigo.classList.remove("salud_del_enemigo_mostrar");
            
            document.getElementById("vidaIc").src=`iconos/lineaTemporal/mapa.png`;

            ultimoEvento.innerHTML = "Vez un mapa que esta clavado en un arbol, puedes intentar seguir cualquiera de sus 2 rutas..";
        }

    });
}







/*Crear personaje*/
let estadisticas = false;

let adn2 = document.getElementById("adn");
adn2.addEventListener("click",mostrarAdn);

function mostrarAdn(){

    ruidoDeTap.play();

    if(player == false && escenario >= 11){

        let nombreDeTuPersonaje = prompt("Como se llamará tu personaje?");

        for (let index_1 = 0; nombreDeTuPersonaje == null || nombreDeTuPersonaje == "" || nombreDeTuPersonaje.length < 3 || nombreDeTuPersonaje.length > 9 ;) {

            nombreDeTuPersonaje = prompt("Como se llamará tu personaje?");
          
    }

        alert(`${nombreDeTuPersonaje} pudo encarnar su alma en las tierras de ${nombreDeTuMundo0}. De ahora en adelante se forjara tu camino.`)

        escenario = 11;
        estadisticas = true;
        player = true
} else{}
}

/*Player hud*/

let modal_player = document.querySelector(".modal_padre_player");

let closeModal_player = document.querySelector(".boton_close_player");

closeModal_player.addEventListener("click",cerrarEstadisticass);

let estadistica = document.querySelector(".Adn");
estadistica.addEventListener("click",abrirEstadisticas);

function abrirEstadisticas(){

    ruidoDeTap.play();

    if(estadisticas == true){
    modal_player.classList.add("modal--show_player");

 nivel_inner.innerHTML = nivel;
 agilidad_inner.innerHTML = agilidad;
 intelecto_inner.innerHTML = intelecto;
 fuerza_inner.innerHTML = fuerza1;

}else{}
}

function cerrarEstadisticass(){

    ruidoDeTap.play();

    modal_player.classList.remove("modal--show_player");
}


/* COMER Y SALUD DEL PJ */
let barra_de_salud = document.querySelector(".salud");
let hambre_barra = document.querySelector(".hambre");
/* Elejir personaje */


let salud_barra = document.querySelector(".salud");
let div_de_salud = document.querySelector(".salud_div");

let hambre = document.querySelector(".hambre");
let div_de_hambre = document.querySelector(".hambre_div");
let mostrarInfoDelPlayer = document.querySelector(".infoDelPlayer");
let mostrarInfoDelPlayer_texto = document.querySelector(".infoDelPlayer_texto");
let botonClosePlayerSi = document.querySelector(".boton_close_player");
let mina = document.querySelector(".mina");

let personaje_chico = document.querySelector(".personaje_chico");
personaje_chico.addEventListener("click",elejirChico);

let personaje_chica = document.querySelector(".personaje_chica");
personaje_chica.addEventListener("click",elejirChica);

function elejirChica(){

    ruidoDeTap.play();

    salud_barra.classList.add("salud_mostrar");
    div_de_salud.classList.add("salud_div_mostrar");
    hambre.classList.add("hambre_mostrar");
    div_de_hambre.classList.add("hambre_div_mostrar");
    personaje_chica.classList.add("eligio_chica");
    personaje_chico.classList.remove("characters");
    personaje_chico.classList.add("character_no");
    mostrarInfoDelPlayer.classList.add("infoDelPlayer_si");
    mostrarInfoDelPlayer_texto.classList.add("infoDelPlayer_texto_si");
    botonClosePlayerSi.classList.add("boton_close_player_si");
    mina.classList.add("mina_si");

    if(agilidad == 1){
        agilidad = agilidad + 2;
        agilidad_inner.innerHTML = agilidad;
    }
    
    setInterval(tener_hambre_6s, 60000);

    function tener_hambre_6s(){

        if(hambre_barra.value > 0){

            hambre_barra.value = hambre_barra.value -5;
         
        } else if(hambre_barra.value == 0 && barra_de_salud.value > 0) {

            barra_de_salud.value = barra_de_salud.value -10;

        } else{
            alert(`Haz muerto, conseguiste una puntuacion de ${nivel * 7 + 155}`);
        }
    }

}

function elejirChico(){

    ruidoDeTap.play();

    salud_barra.classList.add("salud_mostrar");
    div_de_salud.classList.add("salud_div_mostrar");
    hambre.classList.add("hambre_mostrar");
    div_de_hambre.classList.add("hambre_div_mostrar");
    personaje_chico.classList.add("eligio_chico");
    personaje_chica.classList.remove("characters");
    personaje_chica.classList.add("character_no");
    mostrarInfoDelPlayer.classList.add("infoDelPlayer_si");
    mostrarInfoDelPlayer_texto.classList.add("infoDelPlayer_texto_si");
    botonClosePlayerSi.classList.add("boton_close_player_si");
    mina.classList.add("mina_si");

    if(fuerza1 == 1){
        fuerza1 = fuerza1 + 2;
        fuerza_inner.innerHTML = fuerza1;
    }
   

    setInterval(tener_hambre_6s, 60000);

    function tener_hambre_6s(){

        if(hambre_barra.value > 0){

            hambre_barra.value = hambre_barra.value -5;
         
        } else if(hambre_barra.value == 0 && barra_de_salud.value > 0) {

            barra_de_salud.value = barra_de_salud.value -10;

        } else{
            alert(`Haz muerto, conseguiste una puntuacion de ${nivel * 7 + 155}`);
        }
    }
 }


/* IR A LA MINA */

let entrada_a_la_mina = document.querySelector(".mina");
entrada_a_la_mina.addEventListener("click",entrar_a_la_mina);

let puede_entrar_a_la_mina = document.querySelector(".mina_no_href");


function entrar_a_la_mina(){

    ruidoDeTap.play();

    if(puede_minar == true){
        puede_entrar_a_la_mina.classList.add("mina_si_href");
    }
}






/*Tienda*/

let modal_1 = document.querySelector(".modal_padre_tienda");

let closeModal_1 = document.querySelector(".boton_close_tienda")

closeModal_1.addEventListener("click",cerrarTienda);

let tienda_1 = document.querySelector(".tiendaIcono");
tienda_1.addEventListener("click",abrirTienda);

function abrirTienda(){

    ruidoDeTap.play();

    modal_1.classList.add("modal--show_1");
}

function cerrarTienda(){

    ruidoDeTap.play();

    modal_1.classList.remove("modal--show_1");
}


/* Comprar cofres */
/* Madera */



let itemDeLaPluma = document.querySelector(".itemDelInventario_2");
let itemDelArco = document.querySelector(".itemDelInventario_3");
let itemDePicoPrimitivo = document.querySelector(".itemDelInventario_4");
let itemDebayas = document.querySelector(".itemDelInventario_bayas")
let itemGuanteleteDeCuero = document.querySelector(".itemDelInventario_guanteleteDeCuero");


let statsDeCofreDeMadera = document.querySelector(".AAA");
let fontsizeDelP = document.querySelector(".a1px");
let botonBuild = document.querySelector(".comprarCofreDeMadera1");

let cofreDeMadera = document.getElementById("itemMadera");
cofreDeMadera.addEventListener("click",mostrarDatosDelItem);

function mostrarDatosDelItem(){

    ruidoDeTap.play();

    if(cofreDeMadera.classList.contains("itemDeLaTienda_madera")){
        cofreDeMadera.classList.remove("itemDeLaTienda_madera");
        statsDeCofreDeMadera.classList.remove("EstatsDelCofreDeMadera");
        fontsizeDelP.classList.remove("a2px");
        botonBuild.classList.remove("comprarCofreDeMadera");

    }  else{
        cofreDeMadera.classList.add("itemDeLaTienda_madera");
        statsDeCofreDeMadera.classList.add("EstatsDelCofreDeMadera");
        fontsizeDelP.classList.add("a2px");
        botonBuild.classList.add("comprarCofreDeMadera");
    }
}

botonBuild.addEventListener("click",comprarCofreDeMadera);

function comprarCofreDeMadera(){
    if(monedas >= 25 && player == true){

        ruidoDeComprar.play();

        monedas = monedas - 25;
        moneda.innerHTML = monedas;

        let numeroRandom1 = Math.random()*4;
            numeroRandom1 = Math.floor(numeroRandom1);
            numeroRandom1 = numeroRandom1 + 1;

            if(numeroRandom1 == 1 && plumaNegra == false){
                plumaNegra = true;
                alert(`Felicitaciones! Haz conseguido "Pluma Negra", aumenta tu agilidad!`);
                itemDeLaPluma.classList.add("itemDelInventario_mostrar");
                agilidad = agilidad +5;
                agilidad_inner.innerHTML = agilidad;

            } else if(numeroRandom1 == 2 && arco1 == false){
                arco1 = true;
                itemDelArco.classList.add("itemDelInventario_mostrar");

                alert(`Felicitaciones! Haz conseguido "Arco de madera", aumenta tu nivel y tu intelecto`);
                nivel = nivel + 1;
                intelecto = intelecto + 2;
                nivel_inner.innerHTML = nivel;
                intelecto_inner.innerHTML = intelecto;

            } else if(numeroRandom1 == 3 && guantelete == false){
                guantelete = true;
                alert(`Felicitaciones! Haz conseguido "Guantelete de cuero", aumenta tu fuerza y tu agilidad`);

                nivel = nivel + 1;
                agilidad = agilidad + 2;
                fuerza1 = fuerza1 + 2;
                nivel_inner.innerHTML = nivel;
                agilidad_inner.innerHTML = agilidad;
                fuerza_inner.innerHTML = fuerza1;

                itemGuanteleteDeCuero.classList.add("itemDelInventario_mostrar");


            } else if(numeroRandom1 == 4 && pico_primitivo == false){
                pico_primitivo = true;
                puede_minar = true;
                puede_entrar_a_la_mina.classList.add("mina_si_href");
                itemDePicoPrimitivo.classList.add("itemDelInventario_mostrar");

                alert(`Felicitaciones! Haz conseguido "Pico primitivo", Ahora puedes minar!`);
            }else {
                bayas = bayas + 1;
                itemDebayas.classList.add("itemDelInventario_mostrar");
                alert(`Felicitaciones! Haz conseguido unas bayas!`);
            }

    } else if(monedas >= 25 && player == false){
        alert(`Primero debes crear tu personaje!`);
    } else{
        alert(`Fondos insuficientes, faltan ${25 - monedas} Infinite coins`);
    }
}

/* COMER (BAYAS)*/

itemDebayas.addEventListener("click",comer_bayas);

function comer_bayas(){

    if(hambre_barra.value <= 75){

        bayas = bayas -1;
        hambre_barra.value = hambre_barra.value +25;
        ruidoDeComer_bayas.play();

    } else{
        alert("Aun no tienes suficiente hambre");
    }

    if (bayas == 0) {
        itemDebayas.classList.remove("itemDelInventario_mostrar");
    }

}

/*LOGROS (Que en realidad es Setings)*/

let modal_2 = document.querySelector(".modal_padre_logros");

let closeModal_2 = document.querySelector(".boton_close_logros")

closeModal_2.addEventListener("click",cerrarLogros);

let tienda_2 = document.querySelector(".logrosIcono");
tienda_2.addEventListener("click",abrirLogros);

function abrirLogros(){

    ruidoDeTap.play();

    modal_2.classList.add("modal--show_2");
}

function cerrarLogros(){

    ruidoDeTap.play();

    modal_2.classList.remove("modal--show_2");
}

/*Inventario*/

let brazalete_nordico_inner = document.querySelector(".itemDelInventario_8"); 
let pendiente_de_zafiro_inner = document.querySelector(".itemDelInventario_7");
let collar_de_tiburon_inner = document.querySelector(".itemDelInventario_5");
let lujo_del_rey_inner = document.querySelector(".itemDelInventario_6");


let itemDelCorreo = document.querySelector(".itemDelInventario_1");

let modal = document.querySelector(".modal_padre_inventario");

let bag = document.querySelector(".bag");
bag.addEventListener("click",abrirInventario);

function abrirInventario(){

    ruidoDeAbrirMochila.play();

    if(correo == true){
        itemDelCorreo.classList.add("itemDelInventario_mostrar");
    }
    modal.classList.add("modal--show");

    let brazalete_nordico = localStorage.getItem("item_brazalete");
    let pendiente_de_zafiro = localStorage.getItem("item_pendiente");
    let collar_de_tiburon = localStorage.getItem("item_collar_tiburon");
    let lujo_delRey = localStorage.getItem("item_lujo_rey");


    if(brazalete_nordico == "1"){
        brazalete_nordico_inner.classList.add("itemDelInventario_mostrar")
        fuerza1 = fuerza1 + 10;
        nivel = nivel + 5;
        intelecto = intelecto + 1;
    } else{}

    if(pendiente_de_zafiro == "1"){
        pendiente_de_zafiro_inner.classList.add("itemDelInventario_mostrar")
        nivel = nivel + 5;
        intelecto = intelecto + 10;
    } else{}

    if(collar_de_tiburon == "1"){
        collar_de_tiburon_inner.classList.add("itemDelInventario_mostrar")
        nivel = nivel + 5;
        agilidad = agilidad + 11;
    } else{}

    
    if(lujo_delRey == "1"){
        lujo_del_rey_inner.classList.add("itemDelInventario_mostrar")
        intelecto = intelecto + 1;
        fuerza1 = fuerza1 + 1;
        agilidad = agilidad + 1;
        barra_de_salud.max = barra_de_salud.max + 20;
        barra_de_salud.value = barra_de_salud.value + 20;
    } else{}
}



let closeModal = document.querySelector(".boton_close_inventario");
closeModal.addEventListener("click",cerrarInventario);

function cerrarInventario(){

    ruidoDeTap.play();

    modal.classList.remove("modal--show");
}

/*Rewards of the Daily chest*/

function OpenDailyChest(){

    ruidoDeTap.play();

    let numeroRandom = Math.random()*100;
    numeroRandom = Math.floor(numeroRandom);
    numeroRandom = numeroRandom + 1;

    if (numeroRandom == 99){
        espada_daily = true;
        espada_daily_inner = document.querySelector(".itemDelInventario_9")
        espada_daily_inner.classList.add("itemDelInventario_mostrar")
        alert(`Felicitaciones conseguiste "Espada de acero" con una probabilidad del 1%!`);
    } else if(numeroRandom >= 70){

        alert(`Felicitaciones ganaste ${numeroRandom - 15} Infinite coins!`);

        monedas = monedas + numeroRandom - 15;
    
        moneda.innerHTML = monedas;

    } else{
        alert(`Felicitaciones ganaste ${numeroRandom} Infinite coins!`);

        monedas = monedas + numeroRandom;
    
        moneda.innerHTML = monedas;
    }
}

/*Funcion del CountDown del Daily chest*/

let segundoInicio = 3399;

function Temporizador(){
    document.getElementById(`countdown`).innerHTML = segundoInicio;

    if (segundoInicio == 0){
        alert("Ya puedes abrir tu cofre!");
        segundoInicio = segundoInicio +5399;
        llaveDelCofre = llaveDelCofre +1;
    } else{
        segundoInicio = segundoInicio -1;
        setTimeout(Temporizador, 1000);
    }
}

/*Abrir cofre diario*/

let abrirCofreDiario = document.getElementById("cofreDiario");
abrirCofreDiario.addEventListener("click",abrirElCofre);

function abrirElCofre(){

ruidoDeTap.play();

    if (llaveDelCofre >= 1){
        llaveDelCofre = llaveDelCofre -1;
        OpenDailyChest();
    } else{
        alert(`No puedes abrir el cofre diario aun!`)
    }
}

/*10 Temporizadores*/

Temporizador();
Temporizador();
Temporizador();
Temporizador();
Temporizador();


/*SoundTrack*/

let playSoundtrack = document.getElementById("soundtrack");

let mute = document.getElementById("mute");
mute.addEventListener("click",playAndMutedSong);

mute = true;

function playAndMutedSong(){

ruidoDeTap.play();

    if(mute == true){
        playSoundtrack.play();
        mute = false;
    }else{
        playSoundtrack.pause();
        mute = true;
    }
}



/* Local Storage*/


/* Guardar */

let boton_de_guardar = document.querySelector(".contenedorDel_Guardar");

boton_de_guardar.addEventListener("click",guardar_la_partida);

function guardar_la_partida(){

ruidoDeTap.play();

 if(monedas == 0){

 } else{
    let monedas_de_la_mina = localStorage.getItem("dineroDeLaMina");
    
    monedas = monedas + Number(monedas_de_la_mina);

    monedas_de_la_mina = 0;

    localStorage.setItem("dineroDeLaMina",monedas_de_la_mina);

    
    localStorage.setItem("monedas_guardadas", monedas);
    

    monedas = 0;
    moneda.innerHTML = monedas;
 }
    
}



/* Cargar */

let boton_de_cargar = document.querySelector(".contenedorDel_Cargar");

boton_de_cargar.addEventListener("click",cargar_la_partida);

function cargar_la_partida(){

ruidoDeTap.play();

let monedas_cargadas = localStorage.getItem("monedas_guardadas", monedas);

 if(monedas_cargadas == "0"){

 } else {

    let cargar_tus_monedas = localStorage.getItem("monedas_guardadas")

    monedas = Number(cargar_tus_monedas);

    moneda.innerHTML = monedas;

    cargar_tus_monedas = 0;

    localStorage.setItem("monedas_guardadas", cargar_tus_monedas);
 }
}
