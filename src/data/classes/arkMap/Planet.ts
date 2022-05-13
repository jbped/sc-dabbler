import System from './System';

export default class Planet {
  constructor(
    public name: string,
    public designation: string,
    public system: System,
    public arkUrl: string,
    public scToolsUrl: string
  ) {}
}
