 import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { jwtConstants } from 'jwt.constants';
 import { AuthLoginDto } from './dtos/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User,
  ) {}

  async login(credentials: AuthLoginDto) {
    const secret = jwtConstants.secret;
    const exp = Math.floor(Date.now() / 1000) + 60 * 60;

    const user = await this.userRepository.findOne({
      where: { email: credentials.email },
    });

    if (!user || !bcrypt.compareSync(credentials.password, user.password)) {
      throw new UnauthorizedException('Email ou senha inválidos!');
    }

    // if(user.status === false) { //todo
    //   throw new UnauthorizedException('Essa conta ainda não foi ativada');
    // }

    const payload = { email: user.email, id: user.id, r: user.representativeId, secret };
    return {
      access_token: this.jwtService.sign(payload, { expiresIn: exp }),
      idRole: user.idRole,
      userName: user.name,
      email: user.email
    };
  }
}
