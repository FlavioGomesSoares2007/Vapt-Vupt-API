import { ProductEntity } from '../../products/entities/productEntity';
export declare class StoresEntity {
    id: number;
    name: string;
    email: string;
    password: string;
    slug: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    products: ProductEntity[];
}
