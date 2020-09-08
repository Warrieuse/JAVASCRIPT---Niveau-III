/* # Exercice 6
Créer un chronomètre en javascript

# Objectif 
Appeler une fonction d'une manière répétitive en utilisant
 la fonction setInterval().


Créer un chronomètre composé d'un afficheur et 3 boutons :
 un bouton "start" pour lancer le chronomètre, 
 un bouton "stop" pour l'arrêter 
 et un bouton "reset" pour le remettre à zéro.

Voir le fichier resultat.png pour avoir un aperçu du résultat attendu. */
let vSpan = document.getElementsByTagName("SPAN");//cible tout mes spans pour les cibler plus tard afin d'ecrire et de changer leur contenu HTML
let vHeure = vSpan[0]; //seras utile pour ecrire un nouveau contenu
let vMinute = vSpan[1];
let vSeconde = vSpan[2];
let vMiliseconde = vSpan[3];

let vHeure0 = 0;// le chronometre est à 0
let vMinute0 = 0;
let vSeconde0 = 0;
let vMiliseconde0 = 0;

let vStart;// elle contiendras mon setInterval qui executeras la fonction
//pour faire en sorte que le temps défile



function start() {
    vStart = setInterval(function passingTime() {
        vMiliseconde0 += 1;
        if (vMiliseconde0 == 10) {//dès qu'on arrive à 10 milisecondes
            vSeconde0 += 1;// on ajoute 1 à seconde
            vMiliseconde0 = 0;//et on revient à zero pour Milisecondes
        }       // et ainsie de suite
        if (vSeconde0 == 60) {
            vMinute0 += 1;
            vSeconde0 = 0;
        }
        if (vMinute0 == 60) {
            vHeure0 += 1;
            vMinute0 = 0;
        }
        if (vHeure0 == 12) {
            vMinute0 = 0;
        }
    vHeure.innerHTML= vHeure0 +"h";//changer l'affichage de chronomètre
    vMinute.innerHTML= vMinute0 +"min";
    vSeconde.innerHTML= vSeconde0 +"s";
    vMiliseconde.innerHTML= vMiliseconde0 +"ms";        
    },100); //100 car 1000 = 1s et donc nous avons les milisecondes 
}

function stop(){
    clearInterval(vStart);// on stop la variable qui contient l'ecoulement du temps
};

function reset() {// on remet tout à zero
    let vHeure0 = 0;
    let vMinute0 = 0;
    let vSeconde0 = 0;
    let vMiliseconde0 = 0;

    vHeure.innerHTML= vHeure0 +"h";// et on l'affiche.
    vMinute.innerHTML= vMinute0 +"min";
    vSeconde.innerHTML= vSeconde0 +"s";
    vMiliseconde.innerHTML= vMiliseconde0 +"ms"; 
};
