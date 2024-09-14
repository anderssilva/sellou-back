import { Controller, Post, Body, ValidationPipe, UsePipes } from "@nestjs/common";
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dtos/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async login(@Body() authLoginDto: AuthLoginDto) {
    return this.authService.login(authLoginDto);
  }
}
