"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const productEntity_1 = require("./entities/productEntity");
const typeorm_2 = require("typeorm");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let ProductsService = class ProductsService {
    constructor(productRepositorio, cloudinaryService) {
        this.productRepositorio = productRepositorio;
        this.cloudinaryService = cloudinaryService;
    }
    async create(dados, id, file) {
        const image = await this.cloudinaryService.uploadFile(file, 'products');
        const exists = await this.productRepositorio.findOne({
            where: { name: dados.name, id_store: { id: id } },
        });
        if (exists) {
            throw new common_1.ConflictException('O produto "' + dados.name + '" já está cadastrado.');
        }
        const NewProduct = this.productRepositorio.create({
            ...dados,
            id_store: { id: id },
            imageUrl: image.secure_url,
        });
        return await this.productRepositorio.save(NewProduct);
    }
    async findAll(id) {
        return await this.productRepositorio.findOne({
            where: { id_store: { id: id } },
        });
    }
    async find(id, id_store) {
        return await this.productRepositorio.findOne({
            where: { id: id, id_store: { id: id_store } },
        });
    }
    async update(id_product, id_store, dados, file) {
        const product = await this.productRepositorio.findOne({
            where: { id: id_product, id_store: { id: id_store } },
        });
        if (!product) {
            throw new common_1.UnauthorizedException('Produto não encontrado nesta loja');
        }
        if (file) {
            if (product.imageUrl) {
                const publicId = this.cloudinaryService.extractPublicId(product.imageUrl);
                await this.cloudinaryService.deleteFile(publicId);
            }
            const image = await this.cloudinaryService.uploadFile(file, 'products');
            dados.imageUrl = image.secure_url;
        }
        Object.assign(product, dados);
        return await this.productRepositorio.save(product);
    }
    async delete(id_product, id_store) {
        const stores = await this.productRepositorio.findOne({
            where: { id_store: { id: id_store }, id: id_product },
        });
        if (!stores) {
            throw new common_1.UnauthorizedException('Produto inexistente');
        }
        return await this.productRepositorio.remove(stores);
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(productEntity_1.ProductEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        cloudinary_service_1.CloudinaryService])
], ProductsService);
//# sourceMappingURL=products.service.js.map