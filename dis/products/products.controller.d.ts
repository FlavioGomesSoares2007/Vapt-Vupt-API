/// <reference types="multer" />
import { ProductsService } from './products.service';
import { CreateProductsDto } from './dto/ProductsCreateDto';
import { ProductsUpdateDto } from './dto/ProductsUpdate';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(dados: CreateProductsDto, request: any, file: Express.Multer.File): Promise<import("./entities/productEntity").ProductEntity>;
    findAll(request: any): Promise<import("./entities/productEntity").ProductEntity | null>;
    find(id: number, request: any): Promise<import("./entities/productEntity").ProductEntity | null>;
    update(dados: ProductsUpdateDto, id_product: number, request: any, file: Express.Multer.File): Promise<import("./entities/productEntity").ProductEntity>;
    delete(id: number, requeste: any): Promise<import("./entities/productEntity").ProductEntity>;
}
