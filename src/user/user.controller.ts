import { Body, Controller, Get, Param, Post, Put, Delete, UsePipes, ValidationPipe, Headers } from "@nestjs/common";
import { UserService } from './user.service';
import { CreateUserDto } from "./dtos/user.dto";
import { Order } from "../presentation/orders/entities/order.entity";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async register(@Body() createUserDto: CreateUserDto,
  @Headers('Authorization') authHeader: string): Promise<Order | string>{
    try {
      const token = authHeader.split(' ')[1];
      await this.userService.createUser(createUserDto, token);
    } catch (e: any) {
      return e.message;
    }
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }
  @Get('/a/company-users')
  async getAllCompanyUsers(
    @Headers('Authorization') authHeader: string) {
    const token = authHeader.split(' ')[1];
    return this.userService.getAllCompanyUsers(token);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: CreateUserDto,
  ) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.userService.deleteUser(id);
    return { message: 'User deleted successfully' };
  }
}
