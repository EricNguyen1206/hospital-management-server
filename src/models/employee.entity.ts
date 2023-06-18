import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ComponentEntity } from './component.entity';
import { Department } from './department.entity';

@Entity()
export class Employee implements ComponentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  gender: number;

  @Column()
  dateOfBirdth: Date;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  isActive: boolean;

  @Column({ default: false })
  isComposite: boolean;

  @Column({ nullable: true })
  departmentId: number;
}
