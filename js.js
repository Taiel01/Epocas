"use strict"

/*Inventario*/


let plumaNegra = false;
let arco1 = false;
let llave1 = false;
let pico_primitivo = false;
let espada_daily = false;

let correo = false;

let player = false;

/* Puntos de habilidades */



let nivel = 1;
let nivel_inner = document.querySelector(".nivelDelPlayer");
nivel_inner.innerHTML = nivel;


let salud = 100;
let salud_inner = document.querySelector(".saludDelPlayer");
salud_inner.innerHTML = salud;


let intelecto = 1;
let intelecto_inner = document.querySelector(".intelectoDelPlayer");
intelecto_inner.innerHTML = intelecto;



let fuerza1 = 1;
let fuerza_inner = document.querySelector(".fuerzaDelPlayer");
fuerza_inner.innerHTML = fuerza1;

/* Habilidades */

let puede_minar = false;

/*Economia*/

let puntosDeAdn = 0;

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
    puntosDeAdn = puntosDeAdn + 2001;
    moneda.innerHTML = monedas;
    llaveDelCofre = llaveDelCofre + 10;
} else{
    alert(`Felicitaciones! tu pequeño ecosistema "${nombreDeTuMundo0}" se a creado con exito! Toma las mejores deciciones posibles para no destruirlo, mucha suerte!`)
    monedas = monedas + 0;
}

/* Las variables de los EVENTOS */

