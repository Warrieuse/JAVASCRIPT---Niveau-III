
let vDateToday = new Date ();
let vBirthdayUser;
let vBirthdayUserFormatU;
let vBirthdayUserMilliseconde;
let vDateTodayMilliseconde;
let vMillisecondesBeforeBirthday;
let vSecondeBeforeBirthday;
let vMinuteBeforeBirthday;
let vHoursBeforeBirthday;
let vDaysBeforeBirthday;
let vDaysBeforeBirthdayString;

document.getElementById("timetoday").innerHTML = vDateToday;



function fDAyRemmaining() {
    vBirthdayUser = document.getElementById("buttonbirthday").value;
    vBirthdayUserFormatU = new Date(vBirthdayUser); // tranforme même format que vDateToday
    
    console.log(vBirthdayUserFormatU);//test

    document.getElementById("Birthdayuser").innerHTML = "Mon prochain anniversaire est le : " + vBirthdayUserFormatU;
    
    vBirthdayUserMilliseconde = vBirthdayUserFormatU.getTime(); // transforme en millisecondes
    vDateTodayMilliseconde = vDateToday.getTime();
    //millisecondes ecart
    vMillisecondesBeforeBirthday =(vBirthdayUserMilliseconde-vDateTodayMilliseconde);
    // conversion secondes
    vSecondeBeforeBirthday = (vMillisecondesBeforeBirthday/1000);
    // minutes
    vMinuteBeforeBirthday = (vSecondeBeforeBirthday/60);
    //heures
    vHoursBeforeBirthday = (vMinuteBeforeBirthday/60);
    //et jours mais on arrondies le nombre 
    vDaysBeforeBirthday = Math.round(vHoursBeforeBirthday/24);
    console.log(vDaysBeforeBirthday);
    // transforme la valeur en chaines de caractère
    vDaysBeforeBirthdayString = vDaysBeforeBirthday.toString();
    console.log(vDaysBeforeBirthdayString);
    console.log(vDaysBeforeBirthdayString ==="348");

    // on affiche le resultat
    document.getElementById('days_before_birthday').innerHTML= "Il vous reste " + vDaysBeforeBirthdayString + " jours avant votre prochain anniversaire.";


};