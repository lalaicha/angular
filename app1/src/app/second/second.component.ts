import { Component, OnInit } from '@angular/core';
import { Voiture } from './Voiture';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  auto = new  Voiture(3, 'Peugeot', '505', 'France');
  voitureForm: {};

  constructor() { }

  ngOnInit() {
  }
  onSubmit(donnees){
    this.voitureForm ={
      id : donnees.valiue.marque,
      marque: donnees.value.modele,
      modele: donnees.value.modele,
      pays: donnees.value.pays
    }
    console.log(donnees.value);
  }

}