let evento1 = `Ha brotado el primer organismo con vida de tu ecosistema "${nombreDeTuMundo0}"! Felicitaciones!`;
let evento2 = "El brote esta comenzando a obtener mas y mas fuerza!";
let evento3 = "Increible! El genoma de tu planta es muy resistente! Se esta.. fucionando con la roca?";
let evento4 = "Parace que este es el inicio de algo inmenso..";
let evento5 = "Una mutacion extraña dio origen a esporas de hongos.. La era fungi ha llegado! Esto es crucial para la descompociocion de materia organica! ";
let evento6 = "Parece que los microorganismos pudieron atravezar una barrera muy importante para la vida compleja!";
let evento7 = `La vida se extiende a gran velocidad por los arlrededores!`;
let evento8 = "Las plantas de tu ecosistema cada vez vienen mas grandes y variadas! Esto es fantastico, porque da lugar a mas variedad de especies competentes en la carrera de la evolucion!";
let evento9 = "El primer brote de trigo nace! Y con el cientos de especies de plantas!";
let evento10 = "Hay una gran variedad de plantas diferentes! Cada vez hay mas, y cada vez nacen mas robustas y con cualidades superiores! estan compitiendo por la supervivencia!";
let evento11 = "Acaba de nacer el primer insecto complejo capaz de volar! Esto supone un gran avance para el desarrollo de la vida.";
let evento12 = "La materia prima por exelencia de la naturaleza da origen, algunas especies de plantas optan por cambiar su tallo por algo mas resistente, los insectos son los causantes de esta evolucion! Llega la madera al ecosistema!";
let evento13 = "El primer arbol en llegar a mas de 5 metros de altura ya es parte del ecosistema! Pronto se formaran poblaciones de arboles y formaran bosques!";
let evento14 = "Empiezan a crecer muchas variedades de frutos en los arbustos y plantas, esto diversifica la dieta de los seres vivos dandole mas nutrientes!";
let evento15 = "Cañas de azucar, bamboo y una gran cantidad de nuevas especies de materias primas abundan por todo el ecosistema! Si tan solo exisitiera algun ser inteligente que las aproveche..";
let evento16 = "La vida se exparse cada vez mas, jovenes bosques nacen dando hospedaje a nuevas poblaciones de seres vivos que buscan un lugar mas comodo donde vivir..";
let evento17 = "Gracias al surgimiento de bosques y a la polinizacion de los insectos, los arboles fueron capaces de mezclar sus genes, ahora hay algunos especimenes que dan diferentes tipos de frutos y frutas!";
let evento18 = "Algo increible esta ocurriendo..!";
let evento19 = "Los anfibios llegaron al ecosistema como por arte de magia!";
let evento20 = "En las profundidades la vida no para de crecer exponencialmente ni un segundo! Esto es fabuloso!";
let evento21 = "Los organismos de las profundidades son cada vez mas complejos, estan en una constante evolucion gigantesca!";
let evento22 = "Miles de diferentes plantas estan en armonia con la tierra, todo esta yendo de maravilla.. Pasaron muchos sucesos hasta ahora, felicitaciones!";
let evento23 = "Muchas especies acuaticas intentan migrar hacia la tierra! La evolucion los llama! Pero se siente algo extraño..";
let evento24 = `El primer desastre natural ocurre en ${nombreDeTuMundo0}! Volcanes estallan, y terremotos sacuden todo el suelo! Esto es malo, muy malo! Muchas especies fabulosas se extinguieron sin dejar rastro, tanto adn que desaparece sin mas..`;
let evento25 = "Grandes formaciones rocosas se establecieron en diferentes lugares despues de los anteriores sucesos catastroficos..";
let evento26 = "La aparicion de montañas da lugar a nuevos entornos de supervivencia para los seres vivos que se atrevan a vivir alli.";
let evento27 = "Los rios comenzaron a fluir por diferentes lugares, hubo muchos cambios increibles! Parece como si los desastres naturales hubieran favorecido el entorno natural! Ahora todo es mas caotico, pero.. Asi es la naturaleza.";
let evento28 = "En los lugares mas frios se comenzo a solidificar el agua formando duras paredes de hielo.. Otro entorno extremo para competir por la supervivencia..";
let evento29 = "La naturaleza lucha increiblemente por su expansion y abunda cada vez mas, la formacion de diferentes biomas es muy notoria a estas alturas.. Esto puede dar lugar a diferentes evoluciones por ende diferentes especies..";
let evento30 = "Algunas formaciones volcanicas dieron con la fusion de metales y con la creacion de diferentes piedras y sedimentos.";
let evento31 = `Algo no normal esta volviendo a suceder en ${nombreDeTuMundo0}!`;
let evento32 = "Parece que varias mutaciones geneticas se estuvieron enredando desde el comienzo! Y gracias a el entorno cambiante se dio una explocion de ADN cambiante!";
let evento33 = "Nace el primer reptil que no necesitó volver al agua para sobrevivir!";
let evento34 = `Llegaron los fabulosos roedores a ${nombreDeTuMundo0}!`;
let evento35 = "De forma inexplicable las especies estan en su auge aevolutivo, esto supone un increible aumento en los diferentes organismos que iran surgiendo! Cada vez mas sofisticados, complejos, adaptables y sobre todo Inteligentes..";
let evento36 = "Hay ya una gran variedad de animales! En particular los marsupiales son los que mas rapido se estan reproduciendo! Esque todavia no tienen depredadores?";
let evento37 = `${nombreDeTuMundo0} esta incubando una gran nueva evolucion, se trata de una fusion entre genes muy particular!`;
let evento38 = `Los primeros "grandes" depredadores llegaron a ${nombreDeTuMundo0}! Esto supone un balance entre las especies`;
let evento39 = `Una rama de la especie mas nueva que ha llegado a ${nombreDeTuMundo0} esta por dar origen! Este tipo de eventos son cruciales para una nueva especie completamente nueva!`;
let evento40 = "Los quiropteros son parte del ecosistema! Ellos son fundamentales para un buen desarrollo del entorno ambiental, pues mantienen en equilibrio la biodiversidad de los ecosistemas que habitan!";
let evento41 = `La variacion prolongada de las moleculas de las especies que fueron surgiendo a lo largo de la historia de ${nombreDeTuMundo0} sigue provocando increibles anomalias!`;
let evento42 = `La primer ave capaz de estar volando mas de "14 horas" sin aterrizar ha nacido!`;
let evento43 = "En el interior de los mamiferos crece una latente llama de incansable vigor!";
let evento44 = "Gracias a los mamiferos surgieron especimenes increiblemente aptos para la supervivencia por exelecia!";
let evento45 = `Todo esta marchando bien! Nunca antes hubo tal cantidad de vida en ${nombreDeTuMundo0}, teniendo en cuenta que esto recien comienza es un gran logro..`;
let evento46 = "El mar y los oceanos son actualmente el motor de la inicializacion de la vida! En estos maravillosos lugares siguen surgiendo criaturas exepcionales y fabulosas! La primer tortuga en vivir mas de 170 años acaba de fallecer! Pero dejo consigo un gran avance en los genomas para la evolucion de su especie!";
let evento47 = `Aunque la vida esta constantemente en su auge no todo son buenas noticias! A cada instante mueren una gran variedad de seres vivos, dejando mucho material genetico preciado olvidado para siempre! Pero de eso se trata la vida! Todos contribuyeron a la historia de!${nombreDeTuMundo0}`;
let evento48 = "";
let evento49 = "";
let evento50 = "";
let evento51 = "";

