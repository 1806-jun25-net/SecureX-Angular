import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://securex-api.azurewebsites.net/api/user')
  }
  getBanks() {
    return this.http.get('http://securex-api.azurewebsites.net/api/bank')
  }
  getAccounts() {
    return this.http.get('http://securex-api.azurewebsites.net/api/account')
  }
  getCreditCards() {
    return this.http.get('http://securex-api.azurewebsites.net/api/creditcard')
  }
  getCustomers() {
    return this.http.get('http://securex-api.azurewebsites.net/api/customer')
  }
  getTransactions() {
    return this.http.get('http://securex-api.azurewebsites.net/api/transaction')
  }

  postLogin() {
    //return this.http.post('http://securex-api.azurewebsites.net/api/login')
  }
}
