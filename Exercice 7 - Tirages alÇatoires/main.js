/*
# Énoncé
Ecrire un script composé des fonctions suivantes :
1) Une fonction qui ajoute un nom saisi par l'utilisateur via une
 boite de dialogue dans un tableau. Cette fonction sera appelée au 
 clic sur un bouton nommé "Ajouter nom".
2) Une fonction qui renvoie au hasard le nom gagnant et qui sera 
exécutée lorsque l'utilisateur clique sur le  bouton "tirage au 
sort". Le nom du gagnant sera affiché dans une boite de dialogue.

# Indication
Utiliser la fonction Math.random() qui fournit un nombre réel entre
 0 et 0,999 et trouver comment obtenir un nombre strictement inclus
  dans l'intervalle 0 .. nombre_d'éléments_dans_tableau.

Utiliser aussi la fonction push() pour insérer un élément dans un
 tableau.
 */
let vAddNameButton;
let vArrayName = ["Aurélie", "Julie", "Marie", "Stéphanie", "Robert"];
let vNameWinner;


    function fAddName() {
        vAddNameButton = prompt("entrez votre nom :", "Marine");
        vArrayName.push(vAddNameButton);//push(ajoute un élément au tableau)
         console.log(vArrayName.length);// nbr element ds tableau
         return vArrayName.length;
    };

    function fDrawingOfLot() {
        vNameWinner = vArrayName[Math.floor(Math.random() * vArrayName.length)];
                   // vMontableau[choix nbr aleatoire entier par rapport quantite element tableau] 
        console.log(vWinner);
        alert("Le gagnant est : "+ vNameWinner);
    };