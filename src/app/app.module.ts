import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePayeeComponent } from './create-payee/create-payee.component';
import { PayeeDetailsComponent } from './payee-details/payee-details.component';
import { PayeeListComponent } from './payee-list/payee-list.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    CreatePayeeComponent,
    PayeeDetailsComponent,
    PayeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
