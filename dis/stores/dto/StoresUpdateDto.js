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
exports.StoresUpdateDto = void 0;
const class_validator_1 = require("class-validator");
class StoresUpdateDto {
}
exports.StoresUpdateDto = StoresUpdateDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'O nome deve ser uma string' }),
    __metadata("design:type", String)
], StoresUpdateDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)({}, { message: 'O e-mail informado é inválido' }),
    __metadata("design:type", String)
], StoresUpdateDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'A senha tem que ser uma string' }),
    __metadata("design:type", String)
], StoresUpdateDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'O slug deve ser uma string' }),
    (0, class_validator_1.Matches)(/^[a-z0-9-]+$/, {
        message: 'O slug deve conter apenas letras minúsculas, números e traços',
    }),
    __metadata("design:type", String)
], StoresUpdateDto.prototype, "slug", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(11, 11, { message: 'O CPF deve ter exatamente 11 dígitos' }),
    __metadata("design:type", String)
], StoresUpdateDto.prototype, "cpf", void 0);
//# sourceMappingURL=StoresUpdateDto.js.map