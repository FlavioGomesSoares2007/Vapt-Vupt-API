import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductEntity } from './entities/productEntity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { CategoriesEntity } from '../categories/entites/CategoriesEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity, CategoriesEntity]),
    CloudinaryModule,
  ],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
