import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  constructor() {
    this.articleDescLen = 0;
    this.descToShow = '';
  }
  private symbols: number = 250;
  @Input() article: Article;
  @Input() articleDesc: string;

  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = 'Show Image';
}
