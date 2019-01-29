import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor( private firestore : AngularFirestore) { }
  getArticle(){
    return this.firestore.collection('article').valueChanges();
  }
}
