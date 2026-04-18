import { Module } from '@nestjs/common';
import { RevenueController } from './revenue.controller';
import { RevenueService } from './revenue.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RevenueEntity } from './entities/RevenueEntity';

@Module({imports: [
    TypeOrmModule.forFeature([RevenueEntity]) 
  ],
  controllers: [RevenueController],
  providers: [RevenueService]
})
export class RevenueModule {}
