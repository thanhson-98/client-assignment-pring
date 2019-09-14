import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';
import { Observable } from 'rxjs';
import { Coin } from 'src/app/model/coin';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-coin',
  templateUrl: './add-coin.component.html',
  styleUrls: ['./add-coin.component.css']
})
export class AddCoinComponent implements OnInit {
  coin: Coin = {
    name: "",
    lastPrice: "",
    baseAsset: "",
    quoteAsset: "",
    volumn24h: ""
  }
  constructor(
    private coinService: CoinService
  ) { }
  onSubmit() {
    this.coinService.addCoin(this.coin).subscribe();
  }

  ngOnInit() {
  }


}
