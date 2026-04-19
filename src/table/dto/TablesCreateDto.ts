import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export enum TableStatus {
  FREE = 'free',
  OCCUPIED = 'occupied',
}

export class TablesCreateDto {
  @IsString({ message: 'O nome tem que ser um texto' })
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @MinLength(2, { message: 'O nome tem que ter no mínimo duas letras' })
  @MaxLength(20, { message: 'O nome só pode ter 20 letras' })
  name!: string;

  @IsString({ message: 'O slug deve ser uma string' })
  @IsNotEmpty({ message: 'O slug é obrigatório' })
  @Matches(/^[a-z0-9-]+$/, {
    message: 'O slug deve conter apenas letras minúsculas, números e traços',
  })
  @MinLength(3, { message: 'O slug deve ter no mínimo 3 caracteres' })
  slug!: string;

  @IsOptional()
  @IsString({ message: 'A senha deve ser uma string' })
  @MinLength(6, {message:'A senha tem que ter no minimo 6 caracteris'})
  password?: string;

  @IsOptional()
  @IsEnum(TableStatus, { message: 'Status inválido' })
  status?: TableStatus = TableStatus.FREE;
}