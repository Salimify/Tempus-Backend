import { Injectable } from '@nestjs/common';
import { UserModel } from '../modules/user/user.interface';

@Injectable()
export class UserService {
  private user: UserModel = {
    id: 1,
    firstName: 'Salim',
    lastName: 'Ben Hassine',
    username: 'Salimify',
    email: 'salimify@gmail.com',
  }
  private users: Array<UserModel> = [this.user];
  
  public findAll(): Array<UserModel> {
    return this.users;
  }
}
