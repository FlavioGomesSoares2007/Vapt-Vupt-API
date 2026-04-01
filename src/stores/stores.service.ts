import { ConflictException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { StoresEntity } from './entities/Stores.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { StoresDto } from './dto/Stores.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class StoresService {
  constructor(
    @InjectRepository(StoresEntity)
    private readonly StoresRepositorio: Repository<StoresEntity>,
  ) {}

  async create(dados: StoresDto) {
    const exists = await this.StoresRepositorio.findOne({
      where: [
        { slug: dados.slug },
        { email: dados.email },
        { name: dados.name },
      ],
    });

    if (exists) {
      if (exists.name === dados.name) {
        throw new ConflictException(
          'Já existe uma loja cadastrada com este nome',
        );
      }
      if (exists.email === dados.email) {
        throw new ConflictException(
          'Já existe uma loja cadastrada com este e-mail',
        );
      }

      if (exists.slug === dados.slug) {
        throw new ConflictException(
          'Já existe uma loja cadastrada com este slug (URL)',
        );
      }
    }

    const hashedPassword = await bcrypt.hash(dados.password, 10);

    const newStore = this.StoresRepositorio.create({
      ...dados,
      password: hashedPassword,
    });

    return await this.StoresRepositorio.save(newStore);
  }

  async seeData(id: number) {
    return await this.StoresRepositorio.findOne({
      where: { id: id },
    });
  }
}
