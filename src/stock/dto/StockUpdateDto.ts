import { 
  IsNotEmpty, 
  IsNumber, 
  IsString, 
  IsEnum, 
  IsOptional, 
  Min, 
  MaxLength 
} from 'class-validator';

export enum StockUnit {
  UNIDADE = 'un',
  QUILOGRAMA = 'kg',
  GRAMA = 'g',
  LITRO = 'l',
  MILILITRO = 'ml',
  FATIA = 'ft'
}

export class StockUpdateDto {
  @IsString()
  @IsOptional()
  @MaxLength(100)
  name?: string; 

  @IsNumber()
  @Min(0)
  @IsOptional()
  quantity?: number; 

  @IsEnum(StockUnit, {
    message: 'Unidade inválida. Use: un, kg, g, ft, l ou ml',
  })
  @IsOptional()
  unit?: StockUnit; 

}