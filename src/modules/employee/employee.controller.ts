import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

// INTERNAL
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';
import { EmployeeDto, ReqCreateEmployeeDto } from './employee.dto';
import { IPagination } from '@/common/interfaces/IPagination';
import { IListResponse } from '@/common/interfaces/IListResponse';

@Controller('employee')
@ApiTags('Employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  async findAll(
    @Query() { offset, limit }: IPagination,
  ): Promise<IListResponse<EmployeeDto>> {
    return this.employeeService.findAll({ offset, limit });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Employee> {
    return this.employeeService.findOne(id);
  }

  @Post()
  async create(@Body() employee: ReqCreateEmployeeDto): Promise<EmployeeDto> {
    return this.employeeService.create(employee);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() employee: Employee,
  ): Promise<Employee> {
    return this.employeeService.update(id, employee);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.employeeService.delete(id);
  }
}
