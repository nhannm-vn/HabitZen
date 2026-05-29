/*
https://docs.nestjs.com/modules
*/

import { Global, Module } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';

@Global()
@Module({
  imports: [],
  controllers: [],
  exports: [PrismaService],
  providers: [PrismaService],
})
export class SharedModule {}
