import { Routes } from "@angular/router"
import { CoinListComponent } from './component/coin/coin-list/coin-list.component'
import { AddCoinComponent } from './component/coin/add-coin/add-coin.component'
import { MarketListComponent } from './component/market/market-list/market-list.component'
import { AddMarketComponent } from './component/market/add-market/add-market.component'
export const appRoutes: Routes = [
    { path: 'coin/list', component: CoinListComponent },
    { path: 'coin/add', component: AddCoinComponent },
    { path: 'market/list', component: MarketListComponent },
    { path: 'market/add', component: AddMarketComponent },
]