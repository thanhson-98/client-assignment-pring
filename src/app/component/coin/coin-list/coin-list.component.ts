import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Coin } from 'src/app/model/coin';
import { CoinService } from '../coin.service';
import { map } from 'rxjs/operators';
import { ApiResult } from 'src/app/model/api-result';
import { MarketService } from '../../market/market.service';
import { Market } from 'src/app/model/market';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css']
})
export class CoinListComponent implements OnInit {
  coin$: Observable<Coin[]>;
  market$: Observable<Market[]>;
  market: any;
  name = "";
  constructor(
    private coinService: CoinService,
    private marketService: MarketService
  ) { }

  ngOnInit() {
    this.getList();
    this.getMarket();
  }
  getList() {
    this.coin$ = this.coinService.getList().pipe(
      map(response => {
        return response.metaData
      })
    )
  }
  getMarket() {
    this.market$ = this.marketService.getList().pipe(
      map(response => {
        return response.metaData
      })
    )
  }
  findbyMarketId() {
    this.coin$ = this.coinService.findByMarketId(this.market).pipe(
      map(response => {
        return response.metaData
      })
    )
  }
  findbyName() {
    this.coin$ = this.coinService.findByName(this.name).pipe(
      map(response => {
        return response.metaData
      })
    )
  }

}
