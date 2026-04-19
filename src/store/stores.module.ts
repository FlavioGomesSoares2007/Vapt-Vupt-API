import { Module } from '@nestjs/common';
import { StoresController } from './stores.controller';
import { StoresService } from './stores.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoresEntity } from './entities/StoresEntity';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';

@Module({
  imports: [TypeOrmModule.forFeature([StoresEntity]), CloudinaryModule],
  controllers: [StoresController],
  providers: [StoresService],
})
export class StoresModule {}
