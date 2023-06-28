import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

// INTERNAL
import { ComponentEntity } from './component.entity';

@Entity()
export class Employee implements ComponentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  fullName: string;

  @Column()
  gender: number;

  @Column()
  dateOfBirth: Date;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isComposite: boolean;

  @Column({ nullable: true })
  departmentId: number;

  @Column({ nullable: true })
  positionId: number;

  @Column({ nullable: true })
  titleId: number;

  @Column({ default: false })
  isLeader: boolean;
}
