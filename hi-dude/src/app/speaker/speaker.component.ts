import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../shared/auth/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss']
})
export class SpeakerComponent implements OnInit, OnDestroy {

  user: any;
  newFirstName: string;
  userSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe((user) => {
      this.user = user;
    }, (error) => {
      console.log(error);
    });
  }

  logIn(){
    this.authService.login();
  }

  modifyUser(){
    this.authService.modifyUser(this.newFirstName);
  }

  ngOnDestroy(){
    if(this.userSubscription){
      this.userSubscription.unsubscribe();
    }
  }

}
