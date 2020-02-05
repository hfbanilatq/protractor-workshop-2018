import { existsSync, writeFileSync, mkdirSync, readFileSync } from 'fs';
import * as fetch from 'isomorphic-fetch';
import { resolve } from 'path';

export class DownloadService {
  private tempFolder: string;
  constructor () {
    this.tempFolder = resolve(process.cwd(), 'temp');
  }

  public async downloadFile(link: string, filename): Promise<void> {
    if (!existsSync(this.tempFolder)) {
      mkdirSync(this.tempFolder);
    }
    const content = await fetch(link).then((response: any) => response.buffer());
    writeFileSync(resolve(this.tempFolder, filename), content);
  }

  public readFileFromTtemp(filename: string): Buffer {
    return readFileSync(resolve(this.tempFolder, filename));
  }
}
