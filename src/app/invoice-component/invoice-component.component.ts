import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {Invoice} from '../models/Invoice';
import {InvoiceServiceService} from '../services/invoice-service.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-invoice-component',
  templateUrl: './invoice-component.component.html',
  styleUrls: ['./invoice-component.component.css']
})
export class InvoiceComponentComponent implements OnInit {
  list: any
  idInvoice!:number
  list1:any

  constructor(private service:InvoiceServiceService,private ac:ActivatedRoute,private router:Router) {


  }

  ngOnInit(): void {


    this.service.getInvoices().subscribe(
      (d)=>{
        console.log(d);
        this.list=d;
      }
    )
  }


  deleteInvoice(){
    this.service.deleteInvoice(this.idInvoice).subscribe( ()=>{
      this.router.navigate(['main'])
    } )
  }
}
