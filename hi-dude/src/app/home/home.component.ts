import {Component, OnDestroy, OnInit} from '@angular/core';
import {News} from "../shared/news";
import {Subscription} from "rxjs";
import {NewsService} from "../shared/news.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  latestNews: News[];
  latestNewsSubscription: Subscription;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.latestNewsSubscription = this.newsService.getLatestNews().subscribe((news) => {
      this.latestNews = news;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnDestroy(){
    if(this.latestNewsSubscription){
      this.latestNewsSubscription.unsubscribe();
    }
  }

}
