import { lang, Parser } from '../../interface/parser.type';



export default class vttParser implements Parser {
  langData: lang[];

  typeChecker(): boolean {
    throw new Error('Method not implemented.');
  }

  parser(): boolean {
    throw new Error('Method not implemented.');
  }

  maker(): string | Buffer {
    throw new Error('Method not implemented.');
  }
}
