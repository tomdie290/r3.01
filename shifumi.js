let choix = ["pierre" , "feuille" , "ciseau"];
let ordi_choix = -1;
let nb_victoire = 0;
let nb_nul = 0;
let nb_defaite = 0;


function choix_ordi(){
    ordi_choix = Math.floor(Math.random()*3)
}


function egaliter(){

    document.getElementById("nb_victoire").innerHTML = nb_victoire
    document.getElementById("nb_nul").innerHTML = nb_nul
    document.getElementById("nb_defaite").innerHTML = nb_defaite
}

function defaite(){
    
    document.getElementById("nb_victoire").innerHTML = nb_victoire
    document.getElementById("nb_nul").innerHTML = nb_nul
    document.getElementById("nb_defaite").innerHTML = nb_defaite

}

function gagne(){

    document.getElementById("nb_victoire").innerHTML = nb_victoire
    document.getElementById("nb_nul").innerHTML = nb_nul
    document.getElementById("nb_defaite").innerHTML = nb_defaite
}

function jouer(choix_joueur){
    choix_ordi();
    if(choix_joueur == choix[ordi_choix]){
        nb_nul++;
        document.getElementById("resultat").innerHTML = "Egalite " + "le joueur a joué " + choix_joueur + " le bot à jouer " + choix[ordi_choix] ;
       egaliter();
    }
    else if(choix_joueur == "pierre" && choix[ordi_choix] == "feuille" || choix_joueur == "feuille" && choix[ordi_choix] == "ciseau" || choix_joueur == "ciseau" && choix[ordi_choix] == "pierre"  ){
        nb_defaite++;
        document.getElementById("resultat").innerHTML = "defaite " + "le joueur a joué " + choix_joueur + " le bot à jouer " + choix[ordi_choix] ;
        defaite();
    }
    else if(choix_joueur == "pierre" && choix[ordi_choix] == "ciseau" || choix_joueur == "feuille" && choix[ordi_choix] == "pierre" || choix_joueur == "ciseau" && choix[ordi_choix] == "feuille"  ){
        nb_victoire++;
        document.getElementById("resultat").innerHTML = "gagner " + "le joueur a joué " + choix_joueur + " le bot à jouer " + choix[ordi_choix] ;
        gagne();
    }

}

document.getElementById("pierre").addEventListener("click", () => jouer("pierre"));
document.getElementById("feuille").addEventListener("click", () => jouer("feuille"));
document.getElementById("ciseau").addEventListener("click", () => jouer("ciseau"));