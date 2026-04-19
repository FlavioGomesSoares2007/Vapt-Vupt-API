import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { StoresEntity } from '../../store/entities/StoresEntity';

@Entity('stock')
export class StockEntity {
  @PrimaryGeneratedColumn({ name: 'id_stock' })
  id_stock!: number;

  @Column({ name: 'name', type: 'varchar', length: 100, nullable: true })
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

  @ManyToOne(() => StoresEntity, (stores) => stores.stock)
  @JoinColumn({ name: 'id_store' })
  id_store!: StoresEntity;

  @UpdateDateColumn()
  updatedAt!: Date;
}
