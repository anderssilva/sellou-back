import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'jwt.constants';
import { JwtStrategy } from '../middlewares/jwt.strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { userProviders } from '../user/user.providers';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, JwtStrategy, ...userProviders],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
