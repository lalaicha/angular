import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon Bloc';
  auteur = { nom: "Mousso", prenom: "Guillaume"};
  para = `gtyr
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae temporibus, tempora voluptatem nostrum nam deleniti laborum ad quia quaerat quisquam ipsum at iure ratione, molestias sed voluptate, eveniet inventore nesciunt!`;
  test = true;
  jours = ['Lundi', 'Mardi', 'Mercredi','Jeudi'];
  couleur = "";
  image = "";
  valeur = 0;
  res = 0;
  nombre=0;
   tab =[];
   auj= new Date();
   somme = 20.5;
  afficher(){
   /* this.image = "assets/fleur.jpg"
    this.couleur = "fond"
    this.title = "mon site internet";
    console.log(this.title);*/
    this.res = this.valeur * this.nombre;
    //boucle
    for(let i = 0; i < 10; i++){
      this.tab[i] = this.valeur* i; 
    }

  }
  
  recuperer(v){
    console.log(v);
  }
}
