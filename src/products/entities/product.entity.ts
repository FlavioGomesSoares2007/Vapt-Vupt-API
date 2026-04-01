import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
} from "typeorm";

@Entity('products') 
export class ProductEntity {

  @PrimaryGeneratedColumn({name:'Id_Product'}) 
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  name!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price!: number;
}
