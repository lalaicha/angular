import { Injectable } from '@angular/core';
import { Voiture } from './voiture';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
voitures: Voiture[];
  constructor() { 
    this.voitures = [
      { id:1, marque:'Peugeot', modele: '505', pays:'France'},
      { id:2, marque:'Renault', modele: 'Megane', pays:'France'},
      { id:3, marque:'Fiat', modele: 'punto', pays:'Italie'},
      { id:4, marque:'Vw', modele: 'Golf4', pays:'allemagne'}
    ];
  }
  /*getVoitures(): Voiture[]{
    return this.voitures;
  }*/
  getVoitures(): Observable<Voiture[]> {
    return of(this.voitures);
  }
}
