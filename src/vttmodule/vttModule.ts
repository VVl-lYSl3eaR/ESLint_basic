class vttModule {
  public MODE: string;

  private PATH: string;

  constructor(mode: string, path:string) {
    this.MODE = mode;
    this.PATH = path;
  }
}

export default vttModule;
