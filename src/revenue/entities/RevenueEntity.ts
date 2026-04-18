import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { StoresEntity } from '../../stores/entities/Stores.Entity';
import { ProductEntity } from '../../products/entities/productEntity';

@Entity('revenue')
export class RevenueEntity {
  @PrimaryGeneratedColumn({ name: 'id_revenue' })
  id_revenue!: number;

  @Column({ name: 'name', type: 'varchar', length: 100, nullable: false })
  name!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  quantity!: number;

  @Column({
    name: 'unit',
    type: 'enum',
    enum: ['un', 'kg', 'g', 'l', 'ml', 'ft'],
    nullable: true,
  })
  unit!: string;

  @ManyToOne(() => StoresEntity, (store) => store.revenue)
  @JoinColumn({ name: 'id_store' })
  id_store!: StoresEntity;

  @ManyToOne(() => ProductEntity, (product) => product.revenue, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'id_product' })
  id_product!: ProductEntity;

  @UpdateDateColumn()
  updatedAt!: Date;
}
