import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

// INTERNAL
import { ComponentEntity } from './component.entity';

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

export class ReqCreateDepartmentDto {
  @ApiProperty()
  departmentName: string;

  @ApiProperty({ required: false })
  leaderId?: string;

  @ApiProperty({ required: false })
  departmentId?: string;
}

export class ResGetDepartmentByIdDto extends Department {
  @ApiProperty()
  id: string;

  @ApiProperty()
  departmentName: string;

  @ApiProperty()
  leaderId: string;

  @ApiProperty()
  isComposite: boolean;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  departmentId: string;

  @ApiProperty()
  childs: ComponentEntity[];
}
