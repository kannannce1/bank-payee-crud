import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , Router} from '@angular/router'
import {PayeeService} from '../payee.service'

@Component({
  selector: 'app-payee-details',
  templateUrl: './payee-details.component.html',
  styleUrls: ['./payee-details.component.css']
})
export class PayeeDetailsComponent implements OnInit {
  payee: any;
  //var id:any;

  constructor(private activatedRoute:ActivatedRoute,private payeeService:PayeeService,private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(id=>{
      console.log(id)
     
    
      this.payeeService.getPayee(id['id']).subscribe(data=>this.payee=data)  
    })
  }

  onUpdate(){
  
    this.payeeService.updatepayee(this.payee).subscribe(data=>{console.log(data);this.gotoList()}
      ,error =>console.log(error)
    )
   
  }

  gotoList(){
    this.router.navigate(['/payees'])
}

}
