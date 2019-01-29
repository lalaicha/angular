//ecmascript
//var personne = {nom: "Toto", prenom: "Momo"};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
if (x < 10) {
    var v = x + 4;
    console.log(v);
}
//console.log(v);
// var i = 2;
for (var i = 0; i < 10; i++) {
    //console.log(i);
}
console.log(i);
var mavariable = "Dupond";
/*let phrase = "Le temps est beau Le temps est beau"
+"Le temps est beau"
+"Le temps est beau"
+"Le temps est beau";
console.log(phrase);*/
var phrase = "Le temps est beau\"\n    \"Le temps est beau\"\n    \"Le temps est beau\";\n    ";
console.log(phrase);
var nom = "Keba";
var email = "keba@gmail.com";
var texte = "La personne a pour nom " + nom + "et pour email " + email;
console.log(texte);
var identite = { nom: "samabakesse", prenom: "Keba" };
var cordonnees = { tel: "0123456", rue: "Gallieni" };
//spread operator
var personne = __assign({}, identite, cordonnees);
//map
var joueurs = new Map();
var joueur1 = { rang: 1, nom: "Ronaldo" };
var joueur2 = { rang: 2, nom: "Zidane" };
joueurs.set(joueur1.rang, joueur1.nom);
joueurs.set(joueur2.rang, joueur2.nom);
console.log(joueurs);
