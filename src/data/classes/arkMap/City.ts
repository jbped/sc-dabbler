import Planet from './Planet';

export default class City {
  constructor(
    public name: string,
    public designation: string,
    public planet: Planet,
    public alliance: string[],
    public scToolsUrl: string
  ) {}
}
