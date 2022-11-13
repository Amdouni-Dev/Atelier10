import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponentComponent } from './invoice-component/invoice-component.component';
import { HeaderComponent } from './shared/header/header.component';

const routes: Routes = [
  {path:'header',component:HeaderComponent},
  
  {path:'main',component:InvoiceComponentComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
