import { StoresEntity } from '../../stores/entities/Stores.Entity';
export declare class ProductEntity {
    id: number;
    name: string;
    description?: string;
    price: number;
    imageUrl?: string;
    id_store: StoresEntity;
    createdAt: Date;
}
