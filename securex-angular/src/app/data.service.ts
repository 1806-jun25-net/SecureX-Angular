import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';


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

  postLogin(login: Login, success, failure) {
    let url = "http://securex-api.azurewebsites.net/api/login/login";
    let request = this.http.post(url, login);
    let promise = request.toPromise();
    promise.then(success, failure);
  }
}
