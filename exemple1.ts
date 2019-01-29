
//ecmascript
//var personne = {nom: "Toto", prenom: "Momo"};


//console.log(personne.nom + "" + personne.prenom);
//Ecmascript6
/*class Personne{
    nom: string;
    prenom: string;
    age:number;
    constructor(nom: string, prenom: string, age: number){
        this.nom = nom; 
        this.prenom = prenom;
        this.age = age;
    }
}
var p1 = new Personne("Sambakesse", "Awa", 4);
console.log(p1.nom + " " + p1.prenom + " " + p1.age);*/
//contexte let

var x = 1;
if(x < 10){
    let v = x +  4 ;
    console.log(v);
}
    //console.log(v);
    // var i = 2;
    for(var i =0; i< 10; i++){
        //console.log(i);
    }
    console.log(i);

    const mavariable = "Dupond";


    /*let phrase = "Le temps est beau Le temps est beau"
    +"Le temps est beau"
    +"Le temps est beau"
    +"Le temps est beau";
    console.log(phrase);*/

    let phrase = `Le temps est beau"
    "Le temps est beau"
    "Le temps est beau";
    `;
    console.log(phrase);
    let nom  = "Keba"; let email = "keba@gmail.com";
    let texte = `La personne a pour nom ${nom}et pour email ${email}`;
    console.log(texte);

    let identite={ nom: "samabakesse", prenom :"Keba"};
    let cordonnees ={ tel: "0123456", rue :"Gallieni"};
    //spread operator
    let personne = {...identite,...cordonnees};
    //map
    let joueurs = new Map();
    let joueur1 = {rang: 1, nom: "Ronaldo"};
    let joueur2 = {rang: 2, nom: "Zidane"};
    joueurs.set(joueur1.rang, joueur1.nom);
    joueurs.set(joueur2.rang, joueur2.nom);


    console.log(joueurs);

