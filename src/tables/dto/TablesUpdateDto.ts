import {
  IsEnum,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { TableStatus } from './TablesCreateDto'; 

export class TablesUpdateDto {
  @IsOptional()
  @IsString({ message: 'O nome tem que ser um texto' })
  @MinLength(2, { message: 'O nome tem que ter no mínimo duas letras' })
  @MaxLength(20, { message: 'O nome só pode ter 20 letras' })
  name?: string;

  @IsOptional()
  @IsString({ message: 'O slug deve ser uma string' })
  @Matches(/^[a-z0-9-]+$/, {
    message: 'O slug deve conter apenas letras minúsculas, números e traços',
  })
  @MinLength(3, { message: 'O slug deve ter no mínimo 3 caracteres' })
  slug?: string;

  @IsOptional()
  @IsString({ message: 'O CPF deve ser uma string' })
  @Matches(/^\d{11}$/, { message: 'O CPF deve conter apenas 11 números' })
  cpf?: string;

  @IsOptional()
  @IsEnum(TableStatus, { message: 'Status inválido' })
  status?: TableStatus;
}