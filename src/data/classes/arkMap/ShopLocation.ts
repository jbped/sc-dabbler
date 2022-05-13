import City from './City';
import Lagrange from './Lagrange';
import OrbitalStation from './OrbitalStation';
import Shop from './Shop';

export default class ShopLocation {
  constructor(
    public shop: Shop,
    public name: string,
    public parentLocationType: string,
    public parentLocation: City | OrbitalStation | Lagrange
  ) {}
}
