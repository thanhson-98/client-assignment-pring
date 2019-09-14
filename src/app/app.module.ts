import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';
import { CoinListComponent } from './component/coin/coin-list/coin-list.component';
import { AddCoinComponent } from './component/coin/add-coin/add-coin.component';
import { MarketListComponent } from './component/market/market-list/market-list.component';
import { AddMarketComponent } from './component/market/add-market/add-market.component';
import { HttpClientModule }    from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MarketPipe } from './core/pipe/market.pipe';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CoinListComponent,
    AddCoinComponent,
    MarketListComponent,
    AddMarketComponent,
    MarketPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
