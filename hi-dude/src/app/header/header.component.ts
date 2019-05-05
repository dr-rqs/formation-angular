import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../shared/auth/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  user: any;
  userSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe((user) => {
      this.user = user;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnDestroy(){
    if(this.userSubscription){
      this.userSubscription.unsubscribe();
    }
  }

}
