/// <reference types="multer" />
import { ProductEntity } from './entities/productEntity';
import { Repository } from 'typeorm';
import { CreateProductsDto } from './dto/ProductsCreateDto';
import { ProductsUpdateDto } from './dto/ProductsUpdate';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
export declare class ProductsService {
    private readonly productRepositorio;
    private readonly cloudinaryService;
    constructor(productRepositorio: Repository<ProductEntity>, cloudinaryService: CloudinaryService);
    create(dados: CreateProductsDto, id: number, file: Express.Multer.File): Promise<ProductEntity>;
    findAll(id: number): Promise<ProductEntity | null>;
    find(id: number, id_store: number): Promise<ProductEntity | null>;
    update(id_product: number, id_store: number, dados: ProductsUpdateDto, file?: Express.Multer.File): Promise<ProductEntity>;
    delete(id_product: number, id_store: number): Promise<ProductEntity>;
}
