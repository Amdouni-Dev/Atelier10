import { Component, OnInit } from '@angular/core';
import { Invoice } from '../models/Invoice';
import { InvoiceServiceService } from '../services/invoice-service.service';

@Component({
  selector: 'app-invoice-component',
  templateUrl: './invoice-component.component.html',
  styleUrls: ['./invoice-component.component.css']
})
export class InvoiceComponentComponent implements OnInit {

  constructor(private service:InvoiceServiceService) { }

  ngOnInit(): void {
  }
  getInvoicesFromService(){
    this.service.getInvoices().subscribe()
  }
  addInvoice(invoice:Invoice){
    this.service.addInvoice(invoice).subscribe();
  }
  updateInvoice(id:number,invoice:Invoice){
    this.service.updateInvoice(id,invoice).subscribe();
  }
  deleteInvoice(invoice:any){
    this.service.deleteInvoice(invoice).subscribe();
  }
}
