import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Market } from 'src/app/model/market';
import { MarketService } from '../market.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.css']
})
export class MarketListComponent implements OnInit {
  market$: Observable<Market[]>
  constructor(
    private marketService: MarketService
  ) { }

  ngOnInit() {
    this.getList();
  }
  getList() {
    this.market$ = this.marketService.getList().pipe(
      map(response => {
        return response.metaData;
      })
    )
  }

}
