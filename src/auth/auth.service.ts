import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { jwtConstants } from 'jwt.constants';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User,
  ) {}

  async login(email: string, password: string) {
    const secret = jwtConstants.secret;
    const exp = Math.floor(Date.now() / 1000) + 60 * 60;
    const result = await this.userRepository.findOne({
      where: { email: email },
    });

    if (!result || !bcrypt.compareSync(password, result.password)) {
      return { error: true, msg: 'Login ou password inválido!' };
    }

    // if(result.status === false) {
    //   res.status(200).send({error: true, msg: 'Essa conta ainda não foi ativada'})
    //   return
    // }

    const payload = { email: result.email, id: result.id, secret };
    return {
      access_token: this.jwtService.sign(payload, { expiresIn: exp }),
      idRole: result.idRole,
    };
  }
}
