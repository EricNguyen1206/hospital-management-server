import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// INTERNAL
import { ComponentEntity } from './component.entity';

@Entity()
export class employee implements ComponentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullname: string;

  @Column()
  gender: number;

  @Column()
  dateofbirth: Date;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column({ default: true })
  isactive: boolean;

  @Column({ default: false })
  iscomposite: boolean;

  @Column({ nullable: true })
  departmentid: number;

  @Column({ default: false })
  isleader: boolean;
}