/* La funcion de los eventos */

function nuevoEvento(evento,icono,milisegundo,infinitecoin,puntosdeADN2){
         setTimeout(()=>{
        let ultimoEvento = document.getElementById("ultimoEvento");
        ultimoEvento.innerHTML = evento;
        let vidaIcono = document.getElementById("vidaIc").src=`iconos/lineaTemporal/${icono}`;
        monedas = monedas +infinitecoin;
        moneda.innerHTML = monedas;
        puntosDeAdn = puntosDeAdn +puntosdeADN2;
    },milisegundo);
}

/* Llamados a los eventos */

nuevoEvento(evento1,"vida1.1.png",11000,1,1);
nuevoEvento(evento2,"vida1.5.png",21000,1,2);
nuevoEvento(evento3,"vida2.01.png",35000,1,3);
nuevoEvento(evento4,"vida2.02.png",47000,1,3);
nuevoEvento(evento5,"vida2.2.png",55000,1,5);
nuevoEvento(evento6,"vida2.003.png",75000,1,10);
nuevoEvento(evento7,"vida2.03.png",85000,1,3);
nuevoEvento(evento8,"vida2.3.png",95000,1,11);
nuevoEvento(evento9,"vida2.4.png",110000,1,12);
nuevoEvento(evento10,"vida2.5.png",125000,1,15);
nuevoEvento(evento11,"vida2.6.png",135000,1,31);
nuevoEvento(evento12,"vida3.1.png",147000,1,11);
nuevoEvento(evento13,"vida3.2.png",158000,1,21);
nuevoEvento(evento14,"vida3.3.png",169000,1,13);
nuevoEvento(evento15,"vida3.04.png",180000,1,11);
nuevoEvento(evento16,"vida3.4.png",193000,1,41);
nuevoEvento(evento17,"vida3.0005.png",205000,1,31);
nuevoEvento(evento18,"vida3.004.png",210000,1,100);
nuevoEvento(evento19,"vida3.05.png",223000,1,51);
nuevoEvento(evento20,"vida3.5.png",234000,1,11);
nuevoEvento(evento21,"vida3.6.png",245000,1,11);
nuevoEvento(evento22,"vida3.7.png",256000,1,1);
nuevoEvento(evento23,"vida3.8.png",267000,1,21);
nuevoEvento(evento24,"vida4.1.png",278000,1,-150);
nuevoEvento(evento25,"vida4.2.png",289000,1,1);
nuevoEvento(evento26,"vida4.3.png",3030000,1,1);
nuevoEvento(evento27,"vida4.4.png",315000,1,1);
nuevoEvento(evento28,"vida4.5.png",326000,1,1);
nuevoEvento(evento29,"vida4.6.png",337000,1,1);
nuevoEvento(evento30,"vida5.png",348000,1,1);
nuevoEvento(evento31,"vida6.png",360000,1,31);
nuevoEvento(evento32,"vida7.png",373000,1,41);
nuevoEvento(evento33,"vida10.01.png",384000,1,51);
nuevoEvento(evento34,"vida10.1.png",395000,1,51);
nuevoEvento(evento35,"vida10.2.png",415000,1,51);
nuevoEvento(evento36,"vida10.6.png",430000,1,51);
nuevoEvento(evento37,"vida10.7.png",445000,1,21);
nuevoEvento(evento38,"vida10.8.png",460000,1,61);
nuevoEvento(evento39,"vida10.9.png",475000,1,111);
nuevoEvento(evento40,"vida11.0.png",500000,1,51);
nuevoEvento(evento41,"vida11.1.png",515000,1,51);
nuevoEvento(evento42,"vida11.2.png",515000,1,21);
nuevoEvento(evento43,"vida11.3.png",530000,1,21);
nuevoEvento(evento44,"vida11.4.png",545000,1,21);
nuevoEvento(evento45,"vida11.5.png",560000,1,21);
nuevoEvento(evento46,"vida11.6.png",575000,1,21);
nuevoEvento(evento47,"vida11.7.png",590000,1,-80);
nuevoEvento(evento48,"vida11.8.png",605000,1,20);
nuevoEvento(evento49,"vida11.9.png",620000,1,20);
nuevoEvento(evento50,"vida11.10.png",635000,1,20);
nuevoEvento(evento51,"vida11.11.png",650000,1,250);

