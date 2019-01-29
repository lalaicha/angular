import { Component, OnInit } from '@angular/core';
import { ArticleService} from '../shared/article.service';


@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  articles;
 

  constructor( private articleSevice: ArticleService) { }

  ngOnInit() {
    this.articles= this.articleSevice.getArticle();
  }

}
