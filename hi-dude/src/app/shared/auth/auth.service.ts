import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = {
    firstName: "Antoine",
    lastName: "ROQUES"
  };

  constructor() { }
}
