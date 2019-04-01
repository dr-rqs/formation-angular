import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.scss']
})
export class PrinterComponent implements OnInit {

  printerName =  'Best printer';
  isPrinterOn = true;

  constructor() { }

  ngOnInit() {
  }

}
