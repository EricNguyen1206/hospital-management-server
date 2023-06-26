import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// INTERNAL
import { ComponentEntity } from '../component';

@Entity()
export class Department implements ComponentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  departmentName: string;

  @Column({ nullable: true })
  leaderId: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: true })
  isComposite: boolean;

  @Column({ nullable: true })
  departmentId: string;
}
