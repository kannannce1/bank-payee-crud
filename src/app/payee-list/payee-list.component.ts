import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {PayeeService} from '../payee.service'
import {Payee} from '../entities/payee'
import { Router } from '@angular/router';


@Component({
  selector: 'app-payee-list',
  templateUrl: './payee-list.component.html',
  styleUrls: ['./payee-list.component.css']
})
export class PayeeListComponent implements OnInit {

  payees:Observable<Payee[]>
  editData:Payee[]
  
  constructor(private payeeService:PayeeService,private router:Router) { }

  ngOnInit() {
    this.reloadData()
  }
  
  reloadData() {
   
    this.payeeService.getPayeesList().subscribe(data=>{this.payees=data, console.log(this.payees); })
   
  }

  deletePayee(id:number){
    var result = confirm("Are you sure want to delete payee ?"); 
    if (result == true) { 
      this.payeeService.deletePayee(id).subscribe(
        data =>{
            console.log(data);
            this.reloadData()
        },error => console.log(error)
      )
    } else { 
       // return -1
    } 
   
  }


  payeeDetails(data:Payee[]): void{
      this.editData=data
  
  }


  onUpdate(data){
  
    this.payeeService.updatepayee(this.editData).subscribe(data=>{console.log(data);
      //$("[data-dismiss=modal]").trigger({ type: "click" });
      this.reloadData();

        }
      ,error =>console.log(error)
    )
   
  }


}