/*Saber cuantos puntos de ADN tenes*/
let estadisticas = false;

let adn2 = document.getElementById("adn");
adn2.addEventListener("click",mostrarAdn);

function mostrarAdn(){
    if(puntosDeAdn >= 2000 && player == false){

        let nombreDeTuPersonaje = prompt("Como se llamará tu personaje?");

        for (let index_1 = 0; nombreDeTuPersonaje == null || nombreDeTuPersonaje == "" || nombreDeTuPersonaje.length < 3 || nombreDeTuPersonaje.length > 9 ;) {

            nombreDeTuPersonaje = prompt("Como se llamará tu personaje?");
          
    }

        alert(`${nombreDeTuPersonaje} pudo encarnar su alma en las tierras de ${nombreDeTuMundo0}. De ahora en adelante se forjara tu camino.`)

        puntosDeAdn = puntosDeAdn - 2000;
        player = true
} else if(puntosDeAdn <= 1999 && player == false){
    alert(`Tienes un total de ${puntosDeAdn} puntos de Adn, y necesitas 2000 para que nazca tu personaje`);
} else{
    estadisticas = true;
}
}

/*Player hud*/

let modal_player = document.querySelector(".modal_padre_player");

let closeModal_player = document.querySelector(".boton_close_player");

closeModal_player.addEventListener("click",cerrarEstadisticass);

let estadistica = document.querySelector(".Adn");
estadistica.addEventListener("click",abrirEstadisticas);

function abrirEstadisticas(){
    if(estadisticas == true){
    modal_player.classList.add("modal--show_player");
}else{}
}

function cerrarEstadisticass(){
    modal_player.classList.remove("modal--show_player");
}

/* Elejir personaje */

let mostrarInfoDelPlayer = document.querySelector(".infoDelPlayer");
let mostrarInfoDelPlayer_texto = document.querySelector(".infoDelPlayer_texto");
let botonClosePlayerSi = document.querySelector(".boton_close_player");
let mina = document.querySelector(".mina");

let personaje_chico = document.querySelector(".personaje_chico");
personaje_chico.addEventListener("click",elejirChico);

let personaje_chica = document.querySelector(".personaje_chica");
personaje_chica.addEventListener("click",elejirChica);

function elejirChica(){
    personaje_chica.classList.add("eligio_chica");
    personaje_chico.classList.remove("characters");
    personaje_chico.classList.add("character_no");
    mostrarInfoDelPlayer.classList.add("infoDelPlayer_si");
    mostrarInfoDelPlayer_texto.classList.add("infoDelPlayer_texto_si");
    botonClosePlayerSi.classList.add("boton_close_player_si");
    mina.classList.add("mina_si");
    intelecto = intelecto + 5;
    intelecto_inner.innerHTML = intelecto;
}

function elejirChico(){
    personaje_chico.classList.add("eligio_chico");
    personaje_chica.classList.remove("characters");
    personaje_chica.classList.add("character_no");
    mostrarInfoDelPlayer.classList.add("infoDelPlayer_si");
    mostrarInfoDelPlayer_texto.classList.add("infoDelPlayer_texto_si");
    botonClosePlayerSi.classList.add("boton_close_player_si");
    mina.classList.add("mina_si");
    fuerza1 = fuerza1 + 5;
    fuerza_inner.innerHTML = fuerza1;
}

/* IR A LA MINA */

let entrada_a_la_mina = document.querySelector(".mina");
entrada_a_la_mina.addEventListener("click",entrar_a_la_mina);

let puede_entrar_a_la_mina = document.querySelector(".mina_no_href");


function entrar_a_la_mina(){
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
    modal_1.classList.add("modal--show_1");
}

function cerrarTienda(){
    modal_1.classList.remove("modal--show_1");
}


/* Comprar cofres */
/* Madera */



