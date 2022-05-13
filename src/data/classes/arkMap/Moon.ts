import Planet from './Planet';

export default class Moon {
  constructor(
    public name: string,
    public designation: string,
    public orbits: Planet,
    public arkUrl: string,
    public scToolsUrl: string
  ) {}
}
