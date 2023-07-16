import { Body, Controller, Post } from '@nestjs/common';
import { MorseService } from './morse.service';

@Controller('morse')
export class MorseController {
  constructor(private readonly morseService: MorseService) {}
  @Post('/validate')
  async validate(@Body('str') str: string): Promise<{ isValide: boolean }> {
    const isValide = await this.morseService.validate(str);
    return { isValide };
  }

  @Post('/decode')
  async decode(@Body('str') str: string): Promise<{ decodeStr: string }> {
    const decodeStr = await this.morseService.decode(str);
    return { decodeStr };
  }
}
