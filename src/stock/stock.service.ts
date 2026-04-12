import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { StockEntity } from './entities/StockEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { StockCreateDto } from './dto/StockCreateDto';
import { StockUpdateDto } from './dto/StockUpdateDto';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(StockEntity)
    private readonly stockrepository: Repository<StockEntity>,
  ) {}

  async create(dados: StockCreateDto, id_store: number) {
    const findStock = await this.stockrepository.findOne({
      where: {
        name: dados.name,
        id_store: { id: id_store },
      },
    });
    if (findStock) {
      throw new ConflictException('você ja cadastrou um intem com esse nome');
    }
    const newStore = this.stockrepository.create({
      ...dados,
      id_store: { id: id_store },
    });
    return await this.stockrepository.save(newStore);
  }
  async findAll(id_Store: number) {
    return await this.stockrepository.find({
      where: { id_store: { id: id_Store } },
      order: { name: 'ASC' },
    });
  }
  async findOne(id_Store: number, id_stock: number) {
    return await this.stockrepository.findOne({
      where: {
        id_store: { id: id_Store },
        id_stock: id_stock,
      },
    });
  }
  async update(dados: StockUpdateDto, id_store: number, id_stock: number) {
    const stock = await this.stockrepository.findOne({
      where: {
        id_stock: id_stock,
        id_store: { id: id_store },
      },
    });

    if (!stock) {
      throw new NotFoundException('Este item não está cadastrado');
    }

    Object.assign(stock, dados);
    return await this.stockrepository.save(stock);
  }
  async delete(id_stock: number, id_store: number) {
    const stock = await this.stockrepository.findOne({
      where: {
        id_stock: id_stock,
        id_store: { id: id_store },
      },
    });

    if (!stock) {
      throw new NotFoundException(
        'Este item de estoque não existe ou não pertence à sua loja.',
      );
    }

    await this.stockrepository.remove(stock);

    return { message: 'Item removido com sucesso do estoque.' };
  }
}
