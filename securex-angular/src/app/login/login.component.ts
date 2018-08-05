import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private data: DataService) { }

  login = new Login("","");  

  submitted = false;

  onSubmit(){ 
    this.submitted = true; 
    this.data.postLogin(this.login, console.log("success"), console.log("failure"));
  }

  ngOnInit() {
  }

}
