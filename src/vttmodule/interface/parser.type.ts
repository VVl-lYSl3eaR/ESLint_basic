export interface subTime {
  hour: number,
  min: number,
  sec: number,
  ms: number,
}

export interface subTitle {
  sTime: subTime,
  eTime: subTime,
  text: string,
  style? : string[],
}

export interface lang {
  lang: string,
  name: string,
  subTitle: subTitle[];
}

export interface Parser {
  new (FD: Buffer):Parser;

  langData: lang[];

  typeChecker(): boolean;

  parser(): boolean;

  maker(): string|Buffer;

}
