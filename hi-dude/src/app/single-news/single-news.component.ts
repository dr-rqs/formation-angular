import {Component, OnDestroy, OnInit} from '@angular/core';
import {News} from "../shared/news";
import {Subscription} from "rxjs";
import {NewsService} from "../shared/news.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.scss']
})
export class SingleNewsComponent implements OnInit, OnDestroy {

  news: News;
  newsSubscription: Subscription;

  constructor(private newsService: NewsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.newsSubscription = this.newsService.getNewsById(this.route.snapshot.params['id']).subscribe((news) => {
      this.news = news;
    }, (error) => {
      console.log(error);
      this.router.navigate(['**']);
    });
  }

  ngOnDestroy(){
    if(this.newsSubscription){
      this.newsSubscription.unsubscribe();
    }
  }

}
