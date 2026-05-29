/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  // getHello(): string {
  //   const user = this.prismaService.streak.create
  //   return 'Hello World!';
  // }
}
