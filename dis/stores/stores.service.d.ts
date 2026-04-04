import { Repository } from 'typeorm';
import { StoresEntity } from './entities/Stores.Entity';
import { StoresDto } from './dto/StoresCreateDto';
import { StoresUpdateDto } from './dto/StoresUpdateDto';
export declare class StoresService {
    private readonly StoresRepositorio;
    constructor(StoresRepositorio: Repository<StoresEntity>);
    create(dados: StoresDto): Promise<{
        newStore: {
            id: number;
            name: string;
            email: string;
            slug: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            products: import("../products/entities/productEntity").ProductEntity[];
        };
    }>;
    seeData(id: number): Promise<StoresEntity | null>;
    update(dados: StoresUpdateDto, id: number): Promise<{
        store: {
            id: number;
            name: string;
            email: string;
            slug: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            products: import("../products/entities/productEntity").ProductEntity[];
        };
    }>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
