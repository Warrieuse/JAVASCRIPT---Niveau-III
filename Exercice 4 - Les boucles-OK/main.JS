/*# Énoncé 
1) Ecrire une procédure qui permet 
d'afficher la table de multiplication d'un nombre entier n :
La valeur de n sera demandée à l’utilisateur via une boite de 
dialogue et sera passée comme argument à la procédure.
2) En cas de saisie d'un nombre non entier le script boucle et 
redemande à l'utilisateur de saisir une nouvelle valeur.
3) Utiliser les boucles imbriquées pour afficher l'ensemble des 
tables de multiplication pour i <= n. Par exemple si l'utilisateur
 saisit le nombre 4, on affiche alors les tables de multiplication 
 des nombres 1, puis 2, puis 2 et enfin 4.

Améliorations :
L'affichage de la table de multiplication résultat pour être 
directement réalisé à partir de code HTML (un tableau) généré par 
le script.*/

/*************************************************************************/
let userNumber;// ma variable dont la valeur seras definit par la function mais qui me serviras pour plus tard

function fAskWholeNumber() {
     userNumber = prompt("Veuillez entrer un nombre entier : ", "Un nombre sans virgule et sans décimale.");       
    if ( Number.isInteger(parseFloat(userNumber))) {
        //condition le nbr entré et un entier ajout parseFloat car la demande se fait par un prompt 
        //il faut lui demander de convertir les chaines de caractères en nbr sinon la condition de marche pas.
        return;
    } else {
        fAskWholeNumber();
    } 
};

function fAddition() {
    for (let x = 1; x <= userNumber; x++) {
        document.write("<h4>Table d'addition n° "+x+"</h4>");
        document.write("<table border>")
            for(let i=1;i<=10;i++){
                document.write("<tr>");
                document.write("<td>"+x+" + "+i+" =</td>");
                document.write("<td>"+(+x+i)+"</td>");// ajout + avant userNumber sinon laddition ne ce 
                //fait pas correctement c'est a dire 1+1=11 et non 2.
                document.write("</tr>");
        }   
        document.write("<table>");
       }
    }

function fSubstraction() {
    for (let x = 1; x <= userNumber; x++) {
    document.write("<h4>Table de soustraction n° "+x+"</h4>");
    document.write("<table border>")
    for(let i=1;i<=10;i++){
        document.write("<tr>");
        document.write("<td>"+x+" - "+i+" =</td>");
        document.write("<td>"+(x-i)+"</td>");
        document.write("</tr>");
    }   
    document.write("<table>");
    }
    
}

function fMultiplication() {
    for (let x = 1; x <= userNumber; x++) {
    document.write("<h4>Table de multiplication n° "+x+"</h4>");
    document.write("<table border>")
    for(let i=1;i<=10;i++){
        document.write("<tr>");
        document.write("<td>"+x+" x "+i+" =</td>");
        document.write("<td>"+(x*i)+"</td>");
        document.write("</tr>");
    }   
    document.write("<table>");
    }
}

function fDivision() {
    for (let x = 1; x <= userNumber; x++) {
    document.write("<h4>Table de multiplication n° "+x+"</h4>");
    document.write("<table border>")
    for(let i=1;i<=10;i++){
        document.write("<tr>");
        document.write("<td>"+x+" / "+i+" =</td>");
        document.write("<td>"+(x/i)+"</td>");
        document.write("</tr>");
    }   
    document.write("<table>");
    }
}






