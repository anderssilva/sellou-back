import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { JwtModule} from "@nestjs/jwt";
import { jwtConstants } from "../../jwt.constants";
import { JwtStrategy } from '../middlewares/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [UserService, JwtStrategy, ...userProviders],
  controllers: [UserController],
})
export class UserModule {}
