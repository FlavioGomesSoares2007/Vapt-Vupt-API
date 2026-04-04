import { StoresService } from './stores.service';
import { StoresDto } from './dto/StoresCreateDto';
import { StoresUpdateDto } from './dto/StoresUpdateDto';
export declare class StoresController {
    private readonly StoresServices;
    constructor(StoresServices: StoresService);
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
    seeData(request: any): Promise<import("./entities/Stores.Entity").StoresEntity | null>;
    update(dados: StoresUpdateDto, request: any): Promise<{
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
    delete(request: any): Promise<import("typeorm").DeleteResult>;
}
