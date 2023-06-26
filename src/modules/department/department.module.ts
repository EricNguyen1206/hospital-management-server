import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from './department.entity';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';
import { EmployeeService } from '@/services';

@Module({
  imports: [TypeOrmModule.forFeature([Department])],
  controllers: [DepartmentController],
  providers: [DepartmentService, EmployeeService],
})
export class DepartmentModule {}