import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewsService} from "../shared/news.service";
import {News} from "../shared/news";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {

  newsList: News[];
  newsListSubscription: Subscription;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsListSubscription = this.newsService.news$.subscribe((news) => {
      this.newsList = news;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnDestroy(){
    if(this.newsListSubscription){
      this.newsListSubscription.unsubscribe();
    }
  }

}
