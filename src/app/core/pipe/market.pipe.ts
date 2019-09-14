import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "market"
})
export class MarketPipe implements PipeTransform {
    public transform(value: number, x: string): string {
        let z = status[value]
        return z;
    }
}
const status = {
    2: 'Binance',
    3: 'Huobi',
    4: 'Bitfinex'
}
