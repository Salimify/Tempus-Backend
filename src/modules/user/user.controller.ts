import { Controller, Get } from '@nestjs/common';
import { UserModel } from './user.interface';
import { UserService } from '../../services/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  
  @Get()
  public findAll(): Array<UserModel> {
    return this.userService.findAll();
  }
}
