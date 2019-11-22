import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
  
})
export class PayeeService {

  private baseUrl ="http://localhost:3000/payee"

  constructor(private http:HttpClient) { }

  getPayee(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/`+id)
  }

  createPayee(emplyee:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,emplyee)
  }

  updatepayee(value):Observable<Object>{
    return this.http.put(`${this.baseUrl}/`+value.id,value)
  }

  deletePayee(id:number):Observable<any>{
    console.log(id)
    return this.http.delete(`${this.baseUrl}/`+id,{responseType:'text'})
  }

  getPayeesList():Observable<any>{
    return this.http.get(`${this.baseUrl}`)
  }
}
