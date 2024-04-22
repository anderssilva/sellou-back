import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User,
  ) {}

  async createUser(userData: User): Promise<User> {
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const user = await this.userRepository.create({
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
    });

    const userWithoutPassword = user.toJSON();
    delete userWithoutPassword.password;

    return userWithoutPassword;
  }
}
