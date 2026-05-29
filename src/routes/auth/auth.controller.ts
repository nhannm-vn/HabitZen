/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register() {
    // console.log('controller...')
    // //*Vì mình serialization nên cần await để chờ dữ liệu
    // return new RegisterResDTO(await this.authService.register(body))
  }
}
