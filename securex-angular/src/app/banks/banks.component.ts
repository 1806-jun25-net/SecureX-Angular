import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss']
})
export class BanksComponent implements OnInit {

  banks$: Object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getBanks().subscribe(
      data => this.banks$ = data 
    );
  }

}
