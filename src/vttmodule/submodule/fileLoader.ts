import * as fs from 'fs';
import assParser from './lib/assParser';

class fileLoder {
  private filePath: string;

  private FD: Buffer;

  constructor(path: string) {
    this.filePath = path;
  }

  async readFile() {
    this.FD = fs.readFileSync(this.filePath);
  }

  parseAsVTT() {
    const Parser = new assParser(this.FD);
  }

  parseAsSMI() {

  }

  parseAsASS() {

  }
}
