import { Injectable } from '@nestjs/common';
import * as morse from 'morse-decoder';

@Injectable()
export class MorseService {
  async validate(str: string): Promise<boolean> {
    const res = morse.decode(str);
    return res !== '#';
  }

  async decode(str: string): Promise<string> {
    const res = morse.decode(str);
    return res;
  }
}
