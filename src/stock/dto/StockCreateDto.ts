import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsEnum,
  IsOptional,
  Min,
  MaxLength,
} from 'class-validator';

export enum StockUnit {
  UNIDADE = 'un',
  QUILOGRAMA = 'kg',
  GRAMA = 'g',
  LITRO = 'l',
  MILILITRO = 'ml',
  FATIA = 'ft',
}

export class StockCreateDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome do item é obrigatório.' })
  @MaxLength(100)
  name!: string;

  @IsNumber()
  @Min(0)
  @IsNotEmpty({ message: 'A quantidade inicial deve ser informada.' })
  quantity!: number;

  @IsEnum(StockUnit, {
    message: 'Unidade inválida. Use: un, kg, g, ft, l ou ml',
  })
  @IsNotEmpty({ message: 'A unidade é obrigatorio' })
  unit!: StockUnit;
}
