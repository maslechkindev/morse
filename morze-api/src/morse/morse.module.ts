import { Module } from '@nestjs/common';
import { MorseController } from './morse.controller';
import { MorseService } from './morse.service';

@Module({
  controllers: [MorseController],
  providers: [MorseService],
})
export class MorseModule {}
