import City from './City';
import Lagrange from './Lagrange';
import OrbitalStation from './OrbitalStation';

export default class ShopLocation {
  constructor(
    public name: string,
    public specialty: string,
    public parentLocationType: string,
    public parentLocation: City | OrbitalStation | Lagrange
  ) {}
}
