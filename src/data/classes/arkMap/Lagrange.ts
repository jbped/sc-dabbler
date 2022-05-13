import Planet from './Planet';

export default class Lagrange {
  constructor(
    public name: string,
    public designation: string,
    public planetOrbit: Planet,
    public scToolsUrl: string
  ) {}
}
