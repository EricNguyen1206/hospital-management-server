import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CompositeEntity } from './composite.entity';

@Entity()
export class Department implements CompositeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  location: string;
}
