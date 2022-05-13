import ShopLocation from './arkMap/ShopLocation';

export default class Ship {
  constructor(
    public name: string,
    public manufacturer: string,
    public usd: number,
    public uec: number,
    public rentUec: number,
    public purchaseLocations: ShopLocation[],
    public rentLocations: ShopLocation[],
    public rsiUrl: string,
    public scToolsUrl: string
  ) {}
}
