import { Inject, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from "./dtos/user.dto";
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from "../../jwt.constants";
import * as jwt from "jsonwebtoken";

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(userData: CreateUserDto, token: string): Promise<CreateUserDto> {
    const decodedToken = this.jwtService.verify(token);

    const user = await this.userRepository.create({
      name: userData.name,
      document: userData.document,
      email: userData.email,
      phone: userData.phone,
      city: userData.city,
      state: userData.state,
      password: userData.password,
      idRole: userData.idRole,
      company: userData.idRole == 3 ? decodedToken['company'] : null
    });

    const userWithoutPassword = user.toJSON();
    delete userWithoutPassword.password;

    return userWithoutPassword;
  }
  async getUserById(id: number): Promise<User> {
    return await this.userRepository.findByPk(id);
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async getAllCompanyUsers(token: string): Promise<User[]> {
    const decodedToken = jwt.verify(token, jwtConstants.secret);
    return await this.userRepository.findAll({ where: { company: decodedToken['company'] } });
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
