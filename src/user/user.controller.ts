import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(@Body() userData: User): Promise<any> {
    try {
      const resp = await this.userService.createUser(userData);
      if (resp) {
        return resp;
      }
    } catch (e) {
      return 'falha ao criar o usuário';
    }
  }
}
