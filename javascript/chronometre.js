var heure = 0 ;
var minute = 0 ;
var seconde = 0;
var milliseconde = 0;
var t;

var load = document.getElementById('start');
var times = document.getElementsByTagName('span');

        
        

function lancement(){

    milliseconde = milliseconde + 1;

    if (milliseconde==59) {
        milliseconde = 1;
        seconde = seconde + 1;
    }

    if (seconde == 60) {
        seconde = 0;
        minute = minute + 1;
    }

    if (minute == 60) {
        minute = 0;
        heure = heure + 1;
    }

    if (heure == 24) {
        heure = 0;
    }

    //insertions des valeurs;

    times[0].textContent = heure + 'h';
    times[1].textContent = minute + 'm';
    times[2].textContent = seconde + 's';
    times[3].innerHTML = milliseconde + 'ms';
};


//quand tu clique sur le bouton demarrer;

load.addEventListener('click',()=>{
    t = setInterval(lancement,100);
});

//quand tu cliques sur le bouton stop;

var stop = document.getElementById("stop");

stop.addEventListener("click",()=>{
    clearInterval(t);
})

//quand tu cliques sur le bouton effacer;

var effacer = document.getElementById("delete");

effacer.addEventListener("click",()=>{
    milliseconde = 0;
    seconde = 0;
    minute = 0;
    heure = 0;
    
    times[0].textContent = heure + "0 h :";
    times[1].textContent = minute + "0 min :";
    times[2].textContent = seconde + "0 sec :";
    times[3].textContent = milliseconde + "0 ms";
    })