import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  accounts$: Object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getAccounts().subscribe(
      data => this.accounts$ = data 
    );
  }

}
