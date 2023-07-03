import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  private symbol: number = 250;
  @Input()
  article!: Article;
  @Input()
  articleDesc!: string;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = "Show Image";

  constructor() {
    this.articleDescLen = 0;
    this.descToShow = '';
  }

  readMore() {
    this.articleDescLen += this.symbol;
    
    if(this.articleDescLen >= this.articleDesc.length){
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
    } else {
      this.descToShow = this.articleDesc.substr(0, this.articleDescLen);
    }
  }

  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle === "Show Image" ? "Hide Image" : "Show Image";
  }

  hideDesc() { 
    this.descToShow = '';
    this.articleDescLen = 0;
    this.showReadMoreBtn  = true;
    this.showHideBtn = false;
  }
  
}
