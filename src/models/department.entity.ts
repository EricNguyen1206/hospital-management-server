import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

// INTERNAL
import { ComponentEntity } from './component.entity';

@Entity()
export class department implements ComponentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: true })
  isactive: boolean;

  @Column({ default: true })
  iscomposite: boolean;

  @Column({ nullable: true })
  departmentid: number;
}

export class ReqCreateDepartmentDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  departmentid?: string;
}

export class ResGetDepartmentByIdDto extends department {
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
