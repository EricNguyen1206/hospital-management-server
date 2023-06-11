import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CompositeEntity } from './composite.entity';

@Entity()
export class User implements CompositeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
