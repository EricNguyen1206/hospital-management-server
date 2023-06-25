import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// INTERNAL
import { ComponentEntity } from './component.entity';

@Entity()
export class Employee implements ComponentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isComposite: boolean;

  @Column({ nullable: true })
  departmentId: string;
}
