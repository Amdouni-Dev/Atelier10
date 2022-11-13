import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponentComponent } from './invoice-component/invoice-component.component';
import { HeaderComponent } from './shared/header/header.component';
import {AddInvoiceComponent} from "./add-invoice/add-invoice.component";
import {UpdateInvoiceComponent} from "./update-invoice/update-invoice.component";
import {DeleteInvoiceComponent} from "./delete-invoice/delete-invoice.component";

const routes: Routes = [
  {path:'',component:HeaderComponent},

  {path:'main',component:InvoiceComponentComponent},
  {path:'ajouterInvoice',component:AddInvoiceComponent},
  {path:'updateInvoice/:idInvoice',component:UpdateInvoiceComponent},
  {path:'supprimer/:idInvoice',component:DeleteInvoiceComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
