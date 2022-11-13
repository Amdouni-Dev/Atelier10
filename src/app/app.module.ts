import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceComponentComponent } from './invoice-component/invoice-component.component';
import { HeaderComponent } from './shared/header/header.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import {FormsModule} from "@angular/forms";
import { UpdateInvoiceComponent } from './update-invoice/update-invoice.component';
import { DeleteInvoiceComponent } from './delete-invoice/delete-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponentComponent,
    HeaderComponent,
    AddInvoiceComponent,
    UpdateInvoiceComponent,
    DeleteInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
