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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoresEntity = void 0;
const typeorm_1 = require("typeorm");
const productEntity_1 = require("../../products/entities/productEntity");
let StoresEntity = class StoresEntity {
};
exports.StoresEntity = StoresEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'Id_Store' }),
    __metadata("design:type", Number)
], StoresEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'name',
        type: 'varchar',
        length: 100,
        unique: true,
        nullable: false,
    }),
    __metadata("design:type", String)
], StoresEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'email',
        type: 'varchar',
        length: 150,
        unique: true,
        nullable: false,
    }),
    __metadata("design:type", String)
], StoresEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'password',
        type: 'varchar',
        length: 150,
        nullable: false,
    }),
    __metadata("design:type", String)
], StoresEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'slug',
        type: 'varchar',
        length: 100,
        unique: true,
        nullable: false,
    }),
    __metadata("design:type", String)
], StoresEntity.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', default: true }),
    __metadata("design:type", Boolean)
], StoresEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], StoresEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], StoresEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => productEntity_1.ProductEntity, (products) => products.id_store),
    __metadata("design:type", Array)
], StoresEntity.prototype, "products", void 0);
exports.StoresEntity = StoresEntity = __decorate([
    (0, typeorm_1.Entity)('stores')
], StoresEntity);
//# sourceMappingURL=Stores.Entity.js.map