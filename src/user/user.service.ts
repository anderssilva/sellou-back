import { Inject, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from "./dtos/user.dto";

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User,
  ) {}

  async createUser(userData: CreateUserDto): Promise<CreateUserDto> {
    const user = await this.userRepository.create({
      name: userData.name,
      document: userData.document,
      email: userData.email,
      phone: userData.phone,
      city: userData.city,
      state: userData.state,
      password: userData.password,
      idRole: userData.idRole,
    });

    const userWithoutPassword = user.toJSON();
    delete userWithoutPassword.password;

    return userWithoutPassword;
  }

  // Read
  async getUserById(id: number): Promise<User> {
    return await this.userRepository.findByPk(id);
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async updateUser(id: number, updateData: CreateUserDto): Promise<User> {
    const user = await this.userRepository.findByPk(id);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    await user.update(updateData);
    return user;
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.userRepository.findByPk(id);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    await user.destroy();
  }
}
