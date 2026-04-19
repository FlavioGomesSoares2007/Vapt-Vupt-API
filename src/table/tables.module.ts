import { Module } from '@nestjs/common';
import { TablesController } from './tables.controller';
import { TablesService } from './tables.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TablesEntity } from './entities/TablesEntity';

@Module({
  imports:[TypeOrmModule.forFeature([TablesEntity])],
  controllers: [TablesController],
  providers: [TablesService]
})
export class TablesModule {}
