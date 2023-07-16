import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { User } from './users.model';
import * as bcrypt from 'bcrypt';
import { UsersService } from './users.service';
import JwtAuthGuard from '../auth/guards/jwt.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('/')
  async createUser(
    @Body('password') password: string,
    @Body('username') username: string,
  ): Promise<User> {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    const result = await this.usersService.createUser(username, hashedPassword);
    return result;
  }

  @Get('/')
  // @UseGuards(JwtAuthGuard)
  async getAll(): Promise<User[]> {
    const result = await this.usersService.getAll();
    result.map((user) => {
      delete user.password;
    });
    return result;
  }
}
