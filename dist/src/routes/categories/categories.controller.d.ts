import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { RequestUser } from "../../common/interfaces/request-user.interface";
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    findAll(user: RequestUser): Promise<{
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
    create(user: RequestUser, dto: CreateCategoryDto): Promise<{
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
    update(user: RequestUser, id: string, dto: UpdateCategoryDto): Promise<{
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
    remove(user: RequestUser, id: string): Promise<{
        message: string;
    }>;
}
