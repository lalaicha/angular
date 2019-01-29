import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database'
@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor( private angularfd :AngularFireDatabase) { }
  getVoiture(){
    return this.angularfd.list('voitures').valueChanges();
  }
}

