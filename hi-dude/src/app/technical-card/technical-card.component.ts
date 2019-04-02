import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-technical-card',
  templateUrl: './technical-card.component.html',
  styleUrls: ['./technical-card.component.scss']
})
export class TechnicalCardComponent implements OnInit {

  @Input() voltage: string;

  constructor() { }

  ngOnInit() {
  }

}
