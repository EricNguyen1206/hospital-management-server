import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

// INTERNAL
import { ComponentEntity } from './component.entity';

@Entity()
export class Department implements ComponentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: true })
  isComposite: boolean;

  @Column({ nullable: true })
  departmentId: number;
}

export class ReqCreateDepartmentDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  departmentid?: string;
}

export class ResGetDepartmentByIdDto extends Department {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  iscomposite: boolean;

  @ApiProperty()
  isactive: boolean;

  @ApiProperty()
  departmentid: number;

  @ApiProperty()
  childs: ComponentEntity[];
}
