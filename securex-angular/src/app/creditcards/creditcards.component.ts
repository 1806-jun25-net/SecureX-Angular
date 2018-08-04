import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrls: ['./creditcards.component.scss']
})
export class CreditcardsComponent implements OnInit {

  creditcards$: Object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCreditCards().subscribe(
      data => this.creditcards$ = data 
    );
  }

}