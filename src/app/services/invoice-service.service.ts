import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from '../models/Invoice';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService {
url:string="http://localhost:3000/invoices/"

  constructor(private http:HttpClient) { }

  getInvoices():Observable<Invoice[]>{
    return this.http.get<Invoice[]>(this.url)
  }
  addInvoice(invoice:Invoice):Observable<Invoice>{
    return this.http.post<Invoice>(this.url,invoice)
  }
  updateInvoice(id:number,invoice:Invoice):Observable<Invoice>{
    return this.http.put<Invoice>(this.url+id,invoice)
  }
  deleteInvoice(id:number):Observable<Invoice>{

    return this.http.delete<Invoice>(this.url+id)
  }
  findInvoiceById(id:number):Observable<Invoice>{
  return this.http.get<Invoice>(this.url+id)
  }
}
