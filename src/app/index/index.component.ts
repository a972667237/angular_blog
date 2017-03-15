import { Component, OnInit } from '@angular/core';
import { Article } from '../models/articles';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  articles: Article[];
  constructor( private articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

}
