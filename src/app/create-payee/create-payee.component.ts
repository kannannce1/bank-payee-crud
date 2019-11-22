import { Component, OnInit } from '@angular/core';
import {PayeeService} from '../payee.service'
import {Payee} from '../entities/payee'
import {Router} from '@angular/router'




@Component({
  selector: 'app-create-payee',
  templateUrl: './create-payee.component.html',
  styleUrls: ['./create-payee.component.css']
})
export class CreatePayeeComponent implements OnInit {

  payee:Payee=new Payee()
  submitted=false

  constructor(private payeeService :PayeeService,private router: Router) { }

  ngOnInit() {
   // this.gotoList()
  }

  newPayee():void{
    this.submitted=false;
    this.payee=new Payee()
  }

  save(){
      this.payeeService.createPayee(this.payee)
      .subscribe(data => {
        this.gotoList()
      },error =>{

      })
       
  }

  
  onSubmit(){
      this.submitted=true;
      this.save()
  }

  gotoList(){
      this.router.navigate(['/payees'])
  }

}
