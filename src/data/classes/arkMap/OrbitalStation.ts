import Planet from './Planet';

export default class OrbitalStation {
  constructor(
    public name: string,
    public designation: string,
    public parentPlanet: Planet,
    public arkUrl: string,
    public scToolsUrl: string
  ) {}
}
