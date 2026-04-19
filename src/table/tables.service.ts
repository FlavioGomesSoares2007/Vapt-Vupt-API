import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { TablesEntity } from './entities/TablesEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { TablesCreateDto } from './dto/TablesCreateDto';
import { TablesUpdateDto } from './dto/TablesUpdateDto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class TablesService {
  constructor(
    @InjectRepository(TablesEntity)
    private readonly tablesRepository: Repository<TablesEntity>,
  ) {}

  async create(dados: TablesCreateDto, id_store: number) {
    const table = await this.tablesRepository.findOne({
      where: { name: dados.name, id_store: { id: id_store } },
    });
    if (table) {
      throw new ConflictException('Você já cadastrou uma mesa com esse nome');
    }
    const newTable = this.tablesRepository.create({
      ...dados,
      id_store: { id: id_store },
    });
    return await this.tablesRepository.save(newTable);
  }
  async findAll(id_store: number) {
    return await this.tablesRepository.find({
      where: { id_store: { id: id_store } },
    });
  }
  async find(id_store: number, id_table: number) {
    return await this.tablesRepository.findOne({
      where: { id_table: id_table, id_store: { id: id_store } },
    });
  }
  async update(dados: TablesUpdateDto, id_store: number, id_table: number) {
    const table = await this.tablesRepository.findOne({
      where: {
        id_table: id_table,
        id_store: { id: id_store },
      },
    });

    if (!table) {
      throw new NotFoundException('Essa mesa não existe.');
    }

    if (dados.password) {
      dados.password = await bcrypt.hash(dados.password, 10);
    }

    Object.assign(table, dados);


    if (table.status === 'free' && table.password) {
      table.password = null;
    }

    return await this.tablesRepository.save(table);
  }
  async delete(id_store: number, id_table: number) {
    const table = await this.tablesRepository.findOne({
      where: {
        id_table: id_table,
        id_store: { id: id_store },
      },
    });

    if (!table) {
      throw new NotFoundException('essa mesa não existe.');
    }

    await this.tablesRepository.remove(table);
    return { message: 'item apagado.' };
  }
}
