import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './users.model';
// This should be a real class/interface representing a user entity
export type User = any;
@Injectable()
export class UsersService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
  ) {}
  async createUser(username: string, password: string): Promise<User> {
    return this.userModel.create({
      username,
      password,
    });
  }
  async getUser(query: object): Promise<User> {
    return this.userModel.findOne(query);
  }

  async getById(_id: string): Promise<User> {
    return this.userModel.findOne({ _id });
  }

  async getAll(): Promise<User[]> {
    return this.userModel.find();
  }
}
