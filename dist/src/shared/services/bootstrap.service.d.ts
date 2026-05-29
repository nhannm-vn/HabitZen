import { OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { CategoriesService } from "../../routes/categories/categories.service";
export declare class BootstrapService implements OnModuleInit {
    private readonly prisma;
    private readonly categoriesService;
    private readonly config;
    private readonly logger;
    constructor(prisma: PrismaService, categoriesService: CategoriesService, config: ConfigService);
    onModuleInit(): Promise<void>;
    private seedAdmin;
}