let itemDeLaPluma = document.querySelector(".itemDelInventario_2");
let itemDelArco = document.querySelector(".itemDelInventario_3");
let itemDePicoPrimitivo = document.querySelector(".itemDelInventario_4");


let statsDeCofreDeMadera = document.querySelector(".AAA");
let fontsizeDelP = document.querySelector(".a1px");
let botonBuild = document.querySelector(".comprarCofreDeMadera1");

let cofreDeMadera = document.getElementById("itemMadera");
cofreDeMadera.addEventListener("click",mostrarDatosDelItem);

function mostrarDatosDelItem(){
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

        monedas = monedas - 25;
        moneda.innerHTML = monedas;

        let numeroRandom1 = Math.random()*4;
            numeroRandom1 = Math.floor(numeroRandom1);
            numeroRandom1 = numeroRandom1 + 1;

            if(numeroRandom1 == 1 && plumaNegra == false){
                plumaNegra = true;
                alert(`Felicitaciones! Haz conseguido "Pluma Negra", aumenta tu salud y tu fuerza!`);
                itemDeLaPluma.classList.add("itemDelInventario_mostrar");
                salud = salud + 10;
                fuerza1 = fuerza1 + 2;
                salud_inner.innerHTML = salud;
                fuerza_inner.innerHTML = fuerza1;

            } else if(numeroRandom1 == 2 && arco1 == false){
                arco1 = true;
                itemDelArco.classList.add("itemDelInventario_mostrar");

                alert(`Felicitaciones! Haz conseguido "Arco de madera", tu nivel y tu intelecto`);
                nivel = nivel + 1;
                intelecto = intelecto + 2;
                nivel_inner.innerHTML = nivel;
                intelecto_inner.innerHTML = intelecto;

            } else if(numeroRandom1 == 3 && llave1 == false){
                llave1 = true;
                alert(`Felicitaciones! Haz conseguido "Llave de metal"`);

            } else if(numeroRandom1 == 4 && pico_primitivo == false){
                pico_primitivo = true;
                puede_minar = true;
                puede_entrar_a_la_mina.classList.add("mina_si_href");
                itemDePicoPrimitivo.classList.add("itemDelInventario_mostrar");

                alert(`Felicitaciones! Haz conseguido "Pico primitivo", Ahora puedes minar!`);
            }else {
                fuerza1 = fuerza1 + 1;
                fuerza_inner.innerHTML = fuerza1;
                alert(`Felicitaciones! Haz aumentado tu fuerza en 1 punto`);
            }

    } else if(monedas >= 25 && player == false){
        alert(`Primero debes crear tu personaje!`);
    } else{
        alert(`Fondos insuficientes, faltan ${25 - monedas} Infinite coins`);
    }
}

/*LOGROS (Que en realidad es Setings)*/

let modal_2 = document.querySelector(".modal_padre_logros");

let closeModal_2 = document.querySelector(".boton_close_logros")

closeModal_2.addEventListener("click",cerrarLogros);

let tienda_2 = document.querySelector(".logrosIcono");
tienda_2.addEventListener("click",abrirLogros);

function abrirLogros(){
    modal_2.classList.add("modal--show_2");
}

function cerrarLogros(){
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
        fuerza1 = fuerza1 + 20;
        salud = salud + 5;
        nivel = nivel + 5;
        intelecto = intelecto + 5;
    } else{}

    if(pendiente_de_zafiro == "1"){
        pendiente_de_zafiro_inner.classList.add("itemDelInventario_mostrar")
        salud = salud + 10;
        nivel = nivel + 5;
        intelecto = intelecto + 10;
    } else{}

    if(collar_de_tiburon == "1"){
        collar_de_tiburon_inner.classList.add("itemDelInventario_mostrar")
        salud = salud + 25;
        nivel = nivel + 5;
        intelecto = intelecto + 5;
    } else{}

    
    if(lujo_delRey == "1"){
        lujo_del_rey_inner.classList.add("itemDelInventario_mostrar")
        salud = salud + 15;
        nivel = nivel + 10;
        intelecto = intelecto + 5;
        fuerza1 = fuerza1 + 5;
    } else{}
}



let closeModal = document.querySelector(".boton_close_inventario");
closeModal.addEventListener("click",cerrarInventario);

function cerrarInventario(){
    modal.classList.remove("modal--show");
}

/*Rewards of the Daily chest*/

function OpenDailyChest(){
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
