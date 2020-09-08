/*# Objectif
Manipuler les chaines de caractères.

# Travail à faire
1) Ecrire une fonction qui permet de tester si une chaîne de caractère passée 
en paramètre commence par une lettre majuscule ou minuscule positionnée entre 'a' et 'd'.
2) Ecrire une fonction qui renvoie true lorsqu'une chaîne contient un seul 
caractère '@' sinon renvoie false.
3) Ecrire une fonction qui renvoie true lorsqu'une chaîne contient au moins un 
chiffre sinon renvoie false.
4) Ecrire une fonction qui remplace les chiffres par le caractère '*'
5) Créer un script qui va utiliser (à votre convenance) ces fonctions. 

Pensez bien à écrire des tests pour chaque questions afin de valider votre 
travail.
Si vous n'arrivez pas à tout faire du premier coup, ce n'est pas grave. Vous 
pourrez soit y revenir plus tard, soit vous faire aider par vos camarades.

Exemple d’exécution : 
Voir screenshot fourni.*/

/******************************************************************************************************/
//1)
let tittle = document.querySelector("section > h3").textContent;//recupération text
let firtsLettre = tittle.charAt(0);//cible 1er lettre
console.log(firtsLettre)// parfois utile
let vCondition = ['a', 'b', 'c', 'd', 'A', 'B', 'C', 'D']//condition pour function AouD

function AouD() {
    if (firtsLettre = vCondition) {//si condition true
        document.querySelector("section > p").innerHTML = "Bonjour, la chaine est valide car elle commence par une lettre entre a et d";
    } else {// si contition false
        document.querySelector("section > p").innerHTML = "Bonjour, la chaine n'est pas valide car elle ne commence par une lettre entre a et d";
    }
};
//pas d'appel de function car onclick dans HTML.
/******************************************************************************************************/
//2)
let vEmail = document.getElementById("partie2").querySelector("h3").innerHTML;//recuperation texte
let vButtonEmail = document.getElementById('partie2').getElementsByTagName('BUTTON');//recupération BTN attention TagName =Tableau de 1 BTN

function fVerifierMail(vEmail) {
    if ((vEmail.indexOf("@") >= 0) && (vEmail.indexOf(".") >= 0)) {//si présence dans texte de @ et .
        document.getElementById('partie2').querySelector('p').innerHTML = 'L\'Email donné est valide';
        return true;
    } else {// si aucun des 2
        document.getElementById('partie2').querySelector('p').innerHTML = 'L\'Email donné n\'est pas valide';
        alert("Mail invalide !");
        return false;
    }
}
vButtonEmail[0].addEventListener('click', function () { fVerifierMail(vEmail) }
); //action au clic de BTN [0] car tableau 

/******************************************************************************************************/
//3)
let vText = document.getElementById("partie3").querySelector("h3").innerHTML;//recupération texte.
let vBoutonTest = document.getElementById("partie3").getElementsByTagName("BUTTON");// cible BTN

function fREgExp() {// function qui se déclencheras au clic
    if ((/\d/.test(vText))) {// utilisation de RegExp ( /d/ est un metacharacter qui cherche à trouver un chiffre entre 0-9)
       // /\d/ = signifie tout les ciffre de 0 à 9 qu'il peut y avoir dans le string = [0-9] veut dire la ^m chose 
        document.getElementById('partie3').querySelector('p').innerHTML = "Condition validée, le texte suivant contient un ou plusieurs chiffres:  " + vText;
    } else {
        document.getElementById('partie3').querySelector('p').innerHTML = "Condition erronée : Le texte ne contient aucun chiffres.";
    }
};
vBoutonTest[0].addEventListener('click', function () { fREgExp() });// action au clic

/******************************************************************************************************/
//4)
let vTextPartie4 = document.getElementById("partie4").querySelector("h3").innerHTML;//recupération texte.;
let vNumber = /\d/g;//cible les chiffres.
let vTextStar = vTextPartie4.replaceAll(vNumber, '*');
//  je crée une variable qui reprend mon texte et remplace tout les chiffres par des etoiles.
let vButtonStar = document.getElementById("partie4").getElementsByTagName("BUTTON");// cible BTN

function fRemplaceStar(vNumber) {
    if (/\d/.test(vTextPartie4)) { //if true 
        document.getElementById('partie4').querySelector('p').innerHTML = vTextStar;//affiche le text remplacé avec les étoiles
    } else {// sinon false
        document.getElementById('partie4').querySelector('p').style.color="red";//les trois points seront rouge
    }
};

vButtonStar[0].addEventListener('click', function(){fRemplaceStar()});// action au clic