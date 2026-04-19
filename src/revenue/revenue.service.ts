import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { RevenueEntity } from './entities/RevenueEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { RevenueCreateDto } from './dto/RevenueCreateDto';
import { RevenueUpdateDto } from './dto/RevenueUpdateDto';

@Injectable()
export class RevenueService {
  constructor(
    @InjectRepository(RevenueEntity)
    private readonly revenueRepository: Repository<RevenueEntity>,
  ) {}

  async create(dados: RevenueCreateDto, id_store: number, id_product: number) {
    const revenue = await this.revenueRepository.findOne({
      where: {
        name: dados.name,
        id_store: { id: id_store },
        id_product: { id: id_product },
      },
    });
    if (revenue) {
      throw new ConflictException('Essa receita ja foi adicionada');
    }

    const newRevenue = this.revenueRepository.create({
      ...dados,
      id_product: { id: id_product },
      id_store: { id: id_store },
    });
    return await this.revenueRepository.save(newRevenue);
  }
  async findAll(id_store: number) {
    return await this.revenueRepository.find({
      where: { id_store: { id: id_store } },
    });
  }
  async findOne(id_Store: number, id_product: number) {
    return await this.revenueRepository.findOne({
      where: {
        id_store: { id: id_Store },
        id_product: { id: id_product },
      },
    });
  }
  async update(dados: RevenueUpdateDto, id_store: number, id_revenue: number) {
    const revenue = await this.revenueRepository.findOne({
      where: {
        id_store: { id: id_store },
        id_revenue: id_revenue,
      },
    });

    if (!revenue) {
      throw new NotFoundException('Este item não está cadastrado');
    }

    Object.assign(revenue, dados);
    return await this.revenueRepository.save(revenue);
  }
  async delete(id_store: number, id_revenue: number) {
    const revenue = await this.revenueRepository.findOne({
      where: {
        id_store: { id: id_store },
        id_revenue: id_revenue,
      },
    });

    if (!revenue) {
      throw new NotFoundException('essa receita não existe.');
    }
    await this.revenueRepository.remove(revenue);
    return { message: 'Item removido com sucesso.' };
  }
}
