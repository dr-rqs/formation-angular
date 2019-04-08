import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-football-club',
  templateUrl: './football-club.component.html',
  styleUrls: ['./football-club.component.scss']
})
export class FootballClubComponent implements OnInit {

  players = [
    {
      name: 'Verratti',
      level: '96'
    },
    {
      name: 'Pogba',
      level: '95'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}


