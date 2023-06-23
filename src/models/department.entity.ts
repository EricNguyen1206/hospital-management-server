import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ComponentEntity } from './component.entity';
import { Employee } from './employee.entity';

@Entity()
export class Department implements ComponentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  departmentName: string;

  @Column({ nullable: true })
  leaderId: number;

  @Column()
  isActive: boolean;

  @Column({ default: true })
  isComposite: boolean;

  @Column({ nullable: true })
  departmentId: number;

  childs: ComponentEntity[];
}
