import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  transactions$: Object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getTransactions().subscribe(
      data => this.transactions$ = data 
    );
  }

}
