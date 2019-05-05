import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: any;

  public user$: Subject<any>;

  constructor() {
    this.user$ = new Subject<any>();
  }

  modifyUser(firstName: string){
    this.user.firstName = firstName;
    this.user$.next(this.user);
  }

  login(){
    this.user = {
      firstName: "Antoine",
      lastName: "ROQUES"
    };
    this.user$.next(this.user);
  }
}
