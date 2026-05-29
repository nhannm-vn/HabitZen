import { Global, Module } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';
import { OwnershipService } from './services/ownership.service';
import { BootstrapService } from './services/bootstrap.service';
import { CategoriesModule } from 'src/routes/categories/categories.module';
import { StreakService } from './services/streak.service';

@Global()
@Module({
  imports: [CategoriesModule],
  controllers: [],
  exports: [PrismaService, StreakService, OwnershipService],
  providers: [PrismaService, StreakService, OwnershipService, BootstrapService],
})
export class SharedModule {}
