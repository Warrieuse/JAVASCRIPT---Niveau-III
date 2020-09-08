/* Le but de cet exercice est simple : vous demanderez à 
l'utilisateur son âge et en fonction de sa réponse vous afficherez
 à travers une popup un message personnalisé.

Consignes :
Vous ferez ceci en javascript vanilla.
Vous commencerez par demander l'âge de l'utilisateur à travers une
 popup de saisie
En fonction de sa réponse vous afficherez les messages suivants :
Si l'utilisateur est mineur --> "Vous n'avez pas le droit de venir 
sur ce site"
    Si l'utilisateur a entre 18 et 50 ans --> "Vous êtes majeur mais
 pas encore senior, la vie est belle"
    Si l'utilisateur a entre 51 et 60 ans --> "Vous êtes senior mais 
pas encore retraité"
    Si l'utilisateur a plus de 60 ans --> "Vous êtes retraité, profitez
 de votre temps libre !"

Améliorations :
Que se passe-t-il si vous saisissez autre chose qu'un nombre ? 
Ou une valeur négative ?
Améliorez le contrôle de la saisie ainsi que les conditions de 
tests pour fiabiliser le code. */

let vAgePopup = Number(prompt("Quel age avez-vous ?", "34"));
let VAgeConfirm = vAgePopup; 
      
    if ( Number.isInteger(parseFloat(VAgeConfirm))) {
        if (vAgePopup < 18) {
            alert("Vous n'avez pas le droit de venir sur ce site");
        } else if ((vAgePopup >= 18) && (vAgePopup <= 50)) {
            alert("Vous êtes majeur mais pas encore senior, la vie est belle");
        } else if ((vAgePopup > 51) && (vAgePopup <= 60)) {
            alert("Vous êtes senior mais pas encore retraité");
        } else if (vAgePopup > 60) {
            alert("Vous êtes retraité, profitez de votre temps libre !");
        }
    } else {
        alert("Erreur de saisie");
        let ok = confirm("Souhaitez-vous réessayer ?");
            if(ok==true) {
                alert("Raffraichissez la page web ou faite votre demande via le formulaire !!");
            } else {
            alert("Au revoir, à bientot !");
        }
        
    }; 

function fUserAgeValidation() {
    let vAgeUser = document.getElementById("ageUser").value;
    console.log(vAgeUser);
    if ((vAgeUser < 18) && (vAgeUser >= 1))  {
        alert("Vous n'avez pas le droit de venir sur ce site");
        } else if ((vAgeUser >= 18) && (vAgeUser <= 50)) {
        alert("Vous êtes majeur mais pas encore senior, la vie est belle");
        } else if ((vAgeUser > 51) && (vAgeUser <= 60)) {
        alert("Vous êtes senior mais pas encore retraité");
        } else if (vAgeUser > 60) {
        alert("Vous êtes retraité, profitez de votre temps libre !");
        } else {
            fUserAgeValidation();
    }
    
};
    