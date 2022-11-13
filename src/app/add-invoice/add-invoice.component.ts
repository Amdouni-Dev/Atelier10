import { Component, OnInit } from '@angular/core';
import {InvoiceServiceService} from "../services/invoice-service.service";
import {Invoice} from "../models/Invoice";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {

  constructor(private service :InvoiceServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  addInvoice(invoice:Invoice){
    this.service.addInvoice(invoice).subscribe( ()=>{
      this.router.navigate(['main'])

    })

  }

}
