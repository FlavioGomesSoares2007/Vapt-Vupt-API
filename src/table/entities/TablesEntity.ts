import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { StoresEntity } from '../../store/entities/StoresEntity';

@Entity('tables')
export class TablesEntity {
  @PrimaryGeneratedColumn({ name: 'id_table' })
  id_table!: number;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  name!: string;

  @Column({
    name: 'slug',
    type: 'varchar',
    length: 100,
    unique: true,
    nullable: false,
  })
  slug!: string;

  @Column({
    name: 'password',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  password!: string | null;

  @Column({
    name: 'status',
    type: 'enum',
    enum: ['free', 'occupied'],
    default: 'free',
    nullable: false,
  })
  status!: string;

  @ManyToOne(() => StoresEntity, (store) => store.Tables)
  id_store!: StoresEntity;
}
