import { ApiProperty } from '@nestjs/swagger';
import { Employee } from './employee.entity';

export class EmployeeDto extends Employee {
  @ApiProperty()
  id: string;

  @ApiProperty()
  fullName: string;

  @ApiProperty()
  gender: number;

  @ApiProperty()
  dateOfBirth: Date;

  @ApiProperty()
  address: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ default: true })
  isActive: boolean;

  @ApiProperty({ default: false })
  isComposite: boolean;

  @ApiProperty({ nullable: true })
  departmentId: string;

  @ApiProperty({ nullable: true })
  positionId: number;

  @ApiProperty({ nullable: true })
  titleId: number;

  @ApiProperty({ required: false, default: false })
  isLeader: boolean;
}

export class ReqCreateEmployeeDto {
  @ApiProperty()
  fullName: string;

  @ApiProperty()
  gender: number;

  @ApiProperty()
  dateOfBirth: Date;

  @ApiProperty()
  address: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ default: true })
  isActive: boolean;

  @ApiProperty({ default: false })
  isComposite: boolean;

  @ApiProperty({ nullable: true })
  departmentId: string;

  @ApiProperty({ nullable: true })
  positionId: number;

  @ApiProperty({ nullable: true })
  titleId: number;

  @ApiProperty({ required: false, default: false })
  isLeader: boolean;
}
