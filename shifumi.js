let choix = ["pierre" , "feuille" , "ciseau"];
let ordi_choix = -1;

function choix_ordi(){
    ordi_choix = Math.floor(Math.random()*3)
}


function egaliter(){
    document.getElementById("resultat").innerHTML = "Egalite" + "le joueur a joué " + choix_joueur + "le bot à jouer " + choix[choix_ordi] ;
}

function defaite(){
    document.getElementById("resultat").innerHTML = "defaite" + "le joueur a joué " + choix_joueur + "le bot à jouer " + choix[choix_ordi] ;
}

function gagne(){
    document.getElementById("resultat").innerHTML = "gagner" + "le joueur a joué " + choix_joueur + "le bot à jouer " + choix[choix_ordi] ;
}

function jouer(choix_joueur){
    choix_ordi();
    if(choix_joueur == choix[choix_ordi]){
       egaliter();
    }
    if(choix_joueur == "pierre" && choix[choix_ordi] == "feuille" || choix_joueur == "feuille" && choix[choix_ordi] == "ciseau" || choix_joueur == "ciseau" && choix[choix_ordi] == "pierre"  ){
        defaite();
    }
    if(choix_joueur == "pierre" && choix[choix_ordi] == "ciseau" || choix_joueur == "feuille" && choix[choix_ordi] == "pierre" || choix_joueur == "ciseau" && choix[choix_ordi] == "feuille"  ){
        gagne();
    }

}