import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers$: Object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCustomers().subscribe(
      data => this.customers$ = data 
    );
  }

}
