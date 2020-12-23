import { lang, Parser } from '../../interface/parser.type';

export default class testParser implements Parser {
  langData: lang[];

  constructor(_FD: Buffer) {
    d
  }

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
