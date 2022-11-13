import { Component, OnInit } from '@angular/core';
import {InvoiceServiceService} from "../services/invoice-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-invoice',
  templateUrl: './delete-invoice.component.html',
  styleUrls: ['./delete-invoice.component.css']
})
export class DeleteInvoiceComponent implements OnInit {
id:any
  list:any
  constructor(private service:InvoiceServiceService,private ac:ActivatedRoute,private  router:Router) { }

  ngOnInit(): void {
    this.id=this.ac.snapshot.params['idInvoice']
    console.log(this.id)
    this.service.findInvoiceById(this.id).subscribe( (d)=>{
      this.list=d
      this.id=this.list.id
    } )
console.log("111111111111"+this.id)
    this.service.deleteInvoice(this.id).subscribe( ()=>{
      this.router.navigate(['main'])
    } )
  }
  deleteInvoice(){
  this.service.deleteInvoice(this.id).subscribe( ()=>{
    this.router.navigate(['main'])
  } )
  }

}
