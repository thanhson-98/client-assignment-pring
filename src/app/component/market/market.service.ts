import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResult } from 'src/app/model/api-result';
import { map } from 'rxjs/operators';
import { Market } from 'src/app/model/market';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor(private http: HttpClient) { }

  CONST_API_URL = environment.apiHost + "/api/market";

  getList(): Observable<ApiResult<Market[]>> {
    return this.http.get(this.CONST_API_URL).pipe(
      map(response => {
        return response as ApiResult<Market[]>;
      })
    )
  }
  addMarket(market: Market): Observable<ApiResult<Market>> {
    return this.http.post(this.CONST_API_URL, market).pipe(
      map(response => {
        return response as ApiResult<Market>;
      })
    )
  }
}
