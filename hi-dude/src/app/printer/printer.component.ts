import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.scss']
})
export class PrinterComponent implements OnInit {

  printerName =  'Best printer';
  isPrinterOn = true;
  voltage = '230V';

  constructor() { }

  ngOnInit() {
  }

  onTurnOnOffPrinter() {
    this.isPrinterOn = !this.isPrinterOn;
  }

}
