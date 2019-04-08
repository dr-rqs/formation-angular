import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-technical-card',
  templateUrl: './technical-card.component.html',
  styleUrls: ['./technical-card.component.scss']
})
export class TechnicalCardComponent implements OnInit {

  @Input() voltage: string;
  @Output() switchFC = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSwitchFromChild() {
    this.switchFC.emit();
  }

}
