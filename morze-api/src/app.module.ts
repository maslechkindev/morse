import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import config from './config/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { MorseModule } from './morse/morse.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({
      load: [config],
    }),
    MongooseModule.forRoot(
      'mongodb+srv://maslechkinv:5HWW01INg2aeg223@cluster0.kulphuw.mongodb.net/test',
    ),
    MorseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
