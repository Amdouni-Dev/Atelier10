import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from '../models/Invoice';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService {
url:string="http://localhost:3000/"

  constructor(private http:HttpClient) { }

  getInvoices():Observable<Invoice[]>{
    return this.http.get<Invoice[]>(this.url+"invoices")
  }
  addInvoice(invoice:Invoice):Observable<Invoice>{
    return this.http.post<Invoice>(this.url+"addInvoice",invoice)
  }
  updateInvoice(id:number,invoice:Invoice):Observable<Invoice>{
    return this.http.put<Invoice>(this.url+"updateInvoice/"+id,invoice)
  }
  deleteInvoice(invoice:Invoice|number):Observable<Invoice>{
    const id=typeof invoice ==="number"?invoice:invoice.idInvoice;
    return this.http.delete<Invoice>(this.url+"deleteInvoice/"+id)
  }
}
