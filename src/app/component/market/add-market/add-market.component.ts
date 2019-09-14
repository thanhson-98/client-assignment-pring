import { Component, OnInit } from '@angular/core';
import { Market } from 'src/app/model/market';
import { MarketService } from '../market.service';

@Component({
  selector: 'app-add-market',
  templateUrl: './add-market.component.html',
  styleUrls: ['./add-market.component.css']
})
export class AddMarketComponent implements OnInit {
  market: Market = {
    id: 1,
    name: "",
    description: "",
  };
  constructor(
    private marketService: MarketService
  ) { }
  onSubmit() {
    this.marketService.addMarket(this.market).subscribe();
    
  }
  ngOnInit() {
  }

}
