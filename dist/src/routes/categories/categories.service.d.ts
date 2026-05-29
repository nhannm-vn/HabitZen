import { PrismaService } from "../../shared/services/prisma.service";
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoriesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    seedDefaults(): Promise<void>;
    findAll(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string | null;
        name: string;
        color: string | null;
        icon: string | null;
        isDefault: boolean;
    }[]>;
    create(userId: string, dto: CreateCategoryDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string | null;
        name: string;
        color: string | null;
        icon: string | null;
        isDefault: boolean;
    }>;
    update(userId: string, id: string, dto: UpdateCategoryDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string | null;
        name: string;
        color: string | null;
        icon: string | null;
        isDefault: boolean;
    }>;
    remove(userId: string, id: string): Promise<{
        message: string;
    }>;
    getDefaultCategoryId(): Promise<string | null>;
}
