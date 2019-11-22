import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PayeeListComponent} from './payee-list/payee-list.component'
import {CreatePayeeComponent} from './create-payee/create-payee.component'

import {PayeeDetailsComponent} from './payee-details/payee-details.component'


const routes: Routes = [
  {  path:"",redirectTo:"payees",pathMatch:'full'},
  {path:"payees",component:PayeeListComponent},
  {path:"add",component:CreatePayeeComponent},
  {path:"edit/:id",component:PayeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
