import { Component, OnInit } from '@angular/core';
import {InvoiceServiceService} from "../services/invoice-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Invoice} from "../models/Invoice";

@Component({
  selector: 'app-update-invoice',
  templateUrl: './update-invoice.component.html',
  styleUrls: ['./update-invoice.component.css']
})
export class UpdateInvoiceComponent implements OnInit {
  idInvoice !: number;
  discountAmount!: number;
  billAmount!: number;
  dateBill !: string;
  Status!: boolean;
  list:any
  constructor(private  service:InvoiceServiceService,private ac:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.idInvoice=this.ac.snapshot.params['idInvoice']
    console.log("******************"+this.idInvoice)
    this.service.findInvoiceById(this.idInvoice).subscribe(
      (d)=>{
        this.list=d;
        this.idInvoice=this.list.id;
        this.discountAmount=this.list.discountAmount;
  })


}
updateInvoice(invoice:Invoice){
    return this.service.updateInvoice(this.idInvoice,invoice).subscribe(

      ()=>{
    console.log("***************"+this.idInvoice)
        this.router.navigate(['main'])}
    )
}
}
